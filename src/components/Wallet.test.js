import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { Wallet } from './Wallet';

let props;
let wallet;
let balance = 0;
let userBalance = 0;
let mockDeposit;
let mockWithdraw;

const setup = ({ balance = 0 }) => {
	mockDeposit = jest.fn();
	mockWithdraw = jest.fn();
	props = { balance: balance, deposit: mockDeposit, withdraw: mockWithdraw };
	return shallow(<Wallet  {...props} />)
}

describe('<Wallet />', () => {
	beforeEach(() => {
		wallet = setup({ balance });
	})

	it('renders correctly', () => {
		wallet = renderer.create(wallet).toJSON();
		expect(wallet).toMatchSnapshot();
	})

	it('displays the balance from props', () => {
		expect(wallet.find('.balance').text()).toEqual(`Wallet Balance: ${balance}`)
	})

	it('contains an input to deposit or withdraw from balance', () => {
		expect(wallet.find('.input-wallet').exists()).toBe(true)
	})

	describe('When user types into the wallet input', () => {
		userBalance = 20;
		const setBalance = jest.fn();
		const useStateSpy = jest.spyOn(React, 'useState')
		useStateSpy.mockImplementation((init) => [userBalance, setBalance])

		beforeEach(() => {
			wallet
				.find('.input-wallet')
				.simulate('change', { target: { value: userBalance.toString() }})
		})

		it('calls setBalance with `userBalance`', () => {
			expect(setBalance).toHaveBeenCalled()
			expect(setBalance).toHaveBeenCalledWith(userBalance)
			expect(setBalance).toHaveBeenCalledTimes(1)
		})

		describe('and the user wants to make a deposit', () => {
			beforeEach(() => {
				wallet.find('.btn-deposit').simulate('click')
			})

			it('dispatches the `deposit()` it receives from props with the local balance', () => {
				expect(mockDeposit).toHaveBeenCalledTimes(1)
				expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10))
			})
		})
	})

	describe('When the user wants to withdraw', () => {
		beforeEach(() => {
			wallet.find('.btn-withdraw').simulate('click')
		})

		it('dispatches the `withdraw()` it receives from props with the local balance', () => {
			expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10))
		})
	})
})
