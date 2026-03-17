import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="mb-4 text-3xl font-bold tracking-tight">{slug}</h1>
      <p className="text-muted-foreground">
        Contenido del proyecto proximamente.
      </p>
    </div>
  );
}
