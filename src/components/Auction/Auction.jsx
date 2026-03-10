import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Auction = ({ auction, handleBid }) => {
  const { image, title, currentBidPrice, timeLeft } = auction;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table border-b mb-1 border-gray-200">
          <tbody>
            {/* Table Row */}
            <tr className="text-start">
              <td className="w-4/7">
                <div className="flex items-center gap-3">
                  <img className="h-24 w-28 rounded-xl" src={image} alt="" />
                  <div className="font-bold">{title}</div>
                </div>
              </td>
              <td> ${currentBidPrice}</td>
              <td>{timeLeft}</td>
              <td>
                <button onClick={()=>handleBid(auction,currentBidPrice)}>
                  <FaRegHeart size={20} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Auction;
