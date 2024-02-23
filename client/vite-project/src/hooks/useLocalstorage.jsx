import React, { useEffect, useState } from 'react'

const useLocalstorage = () => {
    
    const [theme,setTheme]=useState(  () => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? storedTheme : 'synthwave';
    });

    useEffect(()=>{
        localStorage.setItem('theme',theme)
        document.querySelector('html').setAttribute('data-theme',theme)
    },[theme])
    return [theme,setTheme]
}

export default useLocalstorage