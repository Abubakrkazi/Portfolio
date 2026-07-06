import type { Metadata } from "next";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: `${slug} Blog`,
    description: `Read the ${slug} article by Abubakr Kazi.`,

    openGraph: {
      title: `${slug} Blog`,
      description: `Read the ${slug} article.`,
      images: ["/og-image.png"],
    },

    twitter: {
      card: "summary_large_image",
      title: `${slug} Blog`,
      description: `Read the ${slug} article.`,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogDetailsPage({
  params,
}: Props) {
  const { slug } = await params;

  return (
    <div className="flex min-h-screen items-center justify-center text-white">
      Blog: {slug}
    </div>
  );
}