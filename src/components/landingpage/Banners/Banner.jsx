import React from "react";

const Banners = (props) => {
  return (
    <div className="flex space-x-8 items-center bg-white mt-16 min-w-[1280px] justify-around">
      <div className="space-y-4 mt-12">
        {/* <div className="text-sm font-medium text-gray-600">
          <a href="/" className="hover:underline">
            Home
          </a>
          <span className="mx-2">{">"}</span>
          <span>Loans</span>
        </div> */}
        <h1 className="text-4xl font-bold text-blue-800">{props.title}</h1>
        <p className="text-lg max-w-xl	">{props.description}</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Apply now
        </button>
      </div>
      <div>
        <img
          src={props.img}
          alt="Loans"
          className="mt-2 w-full max-w-md rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Banners;
