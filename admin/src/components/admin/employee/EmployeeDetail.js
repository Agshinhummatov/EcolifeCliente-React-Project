import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";


function EmployeeDetail() {
    const { id } = useParams();
    const baseURL = "https://localhost:7012";
    const[employee,setEmployee] = useState({})

    const getById = (id) => {
        const res = axios.get(`${baseURL}/api/employee/GetById/${id}`).then((response) => {
            setEmployee(response.data);
        });
    }

    useEffect(() => {
        getById(id)
    }, []);

    return (
        <div>
            <div class="container">
                <h1>{employee.fullName}</h1>
                <h1>{employee.address}</h1>
                <h1>{employee.age}</h1>
            </div>
        </div>
    )
}

export default EmployeeDetail
