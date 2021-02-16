import React from 'react';
import { Chrono } from "react-chrono";

import { Data } from './data';

import styles from './style.module.css'

export const Job = () => {
    return (
        <section>
            <h2 className={styles.title}>Work <span>💻</span></h2>
            <Chrono
                items={Data}
                mode='VERTICAL'
                hideControls={true}
                flipLayout={true}
                 />
        </section>
    )
}
