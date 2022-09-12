import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';




function App(){

  useEffect(() => {

    async function fetchData(){

   await axios.post('https://netwrix-test.herokuapp.com/', {req: 'MSP Partner'})
    .then(function (response) {
       console.log(response);
      })
     .catch(function (error) {
       console.log(error);
      });


    }

    fetchData();

  }, []);

}

export default App;
