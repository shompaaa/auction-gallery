import React from "react";
import bannerImage from '../../assets/images/banner-min.jpg'

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            `url(${bannerImage})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-start">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold">Bid on Unique Items from Around the World</h1>
            <p className="mb-5 text-xl text-gray-300">
             Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
            </p>
            <button className="btn bg-white border-none rounded-2xl">Explore Auctions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
