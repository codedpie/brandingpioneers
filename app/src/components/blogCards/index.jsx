import { Link } from 'react-router-dom'
import './style.scss'

const BlogCards = ({ data }) => {
    return (
        <>
            {
                data.map((e, i) =>
                    <div className="col-lg-4 col-md-6 gy-4" key={i}>
                        <Link to={e.attributes.Slug} className="blog_link">
                            <div className="blog-card">
                                <div className="thumb">
                                    <img src={`http://localhost:1337${e.attributes.FeaturedImage.data.attributes.url}`} className="img-fluid" alt={e.attributes.category} />
                                </div>
                                <div className="body">
                                    <div className='mb-8'>
                                        <span className='text-uppercase txt-4 fw-500 color-primary'>{e.attributes.category.data.attributes.Category}
                                        </span>&nbsp;•&nbsp;<span className='txt-4'>{new Date(e.attributes.DateAndTime).toDateString().slice(4)}</span>
                                    </div>
                                    <h4 className="title">{e.attributes.Title}</h4>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            }
        </>
    )
}

export default BlogCards