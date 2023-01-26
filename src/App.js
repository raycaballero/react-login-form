import './App.css';
import LoginForm from './components/LoginForm';

function App() {
    return (
        <div>
            <LoginForm onSubmit={(username, password) => console.log(username, password)} />
        </div>
    );
}

export default App;
