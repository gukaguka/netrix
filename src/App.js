import React from 'react';





const App =() => {





  
fetch('https://netwrix-test.herokuapp.com', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    'par': 'Distributor',
    
  })
}).then(response => response.json());


}

export default App;

