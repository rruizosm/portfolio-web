import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import './contact.css';

// Data for the social links
const socialLinksData = [
    {
        name: "GitHub",
        url: "https://github.com/rruizosm",
        description: "Code Portfolio",
        icon: Github,
        iconBg: "bg-gray-900",
        hoverColor: "text-green-600",
        borderHover: "border-green-500"
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rubenruizosma",
        description: "Professional Network",
        icon: Linkedin,
        iconBg: "bg-blue-600",
        hoverColor: "text-blue-600",
        borderHover: "border-blue-500"
    },
    {
        name: "Instagram",
        url: "https://instagram.com/__rruiz",
        description: "Personal Interests",
        icon: Instagram,
        iconBg: "gradient-instagram",
        hoverColor: "text-pink-600",
        borderHover: "border-pink-500"
    },
];

/**
 * Helper component for rendering individual social media links.
 */
const SocialLink = ({ link }) => (
    <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        // Use standard CSS classes
        className={`social-link ${link.borderHover}`}
    >
        {/* Icon Container */}
        <div className={`icon-box ${link.iconBg}`}>
            <link.icon size={24} />
        </div>

        {/* Text Details */}
        <div className="link-details">
            <p className={`link-title ${link.hoverColor}`}>{link.name}</p>
            <p className="link-description">{link.description}</p>
        </div>

        {/* Arrow Icon */}
        {/* <i className={`fa-solid fa-arrow-up-right-from-square arrow-icon ${link.hoverColor}`}></i> */}
    </a>
);

/**
 * Main Contact Section Component
 */
export default function Contact() {
    return (
        <section className="contact-section">
            <div className="container">
                {/* Section Header */}
                <div className="contact-header">
                    <h2 className="header-title">
                        Ready to <span className="highlight">Connect</span>?
                    </h2>
                </div>

                {/* Contact Grid: 2 columns on medium/large screens */}
                <div className="contact-grid">

                    {/* 1. Direct Contact Card */}
                    <div className="direct-contact-card">
                        <h3 className="card-title">Direct Contact</h3>
                        <p className="card-description">The best way to reach me for professional inquiries or potential projects is via email.</p>

                        {/* Email Button */}
                        <a
                            href="mailto:rruizosma@gmail.com"
                            className="email-button"
                        >
                            <Mail size={20} /> Send an Email
                        </a>
                        <p className="email-address">rruizosma@gmail.com</p>
                    </div>

                    {/* 2. Social Links Grid */}
                    <div className="social-links-list">
                        {socialLinksData.map((link) => (
                            <SocialLink key={link.name} link={link} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};