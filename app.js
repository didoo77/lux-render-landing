const page=window.location.pathname.split('/').pop()||'index.html';
const nav=document.querySelector('.nav');

const stableNav=document.createElement('style');
stableNav.textContent=`
.nav{height:66px!important;min-height:66px!important;max-height:66px!important;padding:10px 16px!important;display:grid!important;grid-template-columns:240px 1fr 190px!important;align-items:center!important;margin:14px auto 0!important;width:100%!important}
.brand{height:46px!important;line-height:1!important;display:flex!important;align-items:center!important;gap:10px!important;min-width:0!important}
.brand-logo{width:36px!important;height:36px!important;border-radius:999px!important;object-fit:contain!important;background:#f6f2e8!important;border:1px solid rgba(255,255,255,.22)!important;box-shadow:0 8px 22px rgba(0,0,0,.28)!important;padding:3px!important;display:block!important}
.brand span{font-size:15px!important;line-height:1!important;white-space:nowrap!important;font-weight:950!important;letter-spacing:-.04em!important}
.nav-links{height:46px!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:24px!important;font-size:14px!important;line-height:1!important;white-space:nowrap!important}
.nav-links a{line-height:1!important}
.nav-cta{display:inline-flex!important;align-items:center!important;justify-content:center!important;height:42px!important;min-width:160px!important;justify-self:end!important}
.menu-toggle{height:44px!important;width:44px!important;align-items:center!important;justify-content:center!important}
@media(max-width:980px){
  .site-shell{width:min(100% - 22px,var(--max))!important}
  .nav{height:62px!important;min-height:62px!important;max-height:none!important;grid-template-columns:1fr 44px!important;padding:9px 10px 9px 12px!important;border-radius:24px!important;top:10px!important;margin-top:10px!important;gap:10px!important}
  .brand{height:44px!important;gap:9px!important}
  .brand-logo{width:32px!important;height:32px!important;padding:3px!important}
  .brand span{font-size:15px!important}
  .menu-toggle{display:flex!important;grid-column:2!important;grid-row:1!important}
  .nav-cta{display:none!important}
  .nav-links{position:absolute!important;top:calc(100% + 10px)!important;left:0!important;right:0!important;height:auto!important;display:none!important;flex-direction:column!important;align-items:stretch!important;gap:8px!important;padding:12px!important;border:1px solid rgba(255,255,255,.13)!important;border-radius:22px!important;background:rgba(5,7,10,.97)!important;box-shadow:0 24px 70px rgba(0,0,0,.45)!important;backdrop-filter:blur(22px)!important;z-index:60!important}
  .nav-links.open{display:flex!important}
  .nav-links a{padding:14px 14px!important;border-radius:15px!important;background:rgba(255,255,255,.04)!important;font-size:14px!important}
  .nav-links a.active{background:rgba(126,231,255,.11)!important;color:#f6f2e8!important}
  .hero{padding-top:44px!important;gap:24px!important;min-height:unset!important}
  h1{font-size:clamp(40px,12vw,52px)!important;line-height:.94!important;letter-spacing:-.06em!important}
  h2{font-size:clamp(32px,9.5vw,42px)!important;line-height:1!important}
  .hero-lead{font-size:17px!important;line-height:1.55!important}
  .hero-actions{gap:10px!important;margin:24px 0!important}
  .btn{width:100%!important;min-height:50px!important}
  .hero-panel,.neural-ui,.split-card,.cta-section{border-radius:26px!important}
  .section{padding:46px 0!important}
}
`;
document.head.appendChild(stableNav);

if(nav){
  function active(name){return page===name?' class="active"':'';}
  nav.innerHTML='<a class="brand" href="./"><img class="brand-logo" src="assets/lux_render_logo.png" alt="Lux Render"><span>Lux Render</span></a>'+
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
