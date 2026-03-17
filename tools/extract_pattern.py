#!/usr/bin/env python3
"""
extract_pattern.py - Query KB 99999 and generate a Markdown draft of the pattern found.

Usage:
    python extract_pattern.py --query "agent architecture" --project "web26-069" --output output.mdx
"""

import argparse
import os
import sys

from dotenv import load_dotenv

load_dotenv()


def main():
    parser = argparse.ArgumentParser(
        description="Extract patterns from KB 99999 and generate Markdown drafts."
    )
    parser.add_argument("--query", required=True, help="Search query for the KB")
    parser.add_argument("--project", default=None, help="Project filter (e.g. web26-069)")
    parser.add_argument("--output", default="output.mdx", help="Output file path")
    parser.add_argument(
        "--provider",
        default="deepseek",
        choices=["deepseek", "groq", "gemini"],
        help="AI provider for processing",
    )

    args = parser.parse_args()

    base_url = os.getenv("PM_BASE_URL")
    api_key = os.getenv("PM_API_KEY")

    if not base_url or not api_key:
        print("Error: PM_BASE_URL and PM_API_KEY must be set in .env")
        sys.exit(1)

    print(f"Query: {args.query}")
    print(f"Project: {args.project or 'all'}")
    print(f"Provider: {args.provider}")
    print(f"Output: {args.output}")
    print("")
    print("NOTE: This script requires SSH tunnel to server for KB access.")
    print("Ensure your SSH tunnel is active before running.")

    # TODO: Implement API call to KB 99999
    # POST {base_url}/api/knowledge/answer
    # Headers: X-API-Key: {api_key}
    # Body: { query, project_filter, provider }

    print("")
    print("Implementation pending - requires active SSH tunnel and KB access.")


if __name__ == "__main__":
    main()
