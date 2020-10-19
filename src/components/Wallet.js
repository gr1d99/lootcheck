import React from 'react';
import { connect } from 'react-redux';
import { deposit } from "../actions/balance";
import { withdraw } from "../actions/balance";

export const Wallet = (props) => {
	const [newBalance, setBalance] = React.useState(props.balance);

	const handleChange = e => {
		const { value } = e.target;
		setBalance(parseInt(value, 10))
	}

	const handleDeposit = () => {
		props.deposit(newBalance)
	}

	const handleWithdraw = () => {
		props.withdraw(newBalance)
	}

	return (
		<div>
			<h3 className='balance'>
				Wallet Balance: {props.balance}
			</h3>
			<input
				value={newBalance}
				type='number'
				className='input-wallet'
				onChange={handleChange}
			/>
			<button className='btn-deposit' onClick={handleDeposit}>Deposit</button>
			<button className='btn-withdraw' onClick={handleWithdraw}>Withdraw</button>
		</div>
	)
}

export default connect(
	state => { return { balance: state.balance } },
	{ deposit, withdraw }
)(Wallet)
