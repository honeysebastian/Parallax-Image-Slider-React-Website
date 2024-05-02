import React from 'react'
import about1 from '../assets/about1.gif'
import about2 from '../assets/about2.gif'
import about3 from '../assets/about3.gif'

function About() {
  return (
    <>
    <div className="about container-container">
       
        <div className="left-about">
        <h3>Heaven On Earth</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio temporibus possimus repellendus, enim dolores neque incidunt eius nihil omnis pariatur est voluptatum, illo libero saepe doloremque aut numquam et perspiciatis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis facere libero assumenda quidem adipisci eaque dignissimos suscipit vero explicabo quae minima aliquam odio, repudiandae commodi iste consequatur nesciunt voluptatibus quos.
            Quaerat consectetur iusto provident excepturi iste placeat natus mollitia ab, culpa consequuntur? Nemo nobis optio debitis, eius omnis assumenda veniam voluptatem id earum. Qui laudantium vitae ipsum assumenda iusto expedita.
            </p>

        </div>
        <div className="right-about">
            <div className="about-right-side">
                <img id='gif-1-about' src={about1} alt="" />
            </div>
            <div className="about-right-side">
                <img id='gif-2-about' src={about2} alt="" />
            </div>
            <div className="about-right-side">
                <img id='gif-3-about' src={about3} alt="" />
            </div>
        </div>
    </div>

    </>
  )
}

export default About