import type { Question } from "./types"
import { mockQuizData } from "./mock-data"

export async function fetchQuizData(): Promise<Question[]> {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return mock data
    return mockQuizData

    // When you have a working API endpoint, use this code instead:
    // const response = await fetch('YOUR_API_ENDPOINT');
    // if (!response.ok) {
    //   throw new Error('Failed to fetch quiz data');
    // }
    // return response.json();
  } catch (error) {
    console.error("Error fetching quiz data:", error)
    throw error
  }
}

