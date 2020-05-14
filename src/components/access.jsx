import React, { useState } from 'react';
import { getStaffs } from '../UseFetch'
import { useHistory } from 'react-router-dom'

const Access = () => {
  const [user, setUser] = useState('');
  const [idUser, setIdUser] = useState('');
  const history = useHistory()



  async function searchUserinData() {
    try {
      const response = await getStaffs(user)
      setIdUser(response[0].staffid)
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
