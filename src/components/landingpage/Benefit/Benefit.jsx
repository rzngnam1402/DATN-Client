import React from 'react';
import icon1_img from '../../../assets/images/landingpage/icon1.png';
import icon2_img from '../../../assets/images/landingpage/icon2.png';
import icon3_img from '../../../assets/images/landingpage/icon3.png';

import BenefitCard from './BenefitCard';

const Benefit = () => {
  return (
    <div className="bg-white mt-16 min-w-[1280px]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h1 className="text-4xl text-center  text-blue-800">Benefits</h1>
        <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-between">
          <BenefitCard
            icon={<img src={icon1_img} alt="Clock Icon" />}
            title="Save time"
            description="Forget the hassle of having to collect and deliver your guarantees for lodgement."
          />
          <BenefitCard
            icon={<img src={icon2_img} alt="Money Icon" />}
            title="Save cost"
            description="Eliminate courier costs and the risk of having your guarantee getting lost in transit."
          />
          <BenefitCard
            icon={<img src={icon3_img} alt="Benefit Icon" />}
            title="Additional benefits"
            description="Easier to track issued guarantee using VieGuarantee tracking system."
          />
        </div>
      </div>
    </div>
  );
};

export default Benefit;
