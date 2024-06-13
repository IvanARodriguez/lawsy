window.showSidebar = () => {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
window.hideSidebar = () => {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

window.collapseMenu = () => {
  const chevron = document.querySelector('.chevron')
  const serviceSubmenu = document.getElementById('service-submenu')
  if(serviceSubmenu.classList.contains('open')){
    chevron.style.transform = 'rotate(180deg)'
    serviceSubmenu.classList.remove('open')
    return
    }
  chevron.style.transform = 'rotate(0deg)'
  serviceSubmenu.classList.add('open')
}