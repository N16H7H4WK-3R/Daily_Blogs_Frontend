import React from "react";

const Header = () => {
    return (
        <header className="py-1 fixed-top bg-dark border-bottom" data-bs-theme="dark">
            <div className="container-fluid d-grid gap-3 align-items-center" style={{ gridTemplateColumns: "1fr 2fr" }}>
                <div style={{ marginLeft: "15px" }} >
                    <img src="https://png.pngtree.com/png-vector/20230304/ourmid/pngtree-colorful-blog-speech-bubble-vector-png-image_6633021.png" alt="mdo" width="50" height="50" className="rounded-circle" />
                </div>

                <div className="d-flex align-items-center">
                    <form className="w-100 me-3" role="search">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                    </form>

                    <div className="flex-shrink-0 dropdown" style={{ marginRight: "15px" }}>
                        <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnWM9CH24MxdWWDB2AC_5BCIag-RGC30SzM5vKRq9SSPzXbXDq8IBYeL2ZzURYrCrsFuA&usqp=CAU" alt="mdo" width="40" height="40" className="rounded-circle " />
                        </a>
                        <ul className="dropdown-menu text-small shadow">
                            <li><a className="dropdown-item" href="/new-blog">Create Blog</a></li>
                            <li><a className="dropdown-item" href="/manage-blogs">Manage Blogs</a></li>
                            <li><a className="dropdown-item" href="/user-profile">Profile</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="/">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;