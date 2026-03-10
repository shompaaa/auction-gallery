import React, { useEffect, useState } from "react";
import Auction from "../Auction/Auction";
import { FaRegHeart } from "react-icons/fa";
import { ImCross } from "react-icons/im";


const Auctions = () => {
  const [auctions, setAuctions] = useState([]);
  const [bids, setBids] = useState([]);

  useEffect(() => {
    fetch("./auction.json")
      .then((res) => res.json())
      .then((data) => setAuctions(data));
  }, []);

  const handleBid = (b) => {
    const isExist = bids.find((bid) => bid.id === b.id);
    if (!isExist) {
      setBids([...bids, b]);
    } else {
      alert("Already exist");
    }
  };

  return (
    <div className="mx-32 my-32 flex justify-between gap-10">
      <div className="w-3/4">
        <h2 className="text-3xl mb-3">Active Auctions</h2>
        <p className="text-sm mb-10 text-gray-600">
          Discover and bid on extraordinary items
        </p>
        <div className="bg-white p-5 rounded-xl">
          <div className="flex justify-between mb-3 font-bold">
            <div className="w-[75%]">Items</div>
            <div className="flex justify-around w-3/4">
              <p>Current Bid</p>
              <p>Time Left</p>
              <p>Bid Now</p>
            </div>
          </div>
          <hr className="text-gray-300" />
          {auctions.map((auction) => (
            <Auction
              key={auction.id}
              auction={auction}
              handleBid={handleBid}
            ></Auction>
          ))}
        </div>
      </div>

      {/* Right Side Content */}
      <div className="mt-27 bg-white p-5 rounded-xl h-full w-1/3">
        <div className="flex items-center px-5 mb-2 justify-center gap-3">
          <FaRegHeart size={22} />
          <h2 className="text-2xl text-[#0E2954] font-semibold">
            Favorite Items
          </h2>
        </div>
        <hr className="text-gray-200" />
        {bids.map((bid) => (
          <div className="flex justify-between">
            <div className="flex gap-3 mb-5 mt-3">
              <img className="w-24" src={bid.image} alt="" />
              <div>
                <h2>{bid.title}</h2>
                <div className="flex justify-between">
                  <h2>${bid.currentBidPrice}</h2>
                  <h2>Bids: {bid.bidsCount}</h2>
                </div>
              </div>
            </div>
            <button>
              <ImCross />
            </button>
          </div>
        ))}
        {/* <div className="px-20 py-8 text-center">
            <h2 className="font-bold">No favorites yet</h2>
            <p className="text-gray-400">Click the heart icon on any item to add it to your favorites</p>
        </div> */}
        <hr className="text-gray-200 mb-2" />
        <div className="flex justify-between mx-5 font-bold">
          <h2>Total bids Amount</h2>
          <h2>$0000</h2>
        </div>
      </div>
    </div>
  );
};

export default Auctions;
