import React from "react";

/** ModalTag: Renders a single tag
 *
 * Props: tag, handleTagClick, handleTagAdd
 * State: none
 *
 * PhotoGalleryContainer -> ModalTags -> ModalTag
 *
 * */
export default function ModalTag({ tag, handleTagClick }) {
  return (
    <span
      key={tag}
      className="badge bg-secondary me-2"
      role="button"
      onClick={handleTagClick}
    >
      {tag}
    </span>
  );
}
