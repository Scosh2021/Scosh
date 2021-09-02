import React, {useState, useEffect} from "react";
import { Container, Spinner } from "react-bootstrap";
import Card from "../Card";
import "./Eventdetail.css";
import axios from "axios";
import constants from "../../constants.json";

const Eventdetail = () => {
    const [blogData, setBlogData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
            .get(constants.baseURL + "/events/recent")
            .then((res) => setBlogData(res.data))
            .then((_) => console.log(blogData))
            .then(_=> setLoading(false))
            .catch((err) => console.error(err));
    }, []);

    let carddetails = [
        {
            title: "Title",
            body: "Body",
            size: "small",
            clr: "pink",
            tempLink: null
        },
    ];
    return (
        <div className="eventdetail">
            <Container>
                <div className="eventdetail_header">EVENTS</div>
                {loading ? (<div>
                    <Spinner animation="border" style={{color: "white"}} />
                </div>) : (<div>
                <div className="eventdetail_cardContainer">
                    <div className="eventdetail_cards">
                        <Card
                            size={carddetails[0].size}
                            clr={carddetails[0].clr}
                            title={blogData[0] ? blogData[0].title : carddetails[0].title}
                            body={blogData[0] ? blogData[0].body : carddetails[0].body}
                            eventLink={blogData[0] ? blogData[0].register : "https://www.google.com"}
                            image="https://picsum.photos/200"
                        />
                        <Card
                            size={carddetails[0].size}
                            clr="yellow"
                            title={blogData[1] ? blogData[1].title : carddetails[0].title}
                            body={blogData[1] ? blogData[1].body : carddetails[0].body}
                            eventLink={blogData[1] ? blogData[1].register : "https://www.google.com"}
                            image="https://picsum.photos/200"
                        />
                    </div>
                    <div className="blogs_cards">
                        <Card
                            size={carddetails[0].size}
                            clr={carddetails[0].clr}
                            title={blogData[2] ? blogData[2].title : carddetails[0].title}
                            body={blogData[2] ? blogData[2].body : carddetails[0].body}
                            eventLink={blogData[2] ? blogData[2].register : "https://www.google.com"}
                            image="https://picsum.photos/200"
                        />
                        <Card
                            size={carddetails[0].size}
                            clr="yellow"
                            title={blogData[3] ? blogData[3].title : carddetails[0].title}
                            body={blogData[3] ? blogData[3].body : carddetails[0].body}
                            eventLink={blogData[3] ? blogData[3].register : "https://www.google.com"}
                            image="https://picsum.photos/200"
                        />
                    </div>
                </div>
                </div>)}
            </Container>
        </div>
    );
};

export default Eventdetail;
