import React from 'react'
import Navbar from './Navbar'
import slidder1 from './images/slidder1.png'
import slidder2 from './images/slidder2.png'
import slidder3 from './images/slidder3.png'
import slidder4 from './images/slidder4.png'
import slidder5 from './images/slidder5.png'
import slidder6 from './images/slidder6.png'


export default function Home() {
    return (
        <>

            <Navbar></Navbar>
            <div className='home'>
                <div className="slidder">

                </div>

                <div className="title">
                    <h1>
                        <span style={{ color: '#FAD744' }}>Place</span>
                        <span style={{ color: '#2B3252' }}>Mates</span>
                    </h1>
                    <h3 style={{ color: '#A04EF6' }}>Unlock Your Career With Us!</h3>
                </div>

                <div div className="container">

                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={slidder1} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={slidder2} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={slidder3} alt="Third slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={slidder4} alt="Fourth slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={slidder5} alt="Fifth slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={slidder6} alt="Fifth slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}