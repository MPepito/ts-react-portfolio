import React from "react";
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