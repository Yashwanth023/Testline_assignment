"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Question } from "@/lib/types"
import { motion } from "framer-motion"

interface QuizCardProps {
  question: Question
  onAnswer: (answer: string) => void
  questionNumber: number
  totalQuestions: number
}

export function QuizCard({ question, onAnswer, questionNumber, totalQuestions }: QuizCardProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">
          Question {questionNumber} of {totalQuestions}
        </CardTitle>
        <CardDescription className="text-lg mt-2">{question.question}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4">
          {question.options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                variant="outline"
                className="w-full text-left justify-start h-auto py-4 px-6 text-lg"
                onClick={() => {
                  console.log("Answer selected:", option) // Debug log
                  onAnswer(option)
                }}
              >
                {option}
              </Button>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

