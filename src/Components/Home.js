// import React from 'react';

function Home() {
  return (
    <>
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="1000">
          <img src="img/yoga-4300033_1920.jpg" className="d-block w-100" width="100%" height="600px" alt="First slide" />
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="img/yoga-2116093_1920.jpg" className="d-block w-100"  width="100%" height="600px" alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div className="carousel-item">
          <img src="img/yoga-4732209_1920.jpg" className="d-block w-100"  width="100%" height="600px" alt="Third slide" />
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div className="carousel-item">
          <img src="img/yoga-2176668_1920.jpg" className="d-block w-100"  width="100%" height="600px" alt="Fourth slide" />
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div className="carousel-item">
          <img src="img/woman-5380651_1920.jpg" className="d-block w-100"  width="100%" height="600px" alt="Fifth slide" />
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div className="carousel-item">
          <img src="img/yoga-2176668_1920.jpg" className="d-block w-100"  width="100%" height="600px" alt="Sixth slide" />
          <div className="carousel-caption d-none d-md-block">
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
    <div className="section">
      <h1>Classes and Indicators</h1>
      <div className="conatiner">
      <div className="box">
        <img src="img/yoga-2176668_1920.jpg" alt="img"/>
        <h3>Indicator</h3>
      </div>
      <div className="box">
        <img src="img/woman-5380651_1920.jpg" alt="img" height="50" width="50px"/>
        <h3>Online Classes</h3>
      </div>
      <div className="box">
        <img src="img/yoga-4300033_1920.jpg" alt="img" height="50" width="50px"/>
        <h3>Event</h3>
      </div>

      </div>
    </div>
    </>
  );
}

export default Home;
