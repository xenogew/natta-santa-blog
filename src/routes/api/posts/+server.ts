import { fetchMarkdownPost } from "$lib/utils";
import { json } from "@sveltejs/kit";

export const GET = async () => {
  const allPosts = await fetchMarkdownPost();

  allPosts.sort((a, b) => {
    const dateA:number = new Date(a.meta.date).getTime();
    const dateB:number = new Date(b.meta.date).getTime();
    return dateB - dateA;
  });
  return json(allPosts);
}
