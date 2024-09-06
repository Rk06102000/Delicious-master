import Footer from "../Common/Footer";
import Header from "../Common/Header";

export default function Contacts() {
    return (
        <>
            <Header />
            <BreadcumbArea />
            <ContactInformationArea />
            <ContactFormArea />
            <GoogleMaps/>
            <Footer />
        </>
    );
}
export function BreadcumbArea() {
    return (
        <div
            className="breadcumb-area bg-img bg-overlay"
            style={{ backgroundImage: 'url(img/bg-img/breadcumb4.jpg)' }}
        >
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12">
                        <div className="breadcumb-text text-center">
                            <h2>Contact</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export function ContactInformationArea() {
    return (
        <div className="contact-information-area section-padding-80">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="logo mb-80">
                            <img src="img/core-img/logo.png" alt="Logo" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* Contact Text */}
                    <div className="col-12 col-lg-5">
                        <div className="contact-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus.</p>
                            <p>Orci varius natoque penatibus et magnis dis ac pellentesque tortor. Aenean congue parturient montes, nascetur ridiculus mus.</p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-3">
                        {/* Single Contact Information */}
                        <div className="single-contact-information mb-30">
                            <h6>Address:</h6>
                            <p>481 Creekside Lane Avila <br />Beach, CA 93424</p>
                        </div>
                        {/* Single Contact Information */}
                        <div className="single-contact-information mb-30">
                            <h6>Phone:</h6>
                            <p>+53 345 7953 32453 <br />+53 345 7557 822112</p>
                        </div>
                        {/* Single Contact Information */}
                        <div className="single-contact-information mb-30">
                            <h6>Email:</h6>
                            <p>yourmail@gmail.com</p>
                        </div>
                    </div>

                    {/* Newsletter Area */}
                    <div className="col-12 col-lg-4">
                        <div
                            className="newsletter-form bg-img bg-overlay"
                            style={{ backgroundImage: 'url(img/bg-img/bg1.jpg)' }}
                        >
                            <form action="#" method="post">
                                <input type="email" name="email" placeholder="Subscribe to newsletter" />
                                <button type="submit" className="btn delicious-btn w-100">Subscribe</button>
                            </form>
                            <p>Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export function ContactFormArea() {
    return (
        <div className="contact-area section-padding-0-80">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading">
                            <h3>Get In Touch</h3>
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
export function GoogleMaps() {
    return (
        <div className="map-area">
            <div id="googleMap"></div>
        </div>
    );
}