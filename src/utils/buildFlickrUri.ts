import type { Photo } from "../types";
import type { Size } from "./Size";

export function buildFlickrUri(photo: Photo, size: Size) {
  return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;
}
