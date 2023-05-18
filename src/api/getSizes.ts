import type { PhotoSizes } from "../types";
import { flickrUrlServer } from "./flickrUrl.server";

export const getSizes = async (fetcher: typeof fetch, photoId: string): Promise<PhotoSizes> => {
  try {
    const url = flickrUrlServer({
      method: "flickr.photos.getSizes",
      params: `&photo_id=${photoId}`,
    });
    const response = await fetcher(url);
    const resp = await response.json();
    if (resp.stat !== "ok") {
      throw Error("Ошибка при попытке загрузить getSizes");
    }

    return resp.sizes;
  } catch (e) {
    return {} as PhotoSizes;
  }
};
