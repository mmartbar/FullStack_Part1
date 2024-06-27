//Exercise 1.12
import { useState } from 'react'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the firs 10 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code than a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debuggin is twice as hard as writing the code in the first place. Therefore, if you write the code cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  
  const random = () => {
    const min = 0
    const max = anecdotes.length - 1
    return (
      setSelected (Math.floor(Math.random() * (max-min) + min))
    )
  }

  return (
    <div>
      {anecdotes[selected]}
      <div>
        <button onClick={random}>next anecdote</button>
      </div>
    </div>
  )
}

export default App
