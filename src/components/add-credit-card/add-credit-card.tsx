import React from "react";

const AddCreditCard: React.FC = () => {
  return (
      <form>
        <div className="form-group w-25">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group w-25">
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" className="form-control" id="cardNumber" />
        </div>
        <div className="form-group w-25">
          <label htmlFor="limit">Limit</label>
          <input type="text" className="form-control" id="limit" />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>      
  );
};

export default AddCreditCard;
