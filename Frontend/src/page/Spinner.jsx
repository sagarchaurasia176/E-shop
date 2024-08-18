import React from 'react'
import {PacmanLoader} from 'react-spinners'

const Spinner = () => {
    return (
        <div>
            <div className=' m-auto ml-[560px] sm:mt-[200px]'>
            <PacmanLoader
            color="#f85400" />
            </div>
            {/* spinners apply here */}
           
        </div>
    )
}

export default Spinner