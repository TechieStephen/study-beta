import {useAppStore} from "~/stores/app"

export default defineNuxtPlugin(async (nuxtApp)=>{
    const appStore = useAppStore()
    const runtimeConfig = useRuntimeConfig()

    const baseUrl = runtimeConfig.public.apiBase
    const isDevelopment = runtimeConfig.public.enviroment === 'Development'

    const token_cookie = useCookie('__UT') //get token from cookie
    const user_cookie = useCookie('__UD') //get user from cookie
    
    function encodeObject(obj) {
        const json = JSON.stringify(obj);
        return btoa(json);
    }
    
    function decodeObject(encodedObj) {
        if(encodedObj != null) {
            try {
                const json = atob(encodedObj);
                return JSON.parse(json);
            } catch (error) {
                return null
            }
        }

        return null
    }

    const user = decodeObject(user_cookie.value || null) // set default values for user
    const token = token_cookie.value || null // set default values for token
    
    appStore.setUser(user)
    appStore.setToken(token)

    // ------------------------------------------------------------------
    console.log("--- TOKEN: ", token)
    console.log("--- USER: ",user)

    // console.log("ENVIROMENT: ", runtimeConfig)
    console.log("--- ENVIROMENT: ", runtimeConfig.public.enviroment)
    console.log("--- CLIENT: ", runtimeConfig.public.clientUrl)
    console.log("--- BASE: ", runtimeConfig.public.apiBase)
    console.log("--- AUTHENTICATED: ",appStore.loggedIn)

    // ------------------------------------------------------------------

    const addAuthHeader = () =>{        
        return {
            'Content-Type': 'application/json',
            // Authorization: `Basic MTExNzI4NTI6NjAtZGF5ZnJlZXRyaWFs`,
        }
    }
    
    // --- exported functions --------------------------------
    const setUserAndToken = (newUser, newToken = token) =>{
        // appStore.setUserAndToken(data)
        // console.log("SET TOKEN: ",newToken)
        appStore.setUser(newUse)
        appStore.setToken(newToken)

        const encodedUser = encodeObject(newUser);

        user_cookie.value = encodedUser
        token_cookie.value = newToken

        
        console.log("--- SET USER: ",newUser)
        console.log("--- SET USER TOKEN: ",newToken)
    }

    
    const getUser = ()=>{
        return new Promise((resolve, reject) => {
            const config = {
                method:"GET",
                headers: addAuthHeader(),
                credentials: 'include'
                // params:params
            }

            $fetch(`${baseUrl}auth/me`, config)
              .then(data => {
                console.log("GET USER----------", data)
                setUserAndToken(data, token)
                resolve(data)
              })
              .catch(error => {                
                if(error.response.status >= 500){
                    console.log("--------------SERVER ERROR-----------------")
                    reject("An error occured, please try again")
                }
                else{
                    console.log("GET USER: ", error.response._data)
                    console.log("ERRORS STATUS: ", error.response.status)
                    
                    if(error.response._data.errors){
                        console.log("--------------SERVER ERROR", error.response._data.errors)
                        for (const key in error.response._data.errors) {
                            const element = error.response._data.errors[key];
                              console.log(element)
                          }
                        reject(error.response._data.errors)
                    }
                    reject(error.response._data)
                }
              })
        })
    }
    

    const logout = (redirect)=>{
        console.log("-------------------------------- LOG OUT")
        token_cookie.value = null
        user_cookie.value = null

        appStore.LogOut()

        const config = {
            method:"POST",
            headers: addAuthHeader(),
            credentials: 'include',
        }
        
        $fetch(`${baseUrl}auth/logout`, config)
        .then(data => {
            // console.log("User logged out successfully")
        })
        .catch(error => {
            console.log("ERORRS")
        })

        if(redirect)
            navigateTo({ path: `/` })
        else
            navigateTo({ path: `/` })
    }

    const login = (payload)=>{
        return new Promise((resolve, reject) => {
            const config = {
                method:"POST",
                headers: addAuthHeader(),
                credentials: 'include',

                body:{
                    username: payload.username,
                    password: payload.password
                     
                }
            }
            
            $fetch(`${getLoginRoute()}`, config)
              .then(data => {
                setTimeout(() => {
                    setUserAndToken(data.user, data.accessToken)
                    resolve(data.user)
                }, 200);
              })
              .catch(error => {
                if(error.response.status >= 500){
                    console.log("--------------SERVER ERROR-----------------")
                    reject("An error occured, plaese try again")
                }
                else{
                    if(error.response._data.errors){
                        console.log("--------------SERVER ERROR", error.response._data.errors)
                        for (const key in error.response._data.errors) {
                            const element = error.response._data.errors[key];
                              console.log(element)
                          }
                        reject(error.response._data.errors)
                    }
                    reject(error.response._data)
                }
              })
        })
    }

    const register = (payload)=>{
        return new Promise((resolve, reject) => {
            const config = {
                method:"POST",
                credentials: 'include',

                body:{
                    email: payload.email,
                    password: payload.password,
                    // firstName: payload.firstName,
                    // lastName: payload.lastName,
                    // phoneNumber: payload.phoneNumber,
                }
            }
            
            $fetch(`${baseUrl}auth/register`, config)
              .then(data => {
                setTimeout(() => {
                    setUserAndToken(data.user, data.accessToken)
                    resolve(data.user)
                }, 200);
              })
              .catch(error => {
                if(error.response.status >= 500){
                    console.log("--------------SERVER ERROR-----------------")
                    reject("An error occured, plaese try again")
                }
                else{
                    if(error.response._data.errors){
                        for (const key in error.response._data.errors) {
                            const element = error.response._data.errors[key];
                            console.log(element)
                            reject(element[0])
                          }
                    }else{
                        console.log("ERROR: ",error.response._data)
                        reject(error.response._data)
                    }
                }
              })
        })
    }

    const externalLogin = (payload)=>{
        return new Promise((resolve, reject) => {
            payload.authType = isDevelopment ? "jwt" : "cookie"

            const config = {
                method:"POST",
                credentials: 'include',

                body:payload
            }
            
            $fetch(`${baseUrl}auth/external`, config)
              .then(data => {
                setTimeout(() => {
                    setUserAndToken(data.user, data.accessToken)
                    resolve(data.user)
                }, 100);
              })
              .catch(error => {
                setTimeout(() => {
                    if(error.response.status >= 500){
                        console.log("-------------------------------")
                        reject("An error occured, plaese try again")
                    }
                    else{
                        reject(error.response._data)
                    }
                }, 500);
              })
        })
    }
    

    return {
        provide: {
            login,
            logout,
            register,
            externalLogin,
            setUserAndToken,
            getUser:getUser
        }
    }
});