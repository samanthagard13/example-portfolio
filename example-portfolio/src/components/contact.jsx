import React, { useState } from 'react';

function Contact() {
    
    return (
        <div className="container p-2 main-content">
            <h2 className="m-2 display-6">Contact</h2>
            <form>
                <div className="m-2">
                    <label className="form-label m-2">Name</label>
                    <input required/>
                </div>
                <div className="m-2">
                    <label className="form-label m-2">Email</label>
                    <input type="email" required/>
                </div>
                <div className="m-2">
                    <label className="form-label m-2">Message</label>
                    <textarea required/>
                </div>
                <div>
                    <button type="submit" className="btn m-2 contact-btn">Send</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;