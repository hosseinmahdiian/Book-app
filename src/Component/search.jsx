import { IoSearchSharp } from "react-icons/io5";
import stylyes from "./search.module.css"

const Serch = ( {search,setsearch,searchhandler}) => {
    return (
        <div className={stylyes.search}>
            <input 
             type="text"
             placeholder="search title" 
             value={search}
             onChange={(e) => setsearch(e.target.value.toLowerCase())}
              />
           <button onClick={searchhandler}> <IoSearchSharp/></button>
        </div>
    );
}

export default Serch;
