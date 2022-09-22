import React from "react";
import carouselimg2 from '../../images/5a.png';
import carouselimg4 from '../../images/A.png';
import carouselimg5 from '../../images/B.png';
import carouselimg3 from '../../images/C.png';
import "../../App.css";

export default function Carousel() {
    return (

        <div id="carouselExampleDark" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
      
        <div className="carousel-item active" data-bs-interval="10000">
            <img src={carouselimg2} className="d-block w-100 mx-auto" alt="..."  height={700}/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="carousel-title">END OF TRACK
              <span className="carousel-span"> E WASTE </span>
              <br /> </h5>
              <p className="carousel-desc">E-waste recycling is necessary but it should be conducted in a safe and standardized mano.
              <br />
              <br />
              <button type="button" class="btn btn-outline-success">Read More</button></p>
            </div>
          </div>
      
      
          <div className="carousel-item active" data-bs-interval="7500">
            <img src={carouselimg3} className="d-block w-100 mx-auto" alt="..."  height={700}/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="carousel-title">WE BELIEVE
              <span className="carousel-span"> IN REFURBISHMENT</span>
              <br /> TRANSFORMATION</h5>
              <p className="carousel-desc">76 per cent workers in informal recycling operations in India suffer from respiratory ailments like asthma, bronchitis, choking, coughing, irritation, breathing difficulties and tremors among others.
              <br />
              <br />
              <button type="button" class="btn btn-outline-success">Read More</button></p>
            </div>
          </div>
      
          <div className="carousel-item active" data-bs-interval="5000">
            <img src={carouselimg4} className="d-block w-100 mx-auto" alt="..."  height={700}/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="carousel-title">WELCOME TO
              <span className="carousel-span"> E WASTE MANAGEMENT</span>
              <br /> SERVICES</h5>
              <p className="carousel-desc">For every 1 million smartphones recycled, 35,274 lbs of copper, 772 lbs of silver, 75 lbs of gold, and 33 lbs of palladium can be recovered.
              <br />
              <br />
              <button type="button" class="btn btn-outline-success">Read More</button></p>
            </div>
          </div>
      
      
          <div className="carousel-item active" data-bs-interval="2500">
            <img src={carouselimg5} className="d-block w-100 mx-auto" alt="..."  height={700}/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="carousel-title">TURNING E-WASTE TO
              <span className="carousel-span"> BIG IDEAS WITHIN</span>
              <br /> GREAT PRODUCTS</h5>
              <p className="carousel-desc">E-Waste is the world’s most toxic and fastest growing waste stream.
              <br />
              <br />
              <button type="button" class="btn btn-outline-success">Read More</button></p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}