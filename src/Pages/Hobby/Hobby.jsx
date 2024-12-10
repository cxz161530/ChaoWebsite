import { useState } from "react";
import './Hobby.css';
import BUBU1 from '../../assets/BUBU1.png';
import BUBU2 from '../../assets/BUBU2.jpg';


function Hobby() {
    const images = [
        { src: BUBU1, year: 2017 },
        { src: BUBU2, year: 2023},
    
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [hover, setHover] = useState(false);
    const [yearsApart, setYearsApart] = useState("");
    const [yearsApartCorrect, setYearsApartCorrect] = useState(false);

    const loadNextImages = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const checkYearsApart = () => {
        const correctYearsApart =
            currentIndex > 0
                ? Math.abs(images[currentIndex].year - images[currentIndex - 1].year)
                : 0;
        setYearsApartCorrect(Number(yearsApart) === correctYearsApart);
    };

    return (
        <>
            <h2 style={{ textAlign: 'center', color: 'black' }}>My Hobby</h2>
            <section id="main-topic">
                <article>
                    <p>
                        Currently, I'm a software development student at Boston University where I am getting solid programming knowledge.
                    </p>
                    <p>
                        Previously, I was a demand planning manager at Onsemi supporting semiconductors supply chain management.
                    </p>
                    <p>
                        When I am not working, I enjoy going to the beach, being in nature, and spending time with my puppy Juicy and cat Kubda.
                    </p>
                </article>
                <h3 style={{ textAlign: 'center' }}>Guess How Many Years Apart Between 2 Pictures for Kubada</h3>
                <div id="app" style={{ textAlign: 'center' }}>
                    <img
                        src={images[currentIndex].src}
                        alt="Displayed"
                        onMouseOver={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        style={{
                            maxWidth: "300px",
                            maxHeight: "200px",
                            border: hover ? "2px solid orange" : "none",
                            transition: "border 0.3s",
                        }}
                    />
                    <div>
                        <button onClick={loadNextImages} className="gold-button">
                            {currentIndex < images.length - 1 ? "Next" : "Back"}
                        </button>
                    </div>
                    <label htmlFor="yearsApart">2 Pictures Years Apart:</label>
                    <input
                        type="number"
                        id="yearsApart"
                        value={yearsApart}
                        onChange={(e) => setYearsApart(e.target.value)}
                    />
                    <button onClick={checkYearsApart}>Check</button>
                    {yearsApartCorrect ? (
                        <p style={{ color: "green" }}>Correct!</p>
                    ) : (
                        <p style={{ color: "red" }}>Incorrect. Try again.</p>
                    )}
                </div>
            </section>
        </>
    );
}

export default Hobby;
