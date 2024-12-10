import React, {useRef} from 'react';
import './Resume.css';
import html2pdf from "html2pdf.js";


const Resume = () => {
    const resumeRef = useRef();

    const downloadResume = () => {
      const element = resumeRef.current;
      const options = {
        margin: 1,
        filename: "Chaozheng_Zhu_Resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };
      html2pdf().set(options).from(element).save();
    };
  
    return (
      <div className="resume-container" ref={resumeRef}>
        {/* Header Section */}
        <div className="resume-header">
          <h1>Chaozheng Zhu</h1>
          <p>San Francisco, CA • Czzhu940222@gmail.com • 469-543-7822</p>
        </div>
  
        {/* Education Section */}
        <section className="resume-section">
          <h2>Education</h2>
          <div>
            <h3>Boston University, Boston, MA</h3>
            <p>M.S. Software Engineering; GPA: 3.45 • Dec 2024</p>
            <p>Relevant Coursework: Web Development, Data Structure and Algorithm, Agile Software Development</p>
          </div>
          <div>
            <h3>The University of Texas at Dallas, Dallas, TX</h3>
            <p>M.S. Supply Chain Management; GPA: 3.5 • May 2018</p>
            <p>Dean’s Excellence Scholarship</p>
          </div>
        </section>
  
        {/* Experience Section */}
        <section className="resume-section">
          <h2>Experience</h2>
          <div>
            <h3>Tesla, Palo Alto, CA</h3>
            <p>Software Development Intern – Frontend Engineer • Sep 2024 – Current</p>
            <ul>
              <li>
                Developed a full-stack web application using MVVM architecture, consolidating tools into a unified platform for 12 program managers.
              </li>
              <li>
                Built custom React components, integrated APIs, and visualized metrics using Tableau to reduce report preparation time by 75%.
              </li>
              <li>Contributed to the Tesla Design Library by developing two reusable React components.</li>
            </ul>
          </div>
          <div>
            <h3>CCIC, Sunnyvale, Remote</h3>
            <p>Web Developer • Apr 2024 – Aug 2024</p>
            <ul>
              <li>
                Rebuilt the website using TypeScript, Node.js, MySQL, and Tailwind CSS to meet modern design standards.
              </li>
              <li>
                Led the development of a donation webpage, facilitating over $40K in contributions using Next.js.
              </li>
            </ul>
          </div>
          <div>
            <h3>General Assembly, Boston, MA</h3>
            <p>Software Development Fellow • Jan 2024 – Apr 2024</p>
            <ul>
              <li>Built full-stack applications including an e-commerce site, ticket management system, and inventory tracker.</li>
            </ul>
          </div>
        </section>
  
        {/* Skills Section */}
        <section className="resume-section">
          <h2>Skills</h2>
          <ul>
            <li>Languages: JavaScript, TypeScript, HTML/CSS, Python, Go, Java, SQL, PHP</li>
            <li>Frameworks: React, Node.js, GraphQL, Django, Flask, Webpack, Tailwind CSS, Material-UI, Vue.js</li>
            <li>Platforms: AWS, Azure, MongoDB</li>
          </ul>
        </section>
  
        <button onClick={downloadResume} style={{ marginTop: "20px", background: "pink"}}>
          Download Resume
        </button>
      </div>
    );
  };
  
  export default Resume;