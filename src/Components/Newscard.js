import React from 'react'
import './news.css'

function Newscard({news}) {
  let showdata = true;
if(news.urlToImage == null) {
  showdata = false;
  
}
  return (
    <div  style={{border:'2px solid grey',borderRadius:'10px',textAlign:'center',backgroundColor:'bisque'}}>
        <img  style={{width:'80%',height:'50%'}} src={showdata ? news.urlToImage : "https://via.placeholder.com/200"} alt="Error occured " />
        <h3> <b>{news.title}</b></h3>
        <h5>{news.description}</h5>
        <button  className = "btn-read" onClick={() => window.open(news.url)}>Readmore</button>
    </div>
  )
}

export default Newscard