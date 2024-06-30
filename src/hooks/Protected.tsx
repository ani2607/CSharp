import { ReactNode } from "react"
import { useRecoilValue } from "recoil"
import { userInfo } from "../recoil/atom/user"
import { User } from "../types/user"
import { Navigate } from "react-router-dom"


const Protected = ({children} : {children:ReactNode}) => {
  
  const user_info = useRecoilValue<User|null>(userInfo)
  if(user_info == null){
    return <Navigate to={'/login'}/>
}
return children
}

export default Protected
