import React from 'react';

function Contact() {
    return (
        <div className="container p-2 main-content">
            <h2 className="m-2 display-6">Contact</h2>
            <form>
                <div className="m-2">
                    <label className="form-label m-2">Name</label>
                    <input className="bg-white"></input>
                </div>
                <div className="m-2">
                    <label className="form-label m-2">Email</label>
                    <input className="bg-white"></input>
                </div>
                <div className="m-2">
                    <label className="form-label m-2">Message</label>
                    <textarea className="bg-white"></textarea>
                </div>
                <div>
                    <button type="submit" className="btn btn-dark m-2">Send</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;