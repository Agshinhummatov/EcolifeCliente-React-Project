import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddEmployee(props) {
  const navigate = useNavigate();
  const baseURL = "https://localhost:7012";

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState(0);


  function create() {
    const employee = { fullName, address, age };
    axios.post(`${baseURL}/api/employee/create`, employee).then((response) => {
      props.hide()
    });

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    create();
  
  }




  return (
    <div>
      <Modal isOpen={props.open}>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <ModalHeader>Employee</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="fullName">
                Full name
              </Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                onChange={(e) => setFullName(e.target.value)}

              />
            </FormGroup>
            <FormGroup>
              <Label for="address">
                Address
              </Label>
              <Input
                id="address"
                name="address"
                type="text"
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="age">
                Age
              </Label>
              <Input
                id="age"
                name="age"
                type="number"
                min={18}
                onChange={(e) => setAge(e.target.value)}
              />
            </FormGroup>

          </ModalBody>
          <ModalFooter>
            <Button type='submit' color="primary">
              Add
            </Button>{' '}
            <Button onClick={props.hide} color="secondary">
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  )
}

export default AddEmployee
