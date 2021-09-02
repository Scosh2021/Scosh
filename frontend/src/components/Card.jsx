import React from "react";
import "./Card.css";
import { useHistory } from "react-router-dom";

const Card = ({ eventLink, blogId, size, clr, image, title, body }) => {
    const history = useHistory();
    // props are size : {small,large} ,clr :{pink,yellow} ,image:{image of card} ,title and boody
    return (
        <div
            className={`card ${size}`}
            onClick={() => {
                if (eventLink === "https://www.google.com") {
                    window.location.href = eventLink;
                } else {
                    console.log("here")
                    history.push(`/blog/${blogId}`);
                }
                return true;
            }}
        >
            <div className={`card_imageContainer ${clr}`}>
                <img src={image} className="card_image" alt="" />
            </div>
            <div className="card_details">
                <h3 className="card_title">{title}</h3>
                <p className="card_description">{body}</p>
            </div>
        </div>
    );
};

export default Card;
