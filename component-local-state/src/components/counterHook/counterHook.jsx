import { useCounter } from './useCounter'
import style from './counterHook.module.css'

export function CounterHook({initialCount = 0}) {
  const { count, reset, increment, decrement } = useCounter(initialCount)

  return (
    <div className={style["container"]}>
      <div className={style["display"]}>
        <output>Count: {count}</output>
      </div>

      <div className={style["buttons"]}>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>CE</button>
      </div>
    </div>
  )
}
