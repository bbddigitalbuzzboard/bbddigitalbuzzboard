/*
By: Mitchell Ungar
Date: Nov. 27th 2015
Reading the CSV file into notification area, it is duplicate code but they
do different jobs in the drawoutput.
*/

function handleFiles(files) {
	// Check for the various File API support.
	if (window.FileReader) {
		// FileReader are supported.
		getAsText(files[0]);
	} else {
		alert('FileReader are not supported in this browser.');
	}
}
function getAsText(fileToRead) {
	var reader = new FileReader();
	// Handle errors load
	reader.onload = loadHandler;
	reader.onerror = errorHandler;
	// Read file into memory as UTF-8
	reader.readAsText(fileToRead);
}
function loadHandler(event) {
	var csv = event.target.result;
	/*Looks for csv files*/
	processData(csv);
}
function processData(csv) {
		/*Grabs all the text lines of csv*/
    var allTextLines = csv.split(/\r\n|\n/);
		/*Creating empty Array*/
    var lines = [];
		/*Go through all the lines and add each information into the array lines*/
    while (allTextLines.length) {
        lines.push(allTextLines.shift().split(','));
    }
	/*Shows in console what is in lines*/
	console.log(lines);
	/*Displays the array of lines*/
	drawOutput(lines);
}
/*If for some reason it can't be read, do this error*/
function errorHandler(evt) {
	if(evt.target.error.name == "NotReadableError") {
		alert("Cannot read file !");
	}
}

function drawOutput(lines){
  var ctr = 0;
  for (var i = 0; i < lines.length; i++) {
  ctr++;
  var notification = lines[i];
  var strNot = "n" + ctr;
  var not = document.getElementById(strNot);
  document.getElementById(strNot).value = notification;
}
}
