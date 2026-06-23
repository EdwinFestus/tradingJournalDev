import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore }  from "../../store/authStore";

const Login = () => {
    const navigate = useNavigate();

    const login = useAuthStore(
        ( state ) => state.login
    );

    const [ email, setEmail] = useState(" ");
    const [ password, setPassword ] = useState(" ");

    const handleSubmit = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        try{
            await login(email, password);

            navigate("/dashboard");
        } catch (err) {
            console.log(err);
            alert("Login failed");
        }
    };

    return (
        <div className = "min-h-screen flex items-center justify-center">
            <form  
                onSubmit={ handleSubmit }
                className="bg-white p-8 rounded-lg shadow-lg w-96" >

                <h2 className="text-2xl font-bold mb-4">
                    Login
                </h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-3 mb-3"

                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }} 
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-3 mb-3"

                    onChange={(e) => {
                        setPassword(e.target.value)
                    }} 
                />

                <button className="w-full bg-blue-600 text-white p-3 rounded" >
                    Login
                </button>



            </form>

        </div>  
    )

}


export default Login;