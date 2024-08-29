import React from 'react';
import MainHeader from "./MainHeader";
import Container from 'react-bootstrap/Container';
const Test = () => {
    return (
        <div>
            <MainHeader></MainHeader>
           
            <div class="justify-content-end navbar-collapse collapse">
     <div class="navbar-nav">
         <ul class="main-menu">
             <li>
                 <span class="nav-link nlb" >about</span><ul class="dropdown-menu"><li><a class="nav-link" href="/kanha/about">About Kanha</a></li><li><a class="nav-link" href="/kanha/gallery">Gallery</a></li></ul>
             </li>
             <li><a class="nav-link nlb" href="/kanha/events-listing">Events</a></li>
             <li><span class="nav-link nlb" >visit kanha</span><ul class="dropdown-menu"><li><a activeclassname="nav_link_active" href="https://hfn.li/visitor" target="_blank" class="nav-link" rel="noreferrer">Day Visit</a></li><li><a class="nav-link" href="/kanha/book-a-stay">Stay facilities</a></li></ul></li>
             <li><a class="nav-link nlb" href="/kanha/service">Facilities</a></li>
             <li class="nlb_container"><span class="nav-link nlb" >initiatives</span><ul class="dropdown-menu"><li><a class="nav-link" href="/kanha/green-initiatives">Green Initiatives</a></li><li><a class="nav-link" href="/kanha/blue-initiatives">Blue Initiatives</a></li></ul></li>
             <li><a class="nav-link" href="https://donations.heartfulness.org/" target="_blank" rel="noreferrer">donate</a></li>
             <li><a class="nav-link nlb" href="/kanha/shop">shop</a></li>
             <li><a class="nav-link nlb" href="/kanha/contact-us">contact us</a></li>
             <li>
                 <a class="nav-link nlb kmc-logo-kanhaweb" href="/kanha/kmc">
                     <div data-gatsby-image-wrapper="" class="gatsby-image-wrapper gatsby-image-wrapper-constrained kmclogo-kanhaweb">
                      </div>  
                 </a>
             </li>
             <li class="register-link"></li>
             <li class="avatar">
                 <div >
                     <div>
                     <button type="button" class="css-pgpb6z">Log in</button>
                     </div>
                 </div>
             </li>
         </ul>
     </div>
 </div>
            

        </div>


    );
};

export default Test;