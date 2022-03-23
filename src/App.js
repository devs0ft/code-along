
import "./App.css";
import { useEffect, useState} from "react";
import writers from "./writers";
import { ProfileCard } from "./ProfileCard";

function App() {
  const [writers, setWriters] = useState([]);
  
  useEffect(function () {
      const getWriters = async () => {
        const response = await fetch("/writers.json");
        const data = await response.json();
        setWriters(data);
      };
      getWriters();

    }, []);



  return (
    <div>
      <h1>WRITER PROFILES</h1>
      <div className="container">
        {writers.map((writer) => (
        <ProfileCard writer={writer} />
        ))}
      </div>
    </div>
  );
}

export default App;
