import Styles from "./SlidCard.module.css"

const SlidCard = ({data :{image,title}}) => {
    return (
        <div className={Styles.cards}>
            <img src={image} alt={title} />
            <h4>{title}</h4>
        </div>
    );
}

export default SlidCard;
