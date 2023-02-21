import Image from "next/image";
import LoadingSpinner from "../assets/loading.svg";

const Loader = () => {
    return (
        <div className='h-screen w-screen flex items-center justify-center' ><Image src={LoadingSpinner} alt="spinner" /></div>
    )
}

export default Loader