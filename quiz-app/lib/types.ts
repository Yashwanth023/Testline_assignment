export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: string
}

export interface QuizState {
  currentQuestionIndex: number
  score: number
  answers: string[]
  isComplete: boolean
}

export interface GameStats {
  totalQuizzes: number
  totalScore: number
  highestScore: number
  badges: string[]
}

