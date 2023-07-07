import React from 'react';
import vg from "../Assets/img4.png";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {


    return (
        <>
            <div className='home' id="home">
                <main>
                    <h1>Wasikurosaki</h1>
                    <p>Solution to all your problems</p>

                </main>
            </div>

            <div className='home2'>
                <img src={vg} alt="graphics"/>
                <div>
                    <p>
                        We are your one and only solution to the tech problems you face everyday.
                        we are a leading tech company supporting your every need. 
                    </p>
                </div>

        </div>

        <div className='home3' id="about">
            <div>
            <h1>Who we are?</h1>
            <p>bahbashdbiasudbiusab unsaiud ywagbdy agdsy gadgabsd ash duasbd
                asdaksjbd yahasbdjh baahdu asd auie basushad ja
                sd basubdkausbca,sj cha kuasbckj adiuwwudhoa oaiweoaehci oadh awhdwa
                d awdnka kawhdiu as cku awbfknuehowd.
            </p>
            </div>
        </div>

        <div className='home4' id = "brands">


            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{animationDelay:"0.3s",}}>
                        <AiFillGoogleCircle/>
                        <p>Google</p>
                    </div>
                    <div style={{animationDelay:"0.5s",}}>
                        <AiFillAmazonCircle/>
                        <p>Amazon</p>
                    </div>
                    <div style={{animationDelay:"0.7s",}}>
                        <AiFillYoutube/>
                        <p>Youtube</p>
                    </div>
                    <div style={{animationDelay:"0.9s",}}>
                        <AiFillInstagram/>
                        <p>Instagram</p>
                    </div>
                    
                    
                </article>
            </div>
        </div>
        
        
        
        </>

    );
};

export default Home;