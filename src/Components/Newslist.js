import React , { useState ,useEffect,useRef}  from 'react'
import Newscard from './Newscard';
import './news.css'
import './Spinner.css'
import {  FaAviato, FaGlobe, FaNewspaper, FaRegNewspaper, FaSearch } from "react-icons/fa";

function Newslist() {
    

    const [newslist ,setNewslist] = useState([]);
    const [darkMode,setDarkMode] = useState(false);

    const [isLoading,setLoading] = useState(false);
    const [query,setQuery] = useState('india');
    const inputref = useRef(null); 
    const apikey = process.env.REACT_APP_API_KEY;
    const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=relevancy&language=en&apiKey=${apikey}`  
    
        async function fetchapi() {

          try {
            const response = await fetch(url);
            const jsondata = await response.json();
            // console.log(jsondata.articles);
            if(jsondata.articles) {
               setNewslist(jsondata.articles);

            } else {
               setNewslist([]);
            }

          } catch (error) {
             console.error("Error fetching news:", error);
    setNewslist([]);

          }
              
        }

    useEffect(()=> {
        fetchapi();

    },[query])


    function handleSubmit() {
    
            const inputcurr = inputref.current.value;
            if(inputcurr === "") {
                alert("Please type something to search");
                return;
            } 
            //     setQuery(inputcurr);
            // alert("Submitted, Wait  for Second to Fetch Dta");

            
            setLoading(true);
             setQuery(inputcurr);
             setTimeout(() => {
        setLoading(false); // Hide after API done
    }, 2000); // Replace with actual fetch logic
            
            
    }

    function toggleDarkMode() {
  setDarkMode(prevMode => !prevMode);
}
    function handle(event) {
        setQuery(event.target.value);
        
    }
    


    // lightslategray pehle ka color
   
    
  return (
    <div style={{display :'grid' ,gridTemplateColumns:'auto',backgroundColor:darkMode ? '#333' : 'lightgrey',color: darkMode ? '#fff' : '#000',
    minHeight: '100vh'}}>
        {/* <div style={{textAlign:'center',backgroundColor:'lightgrey',paddingTop:'20px',paddingBottom:'20px'}}> */}
        {/* <h1><b>The GAlaxy Times <FaNewspaper/></b></h1> */}
        {/* <h1><FaGlobe/> <FaRegNewspaper/></h1> */}
        {/* </div> */}


        <div
  style={{
    textAlign: 'center',
    backgroundColor: darkMode ? '#333' : 'lightgrey',
    color: darkMode ? '#fff' : '#000',
    paddingTop: '20px',
    paddingBottom: '20px'
  }}
>
  <h1><b>The Galaxy Times <FaNewspaper /></b></h1>
  <h1><FaGlobe /> <FaRegNewspaper /></h1>

  <button
    onClick={toggleDarkMode}
    style={{
      marginTop: '10px',
      padding: '8px 16px',
      backgroundColor: darkMode ? '#fff' : '#111',
      color: darkMode ? '#000' : '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer'
    }}
  >
    {darkMode ? 'Light Mode' : 'Dark Mode'}
  </button>
</div>



        <nav style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:'10px'}}>
            <button className='btn-submit' value="india"  onClick={handle}> <b>India</b></button>
            <button  className='btn-submit'value="business finance india"   onClick={handle}> <b>Business</b></button>
            <button className='btn-submit'  value="sports cricket india"  onClick={handle}> <b>Sports</b></button>
            <button  className='btn-submit' value="technology gadgets india"  onClick={handle}> <b>Tech</b></button>
            <button  className='btn-submit' value="indian politics"  onClick={handle}> <b>Politics</b></button>
            <button  className='btn-submit' value=" bollywood entertainment"  onClick={handle}> <b>Entertainment</b></button>

        </nav>

        <div style={{
  display: 'flex',
  flexDirection: 'row',
  marginTop: "10px",
  justifyContent: "center",
  alignItems: "center",
  gap: "100px"
}}>
  {/* Search Bar */}
  <div style={{
    position: 'relative',
    width: "400px"
  }}>
    <FaSearch style={{
      position: 'absolute',
      top: '50%',
      left: '10px',
      transform: 'translateY(-50%)',
      fontSize: '1.5rem',
      color: '#999'
    }} />
    <input
      type="text"
      placeholder="Search"
      ref={inputref}
      style={{
        width: '100%',
        height: '45px',
        paddingLeft: '40px',
        paddingRight: '15px',
        borderRadius: '25px',
        border: '1px solid #ccc',
        fontSize: '1.2rem',
        color: 'brown',
        outline: 'none',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    />
  </div>

  {/* Button */}
  <button
    onClick={handleSubmit}
    style={{
      backgroundColor: '#ff7043',
      color: 'white',
      border: 'none',
      borderRadius: '25px',
      padding: '12px 20px',
      fontSize: '1rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}
  >
    Submit <FaSearch />
  </button>
</div>

{isLoading && (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '10px',
      marginTop: '20px',
      fontSize: '1.2rem',
      color: '#555',
    }}
  >
    {/* <div className="spinner"></div> */}
    <div className="rocket">🚀</div>

    <span>Fetching data... hang tight! </span>
  </div>
)}

        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1.2fr)',gap:'40px',padding:'10px',margin:'10px'}}>
            {/* {
                newslist.map((news) => {
                    return <Newscard key={news.id} news = {news} />
                })      
            } */}
            {newslist && newslist.length > 0 ? (newslist.map((news) => (
             <Newscard key={news.url} news={news} darkMode={darkMode} />))) : (
              <h1 style={{textAlign:'center' ,paddingInline:'2rem'}}>No news available</h1>
                    )}
                    
            
        
    </div>

    </div>
    
  )
}

export default Newslist