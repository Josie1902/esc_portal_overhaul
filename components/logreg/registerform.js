"use client"
import React, { useState} from 'react';
import LogRegButton from './logregbutton';
import UserTextFields from '@/components/logreg/fields'

export default function RegisterForm({}) {
    const [username, setUsername] = useState('') // State for the username input
    const [password, setPassword] = useState('') // State for the password input  

    const handleUsernameChange = (event) => {
      setUsername(event.target.value)
    };

    const handlePasswordChange = (event) => {
      setPassword(event.target.value)
    };


    const handleSubmit = (event) => {
      event.preventDefault()
      console.log('Registering user...')
      console.log('Username:', username)
      console.log('Password:', password)
      setUsername('')
      setPassword('')
    };

    return(
        <form className={`flex flex-col justify-center items-center`} onSubmit={handleSubmit}>
            <UserTextFields
              username={username}
              password={password}
              onUsernameChange={handleUsernameChange}
              onPasswordChange={handlePasswordChange}
            />
            <LogRegButton label="Sign Up"></LogRegButton>
        </form>
    )
}