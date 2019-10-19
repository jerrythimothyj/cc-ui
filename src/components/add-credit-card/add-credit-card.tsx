import React from "react";
import { mapIndexed } from "../../utilities/ramda.utilities";

type Props = {
  addCreditCard: Function;
  stageInputData: Function;
  errors: Array<string>;
  stagedInputData: any;
};

const AddCreditCard: React.FC<Props> = props => {
  console.log('stagedInputData=', props.stagedInputData);
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
          value={props.stagedInputData.name || ""}
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
          value={props.stagedInputData.number || ""}
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
          value={props.stagedInputData.limit || ""}
        />
      </div>
      {mapIndexed((error: any, idx) => <div className="text-danger" key={idx}>{error}</div>)(
        props.errors
      )}
      <br />
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
