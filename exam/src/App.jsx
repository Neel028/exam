import './App.css';
import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Stack } from '@chakra-ui/react'

function App() {
  let [data, setData] = useState([]);
  let [number, setNumber] = useState(1);
  function f1() {
    setNumber(number + 1)
    console.log(number)
  }
  function f2() {
    if (number == 1) {

      setNumber(1)
    }
    else {

      setNumber(number - 1)
    }
  }
  let get = async () => {
    const req = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${number}`);
    var data = await req.json();
    setData(data.data);
    console.log(data.data)
  }
  useEffect(() => {
    get();
  },[number]);

  return (
    <div>
      <div className='d_flex'>
        {
          data.map((e,i) => {
            return <div key={i}>

              <div>
                <img src={e.image} alt="" />
                <div>
                  <h1> id : {e.id}</h1>
                  <h2> Name : {e.name}</h2>
                  <h3> Votes : {e.number_of_votes}</h3>
                  <h4> Price : {e.price_starts_from}</h4>
                  <h5> Rat : {e.rating}</h5>
                  <h6> Type : {e.type}</h6>
                </div>
              </div>

            </div>
          })
        }

      </div>
      <center>
      <Stack spacing={4} direction='row' align='center'>
        <Button size='xs' onClick={f2}>Pre</Button>
        <Button size='sm' onClick={f1}>Next</Button>
        
      </Stack>
      </center>
    </div>


  );
}

export default App;
