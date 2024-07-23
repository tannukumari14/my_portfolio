import React from 'react';

const skills = [
  { name: 'HTML', description: 'I have a strong grasp of HTML, demonstrated by completing tasks on FreeCodeCamp and creating multiple responsive web projects. My experience includes developing detailed and user-friendly front-end pages.' },
  { name: 'CSS', description: 'I have extensive experience with CSS, having designed and styled multiple responsive web projects. My skills include creating visually appealing and user-friendly layouts using CSS and Bootstrap.' },
  { name: 'JavaScript', description: 'I have a solid understanding of basic JavaScript, which I\'ve applied in converting flowcharts into functional code and solving DSA problems. My skills include implementing dynamic and interactive features on web pages.' },
  { name: 'React', description: 'I have experience with React, having built multiple responsive web applications. My skills include creating reusable components, managing state, and fetching data from APIs using React.' },
  { name: 'Python', description: 'I have a basic understanding of Python, which I\'ve applied in solving Flask problems and building simple applications. My skills include writing clean and efficient code using Python.' },
  { name: 'Unix', description: 'I have experience with Unix, having used it to navigate the file system, create directories, and write shell scripts. My skills include using Unix commands to perform various tasks.' },
  { name: 'GitHub', description: 'I have experience with GitHub, having used it to store and manage code for my projects. My skills include creating repositories, pushing code, and collaborating with others using GitHub.' },
];

const About = () => (
  <div id="about">
    <h2>About Me</h2>
    <p>
      Hi, I'm Tanu Kumari, a dedicated and passionate web developer with a background in Arts.
      Did schooling in Arts background. I pursued further skills development at Navgurukul.
      Here, I honed my expertise in HTML, CSS, JavaScript, React, Python, Unix, GitHub, and more.
      I am enthusiastic about leveraging technology to create impactful solutions and am keen to
      contribute to the tech industry through innovative projects and continuous self-improvement.
      I have a passion for creating intuitive and responsive web applications.
      I am very enthusiastic about learning new technologies and implementing them in my projects.
    </p>
    <h3>Skills</h3>
    <div className="skills-container">
      {skills.map((skill) => (
        <div key={skill.name} className="skill-box">
          <h4>{skill.name}</h4>
          <p>{skill.description}</p>
        </div>
      ))}
    </div>
    <h3>Certificates</h3>
    <p>
      <a href="https://drive.google.com/file/d/1-7_Sfb45Y6jshAQoEP4tLPqn7kk6XHEC/view" className="certificate-link accenture" target="_blank" rel="noopener noreferrer">
        Accenture Internship (08/2022 - 12/2022)
      </a><br/>
      <a href="https://www.example.com/software-engineering-diploma" className="certificate-link diploma" target="_blank" rel="noopener noreferrer">
        Software Engineering Diploma (12/2021 - 12/2022)
      </a><br/>
      Navgurukul Foundation For Social Welfare
    </p>
    <h3>Education</h3>
    <p>
      Software Engineering Diploma<br/>
      Navgurukul Foundation for Social Welfare<br/>
      2021 - Present
    </p>
    <p>
      Bachelor's of Arts Program (Pursuing)<br/>
      School of Open Learning, University of Delhi<br/>
      New Delhi<br/>
      Courses: In 2nd Year
    </p>
    <h4>Senior Secondary Education</h4>
    <p>
      Sarvodaya Co-Ed Sr. Sec School, New Delhi<br/>
      75%
    </p>
    <h4>Secondary Education</h4>
    <p>
      Sarvodaya Co-Ed Sr. Sec School, New Delhi
    </p>
  </div>
);

export default About;
