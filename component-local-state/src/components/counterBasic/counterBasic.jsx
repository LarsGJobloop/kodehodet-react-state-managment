import { useState } from 'react'
import style from './counterBasic.module.css'

export function CounterBasic() {
  const [ count, setCount ] = useState(0)

  function reset() {
    // Calling the dispatch function with a concrete number
    setCount(0)
  }

  function increment() {
    // Using the previous state to derive the new state
    setCount((previousCount) => previousCount + 1)
  }

  function decrement() {
    // Adding more complext logic to decide the new state
    setCount((previousCount) => {
      if (previousCount <= 0) {
        return 0
      }

      return previousCount - 1
    })
  }

  return (
    <div className={style["container"]}>
      <div className={style["display"]}>
        <p>Count: {count}</p>
      </div>

      <div className={style["buttons"]}>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>CE</button>
      </div>
    </div>
  )
}
