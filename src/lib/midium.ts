export interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string;
}

interface MediumApiItem {
  title?: string;
  link?: string;
  pubDate?: string;
  description?: string;
  thumbnail?: string;
}

interface MediumApiResponse {
  status?: string;
  items?: MediumApiItem[];
}

export async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    const response = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kaziabubakr87",
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch Medium posts: ${response.status}`
      );
    }

    const data: MediumApiResponse = await response.json();

    if (!Array.isArray(data.items)) {
      return [];
    }

    return data.items.map((item) => {
      const cleanDescription = (item.description ?? "")
        .replace(/<[^>]*>/g, "")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 150);

      return {
        title: item.title ?? "Untitled",
        link: item.link ?? "#",
        pubDate: item.pubDate ?? "",
        description: cleanDescription,
        thumbnail:
          item.thumbnail || "/images/blog-placeholder.jpg",
      };
    });
  } catch (error) {
    console.error("Failed to fetch Medium posts:", error);

    return [];
  }
}