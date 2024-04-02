import React from 'react';
import PageContainer from 'src/components/container/PageContainer';

// components
import Banner from '../../../components/landingpage/banner/Banner';
import C2a from '../../../components/landingpage/c2a/C2a';
import C2a2 from '../../../components/landingpage/c2a/C2a2';
import DemoSlider from '../../../components/landingpage/demo-slider/DemoSlider';
import Features from '../../../components/landingpage/features/Features';
import Footer from '../../../components/landingpage/footer/Footer';
import Frameworks from '../../../components/landingpage/frameworks/Frameworks';
import LpHeader from '../../../components/landingpage/header/Header';
import Testimonial from '../../../components/landingpage/testimonial/Testimonial';

import banner_img from "../../../assets/images/landingpage/Banner1.jpeg";
import { FaqSection } from "../../../components/landingpage/FAQ/FaqSection";
import Benefit from "../../../components/landingpage/Benefit/Benefit";
import Banners from '../../../components/landingpage/Banners/Banner';

const Landingpage = () => {
  return (
    <PageContainer title="Landingpage" description="this is Landingpage">
      <LpHeader />
      <Banner />
      <DemoSlider />
      <Frameworks />
      <Testimonial />
      <Features />
      <C2a />
      <C2a2 />
      <Footer />
    </PageContainer>
    // <>
    //   <div className="main-layout min-h-screen overflow-hidden relative flex flex-col items-center">
    //     <div className="container flex flex-col items-center min-h-screen">
    //       <Banners
    //         title="Express Banker's Guarantee"
    //         description="Secure your deals faster with Vie Guarantee's Guarantee. Enjoy
    //       discount fee waiver when you apply online."
    //         img={banner_img}
    //       />
    //       <Benefit />
    //       <FaqSection />
    //     </div>
    //   </div>
    // </>
  );
};

export default Landingpage;
