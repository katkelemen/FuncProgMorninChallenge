// The first two exercises are already completed for you,
// however please make sure you understand well what is happening

//Applying a function to a value and creating a new value is called a projection.
//To project one array into another, we apply a projection function to each item
//in the array and collect the results in a new array.

//1. Loop over an array of names with a for loop and push each name into a new array,
//then return it.
function newNames(arrayOfNames) {
  var newArray=[], counter;
	for(counter = 0; counter < arrayOfNames.length; counter++) {
		newArray.push("new "+ arrayOfNames[counter]);
	}
  return newArray;
}

//2. Use forEach on an array of names and push each name into a new array, then return it.
//Notice that forEach lets us specify what we want to happen to each item
//in the array, but hides how the array is traversed.
function newNames2(arrayOfNames) {
  var newArray=[];
	arrayOfNames.forEach(function(name) {
    newArray.push("new "+ name);
	});
  return newArray;
}

//3. For each video, add a projected {id, title} pair to the videoAndTitlePairs array.
// to see an example arrayOfObjects see utils.js newReleases
function objectProjection(arrayOfObjects) {
  var videoAndTitlePairs = [];

	// ------------ INSERT CODE HERE! -----------------------------------

	return videoAndTitlePairs;
}

//4. Implement myMap
Array.prototype.myMap = function(projectionFunction) {
	var results = [];
	this.forEach(function(itemInArray) {

		// ------------ INSERT CODE HERE! ----------------------------
		// Apply the projectionFunction to each item in the array and add
		// each result to the results array.

	});
	return results;
};

//5. Use myMap() to project an array of videos into an array of {id,title} pairs
function objectProjection2(arrayOfObjects) {
  return arrayOfObjects.myMap// finish this expression!
}

//Like projection, filtering an array is also a very common operation.
//To filter an array we apply a test to each item in the array and collect the items that pass into a new array.

//6. Use forEach() to collect only those videos with a rating of 5.0
function goodMovie(arrayOfObjects){
  videos = [];

	// ------------ INSERT CODE HERE! -----------------------------------

	return videos;
}

//7. Implement myFilter()
Array.prototype.myFilter = function(predicateFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
		// ------------ INSERT CODE HERE! ----------------------------
		// Apply the predicateFunction to each item in the array.
		// If the result is truthy, add the item to the results array.


	});

	return results;
};

//Query Data by Chaining Method Calls

//8. Chain filter and map to collect the ids of videos that have a rating of 5.0
function goodMovieId(arrayOfObjects){
  return arrayOfObjects// finish this expression!

}

//Reducing Arrays
//Let's say we need to find the largest integer in an array.
//We can't use a filter() operation, because it only examines one item at a time.
//To find the largest integer we need to compare items in the array to each other.

//9: Use forEach to find the longest movie and return its title
function longestMovie(arrayOfObjects) {

  //something is missing

	arrayOfObjects.forEach(function(video) {
		currentLongest = video.minutes;
		if (currentLongest > maxLength) {
			longestVideo = video;
			maxLength = currentLongest;
		}
	});

	return longestVideo.title;
}

//10. Implement reduce()
Array.prototype.myReduce = function(combiner, initialValue) {
	var counter,
		  accumulatedValue;

	// If the array is empty, do nothing
	if (this.length === 0) {
		return initialValue;
	}
	else {
		// If the user didn't pass an initial value, use the first item.
		if (arguments.length === 1) {
			counter = 1;
			accumulatedValue = this[0];
		}
		else if (arguments.length >= 2) {
			counter = 0;
			accumulatedValue = initialValue;
		}
		else {
			throw "Invalid arguments.";
		}

		// Loop through the array, feeding the current value and the result of
		// the previous computation back into the combiner function until
		// we've exhausted the entire array.
		while(counter < this.length) {
      // ------------ INSERT CODE HERE! ----------------------------
		}
		return accumulatedValue;
	}
};

//11. Use myReduce function to isolate the largest value in an array of ratings.
function highestRating(ratings) {
  	return ratings.myReduce(function(acc, curr) { // Complete this expression

  });
}

//in node we need to export functions to be able to use them in other files
module.exports = {
  newNames: newNames,
  newNames2: newNames2,
  objectProjection: objectProjection,
  objectProjection2: objectProjection2,
  goodMovie: goodMovie,
  goodMovieId: goodMovieId,
  longestMovie: longestMovie,
  highestRating: highestRating
};
