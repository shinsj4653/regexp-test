const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick grown fox jumps over the lazy dog.
aabbbccccddd
`

const regexp = new RegExp('the','gi') // global, ignoreCase
console.log(str.match(regexp))