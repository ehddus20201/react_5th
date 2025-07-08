import DataBinding from './DataBinding'
import { statusMessage ,imageType } from '@/data/learn'
import ConditionalRendering from './ConditionalRendering'

function JSX_Markup() {
  return (
    <dl className="descriptionList">
      <DataBinding statusMessage={statusMessage}/>
      <ConditionalRendering imageType={imageType}/>
    </dl>
  )
}

export default JSX_Markup

// dl, dt, dd


