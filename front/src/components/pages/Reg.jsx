import React, { useState } from 'react'
import Form from '../sub/Form'
import FormButtons from '../sub/formComp/FormButtons'
import Input from '../sub/formComp/Input'

const Reg = () => {

  const [message, setMessage] = useState("")

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    retype: ""
  })

  const change = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  const clear= (e)=>{
    setData({
      name: "",
      username: "",
      email: "",
      password: "",
      retype: ""
    })
  }

  const register = (e) => {
    e.preventDefault()
    if (data.username == "" || data.password == "" || data.email == "") {
      setMessage("Username, email or password is empty!")
      return
    }
    if (data.retype !== data.password) {
      e.preventDefault()
      setMessage("The passwords do not match!")
      return
    }
    fetch('http://localhost:4000/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        "name": data.name,
        "username": data.username,
        "password": data.password,
        "email": data.email,
        "retype": data.retype
      })
    })
      .then((response) => response.json())
      .then(json => {
        if (json.message == "Success") {
          setMessage("Successfull registration!")
        } else {
          setMessage(json.message)
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <Form
      className="ms-5 me-5"
      message={message}
      title='Registration'>
      <Input
        id='name'
        label='Name: '
        value={data.name}
        change={change}
        type='text' />
      <Input
        id='username'
        label='Username: '
        value={data.username}
        change={change}
        type='text' />
      <Input
        id='password'
        label='Password: '
        value={data.password}
        change={change}
        type='password' />
      <Input
        id='retype'
        label='Retype password: '
        value={data.retype}
        change={change}
        type='password' />
      <Input
        id='email'
        label='E-mail: '
        value={data.email}
        change={change}
        type='email' />
      <FormButtons
        onClickPrim={register}
        typePrim="submit"
        titlePrim="Register"
        onClickSec={clear}
        typeSec='reset'
        titleSec='Clear'
        titleDel=""
      />
    </Form>
  )
}

export default Reg