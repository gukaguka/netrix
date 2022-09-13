import React from 'react';





const App =() => { 


var formData = new FormData();
formData.append('x', 'Distributor');

  fetch('https://netwrix-test.herokuapp.com', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: formData
}).then(resp => {
        if (!resp.ok) {
            throw new Error("HTTP status " + resp.status);
        }
        return resp.json();
    });



}

export default App;

