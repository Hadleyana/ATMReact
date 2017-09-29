import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0
    }

    this.handleDepositClick = this.handleDepositClick.bind(this)
    this.handleWithdrawClick = this.handleWithdrawClick.bind(this)

  }

  handleDepositClick(e) {
    e.preventDefault();
    if (isNaN(this.refs.amount.value) || this.refs.withdrawAmount.value < 0) {
      console.log("Not a number");
    }
    else {
      let amount = +this.refs.amount.value;
      let newBalance = this.state.balance + amount;
      if (newBalance < 0) {
        newBalance = 0
      }
      this.setState({
        balance: newBalance
      })
      this.refs.amount.value = '';
    }
  }

  handleWithdrawClick(e) {
    e.preventDefault();
    if (isNaN(this.refs.withdrawAmount.value) || (this.refs.withdrawAmount.value < 0)) {
      console.log("Not a valid input");
    }
    else {
      let withdrawAmount = +this.refs.withdrawAmount.value;
      let newBalance = this.state.balance - withdrawAmount;
      if (newBalance < 0) {
        newBalance = 0
      }
      this.setState({
        balance: newBalance
      })
      this.refs.withdrawAmount.value = '';
    }
  }

  render() {
    let balanceClass = 'balance';
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref="amount" />
        <input type="button" value="Deposit" onClick={this.handleDepositClick} />
        <input type="text" placeholder="enter an amount" ref="withdrawAmount" />
        <input type="button" value="Withdraw" onClick={this.handleWithdrawClick} />
      </div>
    )
  }
}
