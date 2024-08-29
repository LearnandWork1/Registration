import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
//import { baseUrl } from "../Utility/constants";
import MainHeader from "./MainHeader";
import Footer from "./common/Footer";

const Registration = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        imageAlt: "",
        status: 1,
         fund: "",
        type: "",
        createdOn: new Date(),
        actionType: "",
        orderDate: new Date(),
        imageUrl: ""
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [userImage, setUserImage] = useState(null);
    const baseUrl = 'https://localhost:7051/';
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value, userImage
        });
    };


    const [LoginUsersObj, setLoginObj] = useState({
        // "firstName": 'test10',
        // "lastName": 'test10',
        "Email": email,
        "Password": password,
        // "createdOn": "2024-08-27T16:14:34.807Z",
        // "status": 1,
    });


    const handleFileChange = (e) => {
        //alert(e.target.files[0]);
        setUserImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("firstName", user.firstName);
        formData.append("lastName", user.lastName);
        formData.append("email", user.email);
        formData.append("password", user.password);
        formData.append("imageAlt", user.imageAlt);
        formData.append("status", user.status);
        formData.append("createdOn", user.createdOn);
        formData.append("imageUrl", user.imageUrl);


        if (userImage) {
            formData.append("userImage", userImage);
        }
        // alert('HI'+formData);
        try {
            //  alert(baseUrl);

            // https://localhost:7053/api/Users/registration
            //         localhost:7053/api/Users/registration
            // const response = await axios.post(`${baseUrl}api/Users/registration`, formData, {
            // const response = await axios.post('https://localhost:7053/api/Users/registration', formData, {
            //     headers: {
            //         "Content-Type": "multipart/form-data",
            //     },
            // });
            // const response = await axios.post('https://localhost:7051/api/Users/registration', formData, {
            //     headers: {
            //         "Content-Type": "multipart/form-data",
            //     },
            // });
            debugger;
            // const response = await axios.post('https://localhost:7051/api/Users/registration', formData);
            //http://localhost:5254/
            
            
            //WORKING
            const response = await axios.post('https://localhost:7051/api/Users/registration', {
                // Email: email,
                // password: password,
                "firstName": user.firstName,
                "lastName": user.lastName,
                "password": user.password,
                "email": user.email,
                "fund": "1",
                "type": "users",
                "status": "1",
                "createdOn": new Date(),
                "actionType": "string",
                "orderDate": "string",
                "imageUrl": user.imageUrl,
                "imageAlt": "string"
            });


            // const response = await axios.post('https://localhost:7053/api/Users/registration', formData, {
            //     headers: {
            //         "Content-Type": "multipart/form-data",
            //     },
            // });

            // const response = await axios.post(`${baseUrl}api/Users/registration`, {
            //     Email: email,
            //     password: password,
            //     "firstName": 'test10',
            //     "lastName": 'test10',
            //     // "Email": email,
            //     // "Password": password,
            //     "createdOn": "2024-08-27T16:14:34.807Z",
            //     "status": 1,
            // });
           // alert(response);
            if (!response || !response.data) {
                throw new Error("Invalid response");
            }
            console.log("Registration successful:", response.data);
            toast.success("Registration successful!");
            setUser({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                imageAlt: "",
                status: 0,
                createdOn: "2024-08-27T16:14:34.807Z",
            });
            setUserImage(null);
        } catch (error) {
            console.error("Registration error:", error);
            // if (
            //     error.response.data &&
            //     error.response.data.errors &&
            //     error.response.data.errors.Password
            // ) {
            //     alert(error.response.data.errors.Password);
            // }
            // toast.error(error.response.data);
        }
    };

    return (
        <>
            <MainHeader />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">Registration</div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="firstName" className="form-label">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstName"
                                            name="firstName"
                                            value={user.firstName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="lastName" className="form-label">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                            name="lastName"
                                            value={user.lastName}
                                            onChange={handleInputChange}
                                            required
                                            min={3}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={user.email}
                                            onChange={handleInputChange}
                                            required
                                        // pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            value={user.password}
                                            onChange={handleInputChange}
                                            required
                                            min={6}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="userImage" className="form-label">
                                            User Image
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="userImage"
                                            name="userImage"
                                            value={user.imageUrl}
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="imageAlt" className="form-label">
                                            Image Alt Text
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="imageAlt"
                                            name="imageAlt"
                                            value={user.imageAlt}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary me-2">
                                        Register
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        /> */}
            </div>
            <Footer />
        </>
    );
};

export default Registration;
