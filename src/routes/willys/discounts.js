export async function getWillysDiscounts() {
	try {
		const response = await fetch(
			'https://www.willys.se/search/campaigns/offline?page=0&q=2102&size=20'
		);
		return await response.json();
		// Process the data
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}
