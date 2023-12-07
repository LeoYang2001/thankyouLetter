import React, { useState } from 'react'
import {app, db} from '../firebase'
import { addDoc, collection } from 'firebase/firestore';

function Contact({name}) {

  const [response, setResponse] = useState('')
  const [ifSending, setIfSending] = useState(false)

  const submitResponse = async () => {
      const prompt = window.confirm('Do you want to send the response to Leo?')
      if(!prompt) return
      try {
        const responsesCollection = collection(db, 'responses');
        // Use addDoc to add a new document to the collection
        setIfSending(true)
        await addDoc(responsesCollection, {
          name,
          response,
        });
    
        setResponse('');
        setIfSending(false)
        alert('message sent successfully')

      } catch (error) {
        console.log(error);
        
      }
  }

  return (
    <div  className='flex-1 h-full w-full flex flex-row'>
    <div style={{backgroundColor:'#F4F0E4', width: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className=' h-full'>
      <img src='/letter.jpg' alt='Letter Image' style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </div>
    <div style={{ overflowY: 'scroll',background: 'linear-gradient(to right, #F4F0E4, white)' }} className='flex-1 relative h-full p-20 custom-scrollbar'>
      <div className='mb-10'>
        <span className='text-3xl font-extrabold'>
          Love to hear from you 👋
        </span>
      </div>
      <textarea
      value={response}
        onChange={(e)=>{setResponse(e.target.value)}}
        style={{ fontWeight: 600, fontFamily: 'inherit', fontSize: '1.15rem' , height:'50%'}}
        className='text-lg text-gray-500 border p-2 w-full'
        placeholder={'Type your response here...'}
      />
{
          response && (
            <>
              {
                ifSending ? (
                  <button 
                  disabled
                  className=' absolute bottom-20 right-20 fade-in-animation'>sending...</button>
                ):(
                  <button 
              onClick={submitResponse}
            className=' absolute bottom-20 right-20 fade-in-animation'>send</button>
                )
              }
            </>
          )
        }

          </div>
       
  </div>
  )
}

export default Contact