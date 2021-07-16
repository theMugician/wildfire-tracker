import * as api from '../api'

export const fetchFires = () => async (dispatch) => {
	try {
		const fires = await api.fetchFires()
		console.log(fires.data)
		dispatch({
			type: 'FETCH_FIRES',
			payload: fires.data
		})
	} catch(error) {
		console.log(error.message)
	}

}