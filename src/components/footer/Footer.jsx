import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h1 className="footer__title">Smith</h1>

        <ul className="footer__list">
          <li>
            <a href="#" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#postfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>

        </ul>

        <div className="footer__social">
            <a 
            href="" 
            className="footer__social-link" 
            target="_blank">
              <i className="bx bxl-instagram"></i>
            </a>

            <a 
            href="" 
            className="footer__social-link" 
            target="_blank">
              <i className="bx bxl-facebook"></i>
            </a>
        
            <a 
            href="" 
            className="footer__social-link" 
            target="_blank">
              <i className="bx bxl-twitter"></i>
            </a>
        </div>

        {/* <span className='footer__copy'>
          &#169 Al rights reserved
        </span> */}

      </div>
    </footer>
  )
}

export default Footer