import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import { faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "SQL",
    "PyTorch",
    "Hugging Face",
    "CUDA",
    "ChromaDB",
    "Scikit-learn",
    "Copilot Studio"

];

const labelsSecond = [
    "Docker",
    "GitHub Actions",
    "Databricks",
    "MLOps",
    "Azure ML Studio",
    "Azure Data Factory"


];

const labelsThird = [
    "Rust",
    "Java",
    "React",
    "JavaScript",
    "Kotlin",
    "HTML5",
    "CSS3",
    "Scala",
    "C"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>LLM & Agentic System</h3>
                    <p>Deploy LLM applications built on foundational models, with a focus on agentic architectures. From building RAG to architecting multi-agent ecosystems, I bring autonomous solutions into real-world products with the reliability and observability they need to succeed.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Development</h3>
                    <p>I have built different mobile app, Web applications, emulator, set up DevOps testing, CI/CD pipelines in an Agile settings with different colleagues and friends. My focus on such project are usually on backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMoneyBillTrendUp} size="3x"/>
                    <h3>Finance</h3>
                    <p>I bring experience in finance and business, along with effective communication skills, and I’m recognized by colleagues for my positive attitude, initiative, and openness to feedback</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                
            </div>
        </div>
    </div>
    );
}

export default Expertise;