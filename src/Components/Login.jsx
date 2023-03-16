import {React,useState} from 'react';

const Login = () => {
    const[adminLogin,setAdminLogin]=useState(false);
    const handleFormSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        console.log(email, password);
    };
    let x=adminLogin
    console.log(adminLogin)
    return (
        <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default '>
            {x===false?
            <div>
                <div>
                    <button
                        className={`float-left mr-0 bg-blue-500 hover:bg-blue-600 text-white font-semibold hover:text-white border border-blue-500 hover:border-transparent  w-1/2`}
                        onClick={()=>{setAdminLogin(false)}}
                    >
                      User  Login
                    </button>
                    </div>
                    <div>
                    <button
                        className={`ml-0 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  border border-blue-500 hover:border-transparent  w-1/2`}
                        onClick={()=>{setAdminLogin(true)}}
                    >
                        Admin Login
                    </button>
                    </div>
                    </div>
                    :
                    <div>
                <div>
                    <button
                        className={`float-left mr-0 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent  w-1/2`}
                        onClick={()=>{setAdminLogin(false)}}
                    >
                       User Login
                    </button>
                    </div>
                    <div>
                    <button
                        className={`ml-0 bg-blue-500 hover:bg-blue-600 text-white font-semibold hover:text-white  border border-blue-500 hover:border-transparent  w-1/2`}
                        onClick={()=>{setAdminLogin(true)}}
                    >
                        Admin Login
                    </button>
                    </div>
                    </div>
                    }
                    
                <div className='py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Log in to your account 🔐
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Login;