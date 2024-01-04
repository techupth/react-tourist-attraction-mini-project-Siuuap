import React from "react";

const CopyToClipBoard = ({ reactIcon, url }) => {
  return (
    <div className="flex flex-col justify-end">
      <img
        title="Copy to Clipboard"
        src={reactIcon}
        alt="react-icon"
        className="cursor-pointer hover:animate-spin"
        onClick={() => {
          navigator.clipboard.writeText(url);
          window.confirm(`Copy Link ไปที่ ${url} ไหม?`);
        }}
      />
    </div>
  );
};

export default CopyToClipBoard;
