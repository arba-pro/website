import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Realisation from "@/types/realisation";

export default function PhotoGallery({
  photos = [],
}: {
  photos: Realisation["photos"];
}) {
  return <RowsPhotoAlbum photos={photos} />;
}
