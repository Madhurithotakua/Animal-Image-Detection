import React, { useState } from 'react';
import Detect from './Detect';

const faqData = [
    {
        question: "1. What is the main goal of this project?",
        answer: "The main goal is to develop an accurate animal detection model using transfer learning on a pre-trained YOLO model trained on the COCO dataset."
      },
      {
        question: "2. Which animals are included in the dataset?",
        answer: "Animals included are Bird, Cat, Dog, Horse, Sheep, Cow, Elephant, Bear, Zebra, and Giraffe."
      },
      {
        question: "3. What is Transfer Learning and why is it used here?",
        answer: "Transfer Learning leverages knowledge from a pre-trained model and applies it to a new task, reducing training time and improving accuracy."
      },
      {
        question: "4. What technologies and libraries are used in the project?",
        answer: "The project uses React.js, TensorFlow.js, Keras, and npm."
      },
      {
        question: "5. What is the significance of this project in real life?",
        answer: "It aids in wildlife conservation, agriculture monitoring, and urban planning by enabling automatic detection and classification of animals."
      },
    ];
  


const SimpleAnimalDetection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const primaryColor = '#001f3f';
  const textColorLight = 'white';
  const headerHeight = 80;

  const backgroundImageStyle = {
    backgroundImage: `url('https://cdn.pixabay.com/animation/2023/01/19/08/26/08-26-07-706__480.png')`,
    backgroundSize: 'contain',
    backgroundPosition: 'right center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: textColorLight,
    textAlign: 'left',
    padding: '20px 60px',
    backgroundColor: 'rgba(0, 31, 63, 0.4)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    scrollMarginTop: `${headerHeight + 20}px`
  };

  const headerStyle = {
    backgroundColor: primaryColor,
    padding: '15px 30px',
    textAlign: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 100,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: `${headerHeight}px`,
    color: textColorLight
  };

  const navStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
  };

  const navItemStyle = {
    margin: '0 20px',
  };

  const navLinkStyle = {
    textDecoration: 'none',
    color: textColorLight,
    fontSize: '18px',
  };

  const footerStyle = {
    backgroundColor: primaryColor,
    padding: '40px 0',
    textAlign: 'center',
    marginTop: '100px',
    color: textColorLight,
  };

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: 'white', scrollBehavior: 'smooth' }}>
      <header style={headerStyle}>
        <h2 style={{ color: 'white', fontSize: '28px' }}>Animal Detection</h2>
        <nav>
          <ul style={navStyle}>
            <li style={navItemStyle}><a href="#home" style={navLinkStyle}>Home</a></li>
            <li style={navItemStyle}><a href="#detection" style={navLinkStyle}>Detection</a></li>
            <li style={navItemStyle}><a href="#faq" style={navLinkStyle}>FAQ</a></li>
            <li style={navItemStyle}><a href="#about" style={navLinkStyle}>Contact us..</a></li>
          </ul>
        </nav>
      </header>

      {/* HOME */}
      <div id="home" style={backgroundImageStyle}>
        <div style={{ maxWidth: '50%' }}>
          <h1 style={{
            marginBottom: '20px',
            fontSize: '52px',
            fontWeight: 'bold',
            color: '#001f3f',
            textShadow: '0 0 8px #ffffff, 0 0 12px #ffffff',
            position: 'relative',
            display: 'inline-block',
            overflow: 'hidden'
          }}>
            🐾 Animal Image Detection
            <span style={{
              position: 'absolute',
              top: 0,
              left: '-75%',
              width: '50%',
              height: '100%',
              background: 'linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.5), transparent)',
              transform: 'skewX(-20deg)',
              animation: 'shine 2.5s infinite',
              filter: 'blur(1px)'
            }}></span>
          </h1>
          <p style={{
            marginBottom: '30px',
            fontSize: '22px',
            color: '#001f3f',
            textShadow: '0 0 8px #ffffff, 0 0 16px #ffffff'
          }}>
            📸 Capture and identify animals with AI-powered image analysis.
          </p>
          <p style={{ fontSize: '20px', color: '#001f3f', textShadow: '0 0 8px #ffffff, 0 0 16px #ffffff' }}>
            🎥 This system can be integrated with CCTV cameras for continuous monitoring.
          </p>
          <p style={{ fontSize: '20px', color: '#001f3f', textShadow: '0 0 8px #ffffff, 0 0 16px #ffffff' }}>
            🌐 It is a friendly website. Thanks for visiting — explore more! ✨
          </p>
        </div>
      </div>

      <style>
        {`
        @keyframes shine {
          0% { left: -100%; }
          50% { left: 100%; }
          100% { left: 100%; }
        }
        html {
          scroll-behavior: smooth;
        }
        `}
      </style>

      {/* DETECTION */}
      <div id="detection" style={{
        margin: '100px auto',
        maxWidth: '800px',
        textAlign: 'center',
        scrollMarginTop: `${headerHeight + 30}px`
      }}>
        <h2 style={{ marginBottom: '20px', fontSize: '32px', color: primaryColor }}>Detection</h2>
        <Detect />
      </div>

      {/* FAQ */}
