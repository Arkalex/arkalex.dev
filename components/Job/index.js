import React from 'react';
import { Chrono } from "react-chrono";

import { Data } from './data';

import styles from './style.module.css'

export const Job = () => {
    return (
        <section id="work" className={styles.column}>
            <h2 className={styles.title}>Work <span>💻</span></h2>
            <Chrono
                items={Data}
                mode='VERTICAL'
                hideControls={true}
                theme={
                    {
                        primary: "#4686a6",
                        secondary: "#e9ff90 ",
                    }
                }
            >
            <div>
                <p>I’m helping Le Creuset to update their entire site for product management from scratch, updating their old look and feel and it tech. (React, Typescript, Sass, Git, Auth0)</p>
            </div>
            <div>
                <p>During my time at Pasiona Consulting, I helped a lot of clients to build the solution they were looking for.</p>
                <ul>
                    <li>Educo: this NGO needed a documental gallery to save and categorize all the images that they had from over the world. (React, .NET, Microsoft Cognitives Services Faces API).</li>
                    <li>DMG Mori: we achieved to develop a management site to allow them to control all the selling process of their machine tools, from building process to the customer delivery. (React, .NET, Sharepoint Online)</li>
                    <li>Ferrovial: as one of the biggest companies in Spain they had tons of documents stored locally, and we achieved to build a solution to manage all their documents online. (React, .NET, Sharepoint Online)</li>
                    <li>GoTalent: I achieved their requirements building their website usable for totally blind people, getting to achieve AA level accessibility requirements according to WCAG. (HTML, CSS and Javascript)</li>
                    <li>Catalana Occidente: I helped updating their entire intranet. (HTML, CSS, Javascript, .NET, MySQL)</li>
                </ul>
            </div>
            <div>
                <p>I helped our customers to implement Inbenta’s product, based on Natural Language Processing and semantic search) into their websites. (HTML, CSS, Javascript, PHP)</p>
            </div>
            <div>
                <p>Their last project (series.ly) was one or the biggest websites in its time, and I helped them building their new plattform (a spanish version of IMDB) (HTML, CSS, Javascript, PHP)</p>
            </div>
            <div>
                <p>They wanted to build a mobile app with games and prizes, and I helped them with the backend part. (PHP, MySQL)</p>
            </div>
            </Chrono>
        </section>
    )
}
