
const testimonialsData = [
    {
        id: 1,
        image: '01.jpg_1.jpeg',
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
        name: "John Doe"
    },
    {
        id: 2,
        image: '02.jpg_1.jpeg', 
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
        name: "Johnathan Doe"
    },
    {
        id: 3,
        image: '03.jpg.jpeg', 
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
        name: "John Doe"
    },
    {
        id: 4,
        image: '06.jpg.jpeg',
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
        name: "Johnathan Doe"
    },
    {
        id: 5,
        image: '03.jpg_1.jpeg', 
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
        name: "John Doe"
    },
    {
        id: 6,
        image: '05.jpg.jpeg', 
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.",
        name: "Johnathan Doe"
    }
];

const TestimonialCard = ({ image, quote, name }) => {
    return (
        <div className="testimonial-card">
            <div className="testimonial-header">
                <img src={image} alt={name} className="testimonial-avatar" />
                <p className="testimonial-quote">"{quote}"</p>
            </div>
            <p className="testimonial-name">- {name}</p>
        </div>
    );
};

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <h2 className="section-title">WHAT OUR CLIENTS SAY</h2>
            <div className="title-underline"></div>
            <div className="testimonials-grid">
                {testimonialsData.map(testimonial => (
                    <TestimonialCard key={testimonial.id} {...testimonial} />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;