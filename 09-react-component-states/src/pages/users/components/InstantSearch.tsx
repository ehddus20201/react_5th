import { useId } from "react"

interface Props{
  onToggle: ()=> void;
  isInstantSearch:boolean;
}

function InstantSearch({onToggle,isInstantSearch}:Props) {
  const id = useId();



  return (
    <div className="formControl">
      <label htmlFor={id} style={{userSelect:'none'}}>
        
        <input type="checkbox" id ={id}
        onClick={onToggle}
        defaultChecked={isInstantSearch}
        />
        {' '}
        인스턴트 서치
      </label>
    </div>
  )
}

export default InstantSearch




// D D D C B
// D C C C D
// C A B A B 
// ? A C B D

// 1. D
// 2. D  
// 3. D
// 4. C
// 5. C X

// 6. C X
// 7. C
// 8. A X
// 9. C 
// 10. D 

// 11. C 
// 12. A
// 13. B
// 14. C X
// 15. B

// 16. C X
// 17. A
// 18. B X
// 19. C X
// 20. D