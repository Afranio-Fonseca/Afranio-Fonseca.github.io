window.onload = function () {
  const favicon = document.getElementById('favicon')
  const pageTitle = document.title
  const attentionMessage = 'Come back'

  function toggle(isPageActive) {
    if (isPageActive) {
      document.title = pageTitle
      favicon.href = './assets/images/dp_male.svg'
    } else {
      document.title = attentionMessage
      favicon.href = './assets/images/folded.png'
    }
  }
}
