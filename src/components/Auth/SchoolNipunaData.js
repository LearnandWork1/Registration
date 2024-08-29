import axios from 'axios';
import React, { useState } from 'react';
import MainHeader from "./MainHeader";
import Footer from "./common/Footer";

const SchoolNipunaData = () => {
    const tutorialName = "ReactJs";
    const RollNo = 121;
    const isActive = false;
    const currentDate = new Date();

    const student = {
        name: 'AAA',
        city: 'Hyd'
    };
    const SaveData = (msg) => {
        alert(msg)
    }
    const cityList = ['Hyd', 'Blr'];

    const [nipunaUsersObj, setNipunaUserObj] = useState({
        "regionOrState": "",
        "district": "",
        "schoolType": "",
        "schoolName": "",
        "pinCode": "",
        "nameOfTheTeacher": "",
        "contactNumber": "",
        "emailID": "",
        "skillType": "",
        "class": "",
        "date": new Date(),
        "numberOfStudents": 0,
        "feedbackGoodnessStandards": "",
        "nameOfPreceptorConductedSittings": "",
        "hetCoordinator": "",
        "isHELPSessionConducted": true,
        "reasonForNotConductingSession": "",
        "mentorName": "",
        "otherComments": ""
    });

    const updateFormValue = (event, key) => {

        setNipunaUserObj(oldobj => ({ ...oldobj, [key]: event.target.value }))
    }

    // const getnipunaUsers = async () => {
    //     //alert('Hi');
    //     debugger;
    //     const result = await axios.get("https://localhost:7053/api/Nipunas/GetAllNipunas");
    //     setUser(result.data);
    // }


    const onSaveUser = async () => {

        const res = await axios.post("https://localhost:7051/api/Nipunas/AddNipunas", nipunaUsersObj);
        debugger;
        //if (res.data.result) 
        {
            alert("Successful");
        }
        // else {
        //     alert(res.data.message);
        // }


        // const [value, setValue] = useState('');
        // const options = [
        //     { label: "AP", value: 1 },
        //     { label: "Telangana", value: 2 },
        //     { label: "Tamilande", value: 3 }
        // ]
        // function handleSelect(event) {
        //     setValue(event.target.value);
        // }


        // const [selects, setselects] = useState('');

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
                            {/* <input type='text' onChange={(event) => updateFormValue(event, 'regionOrState')} className='form-control' ></input>
                             */}
                            {/* <select className='form-select'>
                                {
                                    options.map(option => {
                                        <option value={option.value} onChange={(handleSelect) => updateFormValue(event, 'regionOrState')}>{option.label}</option>
                                    })
                                }
                            </select> */}
                            {/* <select className='form-control' onChange={(event) => updateFormValue(event, 'regionOrState')}>
                                <option>AP</option>
                                <option>Telanagana</option>
                            </select> */}
                            <input list="lstRegion" id="lstRegionID" className='form-control' onChange={(event) => updateFormValue(event, 'regionOrState')} name="region-choice" />

                            <datalist id="lstRegion">
                                <option value="AP"></option>
                                <option value="Telangana"></option>
                                <option value="Tamilnadu"></option>
                                <option value="Karnataka"></option>
                                <option value="Goa"></option>
                            </datalist>


                            <label>District</label>
                            <input type='text' onChange={(event) => updateFormValue(event, 'district')}   className='form-control' ></input>
                            <label>School Type</label>
                            <input type='text' onChange={(event) => updateFormValue(event, 'schoolType')} className='form-control' ></input>
                            <label>School Name</label>
                            <input type='text' onChange={(event) => updateFormValue(event, 'schoolName')} className='form-control' ></input>
                            <label>PIN Code</label>
                            <input type='text' onChange={(event) => updateFormValue(event, 'pinCode')} className='form-control' ></input>
                            {/* Name of the Teacher: {student.name} */}
                            <label>Name of the Teacher</label>
                            <input type='text' onChange={(event) => updateFormValue(event, 'nameOfTheTeacher')} className='form-control' ></input>
                            <label>Contact Number</label>
                            <input type='text' onChange={(event) => updateFormValue(event, 'contactNumber')} className='form-control' ></input>
                            <label>Email</label>
                            <input type='text' onChange={(event) => updateFormValue(event, 'emailID')} className='form-control' ></input>
                            <label>Class</label>
                            <input type='text' onChange={(event) => updateFormValue(event, 'class')} className='form-control' ></input>
                            <label>TEST</label>
                            <input type='text' onChange={(event) => updateFormValue(event, 'class')} className='form-control' ></input>
                        </div>
                    </td>
                    <td>&nbsp;</td>
                    <td>
                        CurrentDate : {currentDate.toString()}
                        <div>

                            <label>Total Number of Students</label>
                            <input type='text' onChange={(event) => updateFormValue(event, 'skillType')} className='form-control' ></input>

                            <label>Number of Students attended</label>
                            <input type='text' onChange={(event) => updateFormValue(event, 'numberOfStudents')} className='form-control' ></input>
                            <label>Skill Type</label>
                            <input type='text' onChange={(event) => updateFormValue(event, 'skillType')} className='form-control' ></input>
                            <label>Feedback/Goodness Standards</label>
                            {/* <input type='text' onChange={(event) => updateFormValue(event, 'feedbackGoodnessStandards')} className='form-control' ></input>
                            */}
                            <input list="lstFeedback" id="lstFeedbackID" className='form-control' onChange={(event) => updateFormValue(event, 'feedbackGoodnessStandards')} name="feedbackGiven" />

                            <datalist id="lstFeedback"   >
                                <option value="Joyful"></option>
                                <option value="Happy"></option>
                                <option value="Mind is Activated"></option>
                                <option value="Want to experience for many years"></option>
                                <option value="Found in Improvement in Studies"></option>
                                <option value="Found in Improvement in Attitude"></option>
                                <option value="all of the above"></option>
                                <option value="Not applicable(other)"></option>
                            </datalist>
                            {/* Name of the Teacher: {student.name} */}
                            <label>Name of preceptor conducted Meditation Sitting</label>
                            <input type='text' onChange={(event) => updateFormValue(event, 'nameOfPreceptorConductedSittings')} className='form-control' ></input>
                            <label>HET-Coordinator Name</label>
                            <input type='text' onChange={(event) => updateFormValue(event, 'hetCoordinator')} className='form-control' ></input>
                            <label>If No. please give reason</label>
                            <input type='text' onChange={(event) => updateFormValue(event, 'reasonForNotConductingSession')} className='form-control' ></input>
                            <label>Select Mentor</label>
                            <input type='text' onChange={(event) => updateFormValue(event, 'mentorName')} className='form-control' ></input>
                            <label>Comments</label>
                            <input type='text' onChange={(event) => updateFormValue(event, 'otherComments')} className='form-control' ></input>
                            <label>Status</label>
                            <input type='text' onChange={(event) => updateFormValue(event, 'class')} className='form-control' ></input>
                        </div>
                    </td>

                </tr>
                {/* <button onClick={getDepts} >Send Data</button> */}
                <br></br>

                <tr><td> Save</td><td align='right'> <button className="btn btn-outline-dark" onClick={onSaveUser} >
                        SAVE
                    </button></td>
                <td>
                    
               </td></tr>

                <tr></tr>



            </table>

            <Footer />
        </div>


    );
};

export default SchoolNipunaData;