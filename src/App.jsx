import { useEffect, useState } from 'react'
import './App.css'
import { useParams } from "react-router-dom";
import useFetch from './hooks/useFetch';
import Map from './components/Map';

const API_KEY = import.meta.env.VITE_IPTRACKER_API_KEY;


function App() {

  const [searchIp, setSearchIp] = useState("")
  const [newIp, setNewIp] = useState("")
  const apiUrl= `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${newIp}`
  const { data, loading, error } = useFetch( apiUrl
    );
   const handleSubmit= (e)=> {
    e.preventDefault();
    setNewIp(searchIp)
    // setSearchIp("");
  }
 if (error) return <h2>Error</h2>;
   const value = data?.ip[0];

  if (loading || !value)
    return <h2 className="text-5xl animate-pulse">loading...</h2>;
 const lat = data.location.lat;
 const lng = data.location.lng;
 console.log({searchIp})

  return (
    <>
      <h1>IP Tracker</h1>
      <form onSubmit={handleSubmit}>
       <input
          className="border focus:ring-green-300 rounded w-1/2 px-3 py-1 mr-4"
          type="text"
          value={searchIp}
          placeholder="Search Address"
          onChange={(e) => setSearchIp(e.target.value)}         
        />
        <button type = "submit" className="rounded bg-green-300 font-semibold px-4 py-1 rounded hover:bg-green-600">Search</button>
    </form>
    <div>
        <h2>{data.location?.city}</h2>
        <p>{data.location?.region}</p>
        <p>{data.location?.time}</p>
       <p>{data.ip}</p>
    </div>
    <Map lat={lat} lng={lng}></Map>
    
    </>
  )
}

export default App
