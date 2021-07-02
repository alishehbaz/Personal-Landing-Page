import { useEffect } from 'react';
import baffle from 'baffle';
import ParticleBackground from './ParticleBackground';
import Glitch from './Glitch';



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

    let c = baffle('.glitch', {
      characters: '██▒ ▒█▒░█ <█<░▒ ▓/> █▒▓░█ /█░▒ ▓▒█ >▒<░ ██/░',
      speed: 75
    });
    c.start()
        .set({ speed: 75 })
        .text(text => 'Really long long lojnmg long string')
        .reveal(5000);


  }


  function blotterStuff () {


    var text = new window.Blotter.Text("Ali", {

      family : "serif",
      size : 220,
      fill : "#171717"
    });

    var material = new window.Blotter.ChannelSplitMaterial();
    material.uniforms.uOffset.value = 1;
    material.uniforms.uRotation.value = 45;
    material.uniforms.uApplyBlur.value = 1;
    material.uniforms.uAnimateNoise.value = 0.3;

    var blotter =  new window.Blotter(material, {
      texts : text
    })

    var scope =  blotter.forText(text);
    scope.appendTo(document.body);

    let id = setInterval(rotationChanger, 30);

    let x = 1;

    function rotationChanger(){

      if (x <  0.035){
        clearInterval(id);
      }
      else {
        x = x - 0.035
        material.uniforms.uOffset.value = x;

      }


    }


  }






function Heading(){


return (
<>

<div className="heading">


</div>

<div className="heading2">


</div>


</>

);


}



function App() {

  return (
    
    <div className="App">
    <ParticleBackground/>
    <Heading/>
    <Glitch/>
      <button onClick={activateLasers}>
  Activate Lasers
</button>
    </div>
  );
}

export default App;
