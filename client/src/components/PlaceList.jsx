import React from "react";
import CopyToClipBoard from "./CopyToClipBoard";
const PlaceList = ({
  list: { description, eid, photos, tags, title, url },
  reactIcon,
  search,
  setSearch,
}) => {
  function handleClick(tag) {
    const searchByClick = tag;
    !search
      ? setSearch(`${searchByClick}`)
      : !search.includes(tag)
      ? setSearch(`${search} ${tag}`)
      : null;
  }
  return (
    <li className="flex justify-between gap-5 ">
      <section className="w-1/3 flex">
        <img
          className="rounded-lg"
          src={photos.filter((_, index) => index === 0)}
          alt="image"
        />
      </section>
      <section className="flex flex-col w-2/3 justify-between">
        <div className="flex flex-col gap-3">
          <a href={url} target="_blank" className="text-[1.2rem] font-bold">
            {title}
          </a>
          <p className="text-gray-500">
            {description.substring(0, 99)}
            {"  "}
            <a href={url} target="_blank" className="text-sky-500">
              อ่านต่อ
            </a>
          </p>

          <div className="text-gray-500 flex">
            {"หมวด -" + " "}
            {tags.map((tag, index) => {
              return (
                <p
                  key={index}
                  className="text-underline decoration-solid mr-1 cursor-pointer"
                  onClick={() => {
                    handleClick(tag);
                  }}
                >
                  {tag}
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex">
          <section className="flex w-[100%] gap-2 ">
            {photos.map((photo, index) => {
              return index !== 0 ? (
                <img
                  key={index}
                  className="rounded-lg w-1/4"
                  src={photo}
                  alt="image"
                />
              ) : null;
            })}
          </section>

          <CopyToClipBoard reactIcon={reactIcon} url={url} />
        </div>
      </section>
    </li>
  );
};

export default PlaceList;
