import React from 'react'
import './App.css';
import Header from './components/Header'
import Carousels from './components/Carousels'
import Service from './components/Service'
import Contact from './components/Contact'
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Carousels />
      <div className="container">
        <div className="row text-center mt-3 mb-3">
          <h1>Services</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, debitis!</p>
        </div>
        <div className="row">
          <div className="col">
            <Service />
          </div>
          <div className="col">
            <Service />
          </div>
          <div className="col">
            <Service />
          </div>

        </div>
      </div>

      <div className="container">
        <div className="row text-center mt-3 mb-3">
          <h1>Contact Us</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, debitis!</p>
        </div>
        <div className="row">
          <div className="col">
            <Contact />
          </div>
          <div className="col">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1882999.8682290742!2d71.1638179!3d22.8123139!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85558e268fcd%3A0xe5ba6fa8382060ed!2sFelix%20IT%20Systems%20%7C%20UI%20UX%20Design%20Courses%20in%20Ahmedabad%20%7C%20Fullstack%20courses%20with%20Placement!5e0!3m2!1sen!2sin!4v1742989871558!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

      <Footer/>

    </>
  )
}

export default App