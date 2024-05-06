import profilePic from '../../assets/profile_pics/profilePhoto.jpg'
import styles from './Card.module.css'
import PropTypes from 'prop-types';

function Card(props) {
    return (
        <div className={styles.card}>
        <img className={styles.profilePic} src={props.image} alt={props.title+ "'s Profile Picture"} />
        <h2 className={styles.title}>{props.title}</h2>
        <p>{props.description}</p>
        <button className={styles.button}>{props.button}</button>
        </div>
    );
}

Card.defaultProps = {
    title: "John Doe",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: profilePic,
    button: "Click me"
}

Card.prototype = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    button: PropTypes.string
}

export default Card;