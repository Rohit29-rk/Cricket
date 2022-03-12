import React from 'react'

export default function Footer() {
    return (
        
            <div>
        <footer className='foo'>
          <div className="text-center">
            <h3 className="font-weight-bold" style={{ color: "#dbc1ac" }}>Follow Us</h3>
            <div className="d-flex flex-row justify-content-center">
              <span><a href="/"><i className="fab fa-facebook fa-2x"></i></a></span>
              <span><a href="/"><i className='fab fa-twitter fa-2x'></i></a></span>
              <span><a href="/"><i className='fab fa-instagram fa-2x'></i></a></span>
              <span><a href="https://github.com/Rohit29-rk" target="_blank" rel="noreferrer" ><i className='fab fa-github fa-2x'></i></a></span>
            </div>
            <p>&copy; 2022 Copyright By CRICSCORER</p>
            <div className="top">
              <a href="#top"><i className="fas fa-arrow-circle-up fa-2x"></i></a>
            </div>
          </div>
        </footer>
      </div>
        
    )
}
