const fs = require('fs-extra')

console.log('Post build')
const src = './build'
const dist = '../dist'

fs.move(src, dist, { overwrite: true }, err => {
	if (err) return console.error('- Move dist: Error : ', err)
	console.log('- Move dist: success')
})
