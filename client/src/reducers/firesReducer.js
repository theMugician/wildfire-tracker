export default (fires = [], action) => {
	switch(action.type) {
		case 'FETCH_FIRES':
			return action.payload
		default:
			return fires
	}
}