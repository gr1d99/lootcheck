import axios from 'axios';
import {BTC_ENDPOINT, FETCH_BITCOIN} from "./constants";

export const fetchBitcoin = () => {
	return dispatch => {
		return axios.get(BTC_ENDPOINT).then(response => {
			const { data } = response;
			dispatch({ type: FETCH_BITCOIN, payload: data })
		})
	}
}
