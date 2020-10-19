import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { fetchBitcoin } from "../actions/bitcoin";

export const Loot = (props) => {
	const { bitcoin, balance, fetchBitcoin } = props;

	const rate = parseInt(bitcoin?.bpi?.USD?.rate?.replace(',', ''), 0)

	React.useEffect(() => {
		fetchBitcoin();
	}, [])

	const computeBitcoin = () => {
		if (bitcoin) {
			return balance / rate
		}

		return '';
	}

	return (
		<h3>Bitcoin Balance: {computeBitcoin()}</h3>
	)
}

const mapStateToProps = state => {
	return { ...state }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ fetchBitcoin }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Loot);
