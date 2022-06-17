let isCustomQuestionInputHidden = true;

function checkSelectedInput() {
	let select_elm = document.querySelector("select"),
		select_value = select_elm.value,
		custom_question_input_container = document.querySelector("div#custom_question_input_container");
		
	if (select_value === "Other") {
		isCustomQuestionInputHidden = false;
		custom_question_input_container.style = "display: flex";
	}
	else {
		isCustomQuestionInputHidden = true;
		custom_question_input_container.style = "display: none";
	}
}


function validateInputs() {
	let all_text_inputs = document.querySelectorAll(`input[type="text"], input[type="email"]`),
		feedback_text_elm = document.querySelector("p#feedback_text");
		areAllInputsFilled = true;
	
	for (let text_input of all_text_inputs) {
		
		if (text_input.id === "custom_question_input" && isCustomQuestionInputHidden) {
			continue;
		}
		
		if (!text_input.value) {
			areAllInputsFilled = false;
			text_input.style = `
				background-color: #FF6666;
				border-color: #660000;
			`
		}
		else {
			text_input.style = ``
		}
	}
	
	if (!areAllInputsFilled) {
		feedback_text_elm.style = `
			display: flex;
			color: #660000;
		`
		feedback_text_elm.textContent = "Please fill out all fields";
	}
	else {
		feedback_text_elm.style = `
			display: flex;
			color: #006600;
		`
		feedback_text_elm.textContent = "Your question has been submitted!";
	}
}