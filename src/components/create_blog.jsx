import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../App.css';

const CreateBlog = () => {
    const navigate = useNavigate();
    const authToken = localStorage.getItem("token");

    const formik = useFormik({
        initialValues: {
            title: "",
            body: ""
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required("Blog Title is required"),
            body: Yup.string()
                .required("Blog Body can not be empty!")
        }),
        onSubmit: async (values) => {
            try {
                const response = await axios.post(
                    "http://127.0.0.1:8000/blog/",
                    {
                        title: values.title,
                        body: values.body,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${authToken}`,
                            "Content-Type": "application/json"
                        }
                    }
                );
                navigate("/login");
            } catch (error) {
                console.error("Signup failed", error);
            }
        }
    });


    return (
        <div className="container-fluid pt-3 pb-5 bg-body-tertiary p-1" style={{ marginTop: '3.5em' }}>
            <main className="p-2 w-100 m-auto">
                <form onSubmit={formik.handleSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Create a new blog ...</h1>
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Blog Title"
                            {...formik.getFieldProps("title")}
                        />
                        <label htmlFor="floatingInput">Blog Title</label>
                        {formik.touched.title && formik.errors.title ? (
                            <div className="text-danger mt-2">{formik.errors.title}</div>
                        ) : null}
                    </div>
                    <div className="form-floating mt-3">
                        <textarea
                            id="body"
                            placeholder="Blog Body"
                            className="form-control fw-light"
                            style={{ height: '20rem', paddingTop: '2rem' }}
                            {...formik.getFieldProps("body")}
                        ></textarea>
                        <label htmlFor="floatingInput">Blog Body</label>
                        {formik.touched.body && formik.errors.body ? (
                            <div className="text-danger mt-2">{formik.errors.body}</div>
                        ) : null}
                    </div>
                    <button className="btn btn-primary mt-4 w-100 py-2" type="submit">Submit</button>
                </form>
            </main>
        </div>
    );
};

export default CreateBlog;