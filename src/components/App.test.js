import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App'

import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'


const mockStore = configureStore([thunk])
const store = mockStore(0)

const setup = () => (
	mount(
		<Provider store={store}>
			<App />
		</Provider>
	)
)


describe('<App />', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = setup()
	})

	it('renders correctly', () => {
		const tree = renderer.create(wrapper).toJSON()
		expect(tree).toMatchSnapshot()
	})

	it('contains a connected <Connect(Wallet) /> component', () => {
		expect(wrapper.find('Connect(Wallet)').exists()).toBe(true);
	})

	it('contains a connected <Connect(Loot) /> component', () => {
		expect(wrapper.find('Connect(Loot)').exists()).toBe(true);
	})

	it('contains a link to the coindesk price page', () => {
		expect(wrapper.find('a').props().href).toBe('https://www.coindesk.com/price')
	})
})
