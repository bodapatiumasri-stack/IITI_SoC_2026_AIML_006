const askButton = document.querySelector('.js-ask-button');

function askQuestion() {
  
  const question = document.querySelector('.js-question-input').value;

  const answerText = document.querySelector('.answer-text');
  const statusText = document.querySelector('.status-text');

  if (question === '') {
    answerText.innerHTML = 'Please enter a medical  question.';
    statusText.innerHTML = '<span class="status-dot">&bull;</span> Waiting for a question';
  } else {
    answerText.innerHTML = 'Searching the medical knowledge graph...';
    statusText.innerHTML = '<span class="status-dot">&bull;</span> Retrieving information...';

    askButton.disabled = true;

    setTimeout(function () {
      answerText.innerHTML = `Demo answer: Information related to "${question}" was retrieved from the medical knowledge graph`;
      statusText.innerHTML = '<span class="status-dot">&bull;</span> Answer ready';

      askButton.disabled = false;
    }, 1500);
  }
}  

askButton.addEventListener('click', function () {
  askQuestion();
});

const questionInput = document.querySelector('.js-question-input');

questionInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    askQuestion();
  }
});


function resetResult() {
  document.querySelector('.answer-text').innerHTML = 'No answer yet.';
  document.querySelector('.status-text').innerHTML =
    '<span class="status-dot">&bull;</span>  knowledge base ready';
}

questionInput.addEventListener('input', resetResult);