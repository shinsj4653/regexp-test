const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick grown fox jumps over the lazy dog.
aabbbccccdddd
htxp
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`
// 생성자 방식
// const regexp = new RegExp('the','gi') // global, ignoreCase

// 리터럴 방식
const regexp = /the/gi 
console.log(str.match(regexp)) // 일치하는 문자들의 배열 반환

const regexp2 = /fox/gi
console.log(regexp2.test(str))

console.log(str.replace(regexp2, 'AAA')) // 원본데이터 수정 안됨!
// 원본 데이터 수정원한다면, 
// let str로 해야하고, 
// str = str.replace() -> 이런식으로 재할당해야함
console.log(str)

console.log(
  str.match(/\.$/mig)
) // g 안쓰면 index랑 input된 문자 다 나옴 -> 찾아낸 결과 딱 하나만 나옴
// 특수기호들은 \를 앞에 붙여야함
// m -> 원래 문자는 시작과 끝, 한 부분씩 존재하는데,
// m을 넣으면 엔터로 구분된 줄들 각각에 시작, 끝이 생긴걸로 간주함

console.log(
  str.match(/h..p/g) // h와 p사이에 아무 문자가 와도 찾아짐
)

console.log(
  str.match(/dog|fox/) // 둘 중 먼저 찾아지는 하나만 출력됨
)

console.log(
  str.match(/https?/g) // 'https'에서 s가 없는 결과도 찾아짐
)

console.log(
  str.match(/\w{2,3}/g) // \w -> 숫자를 포함한 영어 알파벳
)

console.log(
  str.match(/\b\w{2,3}\b/g) // 특수문자들로 딱딱 구분되는 문자들만 나옴
)

console.log(
  str.match(/[가-힣]{1,}/g)
)

console.log(
  str.match(/\bf\w{1,}\b/g) // 'f'로 시작되는 단어들 모두 찾아짐
)

console.log(
  str.match(/\d{1,}/g) // 숫자로 시작되는 단어들
)

const h = ` the hello  world  !

`

console.log(
  h.replace(/\s/g,'') // 모든 공백들을 삭제
)

console.log(
  str.match(/.{1,}(?=@)/g) // @ 앞쪽 일치
)

console.log(
  str.match(/(?<=@).{1,}/g) // @ 뒤쪽 일치
)