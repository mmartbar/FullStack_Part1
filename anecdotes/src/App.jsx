//Exercise 1.14
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
  console.log ('anecdote votes', selected.votes[selected.anecdote])

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

  console.log ('most votes', Math.max(...selected.votes))
  console.log ('most voted index', selected.votes.indexOf(Math.max(...selected.votes)))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected.anecdote]}
      <div>
        has {selected.votes[selected.anecdote]} votes
      </div>
      <div>
        <button onClick={doVote}>vote</button>
        <button onClick={doRandom}>next anecdote</button>
      </div>
      <h1>Anecdote with most votes</h1>
      {anecdotes[selected.votes.indexOf(Math.max(...selected.votes))]}
    </div>
  )
}

export default App
