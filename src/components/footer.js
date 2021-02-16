import React from 'react'
import './footer.css'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter@3x.png'
import youtube from '../assets/youtube@3x.png'


function Footer() {
        return(
            <div>
            <div className='footer' >
                <p className='para'>جميع الحقوق محفوظة 2020</p>
                <img src={facebook} className="img-facebook"/>
                <img src={twitter} className="img-twitter"/>
                <img src={youtube} className="img-youtube"/>

            </div>
        </div>
        );
    
}

export default Footer;