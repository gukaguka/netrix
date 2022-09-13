import React from 'react';




async function App { 
 
  
  

   const data = "Distributor";
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          };
          const response = await fetch("/api", options);
          const json = await response.json();
          console.log(json);



}

export default App;

