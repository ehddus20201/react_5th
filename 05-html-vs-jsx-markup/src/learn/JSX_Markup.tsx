import DataBinding from './DataBinding'
import { statusMessage ,imageType, isShowReactImage, reactLibary, statusMessageWithId } from '@/data/learn'
import ConditionalRendering from './ConditionalRendering'
import ConditionalDisplay from './ConditionalDisplay'
import RenderList from './RenderList'

function JSX_Markup() {
  return (
    <dl className="descriptionList">
      <DataBinding statusMessage={statusMessage}/>
      <ConditionalRendering imageType={imageType}/>
      <ConditionalDisplay isShowImage ={isShowReactImage} />
      <RenderList reactLibary = {reactLibary} items={statusMessageWithId}/>
    </dl>
  )
}

export default JSX_Markup

// dl, dt, dd


// rfce