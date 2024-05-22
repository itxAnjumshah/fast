import React, { useState } from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function Dform() {
    const [formData, setFormData] = useState({
        uname: '',
        uemail: '',
        upassword: '',
        unumber: '',
        utextarea: '',
        index: '', // Add index field to formData state
    });

    const [userData, setUserData] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formData.index === '') {
            const checkFilterUser = userData.filter((v) => v.uemail === formData.uemail || v.unumber === formData.unumber );

            if (checkFilterUser.length > 0) {
                alert("Email or phone already exists.");
                toast.error("Email or phone already exists.");
            } else {
                setUserData([...userData, formData]);
                setFormData({
                    uname: '',
                    uemail: '',
                    upassword: '',
                    unumber: '',
                    utextarea: '',
                    index: '', // Reset index after submission
                });
                toast.success("User added successfully!");
            }
        } else {
            const editedUserData = [...userData];
            editedUserData[formData.index] = formData;
            setUserData(editedUserData);
            setFormData({
                uname: '',
                uemail: '',
                upassword: '',
                unumber: '',
                utextarea: '',
                index: '', // Reset index after submission
            });
            toast.success("User updated successfully!");
        }
    };

    const deleterow = (index) => {
        const filteredUserData = userData.filter((_, i) => i !== index);
        setUserData(filteredUserData);
        toast.success("User deleted successfully!");
    };

    const editRow = (index) => {
        const editData = userData[index];
        setFormData({ ...editData, index: index }); // Set index in formData for editing
    };

    return (
        <div className='enquiry'>
            <ToastContainer/>
            <h2>User Inquiry Form</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label><br />
                <input type="text" name='uname' value={formData.uname} onChange={handleChange} placeholder='Enter your Name' /><br />

                <label>Email:</label><br />
                <input type="text" name='uemail' value={formData.uemail} onChange={handleChange} placeholder='Enter your Email' /><br />

                <label>Password:</label><br />
                <input type='password' name='upassword' value={formData.upassword} onChange={handleChange} placeholder='Enter your Password' /><br />

                <label>Phone:</label><br />
                <input type="number" name='unumber' value={formData.unumber} onChange={handleChange} placeholder='Enter your Phone number' /><br />

                <label>Message:</label><br />
                <textarea name='utextarea' value={formData.utextarea} onChange={handleChange} placeholder='Enter your message'></textarea><br />
                <button type="submit">
                    {formData.index !== '' ? 'Update' : 'Save'}
                </button>
            </form>

            {/* Display the number of users */}
            <p>Total Users: {userData.length}</p>
            <table style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Phone</th>
                        <th>Message</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.length > 0 ?
                        userData.map((obj, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{obj.uname}</td>
                                <td>{obj.uemail}</td>
                                <td>{obj.upassword}</td>
                                <td>{obj.unumber}</td>
                                <td>{obj.utextarea}</td>
                                <td>
                                    <button onClick={() => deleterow(i)}>Delete</button>
                                    <button onClick={() => editRow(i)}>Edit</button>
                                </td>
                            </tr>
                        ))
                        :
                        <tr>
                            <td colSpan={7}>No data found</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}
