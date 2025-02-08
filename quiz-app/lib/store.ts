import { create } from "zustand"
import type { Question, QuizState, GameStats } from "./types"

interface QuizStore {
  questions: Question[]
  quizState: QuizState
  gameStats: GameStats
  isStarted: boolean // Add this flag
  setQuestions: (questions: Question[]) => void
  answerQuestion: (answer: string) => void
  startQuiz: () => void
  resetQuiz: () => void
}

export const useQuizStore = create<QuizStore>((set) => ({
  questions: [],
  isStarted: false, // Add this initial state
  quizState: {
    currentQuestionIndex: 0,
    score: 0,
    answers: [],
    isComplete: false,
  },
  gameStats: {
    totalQuizzes: 0,
    totalScore: 0,
    highestScore: 0,
    badges: [],
  },
  setQuestions: (questions) => set({ questions }),
  startQuiz: () => {
    set((state) => ({
      ...state,
      isStarted: true,
      quizState: {
        currentQuestionIndex: 0,
        score: 0,
        answers: [],
        isComplete: false,
      },
    }))
  },
  answerQuestion: (answer) => {
    set((state) => {
      const currentQuestion = state.questions[state.quizState.currentQuestionIndex]
      const isCorrect = currentQuestion.correctAnswer === answer
      const newScore = state.quizState.score + (isCorrect ? 1 : 0)
      const newAnswers = [...state.quizState.answers, answer]
      const isComplete = newAnswers.length === state.questions.length

      let newGameStats = { ...state.gameStats }
      if (isComplete) {
        newGameStats = {
          totalQuizzes: state.gameStats.totalQuizzes + 1,
          totalScore: state.gameStats.totalScore + newScore,
          highestScore: Math.max(state.gameStats.highestScore, newScore),
          badges: [...state.gameStats.badges],
        }

        if (newScore === state.questions.length) {
          newGameStats.badges.push("Perfect Score! 🏆")
        } else if (newScore >= state.questions.length * 0.8) {
          newGameStats.badges.push("Quiz Master 🎯")
        }
      }

      return {
        ...state,
        quizState: {
          ...state.quizState,
          currentQuestionIndex: state.quizState.currentQuestionIndex + 1,
          score: newScore,
          answers: newAnswers,
          isComplete,
        },
        gameStats: newGameStats,
      }
    })
  },
  resetQuiz: () => {
    set((state) => ({
      ...state,
      isStarted: false,
      quizState: {
        currentQuestionIndex: 0,
        score: 0,
        answers: [],
        isComplete: false,
      },
    }))
  },
}))

