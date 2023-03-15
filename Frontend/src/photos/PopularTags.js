import PopularTag from "./PopularTag";

/**  Renders a list of PopularTag components
 *
 * Props: popularTags, activeFilters, addFilter, removeFilter
 * State: none
 *
 * PhotoGalleryContainer -> PopularTags -> PopularTag
 *
 * */
export default function PopularTags({
  popularTags,
  activeFilters,
  addFilter,
  removeFilter,
}) {
  return (
    <div className="PopularTags text-center mt-3">
      {popularTags.map((t) => (
        <PopularTag
          key={`popular-${t.tag}`}
          tag={t}
          activeFilters={activeFilters}
          addFilter={addFilter}
          removeFilter={removeFilter}
        />
      ))}
    </div>
  );
}
