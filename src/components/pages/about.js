import React from 'react';

import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
  return (
    <div className='content-page-wrapper'>
      <div className='left-column'
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className='right-column'>
        
        <p>Soy una desarrolladora <i>Full Stack</i> con un sólido conocimiento en las tecnologías fundamentales del desarrollo web. Poseo experiencia en <strong>HTML</strong>, <strong>CSS</strong> y <strong>JavaScript</strong>, así como en <strong>Python</strong> y <strong>React</strong>, lo que me permite desarrollar aplicaciones web interactivas y de alto rendimiento.</p>
        <p>Tengo habilidades en la creación y comprensión de <strong>Diagramas UML</strong>, lo que me permite visualizar y planificar de forma efectiva el desarrollo de sistemas complejos. Además, tengo un conocimiento en el manejo de bases de datos, tanto relacionales como no relacionales, incluyendo <strong>MySQL</strong> y <strong>MongoDB</strong>, lo que me permite diseñar y gestionar estructuras de datos eficaces. Entiendo los conceptos de autenticación y autorización, lo que me capacita para implementar soluciones seguras en mis proyectos. Estoy familiarizada con el trabajo con <strong>APIs</strong>, especialmente con <strong>RESTful APIs</strong>, lo que me permite integrar aplicaciones de manera eficiente y escalable.</p>
        <p>Cuento con experiencia en herramientas de control de versiones, siendo <strong>Git</strong> mi principal aliada en la gestión de proyectos, lo que me permite colaborar de manera efectiva en entornos de trabajo en equipo. Además, tengo conocimientos en los principios de diseño de <strong>UI/UX</strong>, lo que me ayuda a crear interfaces intuitivas y centradas en el usuario, mejorando así la experiencia general del usuario en mis aplicaciones.</p>
        <p>Estoy entusiasmada por compartir mis habilidades y contribuir a proyectos desafiantes en el futuro.</p>

      </div>
        
    </div>
  );
}