#!/usr/bin/env python3
"""
sanitize_check.py - Scan directories for sensitive data before publishing.

Usage:
    python sanitize_check.py --dir .
    python sanitize_check.py --dir . --strict

Exit codes:
    0 = PASS (no findings)
    1 = FAIL (findings detected)
"""

import argparse
import os
import re
import sys

SENSITIVE_PATTERNS = [
    # IPs
    (r"10\.254\.0\.\d+", "VPN IP address"),
    (r"192\.168\.\d+\.\d+", "Private network IP"),
    (r"51\.222\.207\.\d+", "Public server IP"),
    (r"51\.79\.\d+\.\d+", "Public server IP"),
    (r"149\.56\.\d+\.\d+", "Public server IP"),

    # Hostnames
    (r"server00[2-9]", "Internal server hostname"),
    (r"srv\d{3}", "Internal server hostname"),
    (r"redv6\.com", "Internal domain"),
    (r"domusrentas", "Client domain"),
    (r"quierounenlace", "Client domain"),

    # API Keys
    (r"900-\d{3}-[a-f0-9]{48}", "API 900 key"),
    (r"pm-\d{3}-[a-f0-9]{40}", "PM 99999 key"),
    (r"shpss_[a-f0-9]+", "Shopify secret"),
    (r"shpat_[a-f0-9]+", "Shopify access token"),
    (r"sk-[a-zA-Z0-9]{20,}", "OpenAI/generic API key"),
    (r"R0sn3ft", "Router credentials"),
    (r"pxrgwqy", "Router username"),

    # Paths
    (r"/home/ubuntu/projects?", "Server path"),
    (r"/mnt/c/Users/abela", "WSL path"),
    (r"C:\\\\?Users\\\\?abela", "Windows path"),
    (r"/var/www/(redv6|web2[56])", "Server web path"),

    # Project codes (no revelar mapping)
    (r"web2[56]-\d{3}", "Internal project code"),

    # Ports
    (r":3900\b", "PM API port"),
    (r":8900\b", "API 900 port"),
    (r":51803\b", "WireGuard port"),
    (r":51900\b", "WireGuard inter port"),

    # WireGuard
    (r"LOeG5RVSShmXG7ymDq5aK4ks857vcjwTwqis974dQSg=", "WireGuard public key"),
    (r"giCh5Htu9JnKDkmegz\+Pm3I8htvnnACl2M9SdxzhQUE=", "WireGuard public key"),
    (r"kL5FteUcW\+dyBVKrfPhk2/mAsBXpH6k5ohTEH/\+TwDs=", "WireGuard public key"),
    (r"PrivateKey\s*=", "WireGuard private key"),

    # Database
    (r"postgres://\S+", "Database connection string"),
    (r"redis://\S+", "Redis connection string"),
    (r"mongodb://\S+", "MongoDB connection string"),
    (r"DB_PASSWORD\s*=\s*\S+", "Database password"),
]

EXCLUDED_DIRS = {
    ".git",
    "node_modules",
    ".venv",
    "__pycache__",
    ".next",
    "dist",
    "build",
    ".vercel",
}

EXCLUDED_FILES = {
    "sanitize_check.py",
    "02-security-publication-checklist.md",
}

# Lines matching these patterns are safe and should not trigger findings
ALLOWLIST_PATTERNS = [
    r"github\.com/abelardodiaz/",  # Public GitHub repo URLs are safe
]

BINARY_EXTENSIONS = {
    ".png", ".jpg", ".jpeg", ".gif", ".ico", ".svg",
    ".woff", ".woff2", ".ttf", ".eot",
    ".pdf", ".zip", ".tar", ".gz",
    ".exe", ".dll", ".so", ".dylib",
    ".pyc", ".pyo",
    ".lock",
}


def should_skip_dir(dirname):
    return dirname in EXCLUDED_DIRS


def should_skip_file(filepath):
    basename = os.path.basename(filepath)
    if basename in EXCLUDED_FILES:
        return True
    _, ext = os.path.splitext(filepath)
    if ext.lower() in BINARY_EXTENSIONS:
        return True
    return False


def scan_file(filepath, patterns):
    findings = []
    try:
        with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
            for line_num, line in enumerate(f, 1):
                if any(re.search(ap, line) for ap in ALLOWLIST_PATTERNS):
                    continue
                for pattern, description in patterns:
                    if re.search(pattern, line):
                        findings.append({
                            "file": filepath,
                            "line": line_num,
                            "pattern": pattern,
                            "type": description,
                            "content": line.strip()[:80],
                        })
    except (OSError, PermissionError):
        pass
    return findings


def scan_directory(directory, patterns):
    all_findings = []
    for root, dirs, files in os.walk(directory):
        dirs[:] = [d for d in dirs if not should_skip_dir(d)]
        for filename in files:
            filepath = os.path.join(root, filename)
            if should_skip_file(filepath):
                continue
            findings = scan_file(filepath, patterns)
            all_findings.extend(findings)
    return all_findings


def print_results(findings):
    if not findings:
        print("")
        print("SANITIZE CHECK - PASS")
        print("")
        print("0 findings. Safe to publish.")
        return

    print("")
    print("SANITIZE CHECK - FAIL")
    print("")

    header = f"{'File':<40} {'Line':<6} {'Type':<30} {'Preview':<40}"
    print(header)
    print("-" * len(header))

    for f in findings:
        rel_path = f["file"]
        if len(rel_path) > 38:
            rel_path = "..." + rel_path[-35:]
        print(f"{rel_path:<40} {f['line']:<6} {f['type']:<30} {f['content'][:40]:<40}")

    print("")
    print(f"{len(findings)} finding(s). Fix before publishing.")


def main():
    parser = argparse.ArgumentParser(
        description="Scan directory for sensitive data before publishing."
    )
    parser.add_argument(
        "--dir",
        required=True,
        help="Directory to scan",
    )
    parser.add_argument(
        "--strict",
        action="store_true",
        help="Strict mode (same behavior, for pre-commit hook compatibility)",
    )

    args = parser.parse_args()

    if not os.path.isdir(args.dir):
        print(f"Error: '{args.dir}' is not a valid directory.")
        sys.exit(1)

    findings = scan_directory(args.dir, SENSITIVE_PATTERNS)
    print_results(findings)

    sys.exit(1 if findings else 0)


if __name__ == "__main__":
    main()
