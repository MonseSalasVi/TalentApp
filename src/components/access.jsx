import React, { useState, createContext } from 'react';
import { getStaffs } from '../UseFetch'
import { useHistory } from 'react-router-dom'



const Access = () => {
  const [user, setUser] = useState('');
  const history = useHistory()
  const [idUser, setIdUser] = useState('');
  const UserData = createContext(idUser);


  async function searchUserinData() {
    try {
      const response = await getStaffs(user)
      const obj = new Object();
      obj.staffid = response[0].staffid;
      obj.name = response[0].firstname;
      setIdUser(obj)
      history.push('/dashboard')
    } catch (error) {
      alert('Por Favor Revise sus datos y vuelta a intentar')
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
            setUser(e.target.value)
          })}
        />

        <button onClick={searchUserinData} type='submit'> Ingresar</button>

      </div>

    </div>
  )

};


export default Access;
