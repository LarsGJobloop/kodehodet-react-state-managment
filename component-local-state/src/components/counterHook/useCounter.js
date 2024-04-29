import { useState } from "react"

export function useCounter(initialCount = 0) {
  const [ count, setCount ] = useState(initialCount)

  function reset() {
    setCount(0)
  }

  function increment() {
    setCount((previousCount) => previousCount + 1)
  }

  function decrement() {
    setCount((previousCount) => {
      if (previousCount <= 0) {
        return 0
      }

      return previousCount - 1
    })
  }

  return {
    count,
    reset,
    increment,
    decrement
  }
}
