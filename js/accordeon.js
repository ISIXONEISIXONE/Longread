let accordeon = document.querySelectorAll('.accordeon')
let accText = document.querySelectorAll('.acctext')

accordeon.forEach((el) => {
  let img = el.querySelector('.btnimg')
  el.addEventListener('click', () => {
    let content = el.nextElementSibling
    if (content.style.maxHeight) {
      content.style.maxHeight = null
      img.src = './img/expand_more_FILL0_wght400_GRAD0_opsz48.svg'
    } else {
      accText.forEach((el) => {
        el.style.maxHeight = null
      })
      content.style.maxHeight = content.scrollHeight + 'px'
      img.src = './img/expand_less_FILL0_wght400_GRAD0_opsz48.svg'
    }
  })
})
