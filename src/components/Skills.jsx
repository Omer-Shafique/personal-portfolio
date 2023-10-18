
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import meter5 from "../assets/img/meter5.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* <div className="circle"></div>  */}
            <div className="skill-bx wow zoomIn">
              <h2>My Skills</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1}  alt="Image" />
                  <div className='circle'>
                  <div className='percentageText'>75%</div>
                  </div>
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <div className='circle'>
                    <div className='percentageText'>60%</div>
                    </div>
                    <h5>Typescript</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <div className='circle'>
                  <div className='percentageText'>55%</div>
                  </div>
                  <h5>ReactJS</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="Image" />
                  <div className='circle'>
                  <div className='percentageText'>50%</div>
                  </div>
                  <h5>Designing </h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="Image" />
                  <div className='circle'>
                  <div className='percentageText'>50%</div>
                  </div>
                  <h5>Version Control</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
