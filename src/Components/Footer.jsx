import React, { useEffect } from 'react'
import footer_logo from '../assets/logo.png'
import AOS from 'aos';


function Footer() {
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

      <div className='footer text-light text-center'>
        <h5>CAN'T WAIT TO GET INVOLVED, <br /> CONNECT WITH US NOW!</h5>

        <img className='footer-img mb-2' src={footer_logo} alt="" data-aos="zoom-in" />
        <p>© 2024 TRAVELLO IS PROUDLY POWERED BY THEMEZAA.</p>
        <p>Email-ID : travello.89@gmail.com</p>

      </div>


    </>
  )
}

export default Footer