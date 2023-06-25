import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import Card from './Card'
import axios from 'axios';

const Mainfile = () => {
  const [search, setSearch] = useState("");
  const [bookdata, setBookdata] = useState([]);
  const searchBook=(event)=>{
    if(event.key==="Enter"){
      //console.log("hello");
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCqGAHKgMWUgvpC8b76eVGp3KDmmygCEnU'+'&maxResults=40')
      .then(res=>setBookdata(res.data.items))
      .catch(err=>console.log(err))
    }
  }
  return (
    <>
    <div className="header">
        <div className="row1">
            <h1>A Room without Books is like<br></br> a Body without a Soul</h1>
        </div>
        <div className="row2">
            <h2>Search Books</h2>
            <div className="search">
                <input type='text' placeholder='Enter Book Name' 
                value={search} 
                onChange={e=>setSearch(e.target.value)}
                onKeyPress={searchBook}/>
                <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
            <img src='./images/child2.png' alt='library'/>
        </div>
    </div> 

    <div className="container">
      {
        <Card book={bookdata}/>
      }
    </div>
    </>
  )
}

export default Mainfile


      
      
