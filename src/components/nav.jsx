import React from 'react'
import { useState } from 'react'
import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import './nav.css'
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header>
			<nav className="navbar">
				<div className="companyLogo">
					{<img src={Logo} alt="logo" className="logo" />}
					<h1>Start</h1>
				</div>
				<div className="nav-list">
					<ul>
						<Link to="/">Home</Link>
						<Link to="/portfolio">Portfolio</Link>
						<Link to="/services">Service</Link>
						<Link to="/contactus">ContactUs</Link>
					</ul>
				</div>
				<div className="mobile-menu">
					<button
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle Menu"
						className="menu-button"
					>
						<svg
							width="32"
							height="22"
							viewBox="0 0 32 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line y1="1" x2="32" y2="1" stroke="#fff" stroke-width="2" />
							<line y1="11" x2="32" y2="11" stroke="#fff" stroke-width="2" />
							<line y1="21" x2="32" y2="21" stroke="#fff" stroke-width="2" />
						</svg>
					</button>
					{isOpen && (
						<ul className="mobile-list">
							<li className="mobile-list-item">
								<Link
									className="mobile-list-link"
									to="/"
									onClick={() => setIsOpen(false)}
								>
									Home
								</Link>
							</li>
							<li className="mobile-list-item">
								<Link
									className="mobile-list-link"
									to="/portfolio"
									onClick={() => setIsOpen(false)}
								>
									Portfolio
								</Link>
							</li>
							<li className="mobile-list-item">
								<Link
									className="mobile-list-link"
									to="/services"
									onClick={() => setIsOpen(false)}
								>
									Service
								</Link>
							</li>
							<li className="mobile-list-item">
								<Link
									className="mobile-list-link"
									to="/contactus"
									onClick={() => setIsOpen(false)}
								>
									ContactUs
								</Link>
							</li>
						</ul>
					)}
				</div>
			</nav>

			{/* Mobile Menu */}
		</header>
	)
}

export default Navbar
