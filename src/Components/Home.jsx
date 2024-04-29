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
                <div className="content">
                    <h2>Simple parallax effect with react</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde itaque nesciunt fugit obcaecati? Aspernatur, odio deserunt! Nihil aliquam aperiam aspernatur, culpa explicabo laborum, odit, iste obcaecati reiciendis animi nostrum! Minus?
                        Quas facilis sit nisi enim sed dolor, similique est consectetur fuga totam deserunt vero corrupti molestias exercitationem iste deleniti eius accusamus. Tenetur est atque blanditiis sunt nobis qui minus id.
                        Veniam cum magni dicta quo ipsum repudiandae iste blanditiis delectus est quam velit perspiciatis dolores, debitis numquam natus, obcaecati expedita illum. Est harum illo voluptatem neque obcaecati iusto dolorum iure!
                        Sit harum consequatur excepturi voluptate porro aliquid vero, molestiae expedita ipsam nulla tenetur adipisci repellat maxime quisquam quos atque quidem maiores obcaecati, iure optio commodi quaerat, dolorem voluptas vitae! Sunt.
                        Iure ullam dolor animi itaque omnis, eos iusto inventore veniam eius voluptate ipsa dolore? Quod illum pariatur voluptatem, sed deserunt laborum optio sunt officiis at, officia soluta non modi voluptatum?
                        Aliquam voluptate non dolorem, iure modi cum repudiandae voluptates eligendi illum harum dignissimos voluptas hic mollitia animi obcaecati tempora doloribus accusantium! Ab, architecto hic delectus officia accusamus error nam atque!
                        Debitis rerum ad, ipsa molestias atque veritatis, optio dignissimos voluptate suscipit enim harum qui ratione mollitia et exercitationem dolores nam. Impedit tempora reiciendis architecto soluta suscipit sunt reprehenderit hic dolor.
                        Nemo vel neque, cupiditate enim totam fugiat cumque odit atque suscipit facilis nobis, eligendi possimus similique ipsa quas aperiam iste illum, ab asperiores ullam tempore inventore hic sint. Pariatur, saepe.</p>
                </div>
            </div>
        </>
    )
}

export default Home