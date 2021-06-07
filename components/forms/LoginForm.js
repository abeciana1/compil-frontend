import React from 'react'


const LoginForm = () => {

    return (
        <React.Fragment>
            {/* <h1 className="text-5xl">Login</h1> */}
            <div className="bg-#EAE9EC w-3/6 m-auto">
                <form className="">
                    <label>Email:</label>
                    <br/>
                    <input
                        type="email"
                        // className="form-input rounded-full mt-2 w-4/5 py-3 px-4 block border-#EAE9EC"
                        className="mt-1 block w-4/5 py-3 px-4 rounded-md border-black focus:outline-none"
                        placeholder="Email"
                    />
                    {/* <input type="email" className="mt-1 block w-full py-3 px-4 rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="john@example.com"></input> */}

                    <label>Password:</label>
                    
                    <input
                        type="password"
                        // className="form-input rounded-full mt-1 w-full py-3 px-4 block border-#EAE9EC"
                        className="mt-2 block w-4/5 py-3 px-4 rounded-md border-red-500 focus:outline-none"
                        placeholder="Password"
                    />
                    {/* <input type="email" class="form-input px-4 py-3 rounded-full"/> */}
                    <br/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        </React.Fragment>
    )
}

export default LoginForm