"use client"

import { useEffect } from "react"
import { useQuizStore } from "@/lib/store"
import { fetchQuizData } from "@/lib/api"
import { QuizCard } from "@/components/quiz-card"
import { QuizResults } from "@/components/quiz-results"
import { WelcomeScreen } from "@/components/welcome-screen"
import { Progress } from "@/components/ui/progress"

export default function QuizPage() {
  const { questions, quizState, gameStats, isStarted, setQuestions, answerQuestion, startQuiz, resetQuiz } =
    useQuizStore()

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const data = await fetchQuizData()
        setQuestions(data)
      } catch (error) {
        console.error("Failed to load questions:", error)
      }
    }
    loadQuestions()
  }, [setQuestions])

  const handleStart = () => {
    startQuiz()
  }

  const handleRestart = () => {
    resetQuiz()
  }

  const progress = (quizState.currentQuestionIndex / questions.length) * 100

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground">Loading quiz...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-background to-muted/50">
      {!isStarted ? (
        <WelcomeScreen onStart={handleStart} />
      ) : quizState.isComplete ? (
        <QuizResults
          score={quizState.score}
          totalQuestions={questions.length}
          gameStats={gameStats}
          onRestart={handleRestart}
        />
      ) : (
        <div className="w-full max-w-2xl space-y-4">
          <Progress value={progress} className="w-full" />
          <QuizCard
            question={questions[quizState.currentQuestionIndex]}
            onAnswer={answerQuestion}
            questionNumber={quizState.currentQuestionIndex + 1}
            totalQuestions={questions.length}
          />
        </div>
      )}
    </div>
  )
}

