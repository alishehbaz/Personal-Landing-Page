import { useEffect } from 'react';
import baffle from 'baffle';



let text = "Hello Mom";


// b.start();
// b.stop();
// b.reveal(1000);

// b.start()
//     .set({ speed: 100 })
//     .text(text => 'Hi dad!')
//     .reveal(1000);


function activateLasers(){



console.log("actiavte lasters called");
console.log("baffle");
let b = baffle('.heading', {
  characters: '██▒ ▒█▒░█ <█<░▒ ▓/> █▒▓░█ /█░▒ ▓▒█ >▒<░ ██/░',
  speed: 75
});
b.start()
    .set({ speed: 75 })
    .text(text => 'Really long long lojnmg long string')
    .reveal(5000);

}


function Heading(){

return (

<div className="heading">


</div>

);


}



function App() {

  let count= 0;
  // useEffect(() => {
  //   activateLasers();
  // });
  
  return (
    
    <div className="App">
    <Heading/>
      <button onClick={activateLasers}>
  Activate Lasers
</button>
    </div>
  );
}

export default App;
