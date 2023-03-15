import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PixlyApi from '../api/api';

import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';

/** AddPhotoForm: Form for adding a photo
 *
 * Props: none
 * State: formData
 *
 * App -> AddPhotoForm
 *
 * */
function AddPhotoForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    tags: '',
    photo: null,
  });

  /** Send {title, tags, photo} to API for upload. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await PixlyApi.uploadImage(formData);
      navigate('/photos/gallery');
    } catch (e) {
      console.error(e);
    }
  }

  /** Update form data field */
  function handleInputChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  /** Update form data photo */
  function handleFileChange(evt) {
    const { name, files } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: files[0],
    }));
  }

  return (
    <div className="AddPhotoForm pt-5">
      <Container className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h3 className="mb-3 text-center fs-1">Add a Photo</h3>
        <Card>
          <Card.Body>
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
              <Form.Group>
                <Form.Label htmlFor="title">Title</Form.Label>
                <Form.Control
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="mb-2"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="description">Tags</Form.Label>
                <Form.Control
                  id="tags"
                  name="tags"
                  type="text"
                  value={formData.tags}
                  onChange={handleInputChange}
                  className="mb-2"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="photo">Photo</Form.Label>
                <Form.Control
                  id="photo"
                  name="photo"
                  type="file"
                  onChange={handleFileChange}
                  className="mb-3"
                  required
                />
              </Form.Group>
              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default AddPhotoForm;
