



    var app = angular.module('jobBumble',[]);
	app.controller('searchController', function($scope){
	$scope.jobList = [];
	var url = "https://api.usa.gov/jobs/search.json?";
	
	//query term into url

	// var parseQueryString = function(queryString){
	// 	var params = {}, queries, temp, i, l;
	// 	// Split into key/value pairs
	// 	queries = queryString.split("&amp;");
	// 	// Convert the array of strings into an object
	// 	for ( i = 0, l = queries.length; i < l; i++ ) {
	// 		temp = queries[i].split('=');
	// 		params[temp[0]] = temp[1];
	// 	}
	// 	console.log('Params: ' + params);
	// 	return params;
	// };
	// url+=parseQueryString;
	// //get state and append
	
	// url+='+in+'+ $scope.state.find("option:selected").text();
	// console.log(url);
	
	$scope.searchCareers = function() {
			var queryString = $scope.jobQuery;
	console.log("queryString: " + queryString);
	// 	//search jobs and get info
	// 	$.ajax({
	// 		url: myurl,
	// 		dataType: "json",
	// 		success: function(parsed_json){
	// 			$.each(parsed_json['items'],function(name2,values) {
	// 				var link=values.url;
	// 				var position=values.position_title;
	// 				var org=values.organization_name;
	// 				var avg_salary=(values.minimum + values.maximum)/2;
	// 				var location=values.locations[0];
	// 				//populate into jobList array
	// 				// $scope.jobList.push({$scope.link,$scope.position,$scope.org,$scope.avg_salary,$scope.location});
	// 			});
			}
		// });
	// console.log(jobList[0]);
	// };
});


$(document).ready(function(){

/** ===== TOGGLES SEARCH FUNCTIONALITY ==== **/

 $(".search-button").click(function(){
 	console.log("clicking");
	  $("#search-container").toggle("fast", function(){

	  });
  });
});









