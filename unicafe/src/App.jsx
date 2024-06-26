//Version 1.9
import { useState } from 'react'

const Statistics = (props) => {  
  return (
    <>
      {props.text} {props.stats} {props.symbol}
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

  const parameters = [
    {
      text: 'good',
      stats: good,
      symbol: undefined
    },
    {
      text: 'neutral',
      stats: neutral,
      symbol: undefined
    },
    {
      text: 'bad',
      stats: bad,
      symbol: undefined
    },
    {
      text: 'all',
      stats: total,
      symbol: undefined
    },
    {
      text: 'average',
      stats: avg,
      symbol: undefined
    },
    {
      text: 'positive',
      stats: positive,
      symbol: '%'
    },
    {
      text: undefined,
      stats: undefined,
      symbol: undefined
    }
  ]
  
  if ( good==0 && neutral==0 && bad==0) {
    parameters[0].text=undefined
    parameters[0].stats=undefined
    parameters[1].text=undefined
    parameters[1].stats=undefined
    parameters[2].text=undefined
    parameters[2].stats=undefined
    parameters[3].text=undefined
    parameters[3].stats=undefined
    parameters[4].text=undefined
    parameters[4].stats=undefined
    parameters[5].text=undefined
    parameters[5].stats=undefined
    parameters[5].symbol=undefined
    parameters[6].text='No feedback given'
    parameters[6].stats=undefined
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick = {() => setGood(good+1)}>good</button>
      <button onClick = {() => setNeutral(neutral+1)}>neutral</button>
      <button onClick={() => setBad(bad+1)}>bad</button>

      <h1>statistics</h1>
      <Statistics text={parameters[0].text} stats={parameters[0].stats}/>
      <Statistics text={parameters[1].text} stats={parameters[1].stats}/>
      <Statistics text={parameters[2].text} stats={parameters[2].stats}/>
      <Statistics text={parameters[3].text} stats={parameters[3].stats}/>
      <Statistics text={parameters[4].text} stats={parameters[4].stats}/>
      <Statistics text={parameters[5].text} stats={parameters[5].stats} symbol={parameters[5].symbol}/>
      <Statistics text={parameters[6].text} stats={parameters[6].stats}/>
    </div>
  )
}

export default App
