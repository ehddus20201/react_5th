import LayoutBox from "./LayoutBox";

function EventPropagation() {
  const handleClick = (color:string) =>{
    return (e:React.MouseEvent<HTMLDivElement>)=>{
      e.stopPropagation();
      console.log(color, e.target); // 클로저 함수로 구현 밑에있는 핸들 클릭에서 괄호 열고 실행함
    }
  }




  return (
    <details>
      <summary>
        <b>이벤트 전파 & 기본 동작 방지</b>
      </summary>
      <LayoutBox onClick={handleClick('yellow')} style={styles.yellow} title="레이아웃박스">
        <LayoutBox onClick={handleClick('cyan')} style={styles.cyan}>
          <LayoutBox onClick={handleClick('magenta')} style={styles.magenta}></LayoutBox>
        </LayoutBox>
      </LayoutBox>
    </details>
  )
}

export default EventPropagation


const styles = {
  cyan: { "--color": "var(--cyan)" },
  magenta: { "--color": "var(--magenta)" },
  yellow: { "--color": "var(--yellow)" },
};