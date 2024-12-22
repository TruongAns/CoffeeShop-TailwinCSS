//Author :dta

const topMenu = document.getElementById('dta-top-menu')
const toggleTopMenuIcon = document.getElementById('dta-toggle-top-menu-icon')

document.addEventListener('click', e => {
  if (toggleTopMenuIcon.contains(e.target)) {
    // Click to toggle top menu icon
    topMenu.classList.toggle('hidden')
    topMenu.classList.toggle('dta-topmenu-expanded')
  } else {
    if (!topMenu.contains(e.target)) {
      topMenu.classList.remove('dta-topmenu-expanded')
      topMenu.classList.add('hidden')
    }
  }
})
