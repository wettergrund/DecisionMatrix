import React from 'react'

const Task = (props) => {

    const {title, point, weight} = props


  return (
    <>
    
    <div>{title}</div>
    <div>{point}</div>

    </>
  )
}

export default Task