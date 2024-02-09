import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const useNotify=()=>{
    // const [message,setMessage]=useState(message||'oops something went wrong')
    // const [theme,setTheme]=useState(theme||'dark')
     const notify = (message,theme,AClose,posti) => toast(`${message}`, {
        
        position: posti||"top-right",
        autoClose: AClose||3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme||'dark'});

        return (notify)
}

export default useNotify