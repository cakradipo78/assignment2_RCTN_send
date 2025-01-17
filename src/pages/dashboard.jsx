import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { data } from "react-router";
import { getDataUser } from "../store/action";
import TabelComponent from "../components/tablecomponet";


export default function Dashboard(){
const globalStateUser = useSelector(state =>state.allDataUser)
console.log(globalStateUser,"global data");

const dispatch = useDispatch()
const handleOnClick = () => {

    console.log("ter klik");   

    dispatch(getDataUser())

}



  return (        

  <>
            <h1>ini dahboar page</h1>
            <button onClick={handleOnClick}>import Data</button>
            <TabelComponent/>
  
  
  </>
    

  )


}