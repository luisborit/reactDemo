import React from 'react'
import Looper from './looper';
import './css/header.css'


const simpleDataArray = [
    {
      title:"title 1",
      id:12
    },
    {
      title:"title 2",
      id:13
    },
    {
      title:"title 3",
      id:14
    },
    {
      title:"title 4",
      id:15
    },
  ]

function Header(props){
    console.log(props)
    return(
        <>
            <section className="headerBackground">
                <h1>{props.title}</h1>
            </section>
            {
                simpleDataArray.map((dataArray)=><Looper {...dataArray} />) 
            }
        </>
    );
}

export default Header