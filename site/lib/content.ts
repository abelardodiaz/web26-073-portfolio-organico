// Placeholder for content loading functions.
// Will be implemented when MDX content pipeline is set up.

export type Project = {
  title: string;
  slug: string;
  description: string;
  stack: string[];
  github: string;
  category: string;
  featured: boolean;
  date: string;
};

export type TilEntry = {
  title: string;
  slug: string;
  category: string;
  stack: string[];
  date: string;
};

export function getProjects(): Project[] {
  // TODO: Load from content/projects/*.mdx
  return [];
}

export function getTils(): TilEntry[] {
  // TODO: Load from content/til/*.mdx
  return [];
}
