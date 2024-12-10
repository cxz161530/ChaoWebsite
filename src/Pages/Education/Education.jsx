import { useState, useEffect } from "react";
import './Education.css';
import bookImage from '../../assets/booklogo.jpg'; 

function Education() {
    const [educationData, setEducationData] = useState([]);

    useEffect(() => {
        // Fetch the education JSON data
        fetch('/education.json')
            .then((response) => response.json())
            .then((data) => setEducationData(data))
            .catch((error) => console.error("Error fetching education data:", error));
    }, []);

    return (
        <>
            <h2 style={{ textAlign: 'center', color: 'black'}}>My Education</h2>
         

            <section id="main-topic">
                <table className="education-table">
                    <thead>
                        <tr>
                            <th>School</th>
                            <th>Program/Major</th>
                            <th>Type</th>
                            <th>Year Conferred</th>
                        </tr>
                    </thead>
                    <tbody>
                        {educationData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.School}</td>
                                <td>{item["Program/Major"]}</td>
                                <td>{item.Type}</td>
                                <td>{item["Year conferred"]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    );
}

export default Education;
