export interface Photo {
  farm: number;
  id: string;
  isfamily: number;
  isfriend: number;
  isprimary: string;
  ispublic: number;
  secret: string;
  server: string;
  title: string;
}

export interface Photoset {
  id: string;
  owner: string;
  ownername: string;
  page: number;
  pages: number;
  per_page: number;
  perpage: number;
  photo: Photo[];
  primary: string;
  title: string;
  total: number;
}

export interface Photosets {
  page: number;
  pages: number;
  perpage: number;
  photoset: PhotosetAlbum[];
  total: number;
}

export interface PhotosetAlbum {
  id: string;
  title: {
    _content: string;
  };
  photos: number;
  primary_photo_extras: {
    url_z: string;
    width_z: number;
    height_z: number;
  };
}

export interface SizeImageDto {
  label: PhotoSize;
  width: string;
  height: string;
  source: string;
  url: string;
  media: string;
}

enum PhotoSize {
  Medium640 = "Medium 640",
  Medium800 = "Medium 800",
  Large1024 = "Large",
  Large1600 = "Large 1600",
  Large2048 = "Large 2048",
}

export interface PhotoSizes {
  size: SizeImageDto[];
}

export interface Image {
  id: string;
  x640: string;
  x800: string;
  x1024: string;
}
