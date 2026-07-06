import type { Metadata } from "next";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Project ${id}`,
    description: `View project ${id} built by Abubakr Kazi.`,

    openGraph: {
      title: `Project ${id}`,
      description: `View project ${id}.`,
      images: ["/og-image.png"],
    },

    twitter: {
      card: "summary_large_image",
      title: `Project ${id}`,
      description: `View project ${id}.`,
      images: ["/og-image.png"],
    },
  };
}

export default async function ProjectDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  return (
    <div className="flex min-h-screen items-center justify-center text-white">
      Project: {id}
    </div>
  );
}