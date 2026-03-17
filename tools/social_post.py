#!/usr/bin/env python3
"""
social_post.py - Generate draft posts for X and LinkedIn.

Usage:
    python social_post.py --platform x --repo "claude-agent-patterns" --description "Patterns para agentes IA" --link "https://github.com/user/repo"
    python social_post.py --platform linkedin --repo "claude-agent-patterns" --description "Patterns para agentes IA" --link "https://github.com/user/repo"
"""

import argparse
import os
import sys


def generate_x_post(repo, description, link):
    templates_dir = os.path.join(os.path.dirname(__file__), "..", "templates", "social")
    template_path = os.path.join(templates_dir, "x-post.md.template")

    if os.path.exists(template_path):
        with open(template_path, "r", encoding="utf-8") as f:
            template = f.read()
        post = template.replace("{{REPO}}", repo)
        post = post.replace("{{DESCRIPTION}}", description)
        post = post.replace("{{LINK}}", link)
    else:
        post = f"{description}\n\n{link}\n\n#OpenSource #DevLife"

    # Validate length (280 chars max for X)
    if len(post) > 280:
        print(f"WARNING: Post is {len(post)} chars (max 280). Trim before posting.")

    return post


def generate_linkedin_post(repo, description, link):
    templates_dir = os.path.join(os.path.dirname(__file__), "..", "templates", "social")
    template_path = os.path.join(templates_dir, "linkedin-post.md.template")

    if os.path.exists(template_path):
        with open(template_path, "r", encoding="utf-8") as f:
            template = f.read()
        post = template.replace("{{REPO}}", repo)
        post = post.replace("{{DESCRIPTION}}", description)
        post = post.replace("{{LINK}}", link)
    else:
        post = f"New open source release: {repo}\n\n{description}\n\nCheck it out: {link}"

    return post


def main():
    parser = argparse.ArgumentParser(
        description="Generate draft social media posts."
    )
    parser.add_argument(
        "--platform",
        required=True,
        choices=["x", "linkedin"],
        help="Target platform",
    )
    parser.add_argument("--repo", required=True, help="Repository name")
    parser.add_argument("--description", required=True, help="Short description")
    parser.add_argument("--link", required=True, help="Repository URL")
    parser.add_argument("--output", default=None, help="Output file (default: stdout)")

    args = parser.parse_args()

    if args.platform == "x":
        post = generate_x_post(args.repo, args.description, args.link)
    else:
        post = generate_linkedin_post(args.repo, args.description, args.link)

    if args.output:
        with open(args.output, "w", encoding="utf-8") as f:
            f.write(post)
        print(f"Draft saved to: {args.output}")
    else:
        print("--- DRAFT ---")
        print(post)
        print("--- END ---")
        if args.platform == "x":
            print(f"\nLength: {len(post)}/280 chars")


if __name__ == "__main__":
    main()
