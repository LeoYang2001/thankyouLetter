import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const Home = ({ifPlayed, completePlay, letter, name}) => {
  const history = useHistory();
  
  const letterText = letter

  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  // Ref for the scrollable container
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (ifPlayed) {
      setDisplayedText(letterText);
      return;
    }
  
    const intervalId = setInterval(() => {
      const nextChar = letterText.charAt(textIndex);
  
      // Handle newline characters
      if (nextChar === '\n') {
        setDisplayedText((prevText) => prevText + '\n'); // Use <br /> for newline in HTML
      } else {
        setDisplayedText((prevText) => prevText + nextChar);
      }
  
      setTextIndex((prevIndex) => prevIndex + 1);

      // Scroll to the bottom when new text is added
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
      }

    }, (Math.random() * (150 - 50) + 50) * 0.6);
  
    // Clear interval when the text is fully displayed
    if (textIndex >= letterText.length) {
      clearInterval(intervalId);
      completePlay();
    }
  
    // Clear interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [ifPlayed, letterText, textIndex, completePlay]);

  return (
    <div className='flex-1 h-full w-full flex flex-row'>
      <div style={{backgroundColor:'#F4F0E4', width: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className=' h-full'>
      <img src='/mainBg.jpg' alt='Letter Image' style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </div>
      <div  style={{ overflowY: 'hidden' , background: 'linear-gradient(to right, #F4F0E4, white)' }}
       className='flex-1 relative h-fullp-20 custom-scrollbar'>
        <div className='mb-10'>
          <span className='text-3xl font-extrabold'>Dear {name}</span>
        </div>
       <div
       ref={scrollContainerRef}
       style={{height:'60%', overflowY:'scroll'}} className='custom-scrollbar'>
       <p style={{ fontWeight: 600 }} className='text-lg text-gray-500'>
          {displayedText}
        </p>
       </div>
       <div className=' absolute bottom-20'>
          <span className='text-xl font-extrabold'>Warm regards, <br/> Leo Yang</span>
        </div>
        {
          ifPlayed && (
            <button 
              onClick={()=>{
                history.push('/contact')
              }}
            className=' absolute bottom-20 right-20 fade-in-animation'>
              Respond
            </button>
          )
        }
      </div>
    </div>
  );
};

export default Home;
