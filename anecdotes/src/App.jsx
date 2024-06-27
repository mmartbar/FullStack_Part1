//Exercise 1.13
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
  const points = Array(anecdotes.length - 1)
  points.fill(0, 0)
  const [selected, setSelected] = useState({
    anecdote: 0, 
    votes: points
  })
  
  console.log ('anecdote', selected.anecdote)
  console.log ('votes', selected.votes)

  const doRandom = () => {
    const min = 0
    const max = anecdotes.length - 1
    const newAnecdote = {
      anecdote: (Math.floor(Math.random() * (max-min) + min)),
      votes: selected.votes
    }
    return (
      setSelected (newAnecdote)
    )
  }

  const doVote = () => {
    const pointsCopy = selected.votes
    pointsCopy[selected.anecdote] += 1
    
    const newVotes = {
      anecdote: selected.anecdote,
      votes: pointsCopy
    }

    return (
      setSelected (newVotes)
    )
  }

  return (
    <div>
      {anecdotes[selected.anecdote]}
      <div>
        <button onClick={doVote}>vote</button>
        <button onClick={doRandom}>next anecdote</button>
      </div>
    </div>
  )
}

export default App
0o9
