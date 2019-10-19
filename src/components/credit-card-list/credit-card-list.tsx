import React from "react";
import * as R from "ramda";

type Props = {
  creditCards: Array<Object>
}

const CreditCardList: React.FC<Props> = (props) => {
  return (
    <table className="table table-bordered">
      <tbody>
        <tr>
          <td className="bg-light">Name</td>
          <td className="bg-light">Card Number</td>
          <td className="bg-light">Balance</td>
          <td className="bg-light">Limit</td>
        </tr>
        {R.map((creditCard:any) => {
          return (
            <tr key={creditCard.id}>
              <td>{creditCard.name}</td>
              <td>{creditCard.number}</td>
              <td>£{creditCard.balance}</td>
              <td>£{creditCard.limit}</td>
            </tr>
          );
        })(props.creditCards)}
      </tbody>
    </table>
  );
};

export default CreditCardList;
