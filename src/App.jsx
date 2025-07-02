import { useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import Map from "./components/Map";

const API_KEY = import.meta.env.VITE_IPTRACKER_API_KEY;

function App() {
  const [searchIp, setSearchIp] = useState("");
  const [newIp, setNewIp] = useState("");
  // const apiUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${newIp}`;
  const apiUrl = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${API_KEY}&ipAddress=${newIp}`;
  const { data, loading, error } = useFetch(apiUrl);
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewIp(searchIp);
    setSearchIp("");
  };
  //  const value = data?.ip[0];
  if (error) {
    return (
      <h2 className="text-2xl font-semibold text-center justify-center whitespace-pre-line">
        {error.message.includes("Invalid")
          ? "Invalid IP Address. Please enter a valid IP address."
          : error.message}
      </h2>
    );
  }

  if (loading || !data)
    return <h2 className="text-5xl animate-pulse">loading...</h2>;
  const lat = data?.location?.lat;
  const lng = data?.location?.lng;
  console.log({ searchIp });

  return (
    <div>
      <div className="relative">
    
      <div className="bg-[url(./assets/pattern-bg-desktop.png)] py-8 px-4 border">
        <h1 className="text-3xl font-semibold text-center mb-6 text-white">
          IP Address Tracker
        </h1>
        <form
          className="flex justify-center items-center mb-12 flex-wrap"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full sm:w-1/2 px-4 py-2 bg-white text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400  shadow-sm"
            type="text"
            value={searchIp}
            placeholder="Search IP Address or domain"
            onChange={(e) => setSearchIp(e.target.value)}
          />
          <button
            type="submit"
            className="rounded bg-black px-4 py-1"
          >
            <img src="/icon-arrow.svg" alt="search" className="w-8 h-8"/>
          </button>
        </form>
      </div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[90%] max-w-5xl bg-white rounded-lg shadow-xl p-6 flex flex-wrap justify-between text-gray-800">
            
            <p><span className="font-medium text-gray-900">IP Address: <br/></span> {data.ip}</p>
            <p ><span className="font-medium text-gray-900">Location: <br/></span>{data.location?.city},{data.location?.region},<br/>{data.location?.postalcode}</p>
            <p><span className="font-medium text-gray-900">TimeZone: <br/></span>UTC{data.location?.timezone}</p>
            <p><span className="font-medium text-gray-900">ISP: <br/></span>{data?.isp}</p>
            
         </div>
      </div>
      <div className="w-full relative z-0">
        <Map lat={lat} lng={lng}></Map>
      </div>
      </div>
  );
}

export default App;
