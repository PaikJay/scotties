import React from 'react'
import './about_page.css'
const AboutPage = () => {
  return (
    <div>
      <section id="testimonials" className="tm-section-pad-top tm-parallax-2">      
    <div className="container tm-testimonials-content">
      <div className="row">
        <div className="col-lg-12 tm-content-box">
          <h2 className="text-white text-center mb-4 tm-section-title">About Me</h2>
          <div className="mx-auto tm-gallery-container tm-gallery-container-2">
            <div className="tm-testimonials-carousel">
              <figure className="tm-testimonial-item tm-image">
                <img src="img/testimonial-img-02.jpg" alt="testimonial" className="img-fluid mx-auto " />
                <blockquote></blockquote>
                <figcaption></figcaption>
              </figure>

            
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="tm-bg-overlay"></div>
  </section></div>
  )
}
export default AboutPage;