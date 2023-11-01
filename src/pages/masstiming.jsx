import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const scheduleData = [
    {
        title: 'Morning :',
        items: ['06.15 a.m. - English', '07.00 a.m. - Tamil', '09.00 a.m. - Kannada', '11.00 a.m. - Tamil'],
    },
    {
        title: 'Evening :',
        items: [
            '06.00 p.m.',
            'Monday, Tuesday, Friday – Tamil',
            'Wednesday - Kannada',
            'Thursday - English',
        ],
    },
    {
        title: 'SATURDAYS',
        items: [
            '06.00 a.m. - English',
            '07.00 a.m. - Tamil',
            '09.00 a.m. - Kannada',
            '10.00 a.m. - English',
            '11.00 a.m. - Tamil',
            '04.00 p.m. - Konkani',
            '05.00 p.m. - Malayalam',
            '06.00 p.m. - Tamil',
        ],
    },
    {
        title: 'SUNDAYS',
        items: [
            '06.00 a.m. - English',
            '07.00 a.m. - Tamil',
            '08.00 a.m. - Tamil',
            '09.15 a.m. - Kannada',
            '11.00 a.m. - Tamil',
            '06.00 p.m. - English',
        ],
    },
];
function Masstiming() {
    return (
        <>
            <Header />
            <div className="home-mother">
                <div className="container" style={{ padding: "30px" }}>
                    <h3 className="entry-title motherhouse">
                        <h2 style={{ color: "#760f08", fontWeight: "bold" }}>Mass Time</h2>
                    </h3>
                    <div className="brudcrums">
                        <span className="pagename" style={{ color: "#000", fontWeight: "bold" }}><Link to={"/"} style={{ textDecoration: "none" }}> Home &nbsp;»&nbsp;{" "}</Link></span>
                        <span className="pagename" style={{ color: "#000", fontWeight: "bold" }}>Mass Time</span>
                    </div>
                </div>
            </div>
            <div className='container' style={{ maxWidth: "1300px" }}>
                <ListGroup className="timeline">
                    {scheduleData.map((item, index) => (
                        <div key={index}>
                            <ListGroup.Item variant="primary" className="timeline-header">
                                {item.title}
                            </ListGroup.Item>
                            {item.items.map((timeSlot, subIndex) => (
                                <ListGroup.Item key={subIndex} className="timeline-item">
                                    {timeSlot}
                                </ListGroup.Item>
                            ))}
                        </div>
                    ))}
                </ListGroup>
            </div>
            <br />
            <Footer />
        </>
    )
}

export default Masstiming
