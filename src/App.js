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
});


}

export default App;

