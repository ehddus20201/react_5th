import {createElement as h} from "../lib/react.js";
import Avatar from "../components/avatar/Avatar.js"



export default function AvatarPage (){

  return h(
    'ul',
    {className:'avatarList'},
    h(Avatar,{name:'JJang',status:'online'}),
    h(Avatar,{name:'onejang',status:'offline'}),
    h(Avatar,{name:'mang',status:'offline'}),

  )



  
}



// <ul class="avatarList">
//       <li class="avatar">
//         <figure>
//           <div class="cover">
//             <img src="./public/avatar/맹구.png" alt="" />
//           </div>
//           <figcaption>
//             <img src="/icons/status-online.svg" alt="" />
//           </figcaption>
//         </figure>
//       </li>
//     </ul>