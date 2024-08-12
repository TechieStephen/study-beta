import { defineStore } from "pinia";
import axios from 'axios'

export const useAppStore = defineStore("appStore",{

    state:() => {
        return{
            appname:"StudyBeta",
            user:{email:"",password:"", firstname:"",lastname:"",},
            token: null,
            showMobileNav:false,
            deviceWidth: 0,
            pageName: "Explore Courses",
        }
    },

    getters:{
        getUser: state => state.user || null,
        loggedIn: state => state.token !== null,
    },

    actions:{
        setUser(payload){
            this.user = payload
        },
        setToken(payload){
            this.token = payload
        },
        
        LogOut(){
            this.user = null
            this.token = null
        }
    }
})