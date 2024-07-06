import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Body() {
    const [blogs, setBlogs] = useState([]);
    const authToken = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/blog/", {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                });
                setBlogs(response.data);
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    localStorage.removeItem("token");
                    navigate('/');
                } else {
                    console.error("Error fetching blogs:", error);
                }
            }
        };

        fetchBlogs();
    }, [authToken, navigate]);

    return (
        <>
            <div className="container-fluid pt-3 pb-4 bg-body-tertiary p-1" style={{ marginTop: '3.5em' }}>
                {blogs.map((blog, index) => (
                    <div className="card m-2" key={index}>
                        <div className="card-body">
                            <h5 className="card-title">{blog.title}</h5>
                            <p className="card-text">{blog.body}</p>
                            <h6 className="card-subtitle mb-2 text-muted">
                                By: {blog.creator.name} ({blog.creator.email})
                            </h6>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
