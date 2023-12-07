import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import NavBar from '../components/NavBar';

function Main({name, resetName, letter}) {
  const [ifPlayed, setIfPlayed] = useState(false)

  const completePlay = ()=>{
    setIfPlayed(true)
  }


  

  return (
     <Router>
      <div className='flex flex-col h-screen'>
        {/* Navbar */}
        <NavBar resetName={resetName} name={name} />
        {/* Divider */}
        {/* Content */}
        <div className='flex-1 flex flex-col'>
          {/* Switch for routing */}
          <div className='flex-1 '>
            <Switch>
              <Route exact path="/">
                <Home name={name} letter={letter} completePlay={completePlay} ifPlayed={ifPlayed}/>
              </Route>
              <Route path="/contact">
                <Contact name={name} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default Main