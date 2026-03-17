#!/usr/bin/env python3
"""
repo_scaffold.py - Create a standardized micro-repo structure.

Usage:
    python repo_scaffold.py --name "claude-agent-patterns" --description "Patterns para agentes IA" --stack python,asyncio --category ai --output ~/repos/claude-agent-patterns
"""

import argparse
import os
import sys


def main():
    parser = argparse.ArgumentParser(
        description="Create a standardized micro-repo structure from templates."
    )
    parser.add_argument("--name", required=True, help="Repository name")
    parser.add_argument("--description", required=True, help="Short description")
    parser.add_argument("--stack", required=True, help="Comma-separated stack items")
    parser.add_argument("--category", required=True, help="Category (ai, python, web, etc.)")
    parser.add_argument("--output", required=True, help="Output directory path")

    args = parser.parse_args()

    if os.path.exists(args.output):
        print(f"Error: Directory '{args.output}' already exists.")
        sys.exit(1)

    stack_items = [s.strip() for s in args.stack.split(",")]
    templates_dir = os.path.join(os.path.dirname(__file__), "..", "templates", "micro-repo")

    print(f"Creating micro-repo: {args.name}")
    print(f"Description: {args.description}")
    print(f"Stack: {', '.join(stack_items)}")
    print(f"Category: {args.category}")
    print(f"Output: {args.output}")

    os.makedirs(args.output, exist_ok=True)
    os.makedirs(os.path.join(args.output, "src"), exist_ok=True)
    os.makedirs(os.path.join(args.output, "examples"), exist_ok=True)

    # README.md from template
    readme_template_path = os.path.join(templates_dir, "README.md.template")
    if os.path.exists(readme_template_path):
        with open(readme_template_path, "r", encoding="utf-8") as f:
            readme_content = f.read()
        readme_content = readme_content.replace("{{NAME}}", args.name)
        readme_content = readme_content.replace("{{DESCRIPTION}}", args.description)
        readme_content = readme_content.replace("{{STACK}}", ", ".join(stack_items))
        readme_content = readme_content.replace("{{CATEGORY}}", args.category)
    else:
        readme_content = f"# {args.name}\n\n{args.description}\n"

    with open(os.path.join(args.output, "README.md"), "w", encoding="utf-8") as f:
        f.write(readme_content)

    # LICENSE (MIT)
    license_path = os.path.join(templates_dir, "LICENSE")
    if os.path.exists(license_path):
        with open(license_path, "r", encoding="utf-8") as f:
            license_content = f.read()
    else:
        license_content = "MIT License\n\nCopyright (c) 2026\n"
    with open(os.path.join(args.output, "LICENSE"), "w", encoding="utf-8") as f:
        f.write(license_content)

    # .gitignore from template
    gitignore_template_path = os.path.join(templates_dir, ".gitignore.template")
    if os.path.exists(gitignore_template_path):
        with open(gitignore_template_path, "r", encoding="utf-8") as f:
            gitignore_content = f.read()
    else:
        gitignore_content = "node_modules/\n.env\n__pycache__/\n.venv/\n"
    with open(os.path.join(args.output, ".gitignore"), "w", encoding="utf-8") as f:
        f.write(gitignore_content)

    print("")
    print(f"Micro-repo '{args.name}' created at {args.output}")
    print("Next steps:")
    print(f"  cd {args.output}")
    print("  git init")
    print("  git add .")
    print(f'  git commit -m "feat: initial commit - {args.name}"')


if __name__ == "__main__":
    main()
