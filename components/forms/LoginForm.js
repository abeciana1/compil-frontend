import React from 'react'


const LoginForm = () => {

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submit")
    }

    return (
        <React.Fragment>
            {/* <h1 className="text-5xl">Login</h1> */}
            {/* <div className="bg-gray-600 w-4/12 m-auto"> */}
            <div className="w-10/12 md:w-4/12">
                <div style={{"zIndex": "3", "backgroundColor": "#EFEFEF", "margin": "auto"}}>
                    <form className="p-10 md:p-14 lg-p-10" onSubmit={submitHandler}>
                        <label>Email:</label>
                        <br/>
                        <input
                            type="email"
                            // className="form-input rounded-full mt-2 w-4/5 py-3 px-4 block border-#EAE9EC"
                            className="mt-2 block w-full py-3 px-4 rounded-md border-black focus:outline-none"
                            placeholder="Email"
                        />
                        <br/>
                        {/* <input type="email" className="mt-1 block w-full py-3 px-4 rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="john@example.com"></input> */}
                        <label>Password:</label>
                        <input
                            type="password"
                            // className="form-input rounded-full mt-1 w-full py-3 px-4 block border-#EAE9EC"
                            className="mt-2 block w-full py-3 px-4 rounded-md border-red-500 focus:outline-none"
                            placeholder="Password"
                        />
                        {/* <input type="email" class="form-input px-4 py-3 rounded-full"/> */}
                        <br/>
                        {/* <br/> */}
                        <input 
                            type="submit"
                            className="text-white bg-red px-3 py-1 md:col-start-4 md:col-end-5 rounded-full focus:outline-none text-xl"
                        />
                    </form>
                </div>
                <br/>
            </div>
        </React.Fragment>
    )
}

export default LoginForm