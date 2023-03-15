import { useState, useEffect } from "react";

import Badge from "react-bootstrap/esm/Badge";

/** PopularTag: Renders a tag for filtering photos by tag
 *
 * Props: tag, activeFilters, addFilter, removeFilter
 * State: isActive
 *
 * PhotoGalleryContainer -> PopularTags -> PopularTag
 *
 * */
export default function PopularTag({
  tag,
  activeFilters,
  addFilter,
  removeFilter,
}) {
  const t = tag.tag;

  const [isActive, setIsActive] = useState(
    activeFilters && activeFilters.includes(t)
  );

  useEffect(
    function updateActiveState() {
      setIsActive(activeFilters && activeFilters.includes(t));
    },
    [activeFilters, t]
  );

  /** toggle active state and add/remove filter */
  function handleclick() {
    if (isActive) {
      removeFilter(t);
    } else {
      addFilter(t);
    }
    setIsActive((i) => !i);
  }

  return (
    <>
      <Badge
        role="button"
        bg={isActive ? "success" : "secondary"}
        className="PopularTag me-2"
        onClick={handleclick}
      >
        {tag.tag} ({tag.count})
      </Badge>
    </>
  );
}
