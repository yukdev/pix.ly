import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

/** ModalTagForm: Renders a form for adding a tag to a photo
 *
 * Props: handleTagSubmit, handleTagCancel
 * State: formData
 *
 * App -> PhotoGalleryContainer -> PhotoGallery -> PhotoModal -> ModalTags -> ModalTagForm
 *
 * */
export default function ModalTagForm({ handleTagSubmit, handleTagCancel }) {
  const [formData, setFormData] = useState({
    tag: "",
  });

  /** update state with form data */
  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  }

  /** handle form submit */
  async function handleFormSubmit(e) {
    e.preventDefault();
    await handleTagSubmit(formData.tag);
    setFormData({ tag: "" });
  }

  return (
    <div className="d-flex justify-content-center">
      <Form className="d-flex" onSubmit={handleFormSubmit}>
        <InputGroup size="sm">
          <Form.Control
            name="tag"
            type="text"
            placeholder="Add a tag"
            value={formData.tag}
            onChange={handleFormChange}
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="secondary" onClick={handleTagCancel}>
            Cancel
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
}
