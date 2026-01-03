import React from 'react'
import './biography.css'

import photo12 from '../../images/images_biography/FOTO-12.jpg';
import photo17 from '../../images/images_biography/FOTO-17.jpg';
import photo20 from '../../images/images_biography/FOTO-20.jpg';

const images = [
  { id: 1, src: photo12, alt: 'Collaborating at UPC NanoSat Lab' },
  { id: 2, src: photo17, alt: 'Working on ServiceNow SPM' },
  { id: 3, src: photo20, alt: 'Professional Headshot' },
];

export default function Biography() {
  return (
    <section className='biography_sec' id='biography'>
      <div className='bio_container glass-panel'>
        <div className='text'>
          <h1 className='section-title gradient-text'>Biography</h1>
          <div className='divider'></div>

          <div className='biography_texto'>
            <p className='intro'>👋 Hi! I am Rubén</p>

            <p>
              I am a Telecommunications Engineering graduate from UPC with a passion for technology, process automation, and developing efficient solutions. I am driven by continuous learning and applying knowledge to create tangible real-world impact.
            </p>

            <p>
              During my third year at university, I had the opportunity to collaborate with <span className='enphasis_text'>UPC’s NanoSat Lab project</span>, contributing to the development of a nanosatellite for Earth orbit. This experience gave me my first hands-on exposure to applying programming to real-world engineering challenges and inspired my Final Degree Thesis on Performance Evaluation of the NB-IoT Protocol for NGSO Constellations.
            </p>

            <p>
              Currently, I work as a <span className='enphasis_text'>ServiceNow Developer</span> at Aloha Clouds, specializing in the <span className='enphasis_text'>SPM module</span> for a leading bank client. I also serve an American client, handling both technical and functional responsibilities. This role has strengthened my skills in collaborating with international teams, managing complex requirements, and delivering solutions aligned with strategic business objectives.
            </p>

            <p>
              I began my ServiceNow career at NTT Data, working directly with Ibercaja on platform maintenance and service continuity. This role honed my expertise in incident management, continuous improvement, client communication, and the ITSM module.
            </p>

            <p>
              From the outset, my goal has been to combine technical depth with direct client engagement, participating in projects that challenge me, foster growth, and deliver real value.
            </p>
          </div>
        </div>

        <div className='images_portfolio'>
          {images.map((img) => (
            <div
              key={img.id}
              className='portfolio-item'
              style={{ backgroundImage: `url(${img.src})` }}
              aria-label={img.alt}
              role="img"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
