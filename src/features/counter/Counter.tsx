import type { FC } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { decrement, increment, incrementAsync } from './counterSlice'

export const Counter: FC = () => {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button
                    aria-label="Increment async value"
                    onClick={() => dispatch(incrementAsync())}
                >
                    Increment async
                </button>
            </div>
        </div>
    )
}