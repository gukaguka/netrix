import React from 'react';





const App =() => { 

async function fetchQuery(){

var formData = new FormData();
formData.append('x', 'Distributor');
  
await fetch('https://netwrix-test.herokuapp.com', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: formData
});

}

fetchQuery();



}

export default App;

