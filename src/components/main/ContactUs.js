import React from "react";
import MainHeader from '../MainHeader';
import Footer from '../common/Footer';
const ContactUs = () => {
    return (
        <div>
            <MainHeader />
            <div className="container mt-5">
                <h2>Contact Us</h2>
                <p>
                    Feel free to get in touch with us for any queries or assistance. Our
                    dedicated volunteer team is here to help you.
                </p>
               
                <a href="https://heartfulness.org/in" class="link-container">
                <p>Heartfulness </p>
                </a>


                <p>We look forward to hearing from you!</p>
                <div style={{ height: "400px", width: "100%" }}>
                    {/* Google Maps Embed API */}
                    <iframe
                        title="Google Map"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;
