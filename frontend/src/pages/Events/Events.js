import React from "react";
import EventsCSS from "./Events.module.css";
import { Container } from "react-bootstrap";
import EventCard from "../../components/EventCard/EventCard";
import axios from "axios";
import constants from "../../constants.json";
import { useState } from "react";
import { useEffect } from "react";

export default function Events() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios
            .get(constants.baseURL + "/events?page=" + page)
            .then((res) => setEvents(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className={EventsCSS.root}>
            <Container>
                <div className={EventsCSS.header}>EVENTS</div>
                <div className={EventsCSS.cardContainer}>
                    {events.map((event) => (
                        <EventCard
                            title={event.name}
                            body={event.description}
                            img={event.image.url}
                            registerLink={event.register}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
}
