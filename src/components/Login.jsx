import React,{useState} from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


const provider = new GoogleAuthProvider();




const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log('Submitted:', { username, password });
    
  };
  const handleGoogleLogin = () => {
    // Implement Google login logic
    console.log('Logging in with Google');
  };

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const handleLogin = () =>{
       signInWithPopup(auth,googleProvider).then((result) => {
        
        const user = result.user;
        
        
      }).catch((error) => {
        
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    
    }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
       <div className='max-w-md w-full p-4 bg-white shadow-md rounded-md'>
       <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit <a href='/'></a>
          </button>
        </form>
        <button className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={handleLogin}>
        <FontAwesomeIcon icon={faGoogle} className="mr-2" /> Login
        </button>
       </div>
      
       
    </div>
  )
}

export default Login