import Footer from "../Common/Footer";
import Header from "../Common/Header";


export default function Abouts() {
  return (
    <>
      <Header />
      <BreadcumbArea />
      <AboutArea />
      <ContactArea/>
      <Footer />

    </>
  );
}

export function BreadcumbArea() {
  return (
    <div className="breadcumb-area bg-img bg-overlay" style={{ backgroundImage: 'url(img/bg-img/breadcumb1.jpg)' }}>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12">
            <div className="breadcumb-text text-center">
              <h2>About us</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AboutArea() {
  return (
    <section className="about-area section-padding-80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading">
              <h3>Who we are and what we do?</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h6 className="sub-heading pb-5">
              Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae
            </h6>

            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin malesuada et mauris ut lobortis. Sed eu iaculis sapien, eget luctus quam. Aenean hendrerit varius massa quis laoreet. Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
          </div>
        </div>

        <div className="row align-items-center mt-70">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="single-cool-fact">
              <img src="img/core-img/salad.png" alt="Salad" />
              <h3><span className="counter">1287</span></h3>
              <h6>Amazing recipes</h6>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="single-cool-fact">
              <img src="img/core-img/hamburger.png" alt="Hamburger" />
              <h3><span className="counter">25</span></h3>
              <h6>Burger recipes</h6>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="single-cool-fact">
              <img src="img/core-img/rib.png" alt="Rib" />
              <h3><span className="counter">471</span></h3>
              <h6>Meat recipes</h6>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="single-cool-fact">
              <img src="img/core-img/pancake.png" alt="Pancake" />
              <h3><span className="counter">326</span></h3>
              <h6>Desert recipes</h6>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <img className="mb-70" src="img/bg-img/about.png" alt="About Us" />
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin malesuada et mauris ut lobortis. Sed eu iaculis sapien, eget luctus quam. Aenean hendrerit varius massa quis laoreet. Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactArea() {
  return (
    <div className="contact-area section-padding-0-80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading">
              <h3>Contact Us</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="contact-form-area">
              <form action="#" method="post">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-12 col-lg-6">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      className="form-control"
                      id="message"
                      cols="30"
                      rows="10"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button
                      className="btn delicious-btn mt-30"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
