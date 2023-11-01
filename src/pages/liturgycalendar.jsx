import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function Liturgycalendar() {
    const [eventlist, setEventList] = useState([]);
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        axios.get('https://cristolive.org/api/liturgical/17570/upcoming')
            .then(response => {
                const data = response?.data?.data;
                if (Array.isArray(data)) {
                    const events = data?.map((item, index) => {
                        const liturgyOn = item.liturgy_on;
                        const customFormat = 'YYYY-MM-DD hh:mm A';
                        const date = liturgyOn ? moment(liturgyOn, customFormat) : null;

                        if (date && date.isBefore(moment())) {
                            return null;
                        }

                        const formattedDate = date ? date.format('YYYY-MM-DD') : 'N/A';
                        const formattedTime = date ? date.format('hh:mm A') : 'N/A';

                        let DefaultTextcolor = 'black';
                        let color = '#bbf7d0';

                        // Set color based on the language
                        if (item.language_id[1] === 'English') {
                            color = '#bbf7d0';
                        } else if (item.language_id[1] === 'Kannada') {
                            color = '#fbe0a3';
                        } else if (item.language_id[1] === 'Tamil') {
                            color = '#a3e7fb';
                        } else if (item.language_id[1] === 'Malayalam') {
                            color = '#d5bbf7';
                        } else if (item.language_id[1] === 'Chinese') {
                            color = '#ffb5b5';
                        }

                        return {
                            id: item.id,
                            title: `${item.language_id[1]} - ${formattedTime}`,
                            date: formattedDate,
                            color: color,
                            textColor: DefaultTextcolor,
                            datetime: item.liturgyOn
                        };
                    }).filter(event => event !== null);

                    // Sort the events array by date and time
                    events?.sort((a, b) => {
                        return a.datetime - b.datetime;
                    });

                    setEventList(events);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const openModal = () => {
        setShowModal(true);
    };

    const handleBookMass = () => {
        window.open('https://massbooking.shrinebasilicabangalore.org/', '_blank');
    };

    const handleCancel = () => {
        setShowModal(false);
    };
    return (
        <>
            <Header />
            <div className="home-mother">
                <div className="container" style={{ padding: "30px" }}>
                    <h3 className="entry-title motherhouse">
                        <h2 style={{ color: "#760f08", fontWeight: "bold" }}>Liturgy Calendar</h2>
                    </h3>
                    <div className="brudcrums">
                        <span className="pagename" style={{ color: "#000", fontWeight: "bold" }}><Link to={"/"} style={{ textDecoration: "none" }}> Home &nbsp;»&nbsp;{" "}</Link></span>
                        <span className="pagename" style={{ color: "#000", fontWeight: "bold" }}>Liturgy Calendar</span>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
                    events={eventlist}
                    initialView="dayGridMonth"
                    eventClick={openModal}
                    headerToolbar={{
                        start: 'prev,next today',
                        center: 'title',
                        end: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
                    }}
                    themeSystem="bootstrap"
                    eventContent={renderEventContent}
                    dayMaxEventRows={4}
                />
            </div>
            <br />
            <Footer />


            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header>
                    <Modal.Title>Book Mass</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-end">
                        <Button variant="primary" onClick={handleBookMass} style={{ backgroundColor: '#002147', color: 'white' }}>
                            Book Mass
                        </Button>
                        &nbsp;&nbsp;
                        <Button variant="secondary" onClick={handleCancel} style={{ backgroundColor: '#dc3545', color: 'white' }}>
                            Close
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>


        </>
    );
}

function renderEventContent(eventInfo) {
    return (
        <div>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </div>
    );
}

export default Liturgycalendar;
