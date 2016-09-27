
var app = angular.module('jobBumble',[]);

app.controller('searchController',function($scope, jobService){

	$scope.states = {	
	 "Alabama":"AL ",
     "Alaska":"AK",
     "Arizona":"AZ",
     "Arkansas":"AR",
     "California":"CA",
     "Colorado":"CO",
     "Connecticut":"CT",
	 "Delaware":"DE",
	 "District Of Columbia":"DC",
     "Florida":"FL",
     "Georgia":"GA",
     "Hawaii":"HI",
     "Idaho":"ID",
     "Illinois": "IL",
     "Indiana": "IN",
     "Iowa": "IA",
	 "Kansas": "KS",
     "Kentucky":"KY",
     "Louisiana": "LA",
     "Maine":"ME",
      "Maryland":"MD",
     "Massachusetts":"MA",
     "Michigan": "MI",
      "Minnesota":"MN",
     "Mississippi": "MS",
     "Missouri":"MO",
     "Montana":"MT",
      "Nebraska":"NE",
     "Nevada":"NV",
     "New Hampshire":"NH",
     "New Jersey":"NJ",
     "New Mexico":"NM",
     "New York":"NY",
     "North Carolina":"NC",
	 "North Dakota":"ND",
     "Ohio":"OH",
     "Oklahoma":"OK",
	 "Oregon":"OR",
	 "Pennsylvania":"PA",
     "Rhode Island":"RI",
   	 "South Carolina": "SC",
   	 "South Dakota":"SD",
	 "Tennessee":"TN" ,
      "Texas":"TX",
     "Utah":"UT",
     "Vermont":"VT",
	 "Virginia":"VA",
     "Washington":"WA",
     "West Virginia":"WV",
     "Wisconsin":"WI",
     "Wyoming":"WY"
	};

	$scope.jobs = [{ "end_date":"2016-10-03", "id": "northcarolina:1380899", "location" : "Drapper, UT", 
					"range" : "$"+65000 + "-" + "$"+90000, "name": "Proofpoint",
					 "title" :"Infrastructure Software engineer", "rate_interval_code" : "UT", "start_date":"2016-09-26", 
					 "url" :"http://Proofpoint.com"}	
				];

	console.log("I need help father");
	$scope.itemNext = function(value){console.log("lookinh for this one " + value);}

	// $scope.jobs = [];

	    // function somewhere in father-controller.js
    $scope.searchCareers = function(){

    	$scope.jobs = [];
        
        var url = "https://api.usa.gov/jobs/search.json?query=";
        var queryString = $scope.jobQuery;
		// url+= queryString;
		url+= parseQueryString(queryString);
		url+='+in+'+ $scope.stateSelected;

		//Calls the jobService
        jobService.getJobs(url)
            .then(function(data) {
                // promise fulfilled
                if (data != undefined) {
                	$.each(data, function(i,item){
		              console.log(data[i]);

		               $scope.jobs.push({
					        range : "$"+data[i].minimum + " - " + "$"+data[i].maximum,
							title : data[i].position_title,
							location : data[i].locations[0],
	             			name : data[i].organization_name,
	             			start_date : data[i].start_date,
	             			end_date : data[i].end_date,
	             			url : data[i].url,

	    				});
			      	});
                } else {
                    console.log("data was null");
                }
            }, function(error) {
                console.log("Someone does not kept its promise");
            });
    };
});


app.factory('jobService', function($http, $q){
    return {
        getJobs: function(url){
        	console.log("URL: " + url);
            // var url = "https://api.usa.gov/jobs/search.json?nursing+in+Colorado";
            return $.getJSON(url,function(data){	        
            	return data;           
        	});
        }
    };
});

function parseQueryString(queryString){

	var queries = queryString.split(" ");
	var params = "";
	var queryLength = queries.length;
	// Convert the array of strings into an object

	if(queryLength > 1){
		for(var i=0; i < queryLength; i++){
			params += "+"+queries[i];
		}
		return params;
	}else{
		return queryString;
	}

	
};


$(document).ready(function(){

/** ===== TOGGLES SEARCH FUNCTIONALITY ==== **/

 $(".search-button").click(function(){
 	console.log("clicking");
	  $("#search-container").toggle("fast", function(){

	  });
  });
});









