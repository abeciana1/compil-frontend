import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router'
import { checkEmail } from '../../redux/actions/user-actions'
import ClipLoader from "react-spinners/ClipLoader";

const ForgotPassForm = (props) => {

    const [email, setEmail] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        props.checkEmail(email)
    }

        return (
            <React.Fragment>
                <form className="p-10 md:p-14 lg-p-10" onSubmit={submitHandler}>
                    <label>Email:</label>
                    <br />
                    <div className="flex items-center">
                        <input
                            name="email"
                            type="email"
                            value={email}
                            // className="form-input rounded-full mt-2 w-4/5 py-3 px-4 block border-#EAE9EC"
                            className="mt-2 block py-3 px-4 rounded-md border-black focus:outline-none w-4/5"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="pl-5">
                            {props.user.email ?
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="#8AEA92" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </>
                            :
                            <ClipLoader
                                color="#28262C"
                                loading={true}
                                size={25}
                            />
                            }
                        </div>
                    </div>
                    <br />
                    <input 
                        type="submit"
                        className="text-white bg-red px-3 py-1 md:col-start-4 md:col-end-5 rounded-full focus:outline-none text-xl"
                        />
                </form>
            </React.Fragment>
        )
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = {
    checkEmail
}


export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassForm)