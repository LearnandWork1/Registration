import axios from 'axios';
import React, { useState } from 'react';
import MainHeader from "./MainHeader";
import { Link, useNavigate } from "react-router-dom";


const LoginNEW = () => {
    const tutorialName = "ReactJs";
    const RollNo = 121;
    const isActive = false;
    const currentDate = new Date();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const student = {
        name: 'AAA',
        city: 'Hyd'
    };
    const SaveData = (msg) => {
        alert(msg)
    }
    const navigate = useNavigate();
    const cityList = ['Hyd', 'Blr'];

    const [nipunaUsersObj, setNipunaLoginUserObj] = useState({
        "regionOrState": "",
        "district": "",
        "email": "",

    });

    const updateFormValue = (event, key) => {

        setNipunaLoginUserObj(oldobj => ({ ...oldobj, [key]: event.target.value }))
    }

    const onSaveUser = async () => {

        //const response = await axios.post("https://localhost:7053/api/Users/Login", nipunaUsersObj);
        // const response = await axios.post("https://localhost:7053/api/Users/Login2", email,password);
        debugger;
        // const response = await axios.post(`http://localhost:5254/api/Users/Login`, {
        //     Email: email,
        //     password: password,
        // });
        const response = await axios.post(`https://localhost:7051/api/Users/Login`, {
            Email: email,
            password: password,
        });
    
        alert("Successful");
        // if (response2.data.result) 
        // {
        //     alert("Successful");
        // }
        if (!response || !response.data) {
            throw new Error("Invalid response");
        }
        if (response.data && response.data.user) {
            localStorage.setItem("Role", response.data.user.type);

            console.log("Login successful:", response.data);
            localStorage.setItem("userEmail", response.data.user.email);
            localStorage.setItem("userID", response.data.user.id);
            localStorage.setItem("AccessToken", response.data.token);
            debugger;

            if (response.data.user.type === "Users") {
                navigate("/LoadNipunaResponses");
            } else {
                navigate("/SchoolNipunaData");
            }
            // else {
            //     alert(res.data.message);
            // }
        }



    }

    return (
        <div id="wrapper">
            <MainHeader></MainHeader>
            <table>
                <tr>
                    <td>&nbsp;</td>
                    <td>
                        CurrentDate : {currentDate.toString()}
                        <div>
                            <label>State/Region</label>

                            <input list="lstRegion" id="lstRegionID" className='form-control' onChange={(event) => updateFormValue(event, 'regionOrState')} name="region-choice" />

                            <datalist id="lstRegion">
                                <option value="AP"></option>
                                <option value="Telangana"></option>
                                <option value="Tamilnadu"></option>
                                <option value="Karnataka"></option>
                                <option value="Goa"></option>
                            </datalist>

                            <label>District</label>
                            <input type='text' onChange={(event) => updateFormValue(event, 'district')} className='form-control' ></input>


                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                onChange={(event) => updateFormValue(event, 'email')} />
                        </div>
                    </td>


                </tr>
                {/* <button onClick={getDepts} >Send Data</button> */}
                <br></br>

                <tr><td> Save</td><td align='right'> <button className="btn btn-outline-dark" onClick={onSaveUser} >
                    SAVE
                </button></td>
                </tr>

            </table>


        </div>


    );
};

export default LoginNEW;