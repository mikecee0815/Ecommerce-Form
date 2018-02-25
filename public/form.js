// This line listens for when the html document loads
document.addEventListener('DOMContentLoaded', function(){
	
	// Retreaves the value stored in  localStorage object.
	var numOfVisits = localStorage.getItem('visits');
	
	// A reference to the Dom element
	var message = document.querySelector('#message');
	
	// if the numOfVisits containes a value
	if (numOfVisits) {
		localStorage.setItem('visits', parseInt(numOfVisits)+1);
		message.innerHTML = "This is your visit number  " +  numOfVisits;

	} else {
		message.innerHTML = "This is your first time";
		localStorage.setItem("visits", "1");
	}

	 // get a reference from all form inputs.
	var inputs = document.querySelectorAll("#name , #telephone , #email");

	// save operation
	for(var input of inputs){
		var storedValue = localStorage.getItem(input.id);
		if (storedValue) {
			 input.value = storedValue;
		};
		// add an event listener for each form input
		input.addEventListener("change",function(){

			//  add each input to localstorage
			localStorage.setItem(this.id, this.value);
	});	
		}
});