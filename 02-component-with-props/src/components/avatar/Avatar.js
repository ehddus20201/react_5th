import { createElement as h } from "../../lib/react.js";


export default function Avatar({name, status, size= 64}) {

  console.log(name);
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
  
  return h(
    'li',
    {className:'avatar'},
    h(
      'figure',
      {'aria-label':label,title:label},
      h('div',{className:'cover'},
        h('img',{src:`/avatar/${name}.png`,alt:''})
      ),
      h('figcaption',null,
        // h('img',{src:`/icons/status-${status}.svg`,alt:''})
        h('img',{src: iconPath,alt:''})
      ),
    )
  ) 
}