import Helmet from 'react-helmet'
import BlogCards from '../../components/blogCards'
import Footer from '../../components/footer'
import NavBar from '../../components/navbar'
import ContactSection from '../../components/contactSection'
import './style.scss'
import useFetch from '../../hooks/useFetch'

const Blog = () => {
    return (
        <>
            <Helmet>
                <title>Stact - Blog</title>
            </Helmet>
            <NavBar />
            <div className="blog-container">
                <Hero />
                <BlogSection />
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
                            <div className="section-tag mb-8">Blog</div>
                            <h1 className='display-1'>Get updated with our internal affairs</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const BlogSection = () => {

    const { loading, data, error } = useFetch('http://localhost:1337/api/articles?populate=*')
    if (loading) return console.log('loading');
    if (error) return console.log('error');

    const blog_data = data.data;

    return (
        <>
            <section className='section-global bg-shade-blue'>
                <div className="container">
                    <div className="row">
                        <BlogCards data={blog_data} />
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



export default Blog