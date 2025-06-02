import { json } from '@sveltejs/kit';
import posts from './posts.json';

export const prerender = true;

export async function GET() {
	return json(posts);
}
