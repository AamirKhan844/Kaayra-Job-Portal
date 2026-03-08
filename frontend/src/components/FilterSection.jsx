const FilterSection = () => {
  return (
    <div className="sticky top-20 bg-white p-4 rounded-lg shadow">
      <h2 className="font-semibold text-lg mb-4">Filters</h2>

      <div className="mb-4">
        <h3 className="font-medium mb-2">Job Type</h3>
        <button className="border px-3 py-1 rounded-full mr-2">
          Full Time
        </button>
        <button className="border px-3 py-1 rounded-full">Internship</button>
      </div>

      <div>
        <h3 className="font-medium mb-2">Experience</h3>
        <div className="space-y-2">
          <label className="flex gap-2">
            <input type="checkbox" />
            More than 1 year
          </label>

          <label className="flex gap-2">
            <input type="checkbox" />
            More than 2 years
          </label>
        </div>
      </div>
    </div>
  );
};
export default FilterSection;
