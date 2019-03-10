const fs = require('fs-extra')

console.log('Post build')
const src = './build'
const docs = '../docs'

fs.move(src, docs, { overwrite: true }, err => {
	if (err) return console.error('- Move docs: Error : ', err)
	console.log('- Move docs: success')
})
