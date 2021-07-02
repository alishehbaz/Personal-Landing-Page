import React from 'react';
import Particles from "react-particles-js";
import ParticleConfig from "./config/particle-config";
import './particles.css';

export default function ParticleBackground(){

return (

<Particles className="particles" params={ParticleConfig}>

</Particles>

);



}