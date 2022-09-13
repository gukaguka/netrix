import React from 'react';




function App() { 
 
  
  
async function fetching(){
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
 const send = true;
 if(send == true){
  fetching();
 }


}

export default App;

