import React from "react";


function footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="container-fluid border-top">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><a href="/home" className="nav-link px-2 text-body-secondary">Home</a></li>
                        <li className="nav-item"><a href="/new-blog" className="nav-link px-2 text-body-secondary">New Blog</a></li>
                        <li className="nav-item"><a href="/manage-blogs" className="nav-link px-2 text-body-secondary">Manage Blogs</a></li>
                        <li className="nav-item"><a href="/user-profile" className="nav-link px-2 text-body-secondary">Profile</a></li>
                        <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">About</a></li>
                    </ul>
                    <p className="text-center text-body-secondary">&copy; {currentYear} DailyBlogs Pvt. Ltd.</p>
                </footer>
            </div>
        </>
    );
};

export default footer;