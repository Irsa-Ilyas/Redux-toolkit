import React, { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './features/counter/counterSlice'

const Appleo = () => {
  const [amount, setAmount] = useState(0)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  function handleIncrement() {
    dispatch(increment())
  }

  function handleDecrement() {
    dispatch(decrement())
  }

  function handleReset() {
    dispatch(reset())
  }

  function handleIncrementByAmount() {
    dispatch(incrementByAmount(Number(amount))) /
  }

  return (
    <div className="app-wrapper">
      <div className='container'>
        <h1>Increment Decrement Counter</h1>
        <h5>Using React and Redux</h5>

        <div className='quantity'>
          <button onClick={handleDecrement} className="control-btn">-</button>
          <p className="count-display">Count: {count}</p>
          <button onClick={handleIncrement} className="control-btn">+</button>
        </div>

        <button onClick={handleReset} className="reset-btn">Reset</button>

        <div className="custom-amount">
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter amount'
          />
          <button onClick={handleIncrementByAmount} className="inc-amount-btn">
            Increment by Amount
          </button>
        </div>
      </div>
    </div>
  )
}

export default Appleo
