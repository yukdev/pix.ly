import './PhotoModal.css';

import React, { useState } from 'react';

import Modal from 'react-bootstrap/esm/Modal';
import Image from 'react-bootstrap/esm/Image';
import Container from 'react-bootstrap/esm/Container';
import PixlyApi from '../api/api';

import ModalTags from './ModalTags';
import ModalTagForm from './ModalTagForm';

const S3_BASE_URL = 'https://pixly-knhr.s3.amazonaws.com/';

/** PhotoModal: Renders a modal with a photo and tags
 *
 * Props: photoModalData, handleClose, addFilters, addTag
 * State: addingTag
 *
 * App -> PhotoGalleryContainer -> PhotoGallery -> PhotoModal
 *
 * */
export default function PhotoModal({
  photoModalData,
  handleClose,
  addFilters,
  addTag,
}) {
  const { showModal, id, title, tags } = photoModalData;

  const [addingTag, setAddingTag] = useState(false);

  /* handleTagClick: adds tag to filters */
  function handleTagClick(evt) {
    const tag = evt.target.innerText;
    handleClose();
    addFilters(tag);
  }

  /* handleTagAdd: toggles addingTag state */
  function handleTagAdd() {
    setAddingTag(true);
  }

  /* handleTagCancel: toggles addingTag state */
  function handleTagCancel() {
    setAddingTag(false);
  }

  /* handleTagSubmit: adds tag to photo and toggles addingTag state */
  async function handleTagSubmit(tag) {
    await addTag(id, tag);
    setAddingTag(false);
  }

  // handleDelete
  async function handleDelete() {
    await PixlyApi.deletePhoto(id);
    handleClose();
  }

  return (
    <>
      <Modal
        className="PhotoModal"
        show={showModal}
        onHide={handleClose}
        centered
      >
        <Modal.Header closeButton>
          <Container>
            <Modal.Title className="text-center fw-bold">{title}</Modal.Title>
            {/* Delete button */}
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </Container>
        </Modal.Header>
        <Modal.Body>
          <Image src={`${S3_BASE_URL}${id}`} fluid style={{ width: '100%' }} />
        </Modal.Body>
        <Modal.Footer>
          <Container className="text-center">
            {!addingTag ? (
              <ModalTags
                tags={tags}
                handleTagClick={handleTagClick}
                handleTagAdd={handleTagAdd}
              />
            ) : (
              <ModalTagForm
                handleTagSubmit={handleTagSubmit}
                handleTagCancel={handleTagCancel}
                addTag={addTag}
              />
            )}
          </Container>
        </Modal.Footer>
      </Modal>
    </>
  );
}
