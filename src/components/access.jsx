import React, { useState, useContext } from 'react';
import { getStaffs } from '../UseFetch'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../UserContext'


const Access = () => {
  const {user, setUser}  = useContext(UserContext)
  const [email, setEmail] = useState('');
  const history = useHistory()
  const [idUser, setIdUser] = useState('');



  async function searchUserinData() {
 try {
      const response = await getStaffs(email)
      const obj = new Object();
      obj.staffid = response[0].staffid;
      obj.name = response[0].firstname;
     setUser(obj)
      history.push('/dashboard')
    } catch (error) {
      alert('Por favor Revise sus datos y vuelva a intentar')
    }

  }

  return (
    <div>
      <div>
        <h1>Task Manager</h1>
        <p>4040apps</p>
      </div>

      <div className=''>
        <input
          placeholder='email'
          type='email'
          onChange={((e) => {
            setEmail(e.target.value)
          })}
        />

        <button onClick={searchUserinData} type='submit'> Ingresar</button>

      </div>

    </div>
  )

};


export default Access;
