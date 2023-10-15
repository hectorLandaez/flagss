import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState([]);
  const [inputValue, setInputValue] =useState([])
  const [buttonValue, setButtonValue] =useState('')


  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleFilter= (event)=>{
    event.preventDefault();
    let pfiltrados = data.filter((pais)=>pais.name.common.includes(inputValue))
    setData(pfiltrados)
  }

  const handleFilterRegion =(value)=>{
    setButtonValue(value)
    console.log(buttonValue)
  }
  return (
    <div>
      <form onSubmit={handleFilter}>
      <input type="text" 
      value={inputValue}
      onChange={(e)=>setInputValue(e.target.value)}
      />
      <button type='submit'>buscar</button>
      </form>

      <button>REGIONES</button>
        <ul className='lregiones'>
            <li><button onClick={()=>handleFilterRegion('oceania')}>oceania</button></li>
            <li><button onClick={()=>handleFilterRegion('americas')}>americas</button></li>
            <li><button onClick={()=>handleFilterRegion('africa')} >africa</button></li>
            <li><button onClick={()=>handleFilterRegion('europe')} >europe</button></li>
            <li><button onClick={()=>handleFilterRegion('asia')}>asia</button></li>
            <li><button onClick={()=>handleFilterRegion('antartic')} >antartic</button></li>
        </ul>
    
      <h2>countries:</h2>
      <ul>
        {data.map((countrie) => (
          <li>
            {countrie.name.common}
            {/* <img src={countrie.flags.svg} alt="" /> */}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App
