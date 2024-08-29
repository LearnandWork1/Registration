import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer fixed-bottom navbar-dark bg-dark" >
       <div className="container py-3">
        <div className="row">
          <div className="col-md-4 text-white">
            <h5>Pages</h5>
            <ul className="list-unstyled">

              <li><a href="/ContactUs" className="text-white">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4 text-white text-center">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com" target='_blank' className="text-white mx-2"><i className="fab fa-facebook-f"></i></a>&nbsp;Heartfulness</li>
            </ul>

          </div>
          <div className="col-md-4 text-white">
            <h5>About</h5>
            <p className="mb-0"> Nipuna for School Responses</p>
          </div>
        </div>

      </div>
      

{/* 
<div class="container">
      <div class="row footer-widget-row">
          <div class="col-md-4 logo-section footer-widget">
              <img alt="Group 402.png" loading="lazy" width="300" height="93" decoding="async" data-nimg="1"  srcSet="/_next/image?url=https%3A%2F%2Fprimary-cms.s3.ap-south-1.amazonaws.com%2Fstrapi-assets%2FGroup_402_ef338efaff.png&amp;w=384&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fprimary-cms.s3.ap-south-1.amazonaws.com%2Fstrapi-assets%2FGroup_402_ef338efaff.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fprimary-cms.s3.ap-south-1.amazonaws.com%2Fstrapi-assets%2FGroup_402_ef338efaff.png&amp;w=640&amp;q=75" /><div class="row align-items-center"><div class="col-md-12 col-lg-5 pl-0 store-logo"><a class="store_logo" target="_blank" rel="noopener noreferrer" href="https://heartfulness.app.link/appwebsite"><img alt="play.png" loading="lazy" width="190" height="70" decoding="async" data-nimg="1"  srcSet="/_next/image?url=https%3A%2F%2Fprimary-cms.s3.ap-south-1.amazonaws.com%2Fstrapi-assets%2Fplay_8d7ea2a55f.png&amp;w=256&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fprimary-cms.s3.ap-south-1.amazonaws.com%2Fstrapi-assets%2Fplay_8d7ea2a55f.png&amp;w=384&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fprimary-cms.s3.ap-south-1.amazonaws.com%2Fstrapi-assets%2Fplay_8d7ea2a55f.png&amp;w=384&amp;q=75" /></a></div><div class="col-md-12 col-lg-5 pl-0 store-logo"><a class="store_logo" target="_blank" rel="noopener noreferrer" href="https://heartfulness.app.link/appwebsite"><img alt="app.png" loading="lazy" width="193" height="63" decoding="async" data-nimg="1"  srcSet="/_next/image?url=https%3A%2F%2Fprimary-cms.s3.ap-south-1.amazonaws.com%2Fstrapi-assets%2Fapp_247b175a3a.png&amp;w=256&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fprimary-cms.s3.ap-south-1.amazonaws.com%2Fstrapi-assets%2Fapp_247b175a3a.png&amp;w=640&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fprimary-cms.s3.ap-south-1.amazonaws.com%2Fstrapi-assets%2Fapp_247b175a3a.png&amp;w=640&amp;q=75" /></a></div></div>
          </div><div class="col-md-2"></div><div class="col-md-6 footer_menu">
              <div class="widget-foot-width quick-links footer-widget">
                  <h3>Social</h3><ul class="list-unstyled" >
                      <li><a target="_blank" href="https://www.linkedin.com/company/heartfulness"><div class="d-flex"><img alt="LinkedIn" loading="lazy" width="20" height="20" decoding="async" data-nimg="1"  srcSet="/_next/image?url=https%3A%2F%2Fprimary-cms.s3.ap-south-1.amazonaws.com%2Fstrapi-assets%2Flinkedin_1_1_976caa9c54.png&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fprimary-cms.s3.ap-south-1.amazonaws.com%2Fstrapi-assets%2Flinkedin_1_1_976caa9c54.png&amp;w=48&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fprimary-cms.s3.ap-south-1.amazonaws.com%2Fstrapi-assets%2Flinkedin_1_1_976caa9c54.png&amp;w=48&amp;q=75" /><span class="p-quote mx-2">LinkedIn</span></div></a></li>
                      <li><a target="_blank" href="https://www.facebook.com/practiceheartfulness/"><div class="d-flex"><img alt="Facebook" loading="lazy" width="20" height="20" decoding="async" data-nimg="1"  srcSet="/_next/image?url=https%3A%2F%2Fprimary-cms.s3.ap-south-1.amazonaws.com%2Fstrapi-assets%2Ffacebook_1_1_44a196f635.png&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fprimary-cms.s3.ap-south-1.amazonaws.com%2Fstrapi-assets%2Ffacebook_1_1_44a196f635.png&amp;w=48&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fprimary-cms.s3.ap-south-1.amazonaws.com%2Fstrapi-assets%2Ffacebook_1_1_44a196f635.png&amp;w=48&amp;q=75" /><span class="p-quote mx-2"> Facebook</span></div></a></li>
                      <li><a target="_blank" href="https://twitter.com/heartfulness"><div class="d-flex"><img alt="Twitter" loading="lazy" width="20" height="20" decoding="async" data-nimg="1"  srcSet="/_next/image?url=https%3A%2F%2Fprimary-cms.s3.ap-south-1.amazonaws.com%2Fstrapi-assets%2FArtboard_1_660d22803c.png&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fprimary-cms.s3.ap-south-1.amazonaws.com%2Fstrapi-assets%2FArtboard_1_660d22803c.png&amp;w=48&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fprimary-cms.s3.ap-south-1.amazonaws.com%2Fstrapi-assets%2FArtboard_1_660d22803c.png&amp;w=48&amp;q=75" /><span class="p-quote mx-2"> Twitter</span></div></a></li>
                      <li>
                          <a target="_blank" href="https://www.instagram.com/heartfulness/">
                              <div class="d-flex"><img alt="Instagram" loading="lazy" width="20" height="20" decoding="async" data-nimg="1"  srcSet="/_next/image?url=https%3A%2F%2Fprimary-cms.s3.ap-south-1.amazonaws.com%2Fstrapi-assets%2Finstagram_1_5d8e27d21b.png&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fprimary-cms.s3.ap-south-1.amazonaws.com%2Fstrapi-assets%2Finstagram_1_5d8e27d21b.png&amp;w=48&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fprimary-cms.s3.ap-south-1.amazonaws.com%2Fstrapi-assets%2Finstagram_1_5d8e27d21b.png&amp;w=48&amp;q=75" /><span class="p-quote mx-2"> Instagram</span></div>
                          </a>
                      </li>
                      <li><a target="_blank" href="https://whatsapp.com/channel/0029Va4ShzHBA1ez8jLdYf00"><div class="d-flex"><img alt="Whatsapp" loading="lazy" width="20" height="20" decoding="async" data-nimg="1"  srcSet="/_next/image?url=https%3A%2F%2Fprimary-cms.s3.ap-south-1.amazonaws.com%2Fstrapi-assets%2FArtboard_1_d65404abf8.png&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fprimary-cms.s3.ap-south-1.amazonaws.com%2Fstrapi-assets%2FArtboard_1_d65404abf8.png&amp;w=48&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fprimary-cms.s3.ap-south-1.amazonaws.com%2Fstrapi-assets%2FArtboard_1_d65404abf8.png&amp;w=48&amp;q=75" /><span class="p-quote mx-2"> Whatsapp</span></div></a></li>
                  </ul>
              </div><div class="widget-foot-width quick-links footer-widget"><h3>Useful Links</h3><ul class="list-unstyled" ><li><a target="_blank" href="https://www.daaji.org/"><div class="d-flex"><span class="p-quote mx-2"> Daaji</span></div></a></li><li><a target="_blank" href="https://heartfulness.org/kanha/"><div class="d-flex"><span class="p-quote mx-2"> Kanha</span></div></a></li><li><a target="_self" href="https://heartspots.heartfulness.org/"><div class="d-flex"><span class="p-quote mx-2"> Trainers</span></div></a></li><li><a target="_self" href="/in/subscribe-to-one-beautiful-thought"><div class="d-flex"><span class="p-quote mx-2"> Daily Thought</span></div></a></li><li><a target="_blank" href="https://donations.heartfulness.org/"><div class="d-flex"><span class="p-quote mx-2"> Donate</span></div></a></li></ul></div><div class="widget-foot-width quick-links footer-widget"><h3>Insights</h3><ul class="list-unstyled" ><li><a target="_blank" href="https://www.heartfulnessinstitute.org/research/"><div class="d-flex"><span class="p-quote mx-2"> Heartfulness Research</span></div></a></li><li><a target="_blank" href="https://www.heartfulnessmagazine.com/"><div class="d-flex"><span class="p-quote mx-2"> Heartfulness Magazine</span></div></a></li></ul></div>
          </div>
      </div><div class="row footer-widget-row termsprivacy">
          <div class="col-lg-4 col-md-4 col-sm-6"><p>© 2024 Heartfulness - All rights reserved</p></div>
          <div class="col-md-4 col-sm-7">
              <div class="terms_privacy">
                  <a class="a-tag" href="/in/terms">Terms</a><a class="a-tag" href="/in/privacy-policy">Privacy</a>
              </div>
          </div>
      </div>
  </div> */}
    </footer>
  );
};

export default Footer;
