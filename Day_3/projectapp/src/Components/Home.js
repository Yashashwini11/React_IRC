function Home() {
    return (
      <>
        <div className="img-container">
        <img
          src={process.env.PUBLIC_URL + "/thumb-1920-574263.jpg"}
          alt="no image"
        />
          <div className="description">
            Welcome to CHRONOSTYLE: <br />
            <br />
            Where Moments Shine Bright<br />
            Explore a world of timepieces at ChronoStyle.<br />
            From classic to contemporary,<br />
            our curated collection embodies elegance. <br />
            <br />
            <br />
            <div className="container">
            <a className="btn" href="#z">
            <span className="btnInner">Explore</span>
            </a>
            </div>
          </div>
        </div>
      </>
    );
  }
  export default Home;