/* Navigation partagée, sans dépendance réseau et sans altérer les API */
(function(){'use strict';
var script=document.currentScript;var base=script&&script.src?new URL('.',script.src):new URL('./',location.href);
var page=decodeURIComponent(location.pathname.split('/').pop()||'index.html');
var tenant=page.includes('outilsud')?'Outilsud':'Braconnier';
var suffix=tenant==='Outilsud'?'-outilsud':'';
var sections=[['⌂','Accueil','index.html'],['▦','Fournisseurs','fournisseurs'+suffix+'.html'],['▤','Articles','fournisseurs'+suffix+'.html'],['🛒','Commandes','commandes'+suffix+'.html'],['▣','Inventaire','inventaire'+suffix+'.html'],['▧','Factures','factures'+suffix+'.html'],['▤','NetStore','netstore'+suffix+'.html'],['▦','Calculs','calculs.html'],['✎','Notes','notes.html'],['⚡','Électricité','electricite.html']];
function init(){if(document.querySelector('.portal-nav'))return;var wrap=document.querySelector('.wrap')||document.querySelector('main')||document.body;
var nav=document.createElement('nav');nav.className='portal-nav';nav.setAttribute('aria-label','Navigation du portail');
var brand=document.createElement('a');brand.className='portal-brand';brand.href=new URL('index.html',base).href;brand.innerHTML='<span class="portal-mark">⌂</span><span>Portail<small>Braconnier &amp; Outilsud</small></span>';nav.appendChild(brand);
var tag=document.createElement('span');tag.className='portal-tenant';tag.textContent=tenant;nav.appendChild(tag);
var toggle=document.createElement('button');toggle.type='button';toggle.className='portal-toggle';toggle.textContent='☰ Menu';toggle.setAttribute('aria-expanded','false');toggle.addEventListener('click',function(){var open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open))});nav.appendChild(toggle);
var links=document.createElement('div');links.className='portal-links';sections.forEach(function(x){var a=document.createElement('a');a.href=new URL(x[2],base).href;a.textContent=x[0]+' '+x[1];if(x[2]===page||(x[1]==='Articles'&&page.startsWith('articles-')))a.classList.add('is-current');links.appendChild(a)});nav.appendChild(links);
if(wrap===document.body)document.body.insertBefore(nav,document.body.firstChild);else wrap.insertBefore(nav,wrap.firstChild);
document.body.classList.add('portal-enhanced');if(page.startsWith('fournisseurs')||page.startsWith('administration-fournisseurs'))document.body.classList.add('portal-suppliers');
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();