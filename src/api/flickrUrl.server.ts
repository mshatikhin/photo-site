import { FLICKR_USER_ID } from "./constants";
import { FLICKR_API_KEY } from "$env/static/private";

export function flickrUrlServer({ method, params }: { method: string; params: string }): string {
  return `https://api.flickr.com/services/rest/?method=${method}&api_key=${FLICKR_API_KEY}&user_id=${FLICKR_USER_ID}&${params}&format=json&nojsoncallback=1`;
}
