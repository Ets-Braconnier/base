/* Navigation commune compacte Braconnier / Outilsud. */
(function(){'use strict';
const script=document.currentScript;
const base=script&&script.src?new URL('.',script.src):new URL('./',location.href);
const page=decodeURIComponent(location.pathname.split('/').pop()||'index.html');
const tenant=page.includes('outilsud')?'Outilsud':'Braconnier';
const suffix=tenant==='Outilsud'?'-outilsud':'';
const sections=[
 ['Accueil','index.html','home'],
 ['Site Braconnier','https://www.braconnier.be/','site-b'],
 ['Site Outilsud','https://www.outilsud.be/','site-o'],
 ['Notes','notes.html','notes'],
 ['Calculs','calculs.html','calculs'],
 ['NetStore','netstore'+suffix+'.html','netstore'],
 ['BBD','fournisseurs'+suffix+'.html','bdd'],
 ['Commandes','commandes'+suffix+'.html','commandes'],
 ['Commande client','commande-client'+suffix+'.html','commande-client'],
 ['Inventaire','inventaire'+suffix+'.html','inventaire'],
 ['Factures','factures'+suffix+'.html','factures'],
 ['Scanner de prix','scanner-prix.html','scanner'],
 ['Électricité','electricite.html','electricite']
];
const current=page==='index.html'?'home':page.startsWith('administration-fournisseurs')||page.startsWith('fournisseurs')?'bdd':page.startsWith('commande-client')?'commande-client':page.startsWith('commandes')?'commandes':page.startsWith('inventaire')?'inventaire':page.startsWith('factures')?'factures':page.startsWith('netstore')?'netstore':page==='calculs.html'?'calculs':page==='notes.html'?'notes':page==='scanner-prix.html'?'scanner':page==='electricite.html'?'electricite':'';
const css=`:host{display:block;box-sizing:border-box;width:100%;margin:0 0 16px;font-family:Arial,Helvetica,sans-serif;color:#fff}*,*:before,*:after{box-sizing:border-box}.nav{display:flex;align-items:center;gap:clamp(5px,.8vw,12px);background:#1c293c;color:#fff;border-radius:13px;padding:12px clamp(9px,1vw,18px);box-shadow:0 4px 14px #14213624;min-height:66px;width:100%;overflow:hidden}.brand{display:flex;align-items:center;gap:7px;text-decoration:none;color:white;font-size:clamp(12px,1.1vw,17px);font-weight:800;line-height:1.05;white-space:nowrap;flex:none}.mark{display:grid;place-items:center;width:34px;height:34px;background:#ff8500;border-radius:9px;font-size:21px}.brand small{display:block;color:#cbd5e1;font-size:clamp(8px,.7vw,10px);margin-top:3px}.tenant{flex:none;border:1px solid #60718b;color:#f5f8ff;border-radius:20px;padding:6px 8px;font-size:clamp(9px,.75vw,11px);font-weight:700;white-space:nowrap}.links{display:flex;align-items:center;justify-content:space-between;gap:clamp(1px,.25vw,4px);min-width:0;flex:1;overflow:hidden}.links a{display:inline-flex;align-items:center;justify-content:center;flex:0 1 auto;min-width:0;text-decoration:none;color:#f7f9fd;font-size:clamp(8px,.72vw,12px);font-weight:700;border-radius:6px;padding:8px clamp(1px,.25vw,5px);white-space:nowrap;background:transparent;letter-spacing:-.15px}.links a:hover,.links a:focus-visible{background:#34445b;color:white}.links a:focus-visible{outline:2px solid #ff8500;outline-offset:1px}@media(max-width:1100px){.brand{font-size:12px}.mark{width:28px;height:28px}.tenant{padding:5px}.links a{font-size:9px;letter-spacing:-.3px}}@media(max-width:760px){.nav{overflow-x:auto;scrollbar-width:thin}.links{flex:none;overflow:visible;gap:4px}.links a{font-size:11px;padding:8px 5px}.brand{position:sticky;left:0;background:#1c293c;z-index:1}.tenant{display:none}}`;
function init(){if(document.querySelector('#portal-navigation'))return;
const wrap=document.querySelector('.wrap')||document.querySelector('main')||document.body;
const host=document.createElement('div');host.id='portal-navigation';
const shadow=host.attachShadow({mode:'open'});const style=document.createElement('style');style.textContent=css;shadow.append(style);
const nav=document.createElement('nav');nav.className='nav';nav.setAttribute('aria-label','Navigation principale du portail');
const brand=document.createElement('a');brand.className='brand';brand.href=new URL('index.html',base).href;brand.innerHTML='<span class="mark">⌂</span><span>Portail<small>Braconnier &amp; Outilsud</small></span>';nav.append(brand);
const tag=document.createElement('span');tag.className='tenant';tag.textContent=tenant;nav.append(tag);
const links=document.createElement('div');links.className='links';
sections.forEach(([label,path,id])=>{if(id===current)return;const a=document.createElement('a');a.href=/^https?:\/\//.test(path)?path:new URL(path,base).href;a.textContent=label;if(id==='site-b'||id==='site-o'){a.target='_blank';a.rel='noopener noreferrer'}links.append(a)});
nav.append(links);shadow.append(nav);
if(wrap===document.body)document.body.insertBefore(host,document.body.firstChild);else wrap.insertBefore(host,wrap.firstChild);
document.body.classList.add('portal-enhanced');if(page.startsWith('fournisseurs')||page.startsWith('administration-fournisseurs'))document.body.classList.add('portal-suppliers');
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
