import styles from "./ManyInfo.module.css";
import { Link } from "react-router-dom";

function ManyInfo({background_image_original, medium_cover_image, summary, title_long, rating, runtime, genres, download_count}) {
    return (
        <div>
            <img className={styles.bg} src={background_image_original} alt="movie-backgrond"/>           
            <div className={styles.show}>
                <img className={styles.img} src={medium_cover_image} alt="movie-img"/>
                <div className={styles.textbox}>
                    <h1 className={styles.title}>{title_long}</h1>
                    <ul>
                        <li>Rating {rating}</li>
                        <li>Runtime {runtime}</li>
                        <li>Download {download_count}</li>
                        <li className={styles.summary}>
                            <h3 className={styles.summaryName}>
                            Summary
                            </h3>
                            {summary}
                        </li>
                        <li className={styles.back}><Link to={'/'} className={styles.backHome}>돌아가기</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default ManyInfo;