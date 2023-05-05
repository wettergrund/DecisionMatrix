import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './Task'

function App() {
  const [count, setCount] = useState(0)


  const json ={
    "Items": [
      {"task":"Task1", "point":3, "weight":5},
      {"task":"Task2", "point":4, "weight":4}
    ]

  }

  console.log(json);

  return (
    <>
        {
          json.Items.map((task, index) => (

            <Task title={task.task} point={task.point} weight={task.weight}></Task>

          ))

        }
    </>
  )
}

export default App
