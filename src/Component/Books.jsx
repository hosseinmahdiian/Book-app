import { useState } from "react";
import { books as bookdata } from "../constants/mockData";

import BookCards from "./BookCards";
import SlidCard from "./SlidCard";
import styles from "./Books.module.css"
import Serch from "./search";


const Books = () => {
    const [liked ,setliked] = useState([]);
    const [search ,setsearch] = useState([]);
    const [books ,setbooks] = useState(bookdata);


    const searchhandler = () => {
        if (search){
            const newbook = bookdata.filter((book) => 
            book.title.toLocaleLowerCase().includes(search))
            setbooks(newbook)
        } else {
            setbooks(bookdata)
        }
    }
    const handdelLikeList = (book , status) => {
        if(status){
            const newLikeList = liked.filter((item) => item.id !== book.id);
            setliked(newLikeList);
        } else {
            setliked( (item) => [... item ,book])
    
        }
    }

    return (
        <>
        <Serch search={search} setsearch={setsearch} searchhandler={searchhandler} />
            <div className={styles.continer} >
                <div className={styles.cards} >
                    {books.map((book) => (
                        <BookCards key={book.id} data={book} handdelLikeList={handdelLikeList} />
                    ))} 
                </div>
                <div className={styles.favorites}>
                    {!! liked.length && <div><h4>Favorites</h4>{liked.map((book) => ( <SlidCard key={book.id} data={book}/>))}</div>}
                </div>
            </div>
        </>
    );
}

export default Books;
