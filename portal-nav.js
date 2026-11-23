/* Navigation unique Braconnier / Outilsud, styles isoles des pages. */
(function(){'use strict';
const script=document.currentScript;
const base=script&&script.src?new URL('.',script.src):new URL('./',location.href);
const page=decodeURIComponent(location.pathname.split('/').pop()||'index.html');
const tenant=page.includes('outilsud')?'Outilsud':'Braconnier';
const suffix=tenant==='Outilsud'?'-outilsud':'';
const sections=[['⌂','Accueil','index.html'],['▦','Fournisseurs','fournisseurs'+suffix+'.html'],['▤','Articles','fournisseurs'+suffix+'.html'],['🛒','Commandes','commandes'+suffix+'.html'],['▣','Inventaire','inventaire'+suffix+'.html'],['▧','Factures','factures'+suffix+'.html'],['▤','NetStore','netstore'+suffix+'.html'],['▦','Calculs','calculs.html'],['✎','Notes','notes.html'],['⚡','Électricité','electricite.html']];
const css=`:host{display:block;box-sizing:border-box;width:100%;margin:0 0 20px;font-family:Arial,Helvetica,sans-serif;color:#fff}*,*:before,*:after{box-sizing:border-box}.nav{display:flex;align-items:center;gap:17px;background:#1c293c;color:#fff;border-radius:13px;padding:14px 20px;box-shadow:0 4px 14px #14213624;min-height:76px}.brand{display:flex;align-items:center;gap:11px;text-decoration:none;color:white;font-size:19px;font-weight:800;line-height:1.05;white-space:nowrap;flex:none}.mark{display:grid;place-items:center;width:44px;height:44px;background:#ff8500;border-radius:10px;font-size:25px}.brand small{display:block;color:#cbd5e1;font-size:11px;margin-top:3px}.tenant{flex:none;border:1px solid #60718b;color:#f5f8ff;border-radius:20px;padding:7px 12px;font-size:12px;font-weight:700}.links{display:flex;align-items:center;gap:2px;min-width:0;flex:1;overflow-x:auto;scrollbar-width:thin;scrollbar-color:#56657a transparent}.links a{display:inline-flex;align-items:center;gap:5px;flex:none;text-decoration:none;color:#f7f9fd;font-size:13px;font-weight:700;border-radius:8px;padding:11px 10px;white-space:nowrap;background:transparent}.links a:hover,.links a:focus-visible{background:#34445b;color:white}.links a.active{background:#ff8500;color:#fff}.toggle{display:none;cursor:pointer;background:#34445b;color:#fff;border:1px solid #566a84;border-radius:8px;padding:10px 12px;font-size:13px;font-weight:700}@media(max-width:900px){.nav{gap:10px;padding:11px 13px}.links a{padding:9px 8px;font-size:12px}}@media(max-width:700px){.nav{flex-wrap:wrap}.brand{font-size:17px}.mark{width:38px;height:38px}.tenant{margin-left:auto}.toggle{display:block}.links{display:none;flex:0 0 100%;overflow:visible;flex-direction:column;align-items:stretch}.nav.open .links{display:flex}.links a{padding:12px}}`;
function init(){if(document.querySelector('#portal-navigation'))return;
const wrap=document.querySelector('.wrap')||document.querySelector('main')||document.body;
const host=document.createElement('div');host.id='portal-navigation';
const shadow=host.attachShadow({mode:'open'});const style=document.createElement('style');style.textContent=css;shadow.append(style);
const nav=document.createElement('nav');nav.className='nav';nav.setAttribute('aria-label','Navigation principale du portail');
const brand=document.createElement('a');brand.className='brand';brand.href=new URL('index.html',base).href;brand.innerHTML='<span class="mark">⌂</span><span>Portail<small>Braconnier &amp; Outilsud</small></span>';nav.append(brand);
const tag=document.createElement('span');tag.className='tenant';tag.textContent=tenant;nav.append(tag);
const toggle=document.createElement('button');toggle.type='button';toggle.className='toggle';toggle.textContent='☰ Menu';toggle.setAttribute('aria-expanded','false');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});nav.append(toggle);
const links=document.createElement('div');links.className='links';
sections.forEach(([icon,label,path])=>{if(page.startsWith('fournisseurs')&&(label==='Fournisseurs'||label==='Articles'))return;const a=document.createElement('a');a.href=new URL(path,base).href;a.textContent=icon+' '+label;if(path===page && label!=='Articles')a.classList.add('active');links.append(a)});
nav.append(links);shadow.append(nav);
if(wrap===document.body)document.body.insertBefore(host,document.body.firstChild);else wrap.insertBefore(host,wrap.firstChild);
document.body.classList.add('portal-enhanced');if(page.startsWith('fournisseurs')||page.startsWith('administration-fournisseurs'))document.body.classList.add('portal-suppliers');
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
