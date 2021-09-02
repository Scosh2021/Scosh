import React from "react";
import WorkshopsCSS from "./Workshops.module.css";
import { Container } from "react-bootstrap";
import EventCard from "../../components/EventCard/EventCard";
import axios from "axios";
import constants from "../../constants.json";
import { useState } from "react";
import { useEffect } from "react";

export default function Workshops() {
    const [workshops, setWorkshops] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios
            .get(constants.baseURL + "/workshops?page=" + page)
            .then((res) => setWorkshops(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className={WorkshopsCSS.root}>
            <Container>
                <div className={WorkshopsCSS.header}>WORKSHOPS</div>
                <div className={WorkshopsCSS.cardContainer}>
                    {workshops.map((workshop) => (
                        <EventCard
                            title={workshop.name}
                            body={workshop.description}
                            img={workshop.image.url}
                            registerLink={workshop.register}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
}
