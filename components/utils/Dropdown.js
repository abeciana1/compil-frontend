import React, {useState} from 'react';


const Dropdown = (props) => {

    console.log(props)

    const {
        onChange,
        defaultVal,
        options,
        className,
    } = props;

    const [ renderOptions, setRenderOptions ] = useState(false)

    return (
        <React.Fragment>
            <div
                className={className}
            >
                <button
                    className="border-2 border-black w-full py-2 rounded-xl focus:outline-none"
                    onClick={() => {
                        onChange
                        setRenderOptions(!renderOptions)
                    }}
                >
                    {defaultVal ? "Public" : "Private"}
                </button>
                {renderOptions && (
                    <div
                        className="pt-4"
                    >
                        <div
                            className="shadow-xl w-full py-2 rounded-xl border-2 border-black"
                        >
                            {options?.map((option, idx) => {

                                return (<div
                                    className="py-2 text-xl px-2"
                                >
                                    {option ? "Public" : "Private"}
                                </div>)
                            })}
                        </div>
                    </div>
                )}
            </div>
        </React.Fragment>
    )
}

export default Dropdown