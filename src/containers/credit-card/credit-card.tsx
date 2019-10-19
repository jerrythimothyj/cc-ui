import React from "react";
import { connect } from "react-redux";
import { getData, addCreditCard, stageInputData } from "./credit-card.actions";

import AddCreditCard from "../../components/add-credit-card/add-credit-card";
import CreditCardList from "../../components/credit-card-list/credit-card-list";
import { bindActionCreators } from "redux";

type Props = {
  getData: Function;
  addCreditCard: Function;
  stageInputData: Function;
  creditCards: Array<Object>;
  stagedInputData: Object;
  errors: Array<string>
};
class CreditCard extends React.Component<Props> {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div className="container">
        <h1>Credit Card System</h1>
        <AddCreditCard
          addCreditCard={() => this.props.addCreditCard(this.props.stagedInputData)}
          stageInputData={this.props.stageInputData}
          errors={this.props.errors}
          stagedInputData={this.props.stagedInputData}
        />
        <br></br>
        <CreditCardList creditCards={this.props.creditCards} />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  creditCards: state.creditCardReducer.creditCards,
  stagedInputData: state.creditCardReducer.stagedInputData,
  errors: state.creditCardReducer.errors
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ getData, addCreditCard, stageInputData }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreditCard);
