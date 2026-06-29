const page=window.location.pathname.split('/').pop()||'index.html';
const nav=document.querySelector('.nav');

if(nav){
  function active(name){return page===name?' class="active"':'';}
  nav.innerHTML='<a class="brand" href="./" aria-label="Volver al inicio de Lux Render"><img class="brand-logo" src="assets/lux_render_mark.svg" width="44" height="44" alt="Lux Render" decoding="async"><span>Lux Render</span></a>'+
  '<button class="menu-toggle" aria-label="Abrir menú" aria-expanded="false">☰</button>'+
  '<nav class="nav-links" aria-label="Navegación principal">'+
  '<a'+active('index.html')+' href="./">Inicio</a>'+
  '<a'+active('conserje.html')+' href="conserje.html">Conserje Neural</a>'+
  '<a'+active('servicio.html')+' href="servicio.html">Servicios</a>'+
  '<a'+active('planes.html')+' href="planes.html">Planes</a>'+
  '<a'+active('contacto.html')+' href="contacto.html">Contacto</a>'+
  '</nav><a class="nav-cta" href="contacto.html">Solicitar revisión</a>';
}

const menuToggle=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');

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

window.addEventListener('scroll',()=>{
  if(!nav)return;
  const scrolled=window.scrollY>20;
  nav.style.background=scrolled?'rgba(5,7,10,.92)':'rgba(5,7,10,.86)';
  nav.style.borderColor=scrolled?'rgba(126,231,255,.22)':'rgba(255,255,255,.13)';
});

document.querySelectorAll('.reveal').forEach(item=>item.classList.add('visible'));
