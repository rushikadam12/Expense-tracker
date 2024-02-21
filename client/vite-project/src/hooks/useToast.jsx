import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useToast=()=>{
    const options={
        position:'top-right',
        autoClose:2500,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        theme: 'dark',
    }
    const toastSuccess=(msg)=>{
            toast.success(msg,options);

    }
    const toastError=(msg)=>{
        toast.error(msg,options);

}
    return [toastSuccess,toastError];
}
export default useToast;