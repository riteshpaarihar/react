import pic1 from '../../public/pic-01.jpg'
import pic2 from '../../public/pic-02.jpg'
import pic3 from '../../public/pic-03.jpg'

const Home = () =>{
    return (
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={pic1} className="d-block w-100" alt="..."  style={{height:"90vh"}} />
            </div>
            <div className="carousel-item">
              <img src={pic2} className="d-block w-100" alt="..." style={{height:"90vh"}}/>
            </div>
            <div className="carousel-item">
              <img src={pic3} className="d-block w-100" alt="..." style={{height:"90vh"}}/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      );
    }

export default Home;
