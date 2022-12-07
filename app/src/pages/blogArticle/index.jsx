import Helmet from 'react-helmet'
import Footer from '../../components/footer'
import './style.scss'
import NavBar from "../../components/navbar"
import ContactSection from '../../components/contactSection'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';


const BlogArticle = () => {

    const { slug } = useParams()

    const { loading, data, error } = useFetch('http://localhost:1337/api/articles?populate=*')
    if (loading) return console.log('loading');
    if (error) return console.log('error');

    const blog_data = data.data;

    let article = {}
    if (article) {
        let arr = blog_data.filter(e => e.attributes.Slug === slug)
        article = arr[0]
    } else {
        article = {}
    }

    const myPost = article.attributes;

    return (
        <>
            <Helmet>
                <title>{myPost.Title}</title>
            </Helmet>
            <NavBar />
            <div className='blog-article-container'>
                <Hero data={myPost} />
                <BlogArticleSection data={myPost} />
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
                            <div className="section-tag mb-8">{data.category.data.attributes.Category}</div>
                            <h1 className='display-1'>{data.Title}</h1>
                            <div className='txt-3'>Published by <span className='fw-500 color-1'>Branding Pioneers</span> on <span className='fw-500 color-1'>{new Date(data.DateAndTime).toDateString().slice(4)}</span></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const BlogArticleSection = ({data}) => {
    return (
        <>
            <section className='section-global blog-article'>
                <div className="container container-2">
                    <div className="row">
                        <div className="col-12 mb-20">
                            <img src={`http://localhost:1337${data.FeaturedImage.data.attributes.url}`} className="img-fluid mb-20" alt="CaseStudy" />
                        </div>
                        <div className="col-12">
                            <div className="blog-article-section">
                                <ReactMarkdown>
                                    {data.Content}
                                </ReactMarkdown>
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

export default BlogArticle