import React from "react";
import { Link, useParams } from "react-router-dom";

import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import EmojiEventsOutlinedIcon from "@material-ui/icons/EmojiEventsOutlined";
import { useDataContext } from "../context/DataProvider";
export const SingleImagePage = () => {
  const { imgId } = useParams();
  const { apiData } = useDataContext();
  const singleImgData = apiData.find(({ data: { id } }) => id === imgId);

  const { kind, data } = singleImgData;
  const {
    author,
    name,
    score,
    title,
    thumbnail,
    subreddit_subscribers,
    ups,
    created,
    num_comments,
    total_awards_received,
    downs,
    url,
    author_premium,
  } = data;
  return (
    <div className="w-full  h-screen  flex items-center justify-center mx-auto bg-slate-50">
      <div className="flex flex-col">
        <div className="flex">
          <Link to="/">
            <button className="p-2 m-2 rounded-md bg-purple-500 text-white">
              Go Back
            </button>
          </Link>
        </div>
        <div className="max-w-4xl min-w-4xl flex border-4 border-gray-400 rounded-md flex-wrap sm:flex-nowrap p-4 m-2 items-start justify-center space-x-3 bg-white">
          <img
            alt="image"
            src={url}
            className="w-[16rem] h-[20rem]  rounded-md bg-slate-200"
          ></img>
          <div className="flex flex-col items-start">
            <div className="flex flex-col">
              <div>
                <h2 className="text-start text-[1.3rem] font-bold text-gray-800">
                  {title}
                </h2>
              </div>
              <div>
                <h1 className="text-end text-[1.3rem] font-[600] text-violet-700">
                  -{author}
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-start space-x-3">
              <h1 className="font-mono">Subcribers:</h1>
              <h2 className="font-bold text-gray-500">
                {subreddit_subscribers}
              </h2>
            </div>
            <div className="flex items-center justify-start space-x-3">
              <h1 className="font-mono">Score:</h1>
              <h2 className="font-bold text-green-500">{score}</h2>
            </div>
            <div className="flex space-x-4">
              <div className="flex space-x-2">
                <ThumbUpAltOutlinedIcon className="text-green-700" />
                <h3>{ups}</h3>
              </div>
              <div className="flex space-x-2">
                <ThumbDownAltOutlinedIcon className="text-red-600" />
                <h3>{downs}</h3>
              </div>
            </div>

            <div className="flex space-x-2">
              <h1 className="font-mono"> Awards: </h1>
              <EmojiEventsOutlinedIcon className="text-blue-700" />{" "}
              {total_awards_received}
            </div>
            {author_premium ? (
              <h2 className="text-end text-[1.3rem] font-[600] text-yellow-500">
                Premium Author
              </h2>
            ) : (
              <h2 className="text-end text-[1.3rem] font-[600] text-gray-600">
                Non Premium Author
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
