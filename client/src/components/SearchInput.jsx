import React from "react";

const SearchInput = ({ search, setSearch }) => {
  return (
    <input
      className="border-b-2 border-sky-500 w-[650px] p-2 text-center mb-10 focus:outline-none"
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchInput;
