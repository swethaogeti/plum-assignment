import React from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { useDataContext } from "../context/DataProvider";
import { useFilterContext } from "../context/FilterProvider";
import {
  isPremiumFilter,
  rangeFilter,
  sortProducts,
} from "../filterOperations";

export const HomePage = () => {
  const { apiData } = useDataContext();
  const { filterState } = useFilterContext();
  const { range, premium, sortBy } = filterState;

  const navigate = useNavigate();
  const rangeFilterProducts = rangeFilter(apiData, range);
  const isPremiumFilterProducts = isPremiumFilter(rangeFilterProducts, premium);
  const finalSortProducts = sortProducts(isPremiumFilterProducts, sortBy);

  return (
    <div className=" max-w-full md:max-w-7xl mx-auto p-2 flex">
      <Sidebar />
      <div>
        <h1 className="text-[1.5rem] font-bold text-blue-500">
          Plum Assignment
        </h1>
        <div className="flex flex-wrap justify-center items-center mx-auto space-x-2 space-y-2 ">
          {finalSortProducts.map(({ data: { thumbnail, id, url, title } }) => {
            return (
              <div
                className="w-[16rem] h-[23rem] m-2 flex flex-col  border-2 rounded-md border-gray-400 p-2 bg-gray-50 cursor-pointer"
                onClick={() => navigate(`images/${id}`)}
                key={id}
              >
                <img
                  src={thumbnail}
                  alt="image"
                  className="max-w-[16rem] h-[16rem]  "
                ></img>
                <h1 className="text-gray-800 font-bold overflow-ellipsis text-[1rem]">
                  {title}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
