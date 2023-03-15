import React, { useState } from 'react';

import Form from 'react-bootstrap/esm/Form';
import Container from 'react-bootstrap/esm/Container';

/** TagFilter: Renders a form for filtering photos by tag
 *
 * Props: addFilters
 * State: filter
 *
 * App -> PhotoGalleryContainer -> TagFilter
 *
 * */
export default function TagFilter({ addFilters }) {
  const [filter, setFilter] = useState('');

  /** update state with filter value */
  function handleChange(evt) {
    const { value } = evt.target;
    setFilter(value);
  }

  /** add filter to state */
  function handleSubmit(evt) {
    evt.preventDefault();
    addFilters(filter);
    setFilter('');
  }

  return (
    <div className="SearchForm">
      <Container className="w-50">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              id="query"
              name="query"
              value={filter}
              onChange={handleChange}
              placeholder="Filter for specific tag(s)"
            />
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}
