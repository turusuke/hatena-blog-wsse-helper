const xml2js = require('xml2js')

function toXMLdata({
  title = 'タイトル',
  author = 'name',
  type = 'text/x-markdown',
  content = 'コンテンツ',
  updated = new Date().toISOString(),
  category = '',
  draft = 'yes'
}) {
  return {
    entry: {
      $: {
        xmlns: 'http://www.w3.org/2005/Atom',
        'xmlns:app': 'http://www.w3.org/2007/app'
      },
      title,
      author: {
        name: author
      },
      content: {
        $: {
          type
        },
        _: content
      },
      updated,
      category: {
        $: {
          term: category
        }
      },
      'app:control': {
        'app:draft': draft
      }
    }
  }
}


module.exports = (data = {}) => new xml2js.Builder().buildObject(toXMLdata(data))