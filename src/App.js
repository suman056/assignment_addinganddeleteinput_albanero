import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import {uuid4 as v4} from "uuid"
import { v4 as uuidv4 } from 'uuid'

function App() {
 
  const [value, setValue] = useState("");
  const [arr, setArr] = useState([[]]);
   const [object,setObject]=useState([[[],[]]])
   const [jsonFile,setJsonFile]=useState([])
   const [newobj,setNewObj]=useState([])

   const onChangeValue=(e,index)=>{
     let value=e.target.value
     if(value.length>0){
      document.getElementById(["input"+index+"first"]).style.border =""
     }
     let objectNew=object
     objectNew[index][0]=value
     setObject([...objectNew])

   }
   const onChangeNumber=(e,index)=>{
    
     let value=e.target.value
     if(value.length>0){
      document.getElementById(["input"+index+"second"]).style.border =""
     }
     let objectNew=object
     objectNew[index][1]=value
     setObject([...objectNew])
   }

  const addCount = (index) => {
    console.log(index)
    let newarr = arr;
    newarr.push([]);
  
    setArr([...newarr]);
    let newKeyValue=object

    newKeyValue.push([[],[]])
    for (let i=newKeyValue.length-1;i>index+1;i--){
         newKeyValue[i]=newKeyValue[i-1] 
    }
    newKeyValue[index+1]=[[],[]]

    setObject([...newKeyValue])


  };


 const  deleteOne=(index)=>{
  console.log(index)
  let newarr = arr;
  console.log(newarr)
  newarr.splice(index,1)
  console.log(newarr)
  
  setArr([...newarr])

  let newOBJ=object
  newOBJ.splice(index,1)
  setObject([...newOBJ])
 }



  const changeToJSON=()=>{
    let newObject=[]
    let afterUpdate=[]
    object.forEach((value,index)=>{
      //  console.log(document.input_div.)
      if(value[0].length>0){
      newObject.push([value[0],value[1]])
      afterUpdate.push([])
      afterUpdate[afterUpdate.length-1].push(value[0])
      afterUpdate[afterUpdate.length-1].push([])
      let value2=1
      let value1=Number(value[1])
      while(value1>=value2){
        afterUpdate[afterUpdate.length-1][1] .push(value2)
        value2++
      }
      }
      else{
        
        document.getElementById(["input"+index+"first"]).style.border ="2px solid #cc3333"
        document.getElementById(["input"+index+"second"]).style.border ="2px solid #cc3333"
      }
      
    })
    
   
    
    setJsonFile([...afterUpdate])
    console.log(afterUpdate)

  }
  return (
    <div className="App">
      <div className="two_div">
        <div className="one_div">
        <br/><br/>
           {jsonFile.map((value)=><div><div className="bordervalue"><h2>{value[0]}</h2></div><div className="div_value">{value[1].map((data)=><div className="div_space">{data}</div>)}</div></div>)}
        </div>
        <div className="two_value" name="input_div">
          <div className="input_div">
        <br/><br/>
        
      {arr.map((value,index) =>(
      
        <div  key={index} >
          <input type="text"  value={object[index][0]}onChange={(e)=>onChangeValue(e,index)} className="input_field" id={"input"+index+"first"} ></input>
          <input type="number" value={object[index][1]}onChange={(e)=>onChangeNumber(e,index)} className="input_field"  id={"input"+index+"second"}></input>
          <button onClick={() => addCount(index)}>add</button>
          <button onClick={()=>deleteOne(index)}>delete</button>
        </div>
        
      ))}
      
      </div>

         <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      <button  onClick={()=>changeToJSON()} > generate</button>
      </div>
      </div>
    </div>
  );

}

export default App;
