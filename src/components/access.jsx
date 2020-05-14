import React, { useState } from 'react';
import { getStaffs } from '../UseFetch'

const Access = () => {
  const [user, setUser] = useState('');
  const [idUser, setIdUser] = useState('');



  async function searchUserinData() {
    try {
      const response = await getStaffs(user)
      setIdUser(response[0].staffid)

    } catch (error) {
      alert(error)
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
