import React from 'react';

import Image from 'react-bootstrap/esm/Image';

const S3_BASE_URL = 'https://pixly-knhr.s3.amazonaws.com/';

/** PhotoCard: Renders a single photo
 *
 * Props: photo, handleShow
 * State: none
 *
 * App -> PhotoCard
 *
 * */
function PhotoCard({ photo, handleShow }) {
  function handleClick() {
    const updateData = {
      id: photo.id,
      title: photo.title,
      tags: photo.tags,
    };
    handleShow(updateData);
  }

  return (
    <Image
      className="PhotoCard"
      key={photo.id}
      src={`${S3_BASE_URL}${photo.id}`}
      style={{ width: '100%' }}
      alt={photo.title}
      onClick={handleClick}
    />
  );
}

export default PhotoCard;
