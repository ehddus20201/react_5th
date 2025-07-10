interface Props{
  searchedUserCount:number;
  totalUserCount:number
}


function UserListCount({searchedUserCount,totalUserCount}:Props) {

  
  return (
    <span data-testid="user-list-count">
      {searchedUserCount} / <b>{totalUserCount}</b>

    </span>
  )
}

export default UserListCount