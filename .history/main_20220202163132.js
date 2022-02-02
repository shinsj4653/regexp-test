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
console.log(str.match(regexp))