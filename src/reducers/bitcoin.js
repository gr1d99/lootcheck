import {FETCH_BITCOIN} from "../actions/constants";

const bitcoinReducer = (state = {}, action) => {
	const { type, payload } = action;

	switch (type) {
		case FETCH_BITCOIN:
			return payload;
		default:
			return state;
	}
}

export default bitcoinReducer;
