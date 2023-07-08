import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import axios from 'axios';
import "../../assets/css/contact.css"
import Icon from '@mdi/react';
import { mdiMapMarkerOutline, mdiPhone, mdiAt } from '@mdi/js';

function ContactContent() {

    const navigate = useNavigate();
    const url = 'https://localhost:7012';

    const [contact, setContact] = useState([]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [isTitleEmpty, setIsTitleEmpty] = useState(false);
    const [isDescriptionEmpty, setIsDescriptionEmpty] = useState(false);

    //Setting Authorization Token in Request Headers using Bearer Authentication
    let token = JSON.parse(localStorage.getItem("token"));

    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };


    //Retrieves all Contact data from the API.
    const getAllContact = async () => {
        try {
            const response = await axios.get(`${url}/api/Contact/GetAll`);
            setContact(response.data);
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        getAllContact();
    }, []);


    //Handles the submit button click event.

    const newContact = {
        name: name,
        email: email,
        subject: subject,
        content: content


    };

    //Create Contact
    const CreateContact = async (e) => {
        e.preventDefault();

        // if (title.trim() === '') {
        //     setIsTitleEmpty(true);
        //     return;
        // }

        // if (description.trim() === '') {
        //     setIsDescriptionEmpty(true);
        //     return;
        // }

        const formData = new FormData();
        for (const [key, value] of Object.entries(newContact)) {
            formData.append(key, value);
        };

        await axios.post(`${url}/api/Contact/Create`, formData, config, {
            headers: {
                Accept: "*/*"
            }
        })
            .then((res) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your message has been sent successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(res);
                setContact([]);
                setName('');
                setEmail('');
                setSubject('');
                setContent('');
                navigate('/Contact');
            })
            .catch((err) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'Your message was not sent successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(err);
                navigate('/ContactCreate');
            });


    };



    return (
        
        <div>     
            
               <section id="contact-us">

            <div className="container">


                <div className="map mt-5">

                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.428674496239!2d49.85175681510556!3d40.37719087936975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d079efb5163%3A0xc20aa51a5f0b5e01!2sCode%20Academy!5e0!3m2!1sen!2saz!4v1678098236806!5m2!1sen!2saz"
                            style={{ width: "100%", border: "0", height: "450px" }} allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="row">

                        <div className="col-lg-6">

                            <div className="title">
                                <h3>Contact Us</h3>
                            </div>

                            <div className="icons">

                                <ul className='mt-3'>

                                    <li className='mt-5'>

                                        <h4>  <Icon path={mdiMapMarkerOutline} size={1.5} color="gray" />Address</h4>
                                        <p>Ecolife Responsive Prestashop Theme
                                            United States</p>

                                    </li>

                                    <li className='mt-5'>

                                        <h4>   <Icon path={mdiPhone} size={1.5} color="gray" /> Phone</h4>
                                        <p>Call us: +800345678</p>
                                    </li>

                                    <li className='mt-5'>

                                        <h4> <Icon path={mdiAt} size={1.5} color="gray" /> Email</h4>
                                        <p>Email us: demo@posthemes.com</p>
                                    </li>

                                </ul>

                            </div>



                        </div>

                        <div className="col-lg-6">

                            <div className="title">
                                <h3>Contact Us</h3>
                            </div>


                            <form onSubmit={(e) => CreateContact(e)}>

                                <div className="group">
                                    <input type="text" required 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                   />
                                    <span className="bar"></span>
                                    <label>Your Name (required)</label>
                                </div>

                                <div className="group">
                                    <input type="email" required  value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                                    <span className="bar"></span>
                                    <label>Your Email (required)</label>
                                </div>

                                <div className="group">
                                    <input type="text" required value={subject}
                                    onChange={(e) => setSubject(e.target.value)} />
                                    <span className="bar"></span>
                                    <label>Subject*</label>
                                </div>

                                <div className="group">
                                    <input type="text" required value={content}
                                    onChange={(e) => setContent(e.target.value)} />
                                    <span className="bar"></span>
                                    <label>Post content*</label>
                                </div>


                                <div>
                                    <button type="submit" className="btn">Send</button>
                                </div>

                            </form>





                        </div>
                    </div>





                </div>


            </div>

        </section>

        </div>

    )
}

export default ContactContent