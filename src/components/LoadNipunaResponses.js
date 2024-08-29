import axios from 'axios';
import React, { useState, useEffect } from "react";
import MainHeader from "./MainHeader";
import Footer from "./common/Footer";
import moment from "moment";
const LoadNipunaResponses = () => {
    const [nipunaUsersList, setUser] = useState([]);
    const getnipunaUsers = async () => {
        //alert('Hi');
        debugger;
        const result = await axios.get("https://localhost:7051/api/Nipunas/GetAllNipunas");
        setUser(result.data);
    }
    const EditUser = (data) => {
        //  setUser(data);
        alert('Try Later');
    }
    const DeleteUsers = () => {
        alert('Try Later');
    }

    useEffect(() => {
        getnipunaUsers();
    }, []);


    return (
        <div>
            <MainHeader />


            <div >
           {/* </div> <div style={{ display:'inline-block', paddingRight: '5px', backgroundColor: '#eee', width: '80%' }}><br></br> */}
                <div class="w-100 p-3" style={{ float: 'left', paddingRight: '5px', backgroundColor: '#eee', width: '80%' }}>Width 100%
                    <div className="row justify-content-center">

                        <div className="col-md-50"><br></br>

                            {/* <div class="w-100 p-3" style="background-color: #eee;">Width 100%</div>  */}

                            <div className="card">
                                <div className="card-header">Nipuna School Details</div>
                                <table class="views-table cols-6 table table-hover table-striped" >
                                    <tr class="views-field views-field-created">
                                        <th class="views-field views-field-created">Index</th>
                                        <th>RegionOrState</th>
                                        <th>District</th>
                                        <th>SchoolType</th>
                                        <th>SchoolName</th>
                                        <th>PINCode</th>
                                        <th>NameOfTheTeacher</th>
                                        <th>ContactNumber</th>
                                        <th>EmailID</th>
                                        <th>SkillType</th>
                                        <th>Class</th>
                                        <th>NumberOfStudents</th>
                                        <th>Feedback</th>
                                        <th>Action </th>
                                    </tr>
                                    <tbody>
                                        {
                                            nipunaUsersList.map((item, index) => {
                                                return (<tr class="odd ticket-normal state-nieuw views-row-first views-row-last">
                                                    <td class="views-field views-field-priority">{index + 1}</td>
                                                    <td>{item.regionOrState} </td>
                                                    <td>{item.district} </td>
                                                    <td>{item.schoolType}</td>
                                                    <td>{item.schoolName} </td>
                                                    <td>{item.pinCode} </td>
                                                    <td>{item.nameOfTheTeacher}</td>
                                                    <td>{item.contactNumber} </td>
                                                    <td>{item.emailID} </td>
                                                    <td>{item.skillType}</td>
                                                    <td>{item.class} </td>
                                                    <td>{item.numberOfStudents}</td>
                                                    <td><button className='btn btn-primary' onClick={EditUser} >Edit</button></td>
                                                    <td><button className='btn btn-danger' onClick={DeleteUsers} >Delete</button></td>

                                                </tr>)
                                            })
                                        }
                                    </tbody>
                                </table>
                                <br></br>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            {/* <div class="container">
                <table class="views-table cols-6 table table-hover table-striped" >
                    <thead>
                        <tr><td colSpan={2}><button onClick={getnipunaUsers} >Load Users</button></td></tr>
                        <tr>
                            <th class="views-field views-field-created">Index</th>
                            <th>RegionOrState</th>
                            <th>District</th>
                            <th>SchoolType</th>
                            <th>SchoolName</th>
                            <th>PINCode</th>
                            <th>NameOfTheTeacher</th>
                            <th>ContactNumber</th>
                            <th>EmailID</th>
                            <th>SkillType</th>
                            <th>Class</th>
                            <th>DateHeaderStyle</th>
                            <th>NumberOfStudents</th>
                            <th>Feedback</th>
                            <th>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            nipunaUsersList.map((item, index) => {
                                return (<tr class="odd ticket-normal state-nieuw views-row-first views-row-last">
                                    <td class="views-field views-field-priority">{index + 1}</td>
                                    <td>{item.regionOrState} </td>
                                    <td>{item.district} </td>
                                    <td>{item.schoolType}</td>
                                    <td>{item.schoolName} </td>
                                    <td>{item.pinCode} </td>
                                    <td>{item.nameOfTheTeacher}</td>
                                    <td>{item.contactNumber} </td>
                                    <td>{item.emailID} </td>
                                    <td>{item.skillType}</td>
                                    <td>{item.class} </td>
                                    <td>{moment(item.dadatete).format("MMMM DD, YYYY")}</td>
                                    <td>{item.numberOfStudents}</td>
                                    <td>{item.feedbackGoodnessStandards}</td>
                                    <td><button className='btn btn-primary' onClick={EditUser} >Edit</button></td>
                                    <td><button className='btn btn-danger' onClick={DeleteUsers} >Delete</button></td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div> */}
            <Footer />
        </div>
    );
};

export default LoadNipunaResponses;