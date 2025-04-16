import React , { useState ,useEffect,useRef}  from 'react'
import Newscard from './Newscard';
import './news.css'
import {  FaAviato, FaGlobe, FaNewspaper, FaRegNewspaper, FaSearch } from "react-icons/fa";

function Newslist() {
    

    const [newslist ,setNewslist] = useState([]);
    const [query,setQuery] = useState('Modi');
    const inputref = useRef(null);
    const apikey = '5cc3b73718724e22b2dd51f0a6a860ed'
    // const apikey = 'e9450501356f45f5a0bf447acc6f78fd'
    // const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apikey}`
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=5cc3b73718724e22b2dd51f0a6a860ed`
    // const url = `https://api.worldnewsapi.com/search-news?api-key=${apikey}&text=${query}&language=en`

    
        async function fetchapi() {
            const response = await fetch(url);
            const jsondata = await response.json();
            console.log(jsondata.articles);
            setNewslist(jsondata.articles);
            
            
        }

    useEffect(()=> {
        fetchapi();

    },[query])


    function handleSubmit() {
    
            const inputcurr = inputref.current.value;
            setQuery(inputcurr);
            alert("Submitted, Wait  for Second to Fetch Dta");
    }
    function handle(event) {
        setQuery(event.target.value);
        
    }
    function handlesport(event) {
        setQuery(event.target.value);
        
    }


    
   
    
  return (
    <div style={{display :'grid' ,gridTemplateColumns:'auto',backgroundColor:'lightslategray'}}>
        <div style={{textAlign:'center',backgroundColor:'lightgrey',paddingTop:'20px',paddingBottom:'20px'}}>
        <h1><b>The GAlaxy Times <FaNewspaper/></b></h1>
        <h1><FaGlobe/>  <FaRegNewspaper/></h1>
        </div>
        
        <div style={{display :'flex',flexDirection:'row',margin:"30px"}}>
        <input type = "text" placeholder='Search'  ref={inputref} style={{width :'80%',height:'40px',textAlign:'center',fontSize:'1.5rem',color :'brown'}}></input>
        <button className='btn'  onClick={handleSubmit}  >Submit <FaSearch style={{textAlign:'center',fontSize:'1rem'}}/></button>

        </div>
        
        <nav style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:'10px'}}>
            <button className='btn-submit' value="India"  onClick={handle}> <b>India</b></button>
            <button  className='btn-submit'value="Business"   onClick={handle}> <b>Business</b></button>
            <button className='btn-submit'  value="Cricket"  onClick={handle}> <b>Sports</b></button>
            <button  className='btn-submit' value="Technology"  onClick={handle}> <b>Tech</b></button>
            <button  className='btn-submit' value="Politics"  onClick={handle}> <b>Politics</b></button>
            <button  className='btn-submit' value="Entertainment"  onClick={handle}> <b>Entertainment</b></button>

        </nav>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1.2fr)',gap:'40px',padding:'10px',margin:'10px'}}>
            {/* {
                newslist.map((news) => {
                    return <Newscard key={news.id} news = {news} />
                })      
            } */}
            {newslist && newslist.length > 0 ? (newslist.map((news) => (
             <Newscard key={news.urlToImage} news={news} />))) : (
              <h1 style={{textAlign:'center' ,paddingInline:'2rem'}}>No news available</h1>
                    )}
                    
            
        
    </div>

    </div>
    
  )
}

export default Newslist