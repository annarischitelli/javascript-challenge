// from data.js
var tableData = data;

// Check to make sure it's pulling all data from data.js
// console.log(tableData);

// Create and organize variables
var tableBody = d3.select("tbody");
var button = d3.select("#filter-btn");
var userdate = d3.select("#datetime");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Add all data to HTML for initial preview of sightings
var inputData = function (fillTable) {
  fillTable.forEach(UFOEvents => {
    var row = tableBody.append("tr");
    columns.forEach(column => row.append("td").text(UFOEvents[column])
    )});
}
inputData(tableData);

// Create a listener to filter when the button is clicked
button.on("click", () => {
  // Boilerplate to stop page from reload
  d3.event.preventDefault();
  // Create the variable to hold the user input date
  var inputdate = userdate.property("value");
  // Check to make sure it's recording the date
  // console.log(inputdate)
  // Create the variable that will filter the UFO data on user input
  var filterDate = tableData.filter(tableData => tableData.datetime === inputdate);
  tableBody.html("");
  var response = {filterDate}

  if (response.filterDate.length !== 0) {
    inputData(filterDate);
  }

  else {
    tableBody.append("tr").append("td").text("No sign of other life forms for this date.");
  }
})