import {Link} from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const BackButton = function ({destination = '/'}) {
    return(
        <>
            <div className='flex'>
                <Link to={destination} claasName='bg-green-400 text-white px-4 py-1 rounded-lg w-fit'>
                    <BsArrowLeft className='text-2xl bg-sky-400 text-white px-4 py-1 rounded-lg w-fit'/>
                </Link>
            </div>
        </>
    )
}

export default BackButton;