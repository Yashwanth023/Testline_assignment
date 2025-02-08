import type { Question } from "./types"

export const mockQuizData: Question[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "Which programming language is React built with?",
    options: ["Python", "JavaScript", "Java", "C++"],
    correctAnswer: "JavaScript",
  },
  {
    id: 3,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    id: 4,
    question: "Which of these is not a JavaScript framework?",
    options: ["React", "Angular", "Django", "Vue"],
    correctAnswer: "Django",
  },
  {
    id: 5,
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Saturn", "Jupiter", "Neptune"],
    correctAnswer: "Jupiter",
  },
]

