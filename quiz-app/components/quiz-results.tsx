import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Award, Star } from "lucide-react"
import { motion } from "framer-motion"
import type { GameStats } from "@/lib/types"

interface QuizResultsProps {
  score: number
  totalQuestions: number
  gameStats: GameStats
  onRestart: () => void
}

export function QuizResults({ score, totalQuestions, gameStats, onRestart }: QuizResultsProps) {
  const percentage = (score / totalQuestions) * 100

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Quiz Complete!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-2">
            <Trophy className="w-16 h-16 mx-auto text-yellow-500" />
            <h2 className="text-2xl font-bold">
              Your Score: {score}/{totalQuestions}
            </h2>
            <p className="text-xl text-muted-foreground">{percentage}% Correct</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 border rounded-lg text-center">
              <Star className="w-8 h-8 mx-auto mb-2 text-blue-500" />
              <h3 className="font-semibold">Total Quizzes</h3>
              <p className="text-2xl">{gameStats.totalQuizzes}</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <Trophy className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
              <h3 className="font-semibold">Highest Score</h3>
              <p className="text-2xl">{gameStats.highestScore}</p>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <Award className="w-8 h-8 mx-auto mb-2 text-purple-500" />
              <h3 className="font-semibold">Badges</h3>
              <p className="text-2xl">{gameStats.badges.length}</p>
            </div>
          </div>

          {gameStats.badges.length > 0 && (
            <div className="space-y-2">
              <h3 className="font-semibold">Badges Earned:</h3>
              <div className="flex flex-wrap gap-2">
                {gameStats.badges.map((badge, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          )}

          <Button onClick={onRestart} className="w-full">
            Start New Quiz
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

