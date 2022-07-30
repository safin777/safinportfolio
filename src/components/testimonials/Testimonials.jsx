import React from "react";
import "./testimonials.css";
import Avatar1 from "../../assets/img/avatar1.jpg";
import Avatar2 from "../../assets/img/avatar2.jpg";
import Avatar3 from "../../assets/img/avatar3.jpg";
import Avatar4 from "../../assets/img/avatar4.jpg";


const data = [
    {
        id: 1,
        avatar: Avatar1,
        name: "John Doe",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Loremsgdshd dhsvhdvsbdsvdbsdvsd hvsvdsndvsndvsd bhvdsvdsbdvsdbshdshjdsdjs vjhdbsjhdbsjdbsdkjsdbs dbhsdshdbsdbsjdnsbdnsd nbnsbdnsdbsdbsdnbshdbsnd",
    },

    {
        id: 2,
        avatar: Avatar2,
        name: "Mohasin Hossain",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Loremsgdshd dhsvhdvsbdsvdbsdvsd hvsvdsndvsndvsd bhvdsvdsbdvsdbshdshjdsdjs vjhdbsjhdbsjdbsdkjsdbs dbhsdshdbsdbsjdnsbdnsd nbnsbdnsdbsdbsdnbshdbsnd",
    },

    {
        id: 3,
        avatar: Avatar3,
        name: "Sohag Hasan",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Loremsgdshd dhsvhdvsbdsvdbsdvsd hvsvdsndvsndvsd bhvdsvdsbdvsdbshdshjdsdjs vjhdbsjhdbsjdbsdkjsdbs dbhsdshdbsdbsjdnsbdnsd nbnsbdnsdbsdbsdnbshdbsnd",
    },

    {
        id: 4,
        avatar: Avatar4,
        name: "Anmona Haque",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Loremsgdshd dhsvhdvsbdsvdbsdvsd hvsvdsndvsndvsd bhvdsvdsbdvsdbshdshjdsdjs vjhdbsjhdbsjdbsdkjsdbs dbhsdshdbsdbsjdnsbdnsd nbnsbdnsdbsdbsdnbshdbsnd",
    },
];


const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>

            <div className=" container testimonials__container">
                {data.map(({ id, avatar, name, review }) => {
                    return (
                        <article className="testimonial">
                            <div className="client__avatar">
                                <img src={avatar} alt={name} key={id} />
                            </div>

                            <h5 className="client__name">{name}</h5>
                            <small className="client__review">{review}</small>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Testimonials;
