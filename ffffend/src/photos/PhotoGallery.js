import React, { useState } from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import PhotoModal from "../modal/PhotoModal";
import PhotoCard from "./PhotoCard";

/** PhotoGallery: Renders a list of photos, clicking a photo opens a modal
 *
 * Props: photos, addFilters, addTag
 * State: photoModalData
 *
 * App -> PhotoGalleryContainer -> PhotoGallery
 *
 * */
export default function PhotoGallery({ photos, addFilters, addTag }) {
  const [photoModalData, setPhotoModalData] = useState({
    showModal: false,
    photo: null,
    title: null,
    tags: [],
  });

  /* handleClose: closes modal */
  function handleClose() {
    setPhotoModalData((m) => ({ ...m, showModal: false }));
  }

  /* handleShow: passes photo data to modal and opens it */
  function handleShow(photoData) {
    setPhotoModalData({
      showModal: true,
      id: photoData.id,
      title: photoData.title,
      tags: photoData.tags,
    });
  }

  return (
    <div className="PhotoGallery" style={{ padding: "10px" }}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="20px">
          {photos.map((p) => (
            <PhotoCard key={p.id} photo={p} handleShow={handleShow} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {photoModalData.showModal && (
        <PhotoModal
          photoModalData={photoModalData}
          handleClose={handleClose}
          addFilters={addFilters}
          addTag={addTag}
        />
      )}
    </div>
  );
}
