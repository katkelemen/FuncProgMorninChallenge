//in node we need to require files to be able to use functions from them. This is the pair of exporting.
// (in ES6 this is changed to "import")
var test = require('tape');
var exercise = require('../Exercise.js');
var utils = require('../utils.js');


test("1. tests if printNames returns a new array of names", function (t) {
    t.deepEqual(exercise.newNames(utils.names), ["new Ben", "new Jafar", "new Matt", "new Priya", "new Brian"], "success!");
    t.end();
});

test("2. tests if printNames2 returns a new array of names", function (t) {
    t.deepEqual(exercise.newNames2(utils.names), ["new Ben", "new Jafar", "new Matt", "new Priya", "new Brian"], "success!");
    t.end();
});

test("3. tests if objectProjection returns a new array of objects with only the id and the title of the film in it",
  function (t) {
    t.deepEqual(exercise.objectProjection(utils.newReleases),
    [
    			{
    				"id": 70111470,
    				"title": "Die Hard"
    			},
    			{
    				"id": 654356453,
    				"title": "Bad Boys"
    			},
    			{
    				"id": 65432445,
    				"title": "The Chamber"
    			},
    			{
    				"id": 675465,
    				"title": "Fracture"
    			}
    		],
         "success!");
    t.end();
});

test("4. tests myMap function of array", function (t) {
    t.deepEqual([1,2,3].myMap(function(x) { return x + 1; }), [2,3,4], "success!");
    t.end();
});

test("5. tests if objectProjection2 returns a new array of objects with only the id and the title of the film in it",
  function (t) {
    t.deepEqual(exercise.objectProjection2(utils.newReleases),
      [
  			{
  				"id": 70111470,
  				"title": "Die Hard"
  			},
  			{
  				"id": 654356453,
  				"title": "Bad Boys"
  			},
  			{
  				"id": 65432445,
  				"title": "The Chamber"
  			},
  			{
  				"id": 675465,
  				"title": "Fracture"
  			}
  		],
       "success!");
    t.end();
});

test("6. tests if goodMovie function gives back only movies with rating 5.0", function (t) {
    t.deepEqual(exercise.goodMovie(utils.newReleases),
    [
      {
				"id": 654356453,
				"title": "Bad Boys",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id:432534, time:65876586 }],
        "minutes": 178
			},
      {
				"id": 675465,
				"title": "Fracture",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id:432534, time:65876586 }],
        "minutes": 173
			}
    ],
    "success!");
    t.end();
});

test("7. tests myFilter function of array", function (t) {
    t.deepEqual([1,2,3].myFilter(function(x) { return x > 2;}), [3], "success!");
    t.end();
});

test("8. tests if goodMovieId function gives back only movie ids with rating 5.0", function (t) {
    t.deepEqual(exercise.goodMovieId(utils.newReleases), [{"id": 654356453}, {"id": 675465}], "success!");
    t.end();
});

test("9. tests if longestMovie function finds the longest movie title", function (t) {
    t.deepEqual(exercise.longestMovie(utils.newReleases), "Bad Boys", "success!");
    t.end();
});

test("10. tests myReduce function of array", function (t) {
    t.deepEqual([1,2,3].myReduce(
      function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }), 6, "success1"
    );
    t.deepEqual([1,2,3].myReduce(
      function(accumulatedValue, currentValue) { return accumulatedValue + currentValue;}, 10), 16, "success2"
    );
    t.end();
});

test("11. tests highestRating function", function (t) {
    t.deepEqual(exercise.highestRating([2,3,1,4,5]), 5, "success!");
    t.end();
});
