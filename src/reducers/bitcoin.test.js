import bitcoinReducer from './bitcoin';
import { FETCH_BITCOIN } from '../actions/constants';

describe('bitcoinReducer', () => {
	const bitcoinData = {
		bpi: {
			USD: {}
		}
	}

	it('fetches and sets the bitcoin data', () => {
		expect(
			bitcoinReducer(
				{},
				{ type: FETCH_BITCOIN, payload: bitcoinData }
			)
		).toEqual(bitcoinData)
	})
});
