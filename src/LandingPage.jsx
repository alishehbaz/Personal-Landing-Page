import { useEffect } from 'react';
// import { Grid } from '@material-ui/core';
import baffle from 'baffle';
import ParticleBackground from './ParticleBackground';
import Glitch from './Glitch';
// import Menu from './Menu';

// b.start();
// b.stop();
// b.reveal(1000);

// b.start()
//     .set({ speed: 100 })
//     .text(text => 'Hi dad!')
//     .reveal(1000);


function glitchEffect(){



console.log("actiavte lasters called");
console.log("baffle");
let b = baffle('.heading', {
  characters: '██▒ ▒█▒░█ <█<░▒ ▓/> █▒▓░█ /█░▒ ▓▒█ >▒<░ ██/░123456789',
  speed: 75
});
b.start()
    .set({ speed: 75 })
    .text(text => 'Software Engineer. Soccer Fanatic. Somewhat creative.')
    .reveal(5000);

    let c = baffle('.glitch', {
      characters: '██▒ ▒█▒░█ <█<░▒ ▓/> █▒▓░█ /█░▒ ▓▒█ >▒<░ ██/░123456789',
      speed: 75
    });
    c.start()
        .set({ speed: 75 })
        .text(text => '< Hi, I am Ali ! />')
        .reveal(5000);


        let d = baffle('.home-button', {
          characters: '██▒ ▒█▒░█ <█<░▒ ▓/> █▒▓░█ /█░▒ ▓▒█ >▒<░ ██/░123456789',
          speed: 75
        });
        d.start()
            .set({ speed: 75 })
            .text(text => 'Liked that? do it again!')
            .reveal(5000);


  }


  // function blotterStuff () {


  //   var text = new window.Blotter.Text("Ali", {

  //     family : "serif",
  //     size : 220,
  //     fill : "#171717"
  //   });

  //   var material = new window.Blotter.ChannelSplitMaterial();
  //   material.uniforms.uOffset.value = 1;
  //   material.uniforms.uRotation.value = 45;
  //   material.uniforms.uApplyBlur.value = 1;
  //   material.uniforms.uAnimateNoise.value = 0.3;

  //   var blotter =  new window.Blotter(material, {
  //     texts : text
  //   })

  //   var scope =  blotter.forText(text);
  //   scope.appendTo(document.body);

  //   let id = setInterval(rotationChanger, 30);

  //   let x = 1;

  //   function rotationChanger(){

  //     if (x <  0.035){
  //       clearInterval(id);
  //     }
  //     else {
  //       x = x - 0.035
  //       material.uniforms.uOffset.value = x;

  //     }


  //   }


  // }






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



function LandingPage() {

  useEffect(() => {
    // setTimeout(activateLasers, 1500);
    glitchEffect();
  });

  return (
    

    
    <div className="App">
    
    <ParticleBackground/>
    <Glitch/>
    <Heading/>
<button className="home-button" onClick={glitchEffect}>
  Loading ...
</button>

    </div>

  );
}

export default LandingPage;
