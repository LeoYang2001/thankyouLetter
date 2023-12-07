import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { db } from '../firebase';
import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import { generalMessage } from '../contant';
const Welcome = ({ onNameSubmit }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const _generalMessage = generalMessage


  const handleSubmit = (event) => {
    event.preventDefault();
    if(!firstName || !lastName) return alert('please type full name')

    const fullName = lastName.trim().toLocaleLowerCase() +","+ firstName.trim().toLocaleLowerCase()
    fetchLetter(fullName)
    
  };


  const fetchLetter = async (name)=>{
    console.log('fetching letter for ',name);
    
    try {
      const lettersCollection = collection(db, 'letters');
  
      // Create a query to fetch the document with the specified name
      const q = query(lettersCollection, where('for', '==', name));
  
      // Execute the query
      const querySnapshot = await getDocs(q);
  
      // Check if any documents were found
      if (querySnapshot.size > 0) {
        // Assuming there's only one document for a given name
        const letterDocument = querySnapshot.docs[0].data();
        console.log('Letter:', letterDocument);
        onNameSubmit(firstName.trim().toLocaleLowerCase(), lastName.trim().toLocaleLowerCase(),letterDocument.message);
        return letterDocument;
      } else {
        console.log('No letter found for the given name.');
        onNameSubmit(firstName.trim().toLocaleLowerCase(), lastName.trim().toLocaleLowerCase(),_generalMessage);
        return null;
      }
    } catch (error) {
      console.error('Error fetching letter:', error.message);
      return null;
    }
  }

  return (
    <div style={{backgroundColor:'#FBF3EC'}} className="welcome-container  relative">
      <div className=' absolute'>
        <img src='welcomeBg.gif' />
      </div>
      <div className='blurMask absolute border w-full h-full'>
      </div>
      <div className='welcome-fade-in rounded-lg'>
      <form onSubmit={handleSubmit} 
      className='  rounded-lg flex flex-col  items-center px-4 py-10 '>
        <span className=' text-2xl font-bold'>
            Input Your Name
        </span>
        <label>
          <input
          style={{
            outline:'none',
            backgroundColor:'transparent'
          }}
          placeholder='First name' className='border-2 rounded-md border-black bg-transparent text-center py-1 mt-6 mb-4' type="text" value={firstName} onChange={(e)=> {setFirstName(e.target.value)}} />
        </label>
        <label>
          <input
          style={{
            outline:'none',
            backgroundColor:'transparent'
          }}
          placeholder='Last name' className='border-2 rounded-md border-black bg-transparent text-center py-1  mb-6' type="text" value={lastName} onChange={(e)=> {setLastName(e.target.value)}} />
        </label>
        <button
        className='mt-10'
        type="submit">Enter</button>
        {/* <CircularProgress /> */}

      </form>
      </div>
    </div>
  );
};

export default Welcome;
