export const getPeople = (id) => {
	if (id) {
		return `people/${id}`
	}
	return 'people'

}