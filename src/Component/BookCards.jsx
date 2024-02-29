import { useState } from "react";

import { FaHeart } from "react-icons/fa6";
import styles from "./BookCards.module.css";

const BookCards = ({ data ,handdelLikeList }) => {

    const {image, title , author, year , pages  } = data;
    const [like ,setlike] = useState(false);
    
    const LikeHandeler = () =>{
        handdelLikeList(data, like)
        setlike((like) => !like)
    }

    return (
        <div className={styles.card}>
           <img src={image} alt={title} />
           <div className={styles.info}>
                <h3>{title}</h3>
                 <p>{author}</p>
                 <div>
                     <apan>{year} </apan> 
                     <apan>{pages} pages</apan>
                 </div>
           </div>
            <button onClick={LikeHandeler} ><FaHeart color={like ? "red" : "white"} fontSize="1.8rem" /></button>
        </div>
    );
}

export default BookCards;
