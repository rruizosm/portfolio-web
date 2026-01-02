import React, { useState, useEffect } from 'react';
import './navbar.css';
import { IoHomeOutline, IoPersonOutline, IoSchoolOutline, IoBicycleOutline, IoMailOutline } from "react-icons/io5";
import logo from '../../images/servicenow.svg';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('portada');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['portada', 'biography', 'academic', 'servicenow', 'hobbies', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className='navbar_section'>
      <div className='navbar'>
        <a href='#portada'
          className={`icon ${activeSection === 'portada' ? 'active' : ''}`}>
          <IoHomeOutline />
        </a>

        <a href='#biography'
          className={`icon ${activeSection === 'biography' ? 'active' : ''}`}>
          <IoPersonOutline />
        </a>

        <a href='#academic'
          className={`icon ${activeSection === 'academic' ? 'active' : ''}`}>
          <IoSchoolOutline />
        </a>

        <a href='#servicenow'
          className={`icon ${activeSection === 'servicenow' ? 'active' : ''}`}>
          <img src={logo} alt="ServiceNow" className="servicenow-logo" />
        </a>

        <a href='#hobbies'
          className={`icon ${activeSection === 'hobbies' ? 'active' : ''}`}>
          <IoBicycleOutline />
        </a>

        <a href='#contact'
          className={`icon ${activeSection === 'contact' ? 'active' : ''}`}>
          <IoMailOutline />
        </a>
      </div>
    </section>
  )
}
