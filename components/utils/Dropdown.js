import React, {useState} from 'react';


const Dropdown = (props) => {

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
                        setRenderOptions(!renderOptions)
                    }}
                >
                    <div className="flex items-center ml-5 justify-items-stretch">
                        {defaultVal ? "Public" : "Private"}
                        <span className="ml-48">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </span>
                    </div>
                </button>
                {renderOptions && (
                    <>
                        <div
                            className="py-4"
                        >
                            <div
                                className="shadow-xl w-full py-2 rounded-xl border-2 border-black divide-y-2 divide-black"
                            >
                                {options?.map((option, idx) => {

                                    return (
                                        <div
                                        onClick={(e) => onChange(e)}
                                        className="py-2 text-xl px-2 hover:bg-black hover:text-white"
                                    >
                                        {option ? "Public" : "Private"}
                                    </div>)
                                })}
                            </div>
                        </div>
                        <button>
                            Cancel
                        </button>
                    </>
                )}
            </div>
        </React.Fragment>
    )
}

export default Dropdown