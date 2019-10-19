import React from "react";

type Props = {
  addCreditCard: Function;
  stageInputData: Function;
};


const AddCreditCard: React.FC<Props> = props => {
  return (
    <form>
      <div className="form-group w-25">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          onChange={event => {
            props.stageInputData("name", event.target.value);
          }}
        />
      </div>
      <div className="form-group w-25">
        <label htmlFor="number">Card Number</label>
        <input
          type="text"
          className="form-control"
          id="number"
          onChange={event => {
            props.stageInputData("number", event.target.value);
          }}
        />
      </div>
      <div className="form-group w-25">
        <label htmlFor="limit">Limit</label>
        <input
          type="text"
          className="form-control"
          id="limit"
          onChange={event => {
            props.stageInputData("limit", event.target.value);
          }}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => props.addCreditCard()}
      >
        Add
      </button>
    </form>
  );
};

export default AddCreditCard;
