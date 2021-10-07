import {useState} from 'react'

export default function LoginPage({setUser}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {

        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username }),
        })
          .then((r) => r.json())
          .then((user) => setUser(user));
      }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )

}