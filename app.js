const brandLink=document.createElement('link');
brandLink.rel='stylesheet';
brandLink.href='brand.css?v=7';
brandLink.setAttribute('data-lux-brand','true');
if(!document.querySelector('link[data-lux-brand]')) document.head.appendChild(brandLink);

const polishLink=document.createElement('link');
polishLink.rel='stylesheet';
polishLink.href='polish.css?v=4';
polishLink.setAttribute('data-lux-polish','true');
if(!document.querySelector('link[data-lux-polish]')) document.head.appendChild(polishLink);

const page=window.location.pathname.split('/').pop()||'index.html';
const nav=document.querySelector('.nav');

const iconInstagram='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="5"></rect><circle cx="12" cy="12" r="3.4"></circle><circle cx="16.7" cy="7.3" r=".75" fill="currentColor" stroke="none"></circle></svg>';
const iconFacebook='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.2h2.2V4.7c-.4-.1-1.7-.2-3.1-.2-3.1 0-5.1 1.9-5.1 5.3v3H4.7v3.9H8V24h4.1v-7.3h3.3l.5-3.9h-3.8v-2.6c0-1.1.3-2 1.9-2Z" fill="currentColor" stroke="none"></path></svg>';
const iconEmail='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5.5" width="17" height="13" rx="2.5"></rect><path d="m5 8 7 5 7-5"></path></svg>';
const iconAI='<span class="nav-ai-mark" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"></path></svg></span>';

if(nav){
  function active(name,extra){
    const classes=[page===name?'active':'',extra||''].filter(Boolean).join(' ');
    return classes?' class="'+classes+'"':'';
  }
  nav.innerHTML='<a class="brand" href="./" aria-label="Volver al inicio de Lux Render"><img class="brand-logo" src="assets/lux_render_mark.svg" width="44" height="44" alt="Lux Render" decoding="async"><span>Lux Render</span></a>'+
  '<button class="menu-toggle" aria-label="Abrir menú" aria-expanded="false">☰</button>'+
  '<nav class="nav-links" aria-label="Navegación principal">'+
  '<a'+active('index.html')+' href="./">Inicio</a>'+
  '<a'+active('conserje.html','nav-ai-link')+' href="conserje.html">'+iconAI+'<span>Conserje Neural</span></a>'+
  '<a'+active('servicio.html')+' href="servicio.html">Servicios</a>'+
  '<a'+active('planes.html')+' href="planes.html">Planes</a>'+
  '<a'+active('contacto.html')+' href="contacto.html">Contacto</a>'+
  '</nav><a class="nav-cta" href="contacto.html">Solicitar revisión</a>';
}

const footer=document.querySelector('.footer');
if(footer){
  footer.innerHTML='<div class="footer-main">'+
    '<a class="footer-brand" href="./" aria-label="Lux Render inicio"><img src="assets/lux_render_mark.svg" alt="Lux Render" width="46" height="46" decoding="async"><span><strong>Lux Render</strong><small>IA aplicada · Marketing visual · Captación digital</small></span></a>'+
    '<div class="footer-social" aria-label="Redes oficiales Lux Render">'+
      '<a class="footer-social-link instagram" href="https://www.instagram.com/luxrender.ai/" target="_blank" rel="noopener"><span class="footer-icon">'+iconInstagram+'</span><span>Instagram</span></a>'+
      '<a class="footer-social-link facebook" href="https://www.facebook.com/luxrenderai/" target="_blank" rel="noopener"><span class="footer-icon">'+iconFacebook+'</span><span>Facebook</span></a>'+
      '<a class="footer-social-link email" href="mailto:luxrender.estudio@gmail.com"><span class="footer-icon">'+iconEmail+'</span><span>Email</span></a>'+
    '</div>'+
  '</div>'+
  '<div class="footer-bottom">'+
    '<span>© 2026 Lux Render. Todos los derechos reservados.</span>'+
    '<span>V Región, Chile · Servicios digitales para negocios en todo Chile.</span>'+
  '</div>';
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
