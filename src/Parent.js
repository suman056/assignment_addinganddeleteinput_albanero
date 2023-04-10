import React from 'react'
import Child from './Child'
function Parent() {

  const  valueget=(value)=>{
    console.log(value)
  }
  return (
    <div>Parent
        <Child  passTheValue={valueget}  />
    </div>
  )
}

export default Parent