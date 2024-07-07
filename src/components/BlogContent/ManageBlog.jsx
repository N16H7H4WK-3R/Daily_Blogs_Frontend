import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ManageBlogs = () => {
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
        <div className="container-fluid pt-3 pb-4 bg-body-tertiary p-1" style={{ marginTop: '3.5em' }}>

            {blogs.map((blog, index) => (
                <div className="card m-2" key={index}>
                    <div className="card-body">
                        <h5 className="card-title">{index + 1}. {blog.title}</h5>
                        <div className="mt-3 gap-1 nav justify-content-center float-md-start ">
                            <button className="nav-link fw-bold">Edit</button>
                            <button className="nav-link fw-bold">Delete</button>
                        </div>
                    </div>
                    <div className="card-footer nav nav-masthead justify-content-end">
                        <small className="card-subtitle p-1 text-muted" >
                            By: {blog.creator.name} ({blog.creator.email})
                        </small>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ManageBlogs;