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
    question: ' Fatih Sultan Mehmet’in babası kimdir?',
    answers: [
      { text: '1.Mehmet', correct: false },
      { text: 'Yıldırım Beyazıt', correct: false },
      { text: '2.Murat', correct: true},
      { text: '1.Ahmet', correct: false}
    ]
  },
  {
    question: 'Hangisi tarihteki Türk devletlerinden biri değildir?',
    answers: [
      { text: 'Emevi Devleti', correct: true },
      { text: 'Avar Kağanlığı', correct: false },
      { text: 'Hun İparatorluğu', correct: false },
      { text: 'Selçuklu Devleti', correct: false }
    ]
  },
  {
    question: 'Kıbrıs Barış harekatı hangi tarihte gerçekleşmiştir?',
    answers: [
      { text: '1971', correct: false },
      { text: '1972', correct: false },
      { text: '1973', correct: false },
      { text: '1974', correct: true }
    ]
  },
  {
    question: 'Hangisi bir hücrede bulunan organeldir?',
    answers: [
      { text: 'DNA', correct: false },
      { text: 'Lizozom', correct: true },
      { text: 'RNA', correct: false },
      { text: 'Mitokondri', correct: false }
    ]
  },
  {
    question: 'Fransız İhtilali kaç yılında gerçekleşmiştir?',
    answers: [
        { text: '1769', correct: false},
        { text: '1779', correct: false},
        { text: '1789', correct: true},
        { text: '1799', correct: false}
    ]
  },
  {
    question: 'Hangi hayvan memeli değildir?',
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
    question: 'Osmanlı’da Lale devri hangi padişah döneminde yaşamıştır?',
    answers:[
        { text: '3.Ahmet', correct: true},
        { text: '4.Murat', correct: false},
        { text: '3.Selim', correct: false},
        { text: 'Kanuni Sultan Süleyman', correct: false}
    ]
  },
  {
    question: 'Hangisi Kurtuluş Savaşı sırasında gerçekleşmiştir?',
    answers: [
        { text: 'İnönü Zaferi', correct: true},
        { text: "Kut'ul Amare Zaferi", correct: false},
        { text: 'Çanakkale Zaferi', correct: false},
        { text: 'Sakarya Meydan Muharabesi', correct: false}
    ]
  },
  {
    question: "Fas'ın başkenti hangi şehirdir?",
    answers: [
        { text: 'Kazablanka', correct: false},
        { text: 'Rabat', correct: true},
        { text: 'Kahire', correct: false},
        { text: 'Kudus', correct: false}
    ]
  },
  {
    question: 'İstiklal Marşı hangi yıl yazılmıştır?',
    answers: [
        { text: '1919', correct: false},
        { text: '1920', correct: false},
        { text: '1921', correct: true},
        { text: '1922', correct: false}
    ]
  },
  {
    question: '1 metre kaç milimetredir?',
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
        { text: 'Söğüt', correct: true},
        { text: 'köknar', correct: false},
        { text: 'Kavak', correct: false},
        { text: 'Meşe', correct: false}
    ]
  },
]