const path = require('path')
const fs = require('fs')
const highlight = require('highlight.js')
const getComContent = (souPath, tarPath) => {
  const comPath = path.resolve(souPath, '.vuepress/components')
  return fs.readFileSync(path.resolve(comPath, tarPath), 'utf-8')
}

const highlightCode = (content, type='vue') => {
  const html = highlight.highlightAuto(content).value
  return `<pre v-pre class="language-${type}"><code>${html}</code></pre>`
}

const resolveCompName = (filePath) => {
  const fileName = filePath ? path.basename(filePath) : ''
  return fileName.split('.')[0]
}

module.exports = {
  getComContent,
  highlightCode,
  resolveCompName
}
