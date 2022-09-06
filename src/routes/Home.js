import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { Link } from "react-router-dom";


import HighDownload from "../components/HighDownload";
import Animation from "../components/Animation";
import Romance from "../components/Romance";
import Adventure from "../components/Adventure";
import Header from "./Header";


function Home() {
    const [loading, setLoading] = useState(true);
    const settingLoading = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?genre=animation&limit=150&sort_by=year`)
        ).json();
        setLoading(false);
    };
    useEffect(() => {
        settingLoading();
    }, []);
    return (
        <div className={styles.container}>
            {loading ? (
            <div className={styles.loader}>
                <span>Loading...</span>
            </div>
            ) : (
                <div className={styles.main}>
                    <Header />
                    <header className={styles.headerDemo}></header>
                    <h1 className={styles.movieT}>
                        <Link to={'/mostDownload'} className={styles.title} state={{
                                genre: "",
                                option: 'download_count'
                            }}>Most download</Link>
                    </h1>
                    <HighDownload />
                    <br />
                    <h1 className={styles.movieT}>
                        <Link to={'/adventure'} className={styles.title} state={{
                                genre: 'Adventure',
                                option: 'year'
                            }}>Adventure Movie</Link>
                    </h1>
                    <Adventure />
                    <br />
                    <h1 className={styles.movieT}>
                        <Link to={'/animation'} className={styles.title} state={{
                                genre: 'Animation',
                                option: 'year'
                            }}>Animation Movie</Link>
                    </h1>
                    <Animation />
                    <br/>
                    <h1 className={styles.movieT}>
                        <Link to={'/romance'} className={styles.title} state={{
                                genre: 'Romance',
                                option: 'year'
                            }}>Romance Movie</Link>
                    </h1>
                    <Romance />
                    <br/>
                </div>
            )
            }
        </div>
    );
}

export default Home;