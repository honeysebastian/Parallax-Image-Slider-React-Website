import React, { useState, useEffect } from 'react';
import img1 from '../assets/mountain1.png';
import img2 from '../assets/mountain2.png';
import text from '../assets/text.png';

function Home() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffset(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        console.log(offset);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div className="App">
                <div className="zoom">
                    <img src={img1} alt="" id="img1" style={{ width: `${100 + offset * 0.3}%` }} />
                    <img src={img2} alt="" id="img2" style={{ width: `${100 + offset * 0.3}%` }} />
                    <img src={text} alt="" id="text" style={{ top: `-${10 + offset * 0.3 + '%'}` }} />
                </div>
            </div>
        </>
    )
}

export default Home