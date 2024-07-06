import React from "react";

function Landing() {
    return (
        <>
            <body className="d-flex text-center text-bg-dark" style={{ height: '100vh' }}>
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <header className="mb-auto">
                        <div>
                            <nav className="nav nav-masthead justify-content-center float-md-end">
                                <a className="nav-link fw-bold py-1 px-3" href="/">Home</a>
                                <a className="nav-link fw-bold py-1 px-3" href="/login">Login</a>
                                <a className="nav-link fw-bold py-1 px-3" href="/signup">Sign up</a>
                            </nav>
                        </div>
                    </header>

                    <main className="px-3">
                        <h1 style={{ letterSpacing: '2px' }}>Daily Blogs</h1>
                        <p className="lead"> Your Ultimate Source for Fresh Insights, Inspiration, and Daily Knowledge!</p>
                        <p className="lead">
                            <a href="#" className="btn btn-lg btn-light fw-bold border-white bg-white">Learn more</a>
                        </p>
                    </main>
                </div>

            </body>
        </>
    );
};

export default Landing;