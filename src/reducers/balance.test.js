import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
	const balance = 10;

	describe('When initializing', () => {
		it('sets a balance', () => {
			const action = {type: constants.SET_BALANCE, payload: balance}

			expect(balanceReducer(undefined, action)).toEqual(balance);
		})

		describe('then re-initializing', () => {
			it('reads the balance from cookies', () => {
				expect(balanceReducer2(undefined, {})).toEqual(balance)
			})
		})
	})

	it('deposits into the balance', () => {
		const deposit = 10;
		const initialState = 5;
		const action = { type: constants.DEPOSIT, payload: deposit }

		expect(balanceReducer(initialState, action)).toEqual(deposit + initialState)
	})

	it('withdraws from the balance', () => {
		const toWithdraw = 10;
		const initialState = 15;
		const action = { type: constants.WITHDRAW, payload: toWithdraw }

		expect(balanceReducer(initialState, action)).toEqual(initialState - toWithdraw)
	})
});
