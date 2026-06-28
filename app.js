const nav=document.querySelector('.nav');
const menuToggle=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');

window.addEventListener('scroll',()=>{
  if(!nav)return;
  const active=window.scrollY>20;
  nav.style.background=active?'rgba(5,7,10,.92)':'rgba(5,7,10,.74)';
  nav.style.borderColor=active?'rgba(126,231,255,.22)':'rgba(255,255,255,.13)';
});

if(menuToggle&&navLinks){
  menuToggle.addEventListener('click',()=>{
    const isOpen=navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded',String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach(link=>{
    link.addEventListener('click',()=>{
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded','false');
    });
  });
}

document.querySelectorAll('.reveal').forEach(item=>item.classList.add('visible'));
