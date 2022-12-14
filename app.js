const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: ' Fatih Sultan Mehmet???in babas?? kimdir?',
    answers: [
      { text: '1.Mehmet', correct: false },
      { text: 'Y??ld??r??m Beyaz??t', correct: false },
      { text: '2.Murat', correct: true},
      { text: '1.Ahmet', correct: false}
    ]
  },
  {
    question: 'Hangisi tarihteki T??rk devletlerinden biri de??ildir?',
    answers: [
      { text: 'Emevi Devleti', correct: true },
      { text: 'Avar Ka??anl??????', correct: false },
      { text: 'Hun ??paratorlu??u', correct: false },
      { text: 'Sel??uklu Devleti', correct: false }
    ]
  },
  {
    question: 'K??br??s Bar???? harekat?? hangi tarihte ger??ekle??mi??tir?',
    answers: [
      { text: '1971', correct: false },
      { text: '1972', correct: false },
      { text: '1973', correct: false },
      { text: '1974', correct: true }
    ]
  },
  {
    question: 'Hangisi bir h??crede bulunan organeldir?',
    answers: [
      { text: 'DNA', correct: false },
      { text: 'Lizozom', correct: true },
      { text: 'RNA', correct: false },
      { text: 'Mitokondri', correct: false }
    ]
  },
  {
    question: 'Frans??z ??htilali ka?? y??l??nda ger??ekle??mi??tir?',
    answers: [
        { text: '1769', correct: false},
        { text: '1779', correct: false},
        { text: '1789', correct: true},
        { text: '1799', correct: false}
    ]
  },
  {
    question: 'Hangi hayvan memeli de??ildir?',
    answers: [
        { text: 'Yarasa', correct: false},
        { text: 'Yunus', correct: false},
        { text: 'Penguen', correct: true},
        { text: 'Aslan', correct: false}
    ]
  },
  {
    question: 'Hangisi kuvvet birimidir?',
    answers: [
        { text: 'Pascal', correct: false},
        { text: 'Joule', correct: false},
        { text: 'Newton', correct: true},
        { text: 'Lumen', correct: false}
    ]
  },
  {
    question: 'Osmanl?????da Lale devri hangi padi??ah d??neminde ya??am????t??r?',
    answers:[
        { text: '3.Ahmet', correct: true},
        { text: '4.Murat', correct: false},
        { text: '3.Selim', correct: false},
        { text: 'Kanuni Sultan S??leyman', correct: false}
    ]
  },
  {
    question: 'Hangisi Kurtulu?? Sava???? s??ras??nda ger??ekle??mi??tir?',
    answers: [
        { text: '??n??n?? Zaferi', correct: true},
        { text: "Kut'ul Amare Zaferi", correct: false},
        { text: '??anakkale Zaferi', correct: false},
        { text: 'Sakarya Meydan Muharabesi', correct: false}
    ]
  },
  {
    question: "Fas'??n ba??kenti hangi ??ehirdir?",
    answers: [
        { text: 'Kazablanka', correct: false},
        { text: 'Rabat', correct: true},
        { text: 'Kahire', correct: false},
        { text: 'Kudus', correct: false}
    ]
  },
  {
    question: '??stiklal Mar???? hangi y??l yaz??lm????t??r?',
    answers: [
        { text: '1919', correct: false},
        { text: '1920', correct: false},
        { text: '1921', correct: true},
        { text: '1922', correct: false}
    ]
  },
  {
    question: '1 metre ka?? milimetredir?',
    answers: [
        { text: '100', correct: false},
        { text: '1.000', correct: true},
        { text: '10.000', correct: false},
        { text: '100.000', correct: false}
    ]
  },
  {
    question: 'Aspirinin Hammaddesi Nedir?',
    answers: [
        { text: 'S??????t', correct: true},
        { text: 'k??knar', correct: false},
        { text: 'Kavak', correct: false},
        { text: 'Me??e', correct: false}
    ]
  },
]