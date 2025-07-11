import type { UserType } from "../types/user";

interface Props{
  user:UserType;
}

const A = {color:'white' , textDecoration:'none'}


function UserDetail({user}:Props) {
  return(
    <li>
      <strong>{user.name}</strong> 
      {' '}
      -
      {' '}
      <span>
        <a style={A} href={`mailto:${user.email}`}>
          {user.email} ({user.city})
        </a>
      </span>
    </li>
  )
}

export default UserDetail