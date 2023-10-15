import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Posts from API:</h2>
      <ul>
        {console.log(data)}
        {data.map((countrie) => (
          <li>
            {countrie.name.common}
            <img src={countrie.flags.svg} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App
