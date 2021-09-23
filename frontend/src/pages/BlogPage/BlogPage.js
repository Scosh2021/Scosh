import React, { useState, useEffect } from "react";
import BlogPageCSS from "./BlogPage.module.css";
import { useParams } from "react-router";
import axios from "axios";
import constants from "../../constants.json";

export default function BlogPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        axios
            .get(constants.baseURL + "/blogs/" + id)
            .then((res) => setData(res.data))
            .then((_) => setLoading(false))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className={BlogPageCSS.root}>
            <div className={BlogPageCSS.container}>
                {loading ? (
                    <h1>Loading</h1>
                ) : (
                    <div className={BlogPageCSS.main}>
                        <h1>{data.title ?? "TITLE"}</h1>
                        <h6>{data.author ?? "AUTHOR"}</h6>
                        <img
                            src={
                                data.images
                                    ? data.images[0].url
                                    : "https://picsum.photos/400"
                            }
                            alt="error"
                        />
                        {/* <p id="content">{data.content}</p> */}
                        <div
                            className={BlogPageCSS.blogdata}
                            dangerouslySetInnerHTML={{ __html: data.content }}
                        />
                    </div>
                )}
                {/* <div className={BlogPageCSS.sidepanel}>
                    <div className={BlogPageCSS.sideCard}>
                        <img src="https://picsum.photos/250" alt="side" />
                        <h1>Title</h1>
                        <h6>Author</h6>
                    </div>
                    <div className={BlogPageCSS.sideCard}>
                        <img src="https://picsum.photos/250" alt="side" />
                        <h1>Title</h1>
                        <h6>Author</h6>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
