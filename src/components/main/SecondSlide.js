import React from 'react';




function SecondSlide() {
  return (
         
        <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
    <div class="uk-card-media-left uk-cover-container">
    <video className='vdo' src="https://www.tomahawkrobotics.com/hubfs/Website%204.0/Backgrounds%20and%20Heros/website%20video%20shortened%20final.mp4"  loop muted playsinline uk-video="autoplay: inview"></video>
        <canvas width="300" height="100"></canvas>
    </div>
    <div>
        <div class="uk-card-body">
            <h3 class="uk-card-title">COMMON CONTROL REDEFINED</h3>
            <p className='kiki'>Kinesis unlocks the power of 20+ unmanned systems from over a dozen manufacturers. Viewable on a single "pane of glass" and controllable from a common UI - all upgraded with new AI capabilities and connected to the tactical network.</p>
            <button className="button button2">GET STARTED</button>
        </div>
    </div>
</div>

    
  )
}

export default SecondSlide

