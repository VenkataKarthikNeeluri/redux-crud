import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { createUser } from '../Actions/UserAction'
import { useNavigate } from 'react-router-dom'

function Create() {
  const [user,setUser] = useState({
    firstName: '',
    lastName: '',
    age: 0,
    gender: '',
    email: '',
    phone: ''
  })

  const [gender,setGender] = useState('')
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const readValue = async (e) => {
    const { name, value } = e.target 
      setUser({ ...user,[name]: value })
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try{
      let newUser = {
        ...user,
        gender
      }
      console.log(`new user =`, newUser)
      dispatch(createUser(newUser))
      .unwrap()
      .then(res => {
        toast.success('New User created successfully')
          navigate(`/`)
      }).catch(err => toast.error(err.response.data.msg))
    } catch (err) {
      toast.error(err.msg)
    }
  }
      
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-center">
            Create User
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form autoComplete="off" onSubmit={submitHandler}>
            <div className="form-group mt-2">
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName" value={user.firstName} onChange={readValue} className='form-control' required />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName" value={user.lastName} onChange={readValue} className='form-control' required />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="age">Age</label>
              <input type="number" name="age" id="age" value={user.age} onChange={readValue} className='form-control' required   />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="gender">Gender</label>
              <br />

              <div className="form-check form-check-inline">
                <input type="radio" name="gender" id="gender" value={"male"} checked={gender == "male"} onChange={(e) => setGender(e.target.value)} className='form-check-input' required />
                <label htmlFor="gender" className='form-check-lable'>Male</label>
              </div>

              <div className="form-check form-check-inline">
                <input type="radio" name="gender" id="gender" value={"female"} checked={gender == "female"} onChange={(e) => setGender(e.target.value)} className='form-check-input' required />
                <label htmlFor="gender" className='form-check-lable'>Female</label>
              </div>

              <div className="form-check form-check-inline">
                <input type="radio" name="gender" id="gender" value={"transgender"} checked={gender == "transgender"} onChange={(e) => setGender(e.target.value)} className='form-check-input' required />
                <label htmlFor="gender" className='form-check-lable'>Transgender</label>
              </div>

            </div>
            <div className="form-group mt-2">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" value={user.email} onChange={readValue} className='form-control' required />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="phone">Phone</label>
              <input type="number" name="phone" id="phone" value={user.phone} onChange={readValue} className='form-control' required />
            </div>

            <div className="form-group mt-2">
              <input type="submit" name="" id="" value="Create User" className='btn btn-success' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create
