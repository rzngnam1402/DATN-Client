import React from "react";

const BenefitCard = (props) => {
  return (
    <div className=" rounded-lg bg-blue-100">
      <div className="flex flex-col items-center p-4 md:p-6 max-w-sm">
        <div className="mb-2 w-12 h-12 bg-gray-200 flex items-center justify-center rounded-full">
          {props.icon}
        </div>
        <h3 className="mt-2 mb-2 font-semibold text-xl">{props.title}</h3>
        <p className="text-center text-sm text-gray-600">{props.description}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
