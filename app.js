const page=window.location.pathname.split('/').pop()||'index.html';
const nav=document.querySelector('.nav');

const stableNav=document.createElement('style');
stableNav.textContent='.nav{height:64px!important;min-height:64px!important;max-height:64px!important;padding:10px 14px!important;display:grid!important;grid-template-columns:220px 1fr 220px!important;align-items:center!important}.brand{height:44px!important;line-height:1!important;align-items:center!important}.brand span{font-size:15px!important;line-height:1!important;white-space:nowrap!important}.nav-links{height:44px!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:24px!important;font-size:14px!important;line-height:1!important;white-space:nowrap!important}.nav-links a{line-height:1!important}.nav-ghost{display:block!important;width:220px!important;height:44px!important}.menu-toggle{height:44px!important}@media(max-width:980px){.nav{height:auto!important;max-height:none!important;min-height:64px!important;grid-template-columns:1fr auto!important}.nav-links{height:auto!important}.nav-ghost{display:none!important}}';
document.head.appendChild(stableNav);

if(nav){
  function active(name){return page===name?' class="active"':'';}
  nav.innerHTML='<a class="brand" href="./"><span>Lux Render</span></a>'+
  '<button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false">☰</button>'+
  '<nav class="nav-links" aria-label="Navegacion principal">'+
  '<a'+active('index.html')+' href="./">Inicio</a>'+
  '<a'+active('conserje.html')+' href="conserje.html">Conserje Neural</a>'+
  '<a'+active('servicio.html')+' href="servicio.html">Servicios</a>'+
  '<a'+active('planes.html')+' href="planes.html">Planes</a>'+
  '<a'+active('contacto.html')+' href="contacto.html">Contacto</a>'+
  '</nav><span class="nav-ghost" aria-hidden="true"></span>';
}

const menuToggle=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');

window.addEventListener('scroll',()=>{
  if(!nav)return;
  const scrolled=window.scrollY>20;
  nav.style.background=scrolled?'rgba(5,7,10,.92)':'rgba(5,7,10,.82)';
  nav.style.borderColor=scrolled?'rgba(126,231,255,.22)':'rgba(255,255,255,.13)';
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
