module.exports = {
  getStar ($) {
    let star = $('div.unstarred a').html() | $('div.starred a').html()
    return star
  },
  getDescription ($) {
    let description = $('div.repository-meta-content span').html()
    return description
  },
  getLastModifiedDate ($) {
    let lastModifiedDate = $('span.dateModified relative-time').attr('datetime')
    return lastModifiedDate
  }
}
