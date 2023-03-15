import Badge from "react-bootstrap/esm/Badge";

/** ActiveFilters: Renders active filters
 *
 * Props: tags, removeFilter, clearFilters
 * State: none
 *
 * PhotoGalleryContainer -> ActiveFilters
 *
 * */
export default function ActiveFilters({ tags, removeFilter, clearFilters }) {
  function handleClick(evt) {
    removeFilter(evt.target.innerText);
  }

  return (
    <div className="text-center mt-3">
      {tags && (
        <>
          {tags.split(" ").map((t) => (
            <Badge
              key={t}
              role="button"
              bg="primary"
              className="me-2"
              onClick={handleClick}
            >
              {t}
            </Badge>
          ))}
          <Badge
            role="button"
            bg="danger"
            className="me-2"
            onClick={clearFilters}
          >
            clear filters
          </Badge>
        </>
      )}
    </div>
  );
}
