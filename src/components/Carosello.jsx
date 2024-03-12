export default function Carosello() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="analysis-3519963_1920.jpg"
              className="d-block w-100"
              alt="statistica"
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>Statistica</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="cod_P0273.jpeg" className="d-block w-100" alt="ai"></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>AI</h5>
            </div>
          </div>

          <div className="carousel-item">
            <img src="ss.jpg" className="d-block w-100" alt="scienza"></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>Scienza</h5>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="mate.avif"
              className="d-block w-100"
              alt="matematica"
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>Matematica</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Precedente</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Successivo</span>
        </button>
      </div>
    </>
  );
}
