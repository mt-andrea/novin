import React, { useState } from 'react'
import Form from '../sub/Form'
import FormButtons from '../sub/formComp/FormButtons'
import Input from '../sub/formComp/Input'

const Login = () => {
  const [message, setMessage] = useState("")

  const [data, setData] = useState({
    username: "",
    password: "",
  })

  const change = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  const clear = (e) => {
    setData({
      username: "",
      password: "",
    })
  }

  const login=(e)=> {
    e.preventDefault()
    if (data.username == "" || data.password == "") {
      setMessage("Username or password is empty!")
      return
    }

    fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        "username": data.username,
        "password": data.password
      })
    })
      .then((response) => response.json())
      .then(json => {

        if (json.message == "Success") {
          sessionStorage.token = json.token
          props.beallit({ token: json.token })
          navigate("/home")
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
      title='Log In'
    >
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
        <FormButtons
        onClickPrim={login}
        typePrim="submit"
        titlePrim="Log In"
        onClickSec={clear}
        typeSec='reset'
        titleSec='Clear'
        titleDel=""
      />
    </Form>
  )
}

export default Login