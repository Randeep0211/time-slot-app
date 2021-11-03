import React from "react";
import {Route} from "react-router-dom"
import './App.css'
import Form from './form.js'
import Slot from './slot'



function App(){



  return (
   
    <div>
     
     <Slot />

     <Route  path='/nine'>
       <Form />
     </Route>
    
     <Route path='/ten'>
       <Form />
     </Route>

     <Route path='/eleven'>
     <Form />
     </Route>

     <Route path='/twelve'>
     <Form />
     </Route>

     <Route path='/one'>
     <Form />
     </Route>

     <Route path='/two'>
     <Form />
     </Route>

     <Route path='/three'>
     <Form />
     </Route>

     <Route path='/four'>
     <Form />
     </Route>

     <Route path='/five'>
     <Form />
     </Route>
    </div>
   
  )

}


export default App




