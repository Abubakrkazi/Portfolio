import { XMLParser } from "fast-xml-parser";

export interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string;
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

    const data = await response.json();

    return data.items.map((item: any) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      description: item.description
        .replace(/<[^>]*>?/gm, "")
        .slice(0, 150),

      thumbnail:
        item.thumbnail ||
        "/images/blog-placeholder.jpg",
    }));
  } catch (error) {
    console.error(error);

    return [];
  }
}