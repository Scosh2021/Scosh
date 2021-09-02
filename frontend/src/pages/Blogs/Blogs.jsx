import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import Card from "../../components/Card";
import "./Blogs.css";
import constants from "../../constants.json"

const Blogs = () => {
    const [blogsData, setBlogsData] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(constants.baseURL + "/blogs/?page=" + page)
        .then(res => setBlogsData(res.data))
        .catch(err => console.error(err))
    }, [])

    useEffect(() => {
        if(blogsData.length !== 0) {
            // console.log(blogsData)
            setLoading(false)
        }
    }, [blogsData])

    let carddetails = [
        {
            title: "Title",
            body: "Body",
            size: "medium",
            clr: "pink",
        },
    ];
    return (
        <div className="blogs_root">
            <Container>
                <div className="blogs_header">BLOGS</div>
                {loading ? (<div><Spinner animation="border" /></div>): (
                    <>
                    {[...Array(4)].map((x, i) => (
                <div className="blogs_cardContainer">
                    <div className="blogs_cards">
                        { blogsData[2*i] && (<Card
                            size={carddetails[0].size}
                            clr={carddetails[0].clr}
                            blogId={blogsData[2*i]._id}
                            title={blogsData[2*i].title}
                            body={blogsData[2*i].content}
                            image={blogsData[2*i].images.length !== 0 ? blogsData[2*i].images[0].url : "https://picsum.photos/200"}
                        />)}
                        { blogsData[2*i+1] && (<Card
                            size={carddetails[0].size}
                            clr={carddetails[0].clr}
                            blogId={blogsData[2*i+1]._id}
                            title={blogsData[2*i+1].title}
                            body={blogsData[2*i+1].content}
                            image={blogsData[2*i+1].images.length !== 0 ? blogsData[2*i+1].images[0].url : "https://picsum.photos/200"}
                        />)}
                        
                    </div>
                </div> ))}
                    </>
                )}
            </Container>
        </div>
    );
};

export default Blogs;
