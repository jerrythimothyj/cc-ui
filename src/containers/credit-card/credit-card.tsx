import React from "react";
import AddCreditCard from "../../components/add-credit-card/add-credit-card";
import CreditCardList from "../../components/credit-card-list/credit-card-list";

const CreditCard: React.FC = () => {
  return (
    <div className="container">
      <h1>Credit Card System</h1>
      <AddCreditCard />
      <br></br>
      <CreditCardList />
    </div>
  );
};

export default CreditCard;
