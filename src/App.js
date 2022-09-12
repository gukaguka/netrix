import React from 'react';





const App =() => {





  
fetch('https://netwrix-test.herokuapp.com', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    parameter: 'hi',
    
  })
});


}

export default App;

