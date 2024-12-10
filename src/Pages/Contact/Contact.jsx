import React, { useState } from "react";
import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [formErrors, setFormErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = "Name is required.";
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
            errors.email = "Valid email is required.";
        if (!formData.message.trim()) errors.message = "Message cannot be empty.";
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            setFormErrors({});
            setSuccessMessage("Thank you for contacting us! We'll get back to you soon.");
            setFormData({ name: "", email: "", message: "" });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="contact-page">
            <h2 className="contact-title">Contact Me</h2>
            {successMessage && <p className="success-message">{successMessage}</p>}
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {formErrors.name && <p className="error-message">{formErrors.name}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {formErrors.email && <p className="error-message">{formErrors.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    {formErrors.message && <p className="error-message">{formErrors.message}</p>}
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}

export default Contact;

