import { Avatar } from '../components/Avatar';

function AvatarListPage() {
  
  return (
    <ul className="avatarList">
      <Avatar name="JJang" status="online" />
      <Avatar name="짱아" status="online" />
      <Avatar name="onejang" status="online" />
      <Avatar name="mang" status="online" />
      <Avatar name="훈이" status="online" />
      <Avatar name="유리" status="online" />
      <Avatar name="봉미선" status="online" />
    </ul>
  );
}

export default AvatarListPage;