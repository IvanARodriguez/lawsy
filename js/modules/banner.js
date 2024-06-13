window.showBody = (country) => {
	const pins = document.querySelectorAll('.pin');

	const selectedPin = document.querySelector(`.${country}`);

	const panels = document.querySelectorAll('.panels');

	const selectedPanel = document.getElementById(country);

	if(pins && selectedPin){

		panels.forEach((p) => p.classList.remove('active'));
	
		pins.forEach((p) => p.classList.remove('selected'));
	
		selectedPin.classList.add('selected');
	
		selectedPanel.classList.add('active');
	}

};

showBody('usa');
