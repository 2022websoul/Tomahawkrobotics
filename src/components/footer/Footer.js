import React from 'react';
import './Footer.module.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
              


    <div style={{backgroundColor:"black"}}>
        <div class="row">
            <div class="col-xl-2"></div>
                <div class="col-xl-8">
    <div className='last'>
        <table class="uk-table">
           <span> 
            <img className="flogo" src="https://www.tomahawkrobotics.com/hs-fs/hubfs/white-t-logo-(web).png?width=144&name=white-t-logo-(web).png" alt="flogo"></img>
            <tbody>
               <tr className='fdata1'>
                   <td className='d1'>KINESIS PLANS</td>
                   <td className='one'>DEFENSE</td>
                   <td className='two'>CONTACT US</td>
                   <td className='dfourth'>EDGE PROCESSORS</td>
               </tr>
               <tr className='fdata2'>
                   <td className='d2'>CONTROLLERS</td>
                   <td className='three'>ENTERPRISE</td>
                   <td className='four'>NEWS</td>
                   <td></td>
               </tr>
               <tr className='fdata3'>
                   <td className='d3'>DATALINKS</td>
                   <td className='five'>SOLUTIONS</td>
                   <td className='six'>CAREERS</td>
                   <td></td>
               </tr>
            </tbody>
            </span>

        </table>
        <br/>
        <hr className='line1'></hr>
        <br/>
        <p className='first'>Melbourne, FL | Atlanta, GA | Washington, D.C.</p>
       
        <p className='second'>Terms of Use | Privacy Notice<br/>
                              © 2022 Tomahawk Robotics | All Rights Reserved</p>
        
        <p className='third'>Tomahawk Robotics and Kinesis are<br/>
                             Registered Trademarks of Tomahawk Robotics, Inc.</p>

            <br/><br/>
            <TwitterIcon className='twi'/>
            <LinkedInIcon className='lin'/>
            <YouTubeIcon className='you'/>
    </div>
    </div>
    <div class="col-xl-2" ></div>
</div>
</div>
  );
}
