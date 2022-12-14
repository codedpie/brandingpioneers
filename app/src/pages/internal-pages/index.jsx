import Helmet from 'react-helmet'
import Footer from '../../components/footer'
import ProjectCards from '../../components/projectCards'
import NavBar from "../../components/navbar"
import ContactSection from '../../components/contactSection'
import './style.scss'

const InternalPages = () => {
    return (
        <>
            <Helmet>
                <title>Pages</title>
            </Helmet>
            <NavBar />
            <div className="projects-container">
                <Hero />
                <ProjectsSection />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

const Hero = () => {
    return (
        <>
            <section className='section-global bg-shade-1 hero'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="section-tag mb-8">All Pages</div>
                            <h1 className='display-1'>Our experts and proprietary technology fuel our work</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const ProjectsSection = () => {

    const projects_data = [
        {
            category: 'development',
            text: 'SEO Agency for Doctors',
            imgUrl: 'assets/project1.png',
            color: "#F97316",
            link: '/project-detail'
        },
        {
            category: 'design',
            text: 'Digital Marketing Agency for Hospital',
            imgUrl: 'assets/project2.png',
            color: "#2D7EF8",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "SEO Company for Clinic/Centres",
            imgUrl: 'assets/project3.png',
            color: "#00AA45",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Digital Marketing for Dental",
            imgUrl: 'assets/project4.png',
            color: "#F15757",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Why SEO is important for Healthcare",
            imgUrl: 'assets/project5.png',
            color: "#7F57F1",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Dynamic Website Design for Healthcare",
            imgUrl: 'assets/project6.png',
            color: "#007AFF",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Responsive Website Design for Healthcare",
            imgUrl: 'assets/project7.png',
            color: "#17CF97",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Responsive Website Design for Medical",
            imgUrl: 'assets/project8.png',
            color: "#FF7A00",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "SEO Agency in India",
            imgUrl: 'assets/project9.png',
            color: "#25CAAC",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Medical Digital Marketing in India",
            imgUrl: 'assets/project1.png',
            color: "#25CAAC",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Orthopedic Marketing",
            imgUrl: 'assets/project3.png',
            color: "#25CAAC",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Dental Marketing",
            imgUrl: 'assets/project4.png',
            color: "#25CAAC",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Chiropractor Marketing",
            imgUrl: 'assets/project7.png',
            color: "#25CAAC",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Video Marketing for Healthcare Practice",
            imgUrl: 'assets/project1.png',
            color: "#25CAAC",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Startup Website for Healthcare",
            imgUrl: 'assets/project2.png',
            color: "#25CAAC",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "E-Commerce Development for Medical",
            imgUrl: 'assets/project9.png',
            color: "#25CAAC",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Digital Marketing Agency for Medical",
            imgUrl: 'assets/project8.png',
            color: "#25CAAC",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Social Media Marketing for Hospital",
            imgUrl: 'assets/project6.png',
            color: "#25CAAC",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Social Media Marketing for Dental",
            imgUrl: 'assets/project7.png',
            color: "#25CAAC",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Video Marketing for Healthcare",
            imgUrl: 'assets/project5.png',
            color: "#25CAAC",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Video Content Creation for Healthcare",
            imgUrl: 'assets/project4.png',
            color: "#25CAAC",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Mobile Website Design",
            imgUrl: 'assets/project2.png',
            color: "#25CAAC",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Website Revamps for Healthcare",
            imgUrl: 'assets/project8.png',
            color: "#25CAAC",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Redesign Medical Website",
            imgUrl: 'assets/project7.png',
            color: "#25CAAC",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Physicians Digital Marketing Services",
            imgUrl: 'assets/project3.png',
            color: "#25CAAC",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Pharma Digital Marketing Company",
            imgUrl: 'assets/project9.png',
            color: "#25CAAC",
            link: '/project-detail'
        }, 
        {
            category: 'branding',
            text: "Healthcare Logo",
            imgUrl: 'assets/project1.png',
            color: "#25CAAC",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Local SEO Marketing for Hospital",
            imgUrl: 'assets/project2.png',
            color: "#25CAAC",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Local SEO Marketing for Clinic",
            imgUrl: 'assets/project5.png',
            color: "#25CAAC",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Hospital Marketing",
            imgUrl: 'assets/project4.png',
            color: "#25CAAC",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Paid Advertising for Healthcare",
            imgUrl: 'assets/project3.png',
            color: "#25CAAC",
            link: '/project-detail'
        },
    ]

    return (
        <>
            <section className='section-global'>
                <div className="container">
                    <div className="row">
                        <ProjectCards data={projects_data} src="projects" />
                    </div>
                </div>
            </section>
        </>
    )
}

const Contact = () => {

    const contact_data = {
        title: 'Have an idea?',
        title_highlight: "Let's talk",
        text: "One of the best industry service providers with top tier talented individuals.",
        link: '/contact'
    }

    return (
        <>
            <ContactSection contact_data={contact_data} />
        </>
    )
}

export default InternalPages