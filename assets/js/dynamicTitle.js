window.onload = function () {
  const favicon = document.getElementById('favicon')
  const pageTitle = document.title

  function toggle(isPageActive) {
      document.title = pageTitle
      favicon.href = './assets/images/dp_male.svg'
  }
}
