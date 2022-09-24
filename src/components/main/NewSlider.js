import React, { Component } from "react";
import Slider from "react-slick";




export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      nav3: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
      nav3: this.slider3
    });
  }

  render() {
    return (
      <div className="container">
       
          <div className='h1tru'>
              <br/><br/><br/><br/>
                <h2 className='header4'>TRUSTED PARTNERS</h2>
                <div class="vl">
                    <p className='para4'>Our team of partners represents the bleeding edge of innovation - trusted by those who execute the most difficult missions. Together, this coalition has refined Kinesis into an intuitive, hardened control system that works seamlessly with the unmanned systems that operators demand and the AI enhancements they expect.</p>    
                </div>
                <br/><br/><br/>  
          </div>      
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
          autoplay={true}
          autoplaySpeed={2200}
          pauseOnHover={true}
        >
          <div>
          <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Website%204.0/Logos%20-%20Trusted%20Partners/athena%20ai.png?width=660&height=198&name=athena%20ai.png" alt="first-logo"></img>
          </div>
          <div>
            <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Website%204.0/Logos%20-%20Trusted%20Partners/skydio.png?width=660&height=198&name=skydio.png" alt="second-logo"></img>
          </div>
          <div>
            <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Website%204.0/Logos%20-%20Trusted%20Partners/reveal%20technology.png?width=660&height=198&name=reveal%20technology.png" alt="Third-logo"></img>
          </div>
          <div>
            <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Website%204.0/Logos%20-%20Trusted%20Partners/juggernaut.png?width=660&height=198&name=juggernaut.png" alt="fourth-logo"></img>
          </div>
          <div>
            <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/samsung.png?width=300&height=90&name=samsung.png" alt="fivth-logo"></img>
          </div>
          <div>
             <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Partner%20Logos/persistent%20systems.png?width=300&height=90&name=persistent%20systems.png" alt="sixth-slide"></img>
          </div>
          <div>
             <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Partner%20Logos/atak.png?width=300&height=90&name=atak.png" alt="seventh-slide"></img>
          </div>
          <div>
             <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Partner%20Logos/nvidia.png?width=300&height=90&name=nvidia.png" alt="eighth-slide"></img>
          </div>
          <div>
             <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Partner%20Logos/unreal.png?width=300&height=90&name=unreal.png" alt="ninth-slide"></img>
          </div>
          <div>
             <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Partner%20Logos/defendtex.png?width=300&height=90&name=defendtex.png" alt="tenth-slide"></img>
          </div>
          <div>
             <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Partner%20Logos/flir.png?width=300&height=90&name=flir.png" alt="eleventh-slide"></img>
          </div>
          <div>
            <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Partner%20Logos/qna.png?width=300&height=90&name=qna.png" alt="twelvth-slide"></img>
          </div>
          <div>
            <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Website%204.0/Logos%20-%20Trusted%20Partners/ghost%20robotics2.png?width=300&height=90&name=ghost%20robotics2.png" alt="thirteenth-slide"></img>
          </div>
          <div>
            <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Partner%20Logos/med-eng.png?width=300&height=90&name=med-eng.png" alt="fourtheenth-slide"></img>
          </div>
          <div>
            <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Website%204.0/Logos%20-%20Trusted%20Partners/boston%20dynamics.png?width=300&height=90&name=boston%20dynamics.png" alt="fifteenth-slide"></img>
          </div>
        </Slider>
       <br/>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          autoplaySpeed={1000}
        >
          <div>
            <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Website%204.0/Logos%20-%20Trusted%20Partners/socom.png?width=660&height=198&name=socom.png" alt="slide-1"></img>
          </div>
          <div>
          <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Partner%20Logos/usa.png?width=300&height=90&name=usa.png" alt="slide-2"></img>
          </div>
          <div>
          <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Partner%20Logos/usaf.png?width=300&height=90&name=usaf.png" alt="slide-3"></img>
          </div>
          <div>
          <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Partner%20Logos/usn.png?width=300&height=90&name=usn.png" alt="slide-4"></img>
          </div>
          <div>
          <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Website%204.0/Logos%20-%20Trusted%20Partners/usmc.png?width=660&height=198&name=usmc.png" alt="slide-5"></img>
          </div>
          <div>
          <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Partner%20Logos/uk%20mod.png?width=300&height=90&name=uk%20mod.png" alt="slide-6"></img>
          </div>
          <div>
            <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Partner%20Logos/dstl.png?width=300&height=90&name=dstl.png" alt="slide-7"></img>
          </div>
          <div>
            <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Website%204.0/Logos%20-%20Trusted%20Partners/adf.png?width=660&height=198&name=adf.png" alt="slide-8"></img>
          </div>
         
        </Slider>
         <br/>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider3 = slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
          autoplay={true}
          autoplaySpeed={2200}
        >
          <div>
             <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Website%204.0/Logos%20-%20Trusted%20Partners/booz%20allen.png?width=300&height=90&name=booz%20allen.png" alt="logo1"></img>
          </div>
          <div>
             <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Website%204.0/Logos%20-%20Trusted%20Partners/epe.png?width=660&height=198&name=epe.png" alt="logo2"></img>
          </div>
          <div>
             <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Website%204.0/Logos%20-%20Trusted%20Partners/level%20peaks.png?width=660&height=198&name=level%20peaks.png" alt="logo3"></img>
          </div>
          <div>
             <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Website%204.0/Logos%20-%20Trusted%20Partners/booz%20allen.png?width=300&height=90&name=booz%20allen.png" alt="logo4"></img>
          </div>
          <div>
             <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Partner%20Logos/fenix%20group.png?width=300&height=90&name=fenix%20group.png" alt="logo5"></img>
          </div>
          <div>
             <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Partner%20Logos/ptd.png?width=300&height=90&name=ptd.png" alt="logo6"></img>
          </div>
          <div>
             <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Partner%20Logos/jhu-apl.png?width=300&height=90&name=jhu-apl.png" alt="logo7"></img>
          </div>
          <div>
            <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Website%204.0/Logos%20-%20Trusted%20Partners/epe.png?width=660&height=198&name=epe.png" alt="logo8"></img>
          </div>
          <div>
            <img src="https://www.tomahawkrobotics.com/hs-fs/hubfs/Website%204.0/Logos%20-%20Trusted%20Partners/level%20peaks.png?width=660&height=198&name=level%20peaks.png" alt="logo9"></img>
          </div>

        </Slider>
        
        <br/><br/><br/>
        <br/><br/><br/>
       
      </div>
    
    );
  }
}


