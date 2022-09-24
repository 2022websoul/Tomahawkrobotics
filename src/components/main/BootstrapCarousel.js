import React from 'react'
import {Carousel} from 'react-bootstrap'

export default function BootstrapCarousel() {
  return (
    <div className='crsl'>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://5289815.fs1.hubspotusercontent-na1.net/hub/5289815/hubfs/Website%204.0/Backgrounds%20and%20Heros/defense_hero2.png?width=1400&name=defense_hero2.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='def'>DEFENSE</h3>
      <p className='word1'>Join the multi-domain future of manned-unmanned teaming (MUMT) with collaborative control across all your unmanned systems and enhanced with AI</p>
      <p uk-margin>
                <button class="uk-button uk-button-default">LEARN MORE</button>
            </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://f.hubspotusercontent10.net/hub/5289815/hubfs/Website%204.0/Backgrounds%20and%20Heros/AdobeStock_120511388.jpeg?width=1400&amp;name=AdobeStock_120511388.jpeg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className='ent'>ENTERPRISE</h3>
      <p className='word2'>Safely inspect, monitor, and interact with your remote infrastructure using the most advanced AI to drive actionable analytics.</p>
      <p uk-margin>
                <button class="uk-button uk-button-default1">LEARN MORE</button>
            </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://f.hubspotusercontent10.net/hub/5289815/hubfs/Website%204.0/Backgrounds%20and%20Heros/defense5.png?width=1400&amp;name=defense5.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className='sol'>SOLUTIONS</h3>
      <p className='word3'>When off the shelf just won't cut it - trust us to develop your special mission solution with turn-key simplicity and full life cycle support.</p>
      <p uk-margin>
                <button class="uk-button uk-button-default2">LEARN MORE</button>
            </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}


