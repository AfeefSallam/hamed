import React, { useState, useEffect } from 'react';
import axios from 'axios'
// import InputGroup from './InputGroup';
// import RowDetails from './RowDetails';
// import User from "../../users/User";
// import { Link} from 'react-router-dom';
import './liste.css';
import {  Button } from '@material-ui/core';
function UserList(_id) {
const [users, setUsers] = useState([]);
const [user, setUser] = useState([]);
const [form, setForm] = useState({});
const [error, setError] = useState({});

useEffect(() => {
    fetchUsers();
},[]);

const fetchUsers = async () => {
    try {
        const res = await axios.get('http://localhost:5000/api/user');
        setUsers(res.data);
    } catch (error) {
        console.log(error);
    }
}

const onChangeHandler = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    });
}

const onSubmitHandler = (e)=>{
    e.preventDefault();
    axios.post('/api/users', form)
    .then(res=>{
     
      /* hide form after save */
      setForm({})
      /* hide errors after save */
      setError({})
    
    })
    .catch(err=>setError(err.response.data))
    
  }

const deleteUser = async (id_) => {
    if (window.confirm("هل أنت متأكد أنك تريد حذف هذا المستخدم؟")) {
        try {
             const res = await axios.delete(`http://localhost:5000/api/user/${id_}`);
             if(res.status === 200){
                setUsers(users.filter(user => user._id !== id_));
                alert("تم حذف المستخدم بنجاح!");
             }
             else{
                console.error(res);
                alert("حدث خطأ أثناء محاولة حذف المستخدم");
             }
        } catch (error) {
            console.error(error);
            alert("حدث خطأ أثناء محاولة حذف المستخدم");
        }
    } else {
        // do nothing
    }
}

return (
    <div>
        {/* <form onSubmit={onSubmitHandler}>
            <InputGroup 
                label="name" 
                type="text"
                name="name"
                onChange={onChangeHandler}
                errors={error.name}
            />
            <InputGroup
                label="email" 
                type="text"
                name="email"
                onChange={onChangeHandler}
                errors={error.email}
            />
            <InputGroup 
                label="password" 
                type="text"
                name="password"
                onChange={onChangeHandler}
                errors={error.password}
            />
            <button type="submit">Add User</button>
            <h1>User List</h1>
        </form> */}
     <div id='yyy' style={{ overflowX: "auto" }}>
    <table className="customers">
        <thead>
            <tr className="table-header">
                <th>الايميل</th>
                <th>الاسم</th>
                <th>حذف المستخدم</th>
            </tr>
        </thead>
        <tbody>
            {users.map(user => (
                <tr key={user._id} className="table-row">
                    <td>{user.email}</td>
                    <td>{user.name}</td>
                    <td>
                        <Button id='ww' variant="contained" color="secondary" onClick={() => deleteUser(user._id)}>حذف</Button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

    </div>
)
}

export default UserList;
