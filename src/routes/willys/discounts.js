import { getHardcodedData } from "./hardcodedData";

function minBy(arr, callback) {
	if (!arr || arr.length === 0) {
	  return null;
	}
  
	return arr.reduce((minObj, currentObj) => {
	  return callback(currentObj) < callback(minObj) ? currentObj : minObj;
	}, arr[0]);
  }

export async function getWillysDiscountedItems() {
  try {
    // const response = await fetch(
    //   'https://www.willys.se/search/campaigns/offline?page=0&q=2102&size=20'
    // );
    // let result = await response.json();
    let result = getHardcodedData();
    let list = result.results;
	//return list;
    return list.map(x => {
		let promotions = x.potentialPromotions;
		let cheapest = minBy(promotions, x => x.price);
		return {
			name: x.name,
			comparePrice: cheapest.comparePrice,
			price: cheapest.price
		};
	});
    // Process the data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
