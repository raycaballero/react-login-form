import { useState } from 'react'

function LoginForm({ onSubmit }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="login">
            <h1>Login Form</h1>
            <input type="text" id="username-input" placeholder="Username" onChange={e => setUsername(e.target.value)} value={username} />
            <input type="password" id="password-input" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} />
            <input type="submit" id="login-button" value="Submit" onClick={() => onSubmit(username, password)} disabled={!username || !password} />
        </div>
    );
}

export default LoginForm;
