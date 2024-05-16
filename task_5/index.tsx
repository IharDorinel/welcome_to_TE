'use client';

import { useState } from 'react';
import useSWR from 'swr';

import styles from './page.module.css';

import { fetchOnePost } from '@/libs/fetchOnePost';

const ComponentOne = () => {
    const { data } = useSWR('custom_key_1', fetchOnePost);
    //...some logic

    return data ? (
        <div className={styles.card}>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <span>ComponentOne</span>
        </div>
    ) : (
        <div>...Loading ComponentOne</div>
    );
};

const ComponentTwo = ({key}) => {
    const data = useSWR(key, () => fetchOnePost({ delayMS: 2000 }));
    //...some logic

    return (
        <div className={styles.card}>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <span>ComponentTwo</span>
        </div>
    )
};

export default function Home() {
    const [componentTwoKey, setComponentTwoKey] = useState(null);

    const loadComponentTwoData = async () => {
        const key = 'custom_key_2' + Date.now()
        setComponentTwoKey(key)
    }

    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <ComponentOne />
                {componentTwoKey ? (
                    <ComponentTwo key={componentTwoKey} />
                ) : (
                    <button className={styles.btn} onClick={() => loadComponentTwoData()}>
                        Show ComponentTwo
                    </button>
                )}
            </div>
        </main>
    );
}
