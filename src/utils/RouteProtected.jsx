import { Navigate, Outlet } from 'react-router-dom'
export const RouteProtected = () => {
  const token = localStorage.getItem('token')
  return token ? <Outlet></Outlet> : <Navigate to={'/check'}></Navigate>
}

export const RouteAdminProtected = () => {
  const data = JSON.parse(localStorage.getItem('user'))
  return data.userType == 'admin' ? (
    <Outlet></Outlet>
  ) : (
    <Navigate to={`/userPanel/${data.id}`}></Navigate>
  )
}
