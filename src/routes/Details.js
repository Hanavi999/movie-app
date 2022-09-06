import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ManyInfo from '../components/ManyInfo';
import styles from '../components/ManyInfo.module.css';

function Details() {
    const {id} = useParams();
    const [datas, setDatas] = useState({});

    useEffect(() => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then(response => response.json())
        .then(json => {
            setDatas(json.data.movie);
        })
    }, []);
    console.log(datas);
    return (
        <div className={styles.container}>
                <ManyInfo 
                    background_image_original={datas.background_image}
                    medium_cover_image={datas.medium_cover_image}
                    url={datas.url}
                    title_long={datas.title_long}
                    rating={datas.rating}
                    runtime={datas.runtime}
                    genres={datas.genres}
                    download_count={datas.download_count}    
                    summary={datas.description_full}         
                />
        </div>
    );
}

export default Details;