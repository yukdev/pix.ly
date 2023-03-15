import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../home/Home";
import AddPhotoForm from "../photos/AddPhotoForm";
import PhotoGalleryContainer from "../photos/PhotoGalleryContainer";

/** RouteList: Component to render routes for the app
 *
 * Props: none
 * State: none
 *
 * App -> RouteList
 *
 * */
function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/photos/add" element={<AddPhotoForm />} />
      <Route path="/photos/gallery/" element={<PhotoGalleryContainer />} />
      {/* TODO: add a 404 */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouteList;
