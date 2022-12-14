import { Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import './style.scss'
import Logo from '../../logo.svg'
import { useEffect } from "react"

const NavBar = ({ data }) => {

    useEffect(() => {

        // const changeBackground = () => {
        //     // console.log(window.scrollY)
        //     if (window.scrollY >= 66) {
        //         document.querySelector('.navbar').classList.add('scroll')
        //     } else {
        //         document.querySelector('.navbar').classList.remove('scroll')
        //     }
        // }
        // window.addEventListener("scroll", changeBackground)

        const NavLink = document.querySelectorAll('.stact-nav-link')
        const NavBarCollapse = document.querySelector('.navbar-collapse')

        NavLink.forEach(e => {
            e.onclick = () => {
                if (NavBarCollapse.classList.contains('show')) {
                    document.querySelector('.navbar-toggler').click()
                }
            }
        })

    }, [])

    const NavBarLinks = [
        {
            title: 'Home',
            href: '/'
        },
        {
            dropDown: true,
            title: 'About',
            href: '/about',
            links: [
                { title: 'Who we are', href: '/about' },
                { title: 'Why choose us', href: '/about' },
                { title: 'Testimonials', href: '/about' }
            ]
        },
        {
            dropDown: true,
            title: 'Our Speciality',
            href: '/our-speciality',
            links: [
                { title: 'Healthcare', href: '/healthcare' },
                { title: 'Education ', href: '/education' },
                { title: 'Fitness', href: '/fitness' },
                { title: 'B2B', href: '/b2b' },
            ]
        },
        {
            dropDown: true,
            title: 'Services',
            href: '/services',
            links: [
                { title: 'Medical Digital Marketing', href: '/' },
                { title: 'Website Services', href: '/' },
                { title: 'Marketing Strategies', href: '/' },
                { title: 'Content', href: '/content' },
            ]
        },
        {
            dropDown: true,
            title: 'Our Work',
            href: '/our-work',
            links: [
                { title: 'Websites', href: '/websites' },
                { title: 'Case Studies', href: '/case-studies' },
                { title: 'Projects', href: '/projects' }
            ]
        },
        {
            title: 'Blog',
            href: '/blog'
        },
        {
            title: 'Pages',
            href: '/pages'
        }
    ]

    return (
        <>
            <Navbar variant="light" expand="lg" fixed="top">
                <div className="container-fluid">
                    <Navbar.Brand ><NavLink to="/"><img src={Logo} height="32" alt="Stact" /></NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="navbar-nav mx-auto">
                            {
                                data ?
                                    data.map((e, i) => {
                                        if (e.dropDown) {
                                            return (
                                                <div className="dropdown" key={i}>
                                                    <div className="nav-link dropdown-toggle" >
                                                        {e.title}
                                                    </div>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        {e.links.map((e2, j) =>
                                                            <li key={j}><NavLink className={({ isActive }) => isActive ? 'dropdown-item stact-nav-link' : 'dropdown-item stact-nav-link'} to={e2.href}>{e2.title}</NavLink></li>
                                                        )}
                                                    </ul>
                                                </div>
                                            )
                                        } else if (e.anchor) {
                                            return (
                                                <a href={e.href} className="nav-link stact-nav-link anchor" key={i}>{e.title}</a>
                                            )
                                        } else {
                                            return (
                                                <NavLink to={e.href} className="nav-link stact-nav-link" key={i}>{e.title}</NavLink>
                                            )
                                        }
                                    })
                                    :
                                    NavBarLinks.map((e, i) => {
                                        if (e.dropDown) {
                                            return (
                                                <div className="dropdown" key={i}>
                                                    {/* <a href={e.links} className="nav-link dropdown-toggle" >
                                                        {e.title}
                                                    </a> */}
                                                    <NavLink to={e.href} className="nav-link dropdown-toggle" key={i}>{e.title}</NavLink>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        {e.links.map((e2, j) =>
                                                            <li key={j}><NavLink className={({ isActive }) => isActive ? 'dropdown-item stact-nav-link' : 'dropdown-item stact-nav-link'} to={e2.href}>{e2.title}</NavLink></li>
                                                        )}
                                                    </ul>
                                                </div>
                                            )
                                        } else if (e.anchor) {
                                            return (
                                                <a href={e.href} className="nav-link stact-nav-link anchor" key={i}>{e.title}</a>
                                            )
                                        } else {
                                            return (
                                                <NavLink to={e.href} className="nav-link stact-nav-link" key={i}>{e.title}</NavLink>
                                            )
                                        }
                                    })
                            }
                        </div>
                    </Navbar.Collapse>
                    <a href="/contact" className="navbar-cta">Write Query</a>
                </div>
            </Navbar>
        </>
    )
}

export default NavBar