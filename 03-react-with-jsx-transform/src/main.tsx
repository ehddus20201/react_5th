// @ts-nocheck


import React, { createElement as h } from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom/client";
// console.log(React);
// console.log(ReactDOM);

interface Props {
  name:string;
  status?:'offline'|'online'|'dont-disturb'|'away';
  size?:number;
}



/* JSX Syntax */

function Avatar({name, status, size= 64}:Props):JSX.Element {


  let iconPath ='';
  let statusMessage='';
  switch (status) {
    case 'offline':
      iconPath = '/icons/status-offline.svg'
      statusMessage = "오프라인";
      break;

    case 'online':
      iconPath = '/icons/status-online.svg'
      statusMessage = "온라인";
      break;
    case 'dont-disturb':
      iconPath = '/icons/status-dont-disturb.svg'
      statusMessage = "방해금지";
      break;
    case 'away':
      iconPath = '/icons/status-away.svg'
      statusMessage = "자리비움";
      break;
  }

  const label = `${name} (${statusMessage})`
  
  return (
    <li className="avatar">
      <figure aria-label={label} title={label}>
        <div className="cover">
          <img src={`/avatar/${name}.png`} alt="" />
        </div>
        <figcaption>
          <img src={iconPath} alt="" />
        </figcaption>
      </figure>
    </li>
  )
}

function AvatarPage():JSX.Element{
    return ( 
      <ul classNmae='avatarList'>
        <Avatar name="mang" status='offline'/>
        <Avatar name="JJang" status='offline'/>
        <Avatar name="mang" status='online'/>
        <Avatar name="onejang" status='away'/>
        <Avatar name="JJang" status='dont-disturb'/>


      </ul>
  
    )
}
  

const container = document.getElementById('app')

if(container){
  const reactDomRoot = ReactDOM.createRoot(container);
  reactDomRoot.render(<AvatarPage/>);
}