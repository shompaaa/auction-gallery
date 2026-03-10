import React from "react";

const Auction = ({ auction }) => {
  const { image, title, currentBidPrice, timeLeft } = auction;
  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <td>{image}</td>
            <td>{title}</td>
            <td>${currentBidPrice}</td>
            <td>{timeLeft}</td>
            <td>
              <button>X</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Auction;
