import {read_cookie, bake_cookie} from 'sfcookies';
import * as constants from '../actions/constants';

const BALANCE_COOKIE = '_BALANCE_COOKIE'

const initialState = 0;

const balanceReducer = (state = initialState, action) => {
	let balance = 0;
	const { type, payload } = action;

	switch (type) {
		case constants.SET_BALANCE:
			balance = payload;
			break;
		case constants.DEPOSIT:
			balance = state + payload;
			break;
		case constants.WITHDRAW:
			balance = state - payload;
			break;
		default:
			balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state;
	}

	bake_cookie(BALANCE_COOKIE, balance)

	return balance;
}

export default balanceReducer
