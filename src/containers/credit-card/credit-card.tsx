import React from "react";

const CreditCard: React.FC = () => {
  return (
    <div className="container">
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td className="bg-light">Name</td>
            <td className="bg-light">Card Number</td>
            <td className="bg-light">Balance</td>
            <td className="bg-light">Limit</td>
          </tr>
          <tr>
            <td>Alice</td>
            <td>1111 2222 3333 4444</td>
            <td>£-1045</td>
            <td>£2000</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>4444 3333 2222 1111</td>
            <td>£10.24</td>
            <td>£2000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CreditCard;
