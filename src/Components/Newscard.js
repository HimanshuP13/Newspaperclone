import React from 'react'
import './news.css'

function Newscard({news,darkMode}) {
  let showdata = true;
if(news.urlToImage == null) {
  showdata = false;
  
}
// Niche text to speak feature ka function h
 const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      // ye function bolta hai
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser doesn't support Text-to-Speech.");
    }
  };

  function stopvoice( ) {
    if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // 🛑 Stop the speech
  }
  }
  return (
    <div  style={{border:'2px solid grey',borderRadius:'10px',textAlign:'center',backgroundColor: darkMode ? '#2c2c2c' : 'bisque',color: darkMode ? '#f0f0f0' : '#000',
        paddingBottom: '10px'}}>
        <img  style={{width:'80%',height:'50%'}} src={showdata ? news.urlToImage : "https://via.placeholder.com/200"} alt="Error occured " />
        <h3> <b>{news.title}</b></h3>
        <h5>{news.description}</h5>
        <button  className = "btn-read" onClick={() => window.open(news.url)}>Readmore</button>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: '10px' }}>
          <button onClick={() => speak(news.title + ". " + news.description)}
        style={{
          backgroundColor: darkMode ? '#666' : '#007bff',
          color: '#fff',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '8px',
          margin: '10px',
          cursor: 'pointer'
        }} title="Listen to this news">🔊 Listen</button>
         <button onClick={stopvoice}  style={{backgroundColor: darkMode ? '#666' : '#ff7043',padding:'8px 16px',color : darkMode ? 'black' : 'white',border:'none',borderRadius: '8px',
          margin: '8px',
          cursor: 'pointer'}}>🛑 Stop
</button>

        </div>
        
    </div>
  )
}

export default Newscard