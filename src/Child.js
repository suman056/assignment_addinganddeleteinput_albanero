import React from 'react'

function Child(props) {
const passValue=()=>{
    props.passTheValue(3)
}

  return (
    <div>Child
      <button onClick={()=>{passValue()}}> click</button>  
    </div>
  )
}

export default Child