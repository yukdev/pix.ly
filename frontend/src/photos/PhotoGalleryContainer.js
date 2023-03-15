import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PixlyApi from '../api/api';

import Container from 'react-bootstrap/esm/Container';

import TagFilter from '../Common/TagFilter';
import PopularTags from './PopularTags';
import ActiveFilters from './ActiveFilters';
import PhotoGallery from './PhotoGallery';

/** PhotoGalleryContainer: Renders PhotoGallery and related components
 *
 * Props: none
 * State: photoList, popularTags, activeFilters, isLoading
 *
 * App -> PhotoGalleryContainer -> PhotoGallery, TagFilter, PopularTags, ActiveFilters
 *
 * */
export default function PhotoGalleryContainer() {
  const { tag } = useParams();
  const [photos, setPhotos] = useState({
    photoList: [],
    popularTags: [],
    activeFilters: tag || null,
    isLoading: true,
  });

  useEffect(
    function fetchPhotosWhenMounted() {
      async function fetchPhotos() {
        try {
          const photoResults = await PixlyApi.getPhotos(photos.activeFilters);
          setPhotos((p) => ({
            ...p,
            photoList: photoResults,
            isLoading: false,
          }));
        } catch (err) {
          console.error('Error fetching photos', err);
        }
      }

      fetchPhotos();
    },
    [photos.activeFilters],
  );

  useEffect(function getPopularTagsWhenMounted() {
    async function getPopularTags() {
      try {
        const tags = await PixlyApi.getPopularTags();
        setPhotos((p) => ({ ...p, popularTags: tags }));
      } catch (err) {
        console.error('Error fetching tags', err);
      }
    }
    getPopularTags();
  }, []);

  /** filter photos by tag(s) */
  function addFilters(tag) {
    setPhotos((p) => ({ ...p, activeFilters: tag }));
  }

  /** add a tag to filters */
  function addFilter(tag) {
    const newFilter =
      photos.activeFilters && !photos.activeFilters.includes(tag)
        ? `${photos.activeFilters} ${tag}`
        : tag;
    setPhotos((p) => ({ ...p, activeFilters: newFilter }));
  }

  /** remove a tag from filters */
  function removeFilter(tag) {
    const newFilter = photos.activeFilters
      .split(' ')
      .filter((t) => t !== tag)
      .join(' ');
    setPhotos((p) => ({ ...p, activeFilters: newFilter }));
  }

  /** clear all tags  from filters*/
  function clearFilters() {
    setPhotos((p) => ({ ...p, activeFilters: null }));
  }

  /**  add a tag to a photo */
  async function addTag(photoId, tag) {
    try {
      await PixlyApi.addTag(photoId, tag);
      const newPhotos = photos.photoList.map((photo) => {
        if (photo.id === photoId) {
          photo.tags.push(tag);
        }
        return photo;
      });
      setPhotos((p) => ({ ...p, photoList: newPhotos }));
    } catch (err) {
      console.error('Error adding tag', err);
    }
  }

  if (photos.isLoading) return <p>Loading...</p>;

  return (
    <Container className="PhotoGallery mt-4">
      <TagFilter addFilters={addFilters} />
      <PopularTags
        popularTags={photos.popularTags}
        activeFilters={photos.activeFilters}
        addFilter={addFilter}
        removeFilter={removeFilter}
      />
      <ActiveFilters
        tags={photos.activeFilters}
        removeFilter={removeFilter}
        clearFilters={clearFilters}
      />
      <PhotoGallery
        photos={photos.photoList}
        addFilters={addFilters}
        addTag={addTag}
      />
    </Container>
  );
}
