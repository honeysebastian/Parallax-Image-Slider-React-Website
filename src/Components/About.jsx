import React,{ useEffect } from 'react'
import about1 from '../assets/travel.gif'
import about2 from '../assets/about2.gif'
import about3 from '../assets/about3.gif'
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        AOS.init({
          // Global settings:
          disable: false,
          startEvent: 'DOMContentLoaded',
          initClassName: 'aos-init',
          animatedClassName: 'aos-animate',
          useClassNames: false,
          disableMutationObserver: false,
          debounceDelay: 50,
          throttleDelay: 99,
    
          // Settings that can be overridden on a per-element basis, by `data-aos-*` attributes:
          offset: 100, // Adjust the offset (in pixels) to start the animation earlier or later.
          delay: 100, // Add delay (in milliseconds) before the animation starts.
          duration: 800, // Set the duration (in milliseconds) of the animation.
          easing: 'ease', // Specify the easing function for the animation.
          once: false,
          mirror: false,
          anchorPlacement: 'top-bottom',
        });
    
        // Clean up function
        return () => {
          AOS.refresh();
        };
      }, []);

  return (
    <>
    <h1 className="heading" data-aos="fade-down">About</h1>
    <div className="about container-container">
        <div className="left-about" data-aos="fade-right">
        <h3>Heaven On Earth</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio temporibus possimus repellendus, enim dolores neque incidunt eius nihil omnis pariatur est voluptatum, illo libero saepe doloremque aut numquam et perspiciatis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis facere libero assumenda quidem adipisci eaque dignissimos suscipit vero explicabo quae minima aliquam odio, repudiandae commodi iste consequatur nesciunt voluptatibus quos.
            Quaerat consectetur iusto provident excepturi iste placeat natus mollitia ab, culpa consequuntur? Nemo nobis optio debitis, eius omnis assumenda veniam voluptatem id earum. Qui laudantium vitae ipsum assumenda iusto expedita.
            </p>

        </div>
        <div className="right-about">
            <div className="about-right-side">
                <img id='gif-1-about' src={about1} alt="" data-aos="zoom-in" />
            </div>
            <div className="about-right-side">
                <img id='gif-2-about' src={about2} alt="" data-aos="zoom-in" />
            </div>
            <div className="about-right-side">
                <img id='gif-3-about' src={about3} alt="" data-aos="zoom-in" />
            </div>
        </div>
    </div>

    </>
  )
}

export default About