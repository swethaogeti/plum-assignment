import { useFilterContext } from "../context/FilterProvider";

export const Sidebar = () => {
  const { filterState, filterDispatch } = useFilterContext();
  const { premium, sortBy, range } = filterState;

  return (
    <form
      className="p-2 mt-5  sticky max-w-[600px] xl:min-w-[270px] space-y-3"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex space-x-2 items-center ">
        <input
          type="radio"
          id="low-to-high"
          name="sort"
          onClick={() =>
            filterDispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
          }
          checked={sortBy && sortBy === "HIGH_TO_LOW"}
        ></input>
        <label for="low-to-high" className="text-[1rem] font-semibold">
          Most-To-Least Liked
        </label>
      </div>
      <div className="flex space-x-2 items-center">
        <input
          type="radio"
          id="high-to-low"
          name="sort"
          onClick={() =>
            filterDispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
          }
          checked={sortBy && sortBy === "LOW_TO_HIGH"}
        ></input>
        <label for="high-to-low" className="text-[1rem] font-semibold">
          Least-To-most Liked
        </label>
      </div>
      <div className="flex space-x-2 items-center">
        <input
          type="checkbox"
          id="author_premium"
          onClick={() => filterDispatch({ type: "PREMIUM" })}
          checked={premium}
        ></input>
        <label for="author_premium" className="text-[1rem] font-semibold">
          Premium Authors
        </label>
      </div>
      <div className="flex flex-col ">
        <h1 className="text-[1rem] font-semibold">Number of Awards</h1>
        <div className="flex space-x-2">
          {[0, 5, 10, 15, 20].map((_, index) => {
            return <h3>⭐</h3>;
          })}
        </div>

        <input
          type="range"
          min="0"
          max="20"
          value={range}
          onChange={(e) =>
            filterDispatch({ type: "RANGE", payload: e.target.value })
          }
        ></input>
      </div>
      <div>
        <button
          className=" p-2 text-[1rem] text-white font-[600] rounded-md bg-purple-500"
          onClick={() => filterDispatch({ type: "CLEAR" })}
        >
          Clear Filters
        </button>
      </div>
    </form>
  );
};
