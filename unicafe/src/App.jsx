//Version 1.11
import { useState } from 'react'

const Statistics = (props) => {
  console.log('Dentro de Statistics')
  console.log(props)
  return (
    <>
      <StatisticLine text={props.params[0].text} value={props.params[0].stats}/>
      <StatisticLine text={props.params[1].text} value={props.params[1].stats}/>
      <StatisticLine text={props.params[2].text} value={props.params[2].stats}/>
      <StatisticLine text={props.params[3].text} value={props.params[3].stats}/>
      <StatisticLine text={props.params[4].text} value={props.params[4].stats}/>
      <StatisticLine text={props.params[5].text} value={props.params[5].stats} symbol={props.params[5].symbol}/>
      <StatisticLine text={props.params[6].text} value={props.params[6].stats}/>
    </> 
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>
        {props.text}
      </td>
      <td>
        {props.value} {props.symbol}
      </td>
    </tr>
  )

}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
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
      <Button onClick={() => setGood(good+1)} text='good'/>
      <Button onClick={() => setNeutral(neutral+1)} text='neutral'/>
      <Button onClick={() => setBad(bad+1)} text='bad'/>

      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistics params={parameters}/>
        </tbody>
      </table>

    </div>
  )
}

export default App
