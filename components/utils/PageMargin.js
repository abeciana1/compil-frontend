import React from 'react';


const PageMargin = ({children}) => {

    
    return (
        <React.Fragment>
            <section className="mx-10 my-10">
                {children}
            </section>
        </React.Fragment>
    )
}

export default PageMargin