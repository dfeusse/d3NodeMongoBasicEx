var svg = d3.select("#visual").append("svg")
    .attr({
	    width:500,
	    height:500
	});
    /*
var data = [
	    {name:"a", value: 20},
	    {name:"a", value: 50},
	    {name:"a", value: 25},
	    {name:"a", value: 16},
	    {name:"a", value: 37}
  ]
    */

//ajax call
var my_data;
//total_likes_url = 'http://localhost:3000/report/facebook?report=page_fans&start=1374000000&end=&format=json&period=lifetime&action='
//test_url = 'http://localhost:8080/d3json'
test_url = 'http://ec2-54-213-66-198.us-west-2.compute.amazonaws.com:8080/d3json'
    $.ajax({
	    url: test_url,
	    //data: "message="+commentdata,
	    type: 'GET',
	    async: false,
	    dataType: 'json',
	    success: function (data) {
		//console.log(data.data.values);
		/*
	var metrics = data.data.values.map(function(item){
			return {
			    date: item.endTimeString,
			    metric: data.data.name,
			    value: item.value,
			    title: data.data.title
			};
		    });
		*/
		//total_page_likes = metrics;
		my_data = data;
		console.log(my_data)
	    },
	    error: function(e) {
		alert('Error: '+e);
	    }  
	});
console.log('data: ')
console.log(my_data)

var heightScale = d3.scale.linear()
    .domain([0, d3.max(my_data, function(d) { return d.value; }) ])
    .range([0,50]);

var bars = svg.selectAll("rect")
    //.data(data)
    .data(my_data)
    .enter()
    .append("rect")
    .attr({
	    width:20,
	    height: function(d,i) {
		return heightScale(d.value)
		    },
	    x: function(d,i) {
		return (i*22) + 100
		    },
	    y: function(d,i) {
		return 173 - heightScale(d.value)
		    }
    
	})
