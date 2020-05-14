import React, { useState } from 'react';

const Access = () => {
  const [user, setUser] = useState('');

  function searchUserinData() {
    console.log(user)
  }

  return (
    <div>
      <div>
        <h1>Task Manager</h1>
        <p>4040apps</p>
      </div>
      <div className=''>
        <input
          placeholder='User'
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
