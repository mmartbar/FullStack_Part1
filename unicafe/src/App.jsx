//Version 1.8
import { useState } from 'react'

const Statistics = (props) => {
  return (
    <>
      {props.text} {props.stats} {props.symbol}
      <br></br>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total=good+neutral+bad
  const avg=((good*1)+(neutral*0)+(bad*-1))/total
  const positive=(good*100)/total

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick = {() => setGood(good+1)}>good</button>
      <button onClick = {() => setNeutral(neutral+1)}>neutral</button>
      <button onClick={() => setBad(bad+1)}>bad</button>

      <h1>statistics</h1>
      <Statistics text='good' stats={good}/>
      <Statistics text='neutral' stats={neutral}/>
      <Statistics text='bad' stats={bad}/>
      <Statistics text='all' stats={total}/>
      <Statistics text='average' stats={avg}/>
      <Statistics text='positive' stats={positive} symbol='%'/>
    </div>
  )
}

export default App
