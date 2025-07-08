// //1. AvatarProps 타입 선언
// //2. Avatar 함수 status 에따라서 icon 사진과 statusMessage가 바뀌게
// //3. return 으로 tsx 문법인 html 태그 만들기
// type AvatarProps ={
//   name:string;
//   status?:'online' | 'offline' | 'dont-disturb' | 'away';
// }


// export function Avatar:({status,name}:AvatarProps){

//   let iconPath = '';
//   let statusMessage = '';
//   if(status==='online'){
//     iconPath="/icons/status-online.svg";
//     statusMessage = '온라인';
//   }else if(status==='offline'){
//     iconPath="/icons/status-offline.svg";
//     statusMessage = '오프라인';
//   }else if(status==='away'){
//     iconPath="/icons/status-away.svg";
//     statusMessage = '자리비움';
//   }else if(status==='dont-disturb'){
//     iconPath="/icons/status-dont-disturb.svg";
//     statusMessage = '방해금지';
//   }

//   return (
//     <li className="avatar">
//       <figure aria-label=${name}</figure>
//     </li>
//   )

// }



















































type AvatarProps = {
  name:string;
  status?:'online' | 'offline' | 'dont-disturb' | 'away';
  size?:number;
}

export function Avatar({ name, status = "offline", size = 64 }:AvatarProps) {
  let iconPath = "";
  let statusMessage = "";

  console.log(size);
  
  switch (status) {
    case "offline":
      iconPath = "/icons/status-offline.svg";
      statusMessage = "오프라인";
      break;
    case "online":
      iconPath = "/icons/status-online.svg";
      statusMessage = "온라인";
      break;
    case "dont-disturb":
      iconPath = "/icons/status-dont-disturb.svg";
      statusMessage = "방해금지";
      break;
    case "away":
      iconPath = "/icons/status-away.svg";
      statusMessage = "자리비움";
      break;
  }

  const label = `${name} (${statusMessage})`;

  return (
    <li className="avatar">
    <figure aria-label={label} title={label}>
      <div className="cover">
        <img src={`/avatar/${name}.png`} alt={name} />
      </div>
      <figcaption>
        <img src={iconPath} alt="" />
      </figcaption>
    </figure>
    </li>
  );
}


