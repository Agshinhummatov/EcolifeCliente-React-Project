import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Button, Table } from 'reactstrap'
import AddEmployee from '../components/admin/employee/AddEmployee'
import { NavLink , useNavigate } from 'react-router-dom';

function Employees() {
    const [open, setOpen] = useState(false);
    const baseURL = "https://localhost:7012";

    const [employees, setEmployees] = useState([])

    const hide = () => {
        getAll();
        setOpen(false);

    }

    const getAll = () => {
        axios.get(`${baseURL}/api/Employee/GetAll`).then((response) => {
            setEmployees(response.data)
        });
    }


    const deleteEmployee = (id) => {
        axios.delete(`${baseURL}/api/employee/delete/${id}`).then((response) => {
            getAll();
        });

    }

    useEffect(() => {
        getAll();
    }, [setEmployees]);

    return (
        <div>
            <div className="container my-3">
                <AddEmployee hide={hide} open={open} />
                <h1 className='text-center my-3'>Employees</h1>
                <Button onClick={() => setOpen(true)} color='success'>Create</Button>
                <Table className='mt-3'>
                    <thead>
                        <tr>
                            <th>
                                FullName
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Address
                            </th>
                            <th>
                                Settings
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(function (item, i) {
                                return <tr key={i}>
                                    <td>
                                        {item.fullName}
                                    </td>
                                    <td>
                                        {item.age}
                                    </td>
                                    <td>
                                        {item.address}
                                    </td>
                                    <td className='d-flex gap-2'>
                                        <NavLink to={`/employee/detail/${item.id}`}>Detail</NavLink>
                                        <Button color='primary'>Edit</Button>
                                        <Button onClick={() => deleteEmployee(item.id)} color='danger'>Delete</Button>
                                    </td>
                                </tr>
                            })
                        }

                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Employees
