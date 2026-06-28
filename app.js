const nav=document.querySelector('.nav');
const menuToggle=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');

window.addEventListener('scroll',()=>{
  if(!nav)return;
  if(window.scrollY>20){
    nav.style.background='rgba(5,7,10,.92)';
    nav.style.borderColor='rgba(126,231,255,.22)';
  }else{
    nav.style.background='rgba(5,7,10,.74)';
    nav.style.borderColor='rgba(255,255,255,.13)';
  }
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

document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',event=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(!target)return;
    event.preventDefault();
    target.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

document.querySelectorAll('.reveal').forEach((item,index)=>{
  setTimeout(()=>item.classList.add('visible'),80+index*40);
});
