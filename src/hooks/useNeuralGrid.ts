
import { useEffect } from "react"

export function useNeuralGrid({
  grid = 40,
  interval = 600,
}: {
  grid?: number
  interval?: number
}) {
  useEffect(() => {
    const overlay = document.querySelector(".grid-neural-overlay")
    if (!overlay) return

    const timer = setInterval(() => {
      const spark = document.createElement("div")
      spark.className = "neural-spark"

      const cols = Math.floor(window.innerWidth / grid)
      const rows = Math.floor(window.innerHeight / grid)

      spark.style.left = `${Math.floor(Math.random() * cols) * grid}px`
      spark.style.top = `${Math.floor(Math.random() * rows) * grid}px`

      overlay.appendChild(spark)
      setTimeout(() => spark.remove(), 2000)
    }, interval)

    return () => clearInterval(timer)
  }, [grid, interval])
}
