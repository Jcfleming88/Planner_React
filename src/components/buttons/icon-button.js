import question from "../../images/icons/question.png";
import "../../styles/theme.css"

export const IconButton = ({ imageUrl = null, alt = "", bgColour = null, onClick = null }) => {
    const imgSrc = imageUrl || question;
    const backgroundColour = bgColour || 'var(--primary-dark-50)';

    return (
        <button className="icon-button" onClick={onClick} style={{backgroundColor: backgroundColour}}>
            <img className="icon-image" src={imgSrc} alt={alt} />
        </button>   
    );
}