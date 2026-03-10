import React, { useEffect, useState } from "react";
import Auction from "../Auction/Auction";

const Auctions = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    fetch("./auction.json")
      .then((res) => res.json())
      .then((data) => setAuctions(data));
  }, []);

  return (
    <div className="mx-32 my-32">
      <div>
        <h2 className="text-3xl mb-3">Active Auctions</h2>
        <p className="text-sm mb-10 text-gray-600">
          Discover and bid on extraordinary items
        </p>
        <table className="table">
          <thead>
            <th>
              <td>Items</td>
            </th>
            <th>
              <td>Current Bid</td>
            </th>
            <th>
              <td>Times Left</td>
            </th>
            <th>
              <td>Bid Now</td>
            </th>
          </thead>
        </table>
        {auctions.map((auction) => (
          <Auction auction={auction}></Auction>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Auctions;
