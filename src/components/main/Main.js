import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';


const Main = () => {
  
  return ( 
    <div>
        <video className='video' src="https://www.tomahawkrobotics.com/hubfs/Website%204.0/Backgrounds%20and%20Heros/website%20video%20shortened%20final.mp4" width="1800" height="1200" loop muted playsinline uk-video="autoplay: inview"></video>
        <div className="content">
             <hr class="new5"></hr>
             <h3 className='com'>COMMON CONTROL FOR UNMANNED SYSTEMS</h3>
              <br/>
             <button className="button button1">WATCH THE VIDEO</button>
             
             <span>
              <p className='para'>Follow us</p>
              <LinkedInIcon className='lin1'/>
              <TwitterIcon className='twi1'/>
             </span>
        </div>  
    </div>
  );
}

export default Main;