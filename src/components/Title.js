import React from 'react'
import "./../App.css"
const Title = ({name, title}) => {
  return (
    <div>
      <h1 className="title">{name} <strong className="orange">{title}</strong></h1>
    </div>
  )
}

export default Title
