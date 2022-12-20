import Helmet from 'react-helmet'
import ContactSection from '../../components/contactSection'
import Footer from '../../components/footer'
import NavBar from "../../components/navbar"
import './style.scss'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const SubPages = () => {

    const { slug, mainPage } = useParams()

    const { loading, data, error } = useFetch('http://localhost:1337/api/pages?populate=*')
    if (loading) return console.log('loading');
    if (error) return console.log('error');

    const blog_data = data.data;

    let article = {}
    if (article) {
        let mainArr = blog_data.filter(x => x.attributes.mainPage === mainPage)
        let arr = mainArr.filter(e => e.attributes.slug === slug)
        article = arr[0]
    } else {
        article = {}
    }

    const myPost = article.attributes;

    return (
        <>
            <Helmet>
                <title>{myPost.title}</title>
            </Helmet>
            <NavBar />
            <div className="project-detail-container">
                <Hero data={myPost} />
                <CaseStudy data={myPost} />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

const Hero = ({ data }) => {
    return (
        <>
            <section className='section-global bg-shade-1 hero'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="section-tag mb-8">{data.mainPage}</div>
                            <h1 className='display-1'>{data.title}</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const CaseStudy = ({ data }) => {
    return (
        <>
            <section className='section-global case-study'>
                <div className="container container-2">
                    <div className="row">
                        <div className="col-12 text-center mb-20">
                            <img src={`http://localhost:1337${data.FeaturedImage.data.attributes.url}`} className="img-fluid mb-20 mainImage" alt={data.title} />
                        </div>
                        <div className="col-12">
                            <div className="case-study-section">
                                <ReactMarkdown>{data.content}</ReactMarkdown>
                            </div>
                        </div>
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
            <ContactSection bg="bg-shade-blue" contact_data={contact_data} />
        </>
    )
}


export default SubPages