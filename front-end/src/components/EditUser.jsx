import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';

function Edituser() {
    const [name, SetName] = useState("");
    const [email, Setemail] = useState("");
    const [gender, Setgender] = useState("Male");
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        getuser();
    },[]);
    const updateuser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://127.0.0.1:5000/users/${id}`, {
                name,
                email,
                gender,
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
    const getuser = async() =>{
        const response = await axios.get(`http://127.0.0.1:5000/users/${id}`);
        SetName(response.data.name);
        Setemail(response.data.email);
        Setgender(response.data.gender); 
    }
    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={updateuser}>
                    <div className="field">
                        <label className='label'>Name</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='name' value={name} onChange={(e) => SetName(e.target.value)} />
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Email</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Email' value={email} onChange={(e) => Setemail(e.target.value)} />
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Gender</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select value={gender} onChange={(e) => Setgender(e.target.value)}>
                                    <option value="Pria">Pria</option>
                                    <option value="Cowo">Cowo</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <button type='submit' className='button is-success'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Edituser