import type { ApiResponse } from "./apiResponse";
import type { Artist } from "./artist";
import type { ExternalUrls, Restriction, Image } from "./commonType";

export interface GetNewReleasesResponse {
  albums: ApiResponse<SimplifiedAlbum>;
}

export interface SimplifiedAlbum {
  album_type: string;
  total_tracks: string;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions?: Restriction;
  type: string;
  uri: string;
  artists: Artist[];
}
