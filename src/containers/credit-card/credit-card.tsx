import React from "react";
import { connect } from "react-redux";
import { getData } from "./credit-card.actions";

import AddCreditCard from "../../components/add-credit-card/add-credit-card";
import CreditCardList from "../../components/credit-card-list/credit-card-list";
import { bindActionCreators } from "redux";

type Props = {
  getData: Function,
  creditCards: Array<Object>
};
class CreditCard extends React.Component<Props> {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { creditCards } = this.props;
    return (
      <div className="container">
        <h1>Credit Card System</h1>
        <AddCreditCard />
        <br></br>
        <CreditCardList creditCards={creditCards} />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
    creditCards: state.creditCardReducer.creditCards
  });


const mapDispatchToProps = (dispatch: any) => bindActionCreators({ getData }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreditCard);
