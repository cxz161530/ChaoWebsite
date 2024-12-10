import myImage from '../../assets/Chaozheng.jpeg'; 
import './Home.css'
function Home() {
    
    return (
        <>
        <h2 style={{textAlign: 'center'}}>Welcome to My Homepage</h2>
        <section id="main-topic">
        <article>
        
                <img src={myImage} alt="Chaozheng Image" />
                <p>
                    Hello and welcome to my personal site! I'm Chaozheng Zhu, formerly a Supply Chain Manager at a semiconductor company based in San Francisco, California. 
                </p><p>    
                    Currently, I am a full-time student pursuing a Master's degree in Software Development at Boston University's MET College. This marks my second Master's degree, and I am looking forward to graduating in 2024. I had previously obtained an MS degree from UT Dallas several years ago.
                </p><p>
                    Over the past few years, I've been immersed in roles related to supply chain and data analysis. Analyzing vast amounts of data weekly prompted me to delve into programming, dramatically improving my daily work efficiency. I've developed a strong interest in programming and participating in workflow design processes, leading me to pursue a second Master's degree at BU to further enhance my skills. My goal is to become a Software Developer upon graduating from BU!
                </p>
            
                <p><i>Say Hi Anytime: </i></p>
                
                <p>czzhu940222@gmail.com</p>

        </article>
        </section>

        

       
    </>

    );
}

export default Home
