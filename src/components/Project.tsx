import React from "react";
import gameboy from '../assets/images/gameboy.png';
import Rag from '../assets/images/Rag.png';
import mockNirlabJEPA from '../assets/images/mockNirlabJEPA.png';
import mockJavion from '../assets/images/MockJavion.png';
import mockVol from '../assets/images/mockVol.png';
import mockPocket from '../assets/images/mockPocket.png';
import mockTsne from '../assets/images/mockTsne.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">

            <div className="project">
                <a href="https://github.com/chalune-dev/gameboy" target="_blank" rel="noreferrer"><img src={gameboy} className="zoom" alt="thumbnail" width="85%"/></a>
                <a href="https://github.com/chalune-dev/gameboy" target="_blank" rel="noreferrer"><h2>Gameboy emulator in Rust</h2></a>
                <p>A Game Boy emulator written in Rust from scratch, that runs Pokemon Red. We have done this project between five friends, during the time of a long weekend. Our hope was that by the end of the weekend, we would have a working emulator to play Pokemon Red. The goal has been achieved</p>
            </div>

            <div className="project">
                <a href="https://github.com/MPepito/PromptMeLLMBackend" target="_blank" rel="noreferrer"><img src={Rag} className="zoom" alt="thumbnail" width="105%"/></a>
                <a href="https://github.com/MPepito/PromptMeLLMBackend" target="_blank" rel="noreferrer"><h2>Interactive AI Portfolio: From Recruiter Question to Booked Meeting in Seconds</h2></a>
                <p>I built an AI-powered portfolio system that allows recruiters to interact with my professional background through natural language queries and book meetings. The system features a FastAPI backend enhanced with Retrieval-Augmented Generation (RAG) using ChromaDB for semantic search across professional documents such as experience, skills, and education. 
                    The pipeline employs sentence-transformers to encode documents and queries into dense vector embeddings, enabling similarity search and context retrieval. Retrieved context is then passed to a HuggingFace-hosted LLM through the HuggingFace Inference API to generate coherent, context-grounded responses. The frontend, developed in React, provides a real-time query interface and is deployed via GitHub Pages, while the backend is containerized with Docker and deployed on HuggingFace Spaces</p>
            </div>
        
            <div className="project">
                <a href="https://www.nirlab.com/" target="_blank" rel="noreferrer"><img src={mockNirlabJEPA} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.nirlab.com/" target="_blank" rel="noreferrer"><h2>Latent Space Mapping for Cocaine Origin Classification Using Scikit-learn and Autoencoders in PyTorch</h2></a>
                <p>Developed machine learning models for supervised classification (KNN) and unsupervised clustering (K-means, DBSCAN) and a autoencoder in PyTorch to map drug samples into a latent space, identifying cocaine’s origin based on chemical composition. Benchmarked the model as part of a research collaboration with NIRLAB and the EPFL lab of Computational Neuroscience</p>
            </div>

            <div className="project">
                <a href="https://www.nirlab.com/" target="_blank" rel="noreferrer"><img src={mockTsne} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.nirlab.com/" target="_blank" rel="noreferrer"><h2>Optimizing Cocaine Seizure Profiling</h2></a>
                <p>My research project explored the feasibility of integrating portable spectroscopic techniques,
                such as Near Infrared (NIR) and Raman spectroscopy, into cocaine seizure profiling.
                By evaluating clustering methods combined with dimensionality reduction, this method
                uncover chemical links among samples and determine common sources. The
                findings demonstrate that Raman spectroscopy, when coupled with dimensionality reduction
                techniques like t-SNE, significantly improves clustering performance by organizing spectral
                data into separable patterns. K-means clustering exhibited strong performance, while
                DBSCAN and HDBSCAN faced limitations due to varying cluster densities.</p>
            </div>

            <div className="project">
                <a href="https://github.com/PocketTutor-Team/pockettutor-app" target="_blank" rel="noreferrer"><img src={mockPocket} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/PocketTutor-Team/pockettutor-app" target="_blank" rel="noreferrer"><h2>PocketTutor</h2></a>
                <p>With friends we noticed that students struggle to find quick help when they need it, which can be really stressful and frustrating. To solve this, we created a campus-specific tutoring app that instantly connects students with available tutors. Our app is built using Kotlin, Jetpack Compose, JavaScript, Cloud Functions, and Firebase. I am happy to make a live demo when we meet.</p>
            </div>

            <div className="project">
                <a href="https://github.com/MPepito" target="_blank" rel="noreferrer"><img src={mockJavion} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MPepito" target="_blank" rel="noreferrer"><h2>Software-Defined Radio System for Live Aircraft Tracking via ADS-B</h2></a>
                <p>Developed a Java-based application that decodes ADS-B messages from aircraft using the AirSpy R2 software-defined radio, capturing signals on the 1090 MHz frequency to extract real-time flight data such as identity, speed, and position, and visualizing this information on an interactive map for live air traffic monitoring.</p>
            </div>

            <div className="project">
                <a href="https://github.com/MPepito" target="_blank" rel="noreferrer"><img src={mockVol} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MPepito" target="_blank" rel="noreferrer"><h2>Integrating Macroeconomic Signals for Volatility Forecasting with GARCH-MIDAS and PyTorch</h2></a>
                <p>Improved future's volatility forecasts by integrating macroeconomic data (WASDE) using a GARCH-MIDAS framework. Enhanced model performance with PCA and Bayesian Structural Time Series (BSTS), deployed using PyTorch and scikit-learn.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;