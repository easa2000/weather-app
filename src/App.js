import React from 'react'
import Axios from 'axios'
import { useState }  from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Container ,Card, Col, Button} from 'react-bootstrap';   
import logo from './logo.png'; 

const KEY ="4e8d9dba8f3af5e6af3c98d548a0cbcd";


export const App = () => {

  
const [city,setCity] = useState("");
const [data,setData] = useState();

  const fetchData = async () => {
    try{
      const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`);
      setData(response.data);
    }catch(err){
      alert('Error in API call');
    }
  }
  return (
    <div className='App'>
      <img src={logo} width="170" height="150" />

      <h1 className='title'>Weather app</h1>

      <div className='input-container'>
        <input
        type='text'
        className='input'
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder='Enter the City Name'
        />
        <button className="button" onClick={fetchData}>Fetch</button>
        
      </div>

      <div>
        {data &&(
          // <div className='container'>
            
            
          //   {data.main.temp}C  
          // </div>
          <center>
          <Container md={12} style={{margin:"0px", maxWidth: "25%", maxHeight: "85%", height: "85%"}}>

              <Card style={{height: "100px",width: "80%" , border: "1px solid", marginTop: "15px", padding: "25px", fontSize: "20px", fontWeight: "Bold"}}>
                <Card.Text>
                  {data.main.temp}°C
                </Card.Text>

              </Card>
          </Container>
          </center>
        )}
      </div>

      
    </div>
  )
}

export default App
