import axios from 'axios';
import thunk from "redux-thunk";
import configureMockStore from 'redux-mock-store';

import { FETCH_BITCOIN } from './constants';
import { fetchBitcoin } from './bitcoin';


jest.mock('axios')

const mockResponse = {
	data: {
		"bpi":
			{
				"USD":
					{
						"code": "USD",
						"symbol": "$",
						"rate": "126.5235",
						"description": "United States Dollar",
						"rate_float": 126.5235
					}
			}
	}
}

axios.get.mockImplementation(() => Promise.resolve(mockResponse))

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({
	bitcoin: {}
})

it('creates an async action to fetch bitcoin value', () => {
	const expectedActions = [{ type: FETCH_BITCOIN, payload: mockResponse.data }]

	store.dispatch(fetchBitcoin()).then(() => {
		expect(store.getActions()).toEqual(expectedActions)
	})
})
