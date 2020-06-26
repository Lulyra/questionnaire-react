import React from 'react';

function AddQuestion() {

    const addQuestion = (questionJson) => {
      	fetch('/api/questions/add')
		    .then(response => response.body)
		    .then(response => console.log(response))
		    .catch(error => console.log(error))
    };
    // An sample of question
    addQuestion({
	  "question":"Just a sample. Please answer the alternative that has 'Hello world!' as an option.",
	  "correctAns": "Hello world!",
	  "ans": [
		"Hello city",
		"Hello country",
		"Hello universe"
	  ]
    });

 	return(
 	    <div>
		  <form>
			<div>
			    <div>Question:</div>
			    <textarea type="text" />
			    <div>Correct Answer:</div>
			    <textarea type="text" />
			    <div>Alternatives:</div>
			    <textarea type="text" /><br/>
			    <button>Add alternative.</button>
			</div>
			<button>Submit</button>
		  </form>
	    </div>
	)
}

export default AddQuestion;