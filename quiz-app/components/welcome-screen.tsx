"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Brain } from "lucide-react"

interface WelcomeScreenProps {
  onStart: () => void
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const handleClick = () => {
    console.log("Start button clicked")
    onStart()
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl text-center flex items-center justify-center gap-2">
            <Brain className="w-8 h-8 text-primary" />
            Quiz Challenge
          </CardTitle>
          <CardDescription className="text-center text-lg">Test your knowledge and earn badges!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 text-center">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">How to Play</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Answer multiple-choice questions</li>
                <li>Score points for correct answers</li>
                <li>Earn badges for outstanding performance</li>
                <li>Track your progress and high scores</li>
              </ul>
            </div>
          </div>
          <Button onClick={handleClick} size="lg" className="w-full">
            Start Quiz
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

