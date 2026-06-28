const page=window.location.pathname.split('/').pop()||'index.html';
const nav=document.querySelector('.nav');
const logoData='data:image/webp;base64,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';

const stableNav=document.createElement('style');
stableNav.textContent='.nav{height:66px!important;min-height:66px!important;max-height:66px!important;padding:10px 16px!important;display:grid!important;grid-template-columns:240px 1fr 190px!important;align-items:center!important}.brand{height:46px!important;line-height:1!important;align-items:center!important;gap:10px!important}.brand-logo{width:34px!important;height:34px!important;border-radius:999px!important;object-fit:cover!important;background:#f6f2e8!important;border:1px solid rgba(255,255,255,.2)!important;box-shadow:0 8px 22px rgba(0,0,0,.28)!important}.brand span{font-size:15px!important;line-height:1!important;white-space:nowrap!important}.nav-links{height:46px!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:24px!important;font-size:14px!important;line-height:1!important;white-space:nowrap!important}.nav-links a{line-height:1!important}.nav-cta{display:inline-flex!important;align-items:center!important;justify-content:center!important;height:42px!important;min-width:160px!important;justify-self:end!important}.menu-toggle{height:44px!important}@media(max-width:980px){.nav{height:auto!important;max-height:none!important;min-height:66px!important;grid-template-columns:1fr auto!important}.nav-links{height:auto!important}.nav-cta{display:none!important}}';
document.head.appendChild(stableNav);

if(nav){
  function active(name){return page===name?' class="active"':'';}
  nav.innerHTML='<a class="brand" href="./"><img class="brand-logo" src="'+logoData+'" alt="Lux Render"><span>Lux Render</span></a>'+
  '<button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false">☰</button>'+
  '<nav class="nav-links" aria-label="Navegacion principal">'+
  '<a'+active('index.html')+' href="./">Inicio</a>'+
  '<a'+active('conserje.html')+' href="conserje.html">Conserje Neural</a>'+
  '<a'+active('servicio.html')+' href="servicio.html">Servicios</a>'+
  '<a'+active('planes.html')+' href="planes.html">Planes</a>'+
  '<a'+active('contacto.html')+' href="contacto.html">Contacto</a>'+
  '</nav><a class="nav-cta" href="contacto.html">Solicitar revisión</a>';
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
