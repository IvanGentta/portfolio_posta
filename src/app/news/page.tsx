import { supabase } from "@/lib/supabase";
import NewsClient from "./NewsClient";

export default async function NewsPage() {
  const { data, error } = await supabase
    .from("news")
    .select(
      `
      id,
      title,
      content,
      external_url,
      published_at,
      news_images (
        id,
        image_url,
        position
      ),
      news_tags (
        tags (
          id,
          name,
          slug
        )
      )
    `
    )
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  if (error) {
    console.error(error);
    return <p>Error cargando news</p>;
  }

  return <NewsClient data={data ?? []} />;
}
