type statusMessage =   '대기'|'로딩 중...'|'로딩 성공'|'로딩 실패'

type ImageType = 'react' | 'vite' | 'next.js' | 'kakao talk'
//global.d.ts 파일에 들어있는 타입들은 전역
//  d 가 데피니션의 약자

type ReactLibary = {
    name: string;
    author: string;
    writtenIn: string;
    type: string;
    license: string;
}

type StatusMessageWithId = {
  id:string;
  message:string;
}