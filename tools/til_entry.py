#!/usr/bin/env python3
"""
til_entry.py - Create a new TIL entry from template with correct frontmatter.

Usage:
    python til_entry.py --title "Meta API retorna 200 con firma invalida" --category whatsapp --stack python,fastapi
"""

import argparse
import os
import sys
from datetime import date

try:
    from slugify import slugify
except ImportError:
    print("Error: python-slugify is required. Install with: pip install python-slugify")
    sys.exit(1)


def main():
    parser = argparse.ArgumentParser(
        description="Create a new TIL entry with frontmatter."
    )
    parser.add_argument("--title", required=True, help="TIL title")
    parser.add_argument("--category", required=True, help="Category (python, fastapi, ai, etc.)")
    parser.add_argument("--stack", default="", help="Comma-separated stack items")
    parser.add_argument("--output-dir", default=None, help="Output directory (default: site/content/til/)")
    parser.add_argument("--resource-name", default=None, help="Resource name (marks TIL as a discovered resource)")
    parser.add_argument("--resource-url", default=None, help="Resource repo/site URL")
    parser.add_argument("--resource-kind", default="library", choices=["library", "tool", "service", "template"], help="Resource kind")
    parser.add_argument("--demo-repo", default=None, help="Micro-repo name in prweb/public/ if graduated")

    args = parser.parse_args()

    today = date.today().isoformat()
    slug = slugify(args.title)
    filename = f"{today}-{slug}.mdx"

    output_dir = args.output_dir or os.path.join(
        os.path.dirname(__file__), "..", "site", "content", "til"
    )
    os.makedirs(output_dir, exist_ok=True)
    filepath = os.path.join(output_dir, filename)

    stack_items = [s.strip() for s in args.stack.split(",") if s.strip()]
    stack_yaml = ", ".join(stack_items) if stack_items else args.category

    resource_block = ""
    if args.resource_name:
        if not args.resource_url:
            print("Error: --resource-url is required when --resource-name is set")
            sys.exit(1)
        resource_block = (
            f"resource:\n"
            f"  name: \"{args.resource_name}\"\n"
            f"  url: \"{args.resource_url}\"\n"
            f"  kind: \"{args.resource_kind}\"\n"
        )
        if args.demo_repo:
            resource_block += f"demo_repo: \"{args.demo_repo}\"\n"

    content = f"""---
title: "{args.title}"
slug: {slug}
category: "{args.category}"
stack: [{stack_yaml}]
date: "{today}"
{resource_block}---

<!-- Write your TIL content here -->
"""

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"TIL entry created: {filepath}")
    print(f"  Title: {args.title}")
    print(f"  Category: {args.category}")
    print(f"  Slug: {slug}")


if __name__ == "__main__":
    main()