<div
  id="faq"
  style={{
    textAlign: 'center',
    padding: '60px 20px',
    backgroundColor: '#f9f9f9',
    scrollMarginTop: `${headerHeight + 30}px`,
  }}
>
  <h2
    style={{
      fontSize: '32px',
      marginBottom: '30px',
      color: primaryColor,
    }}
  >
    Frequently Asked Questions
  </h2>

  <div style={{ maxWidth: '800px', margin: '0 auto' }}>
    {faqData.map((item, index) => (
      <div key={index} style={{ marginBottom: '20px' }}>
        <div
          onClick={() => toggleFAQ(index)}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#fff',
            padding: '15px 20px',
            borderRadius: '10px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '18px',
            transition: 'all 0.3s ease',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%' }}>
            <span style={{ textAlign: 'left', flex: 1 }}>{item.question}</span>
            <span
              style={{
                fontSize: '24px',
                color: '#007BFF',
              }}
            >
              {openIndex === index ? '-' : '+'}
            </span>
          </div>
        </div>
        {openIndex === index && (
          <div
            style={{
              marginTop: '10px',
              padding: '15px 20px',
              backgroundColor: '#e6f0ff',
              border: '2px solid #007BFF',
              borderRadius: '10px',
              fontSize: '16px',
              color: '#333',
              textAlign: 'left',
              transition: 'all 0.3s ease',
            }}
          >
            {item.answer}
          </div>
        )}
      </div>
    ))}
  </div>
</div>


      {/* CONTACT US */}
      <div id="about" style={{
        scrollMarginTop: `${headerHeight + 30}px`,
        padding: '80px 20px',
        backgroundColor: '#f0f8ff'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px', color: primaryColor }}>Contact Us</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target;
            fetch("https://formsubmit.co/madhurimadhuri0629@gmail.com", {
              method: "POST",
              body: new FormData(form),
            }).then(() => {
              alert("Message sent!");
              form.reset();
            });
          }}
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: 'rgba(0, 31, 63, 0.4)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            textAlign: 'left',
            color: 'white'
          }}
        >
          <input type="hidden" name="_captcha" value="false" />
          <div style={{ marginBottom: '20px' }}>
            <label>Name:</label>
            <input type="text" name="name" required style={{ width: '100%', padding: '10px', borderRadius: '5px' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label>Email:</label>
            <input type="email" name="email" required style={{ width: '100%', padding: '10px', borderRadius: '5px' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label>Message:</label>
            <textarea name="message" required rows="4" style={{ width: '100%', padding: '10px', borderRadius: '5px' }} />
          </div>
          <button type="submit" style={{
            padding: '10px 20px',
            borderRadius: '5px',
            backgroundColor: '#007BFF',
            color: 'white'
          }}>
            Submit
          </button>
        </form>
      </div>

      {/* FOOTER */}
      <footer style={footerStyle}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 30px' }}>
          <p style={{ marginBottom: '15px', fontSize: '20px', fontWeight: 'bold' }}>About This Project</p>
          <p style={{ marginBottom: '15px', fontSize: '16px', lineHeight: '1.7' }}>
            This project utilizes advanced AI for the detection and identification of animals in images, with potential integration into CCTV systems for real-time monitoring.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SimpleAnimalDetection;
