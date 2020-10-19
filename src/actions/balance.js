import {DEPOSIT, SET_BALANCE, WITHDRAW} from "./constants";

export const setBalance = balance => {
	return {
		type: SET_BALANCE,
		payload: balance
	}
}

export const deposit = amount => {
	return {
		type: DEPOSIT,
		payload: amount
	}
}

export const withdraw = amount => {
	return {
		type: WITHDRAW,
		payload: amount
	}
}
