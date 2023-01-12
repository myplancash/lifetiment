import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <style jsx>{`
        .footer {
          width: 100%;
          color: white;
          background-color: #1803A5;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1em 0;
        }
      `}</style>
      <p>
        &copy; <a href="https://spacejelly.dev">Lifetiment inc</a>, {new Date().getFullYear()} {/* &amp; Images via <a href="https://unsplash.com/">unsplash.com</a> */}
      </p>
    </footer>
  )

}

export default Footer;