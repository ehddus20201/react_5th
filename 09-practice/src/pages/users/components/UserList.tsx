import type { UserType } from "../types/user"
import UserDetail from "./UserDetail";

interface Props{
  users:UserType[];
}

function UserList({users}:Props) {
  
  return (
    <ul className="UserList">
    { users.map((user)=>(

      <UserDetail user={user} />

  ))}
    </ul>
  )
}

export default UserList