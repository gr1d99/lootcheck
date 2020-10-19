import React from 'react';
import renderer from 'react-test-renderer'
import { mount } from 'enzyme';
import { Loot } from './Loot';

let fetchBitcoin;
fetchBitcoin = jest.fn()
let props;

const setup = (props = {}) => {
	return mount(<Loot {...props} />)
}

describe('<Loot />', () => {
	let wrapper;

	beforeEach(() => {
		props = {
			balance: 10,
			bitcoin: {},
			fetchBitcoin,
		}

		wrapper = setup(props);
	})

	afterEach(() => {
		fetchBitcoin.mockClear()
	})

	it('renders correctly', () => {
		expect(renderer.create(wrapper).toJSON()).toMatchSnapshot()
	})

	describe('When mounted', () => {
		it('dispatches `fetchBitcoin` it receives from props only once', () => {
			expect(fetchBitcoin).toHaveBeenCalledTimes(1)
		})
	})

	describe('When there are valid bitcoin props', () => {
		let bitcoinRate = "11,449.8117"
		beforeEach(() => {
			props = {
				...props,
				bitcoin: { bpi: {
					USD: {
							code: "USD",
							symbol: "&#36;",
							rate: bitcoinRate,
							description: "United States Dollar",
							rate_float: 11449.8117
						},
					}
				}
			}

			wrapper = setup(props)
		})

		it('displays the correct bitcoin value', () => {
			const expectedValue = props?.balance / parseInt(bitcoinRate.replace(',', ''), 0)

			expect(wrapper.find('h3').text()).toEqual(`Bitcoin Balance: ${expectedValue}`)
		})
	})
});
