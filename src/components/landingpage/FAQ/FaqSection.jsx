import React from "react";
import { FaqItem } from "./FaqItem";

export const FaqSection = () => {
  return (
    <div className="w-full mt-16 max-w-7xl min-w-[1280px]	min-h-102	flex flex-col items-center">
      <h2 className="text-4xl mb-4 text-center text-blue-800">
        Frequently asked questions
      </h2>
      <div className="space-y-4 ">
        <FaqItem
          question="What is VieGuarantee (VG)?"
          answer="VG is an online platform for customers to apply for VGs on an ad hoc basis against cash margin without the need for banking facilities. Customers must, however, have a VieGuarantee current account to facilitate the debit of the margin amount."
        />
        <FaqItem
          question="Who can apply for an VieGuarantee Banker's Guarantee (VG)?"
          answer="VG is available to Business Banking customers who are seeking for a transactional banker's guarantee application. Customers must maintain a business account with VieGuarantee."
        />
      </div>
    </div>
  );
};
