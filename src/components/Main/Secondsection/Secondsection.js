import React from 'react'
import './Secondsection.css'

function Secondsection() {
 return (
  <section className="second-hightlight-wrapper">
    <div className="container ">
      <div className="row h=100 align-items-center justify-content-center text-center">
        <div className="col-12">
          <div className="title-wrapper">
            iPhone 11
          </div>
          <div className="description-wrapper">
            Just the right amount of everything.
          </div>
          <div className="pricing">
            From $19.95/mo. or $ 479 with trade-in.
          </div>
          <div className="links-wrapper">
            <ul>
              <li><a href="">Learn more</a></li>
              <li><a href="">Buy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
 )
}

export default Secondsection
