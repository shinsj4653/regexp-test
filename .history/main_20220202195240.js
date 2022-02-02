const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick grown fox jumps over the lazy dog.
aabbbccccddd
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