import React, { useState } from 'react'
import Slot from './slot.js'

function Form(props){


  const [user,setUser] = useState({
    firstName : "",
    lastName : "",
    pNumber : "",
  })



  let name,value;
  const getUserData = (event)=>{

    name = event.target.name;
    value = event.target.value;

    setUser({...user , [name]: value})


  }

  const postData = async (evt)=>{
    evt.preventDefault();

    const {firstName,lastName,pNumber}= user;

    if(firstName && lastName && pNumber){

      const res = await fetch('https://slot-app-df64b-default-rtdb.firebaseio.com/bookedDetails.json' ,{
        method:"POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          firstName ,
          lastName ,
          pNumber ,
        }),
          }
          
        
      )
  
      if(res){
        setUser({
      firstName : "",
      lastName : "",
      pNumber : "",
        })
        alert(`slot booked at choosen time `)
      }
    }
    else{
      alert("please fill all the data")
    }

    
  }

     return(

        
        <div>
 <form id="user-data-form" method="POST" path='/'>
    <div>
      <label for="first-name">First Name:</label>
      <input type="text" name="firstName" id="first-name" value={user.firstName} onChange={getUserData}/>
    </div>
    <div>
      <label for="last-name">Last Name:</label>
      <input type="text" name="lastName" id="last-name" value={user.lastName} onChange={getUserData}/>
    </div>
    <div>
      <label for="phone-number">Phone Number:</label>
      <input type="tel" name="pNumber" id="phone-number" value={user.pNumber} onChange={getUserData}/>
    </div>
    <div>
      <label for="time-slot">Time:</label>
      <span id="display-time"></span>
    </div>
    <button onClick={postData}>Save</button>
    <button>Cancel</button>
  </form>
  </div>
        
       )
      
}

export default Form