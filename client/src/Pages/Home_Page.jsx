// Homepage.jsx

import React, { useState, useEffect } from 'react';
import '../Styles/Home_Page.css';
import NavBar from '../Component/Nav_Bar';
import Footer from '../Component/Footer';

const Homepage = () => {
  const [notifications, setNotifications] = useState(['No New Notifications']);
  const images = [
    'https://cdn.discordapp.com/attachments/698869917235019828/1179515281035505895/Dentist_2.jpg?ex=657a1035&is=65679b35&hm=f752e3cc628f9923c1b3f072a5b56f934cef85d17c2e47438eac5a5a22b97afe&',
    'https://assets.speareducation.com/digest/2018/12/how-to-talk-to-dental-patients-about-money-with-confidence/DigestIMG-Money-With-Confidence.jpg',
    'https://media.discordapp.net/attachments/1037764932747403276/1182532930875174962/dental-sealants-work-for-an-adult-and-prevent-tooth-decay.png?ex=65850a9d&is=6572959d&hm=2baf3d7255e319051583b26d40ec9b3c8910465d8ff51f6c20467a116bed479d&=&format=webp&quality=lossless&width=1333&height=889'
  ];

  const texts = [
    "DentEase: Where Smiles Begin with Ease!",
    "Seamless Dentistry, Radiant Smiles Await",
    "Transform Your Oral Health with DentEase Excellence",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="HomePage-container">
      {/* Top Section */}
      <NavBar notifications={notifications} />
  
      <div className="homepage-carousel-container">
        <div className="homepage-text-container">
          <h1>PARTNERS IN DENTAL HEALTH</h1>
          <p className="homepage-text">{texts[currentImage]}</p>
        </div>
        <div className="homepage-image-container">
          <img
            src={images[currentImage]}
            alt={`Image ${currentImage + 1}`}
            className="homepage-carousel-image"
          />
          <button className="carousel-button prev" onClick={handlePrev}>
            &lt; 
          </button>
          <button className="carousel-button next" onClick={handleNext}>
            &gt; 
          </button>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="facilities">
        <div className="facilities-text-wrapper">
          <h1 className="facilities-text">OUR SERVICES</h1>
          <p className="facilities-text">What Facilities We Provided</p>
        </div>
        <div className="facility-boxes">
          <div className="facility-box left-box">
            <img
              src="https://cdn.discordapp.com/attachments/698869917235019828/1179535127076945961/endo.jpg?ex=657a22b0&is=6567adb0&hm=245fc467d292f73338e45ba61bb6a4f63da2eeaa7dfebb8b39bbdf56629f4387&"
              alt="Orthodontist Image"
              className="facility-image"
            />
            <h3>Orthodontist</h3>
            <p>
              Correct misalignments seamlessly with our specialized facility. Equipped with
              cutting-edge tools, X-ray, and 3D imaging for precise treatment plans. Our space ensures
              a comfortable fit for braces, retainers, and aligners. Your journey to a straighter smile
              starts here.
            </p>
          </div>
          <div className="facility-box middle-box">
            <img
              src="https://cdn.discordapp.com/attachments/698869917235019828/1179534932062777465/orthodontist.jpg?ex=657a2282&is=6567ad82&hm=6268a0bbedb45677a8cb4e7d45ae34271028e0892723614035d622d9329c76e2&"
              alt="Periodontist Image"
              className="facility-image"
            />
            <h3>Periodontist</h3>
            <p>
              Experience comprehensive care in our periodontal facility. Specialized tools for deep
              cleanings, scaling, and root planing procedures ensure optimal gum health. Our advanced
              equipment diagnoses and monitors gum conditions with precision. Collaborative efforts
              with general dentists guarantee your overall oral health. Your journey to healthy gums
              begins with us.
            </p>
          </div>
          <div className="facility-box right-box">
            <img
              src="https://cdn.discordapp.com/attachments/698869917235019828/1179534643364642836/periodontist.jpg?ex=657a223d&is=6567ad3d&hm=ef014f20b0c9b23dd370919ec9bbbd5e0df03fb5611583fad2492b98a9342cc0&"
              alt="Endodontist Image"
              className="facility-image"
            />
            <h3>Endodontist</h3>
            <p>
              Discover top-tier care in our specialized facility. Treatment rooms feature advanced
              imaging for precise root issue diagnosis. Specialized instruments ensure expert root canal
              treatments and procedures. Our commitment to a sterile environment safeguards against
              infections, providing a secure haven for delicate procedures. Entrust your root health to
              our expertise.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-container">
        <div className="contact-info">
          <div className="office-hours">
            <h3>Office Hours</h3>
            <table className="office-hours-table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monday</td>
                  <td>10:00 AM - 5:00 PM</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>9:00 AM - 5:00 PM</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>9:00 AM - 5:00 PM</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>11:00 AM - 7:00 PM</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>10:00 AM - 7:00 PM</td>
                </tr>
              </tbody>
            </table>
            <div className="contact-heading">
              <h2>Contact DentEase Dental Clinic</h2>
              <p>We'd Love to Hear from You! Call (+63) 927 815 7638</p>
            </div>
          </div>
          <div className="find-us">
            <h3>Find Us</h3>
            <p>
              Our Clinic is located in Gov. M. Cuenco Ave, Cebu City, 6000 Cebu, next to Rosedale Place.
              Book your appointment online today.
            </p>
            <img src="pictures/location.png" alt="DentEase Location" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;