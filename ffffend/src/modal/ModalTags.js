import React from "react";
import Badge from "react-bootstrap/esm/Badge";

import ModalTag from "./ModalTag";

/** ModalTags: Renders tags for filtering photos by tag
 *
 * Props: tags, handleTagClick, handleTagAdd
 * State: none
 *
 * PhotoGalleryContainer -> ModalTags -> ModalTag
 *
 * */
export default function ModalTags({ tags, handleTagClick, handleTagAdd }) {
  return (
    <div className="ModalTags">
      {tags.map((t) => (
        <ModalTag key={`modal-${t}`} tag={t} handleTagClick={handleTagClick} />
      ))}
      <Badge
        role="button"
        bg="secondary"
        className="me-2"
        onClick={handleTagAdd}
      >
        +
      </Badge>
    </div>
  );
}
