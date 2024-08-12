import {useAppStore} from "~/stores/app"

export default function userValidation(){
  const {$toast, $post, $get} = useNuxtApp()

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  let PhoneRegex = /^(?!00)\d{11}$/



  const phoneTaken = async (phone) => {
    if(validatePhone(phone)){
      const res = await $get("url" + phone)
      console.log(res)
      return res
    }
  }
  const validatePhone = (phone)=> PhoneRegex.test(phone)

  const validateEmail = (email)=> emailRegex.test(email)

  const validateEmailPhone = (input)=> validatePhone(input) || validateEmail(input)

  return{validatePhone, validateEmail, validateEmailPhone, phoneTaken}
}