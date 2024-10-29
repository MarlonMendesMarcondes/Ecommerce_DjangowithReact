import {useState, useEffect} from "react"
import { register } from '../../utils/auth'
import { useNavigate} from 'react-router-dom'
import { useAuthStore } from '../../store/auth'


function Register() {
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/")
        }
    }, [])
    
    const resetForm = () => {
        setFullname('');
        setEmail('');
        setMobile('');
        setPassword('');
        setPassword2('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Set isLoading to true when the form is submitted
        setIsLoading(true);

        const { error } = await register(fullname, email, mobile, password, password2);
        if (error) {
            alert(JSON.stringify(error));
        } else {
            navigate('/');
            resetForm();
        }

        // Reset isLoading to false when the operation is complete
        setIsLoading(false);
    };
    return (
    <div>
            <div>Register</div>
            
            <form action="">
                <input 
                type="text" 
                placeholder='Full Name'
                name=''
                id=''
                onChange={(e) => setFullname(e.target.value)}
                />
                <br />
                <input 
                type="email" 
                placeholder='Email'
                name=''
                id=''
                onChange={(e) => setEmail(e.target.value)}
                />
                <br />  
                <input 
                type="number" 
                placeholder='mobile number'
                name=''
                id=''
                onChange={(e) => setMobile(e.target.value)}
                />
                <br />
                <input 
                type="password"  
                placeholder='Enter Password'
                name=''
                id=''
                onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <input 
                type="password"  
                placeholder='Confirm Password'
                name=''
                id=''
                onChange={(e) => setPassword2(e.target.value)}
                />
                <br />
                <br />
                <button>Register</button>
            </form>
        
    </div>
    
  )
}

export default Register
