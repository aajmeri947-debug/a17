(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var U='in';function f(v){return U==='in'?v+'"':Math.round(v*2.54)+' cm';}
function sz(){var c=+$('sz-c').value,w=+$('sz-w').value,h=+$('sz-h').value,s=Math.round(c/2)*2;if(c-s>0.9)s+=2;var L=h<67?'S':h>73?'L':'R',drop=c-w;
 $('sz-cv').textContent=f(c);$('sz-wv').textContent=f(w);$('sz-hv').textContent=U==='in'?Math.floor(h/12)+' ft '+(h%12)+' in':Math.round(h*2.54)+' cm';
 $('sz-s').textContent=s+L;$('sz-us').textContent=s+L;$('sz-eu').textContent=(s+10)*1+(L==='S'?' (short)':L==='L'?' (long)':'');$('sz-d').textContent=U==='in'?drop.toFixed(1).replace('.0','')+'"':Math.round(drop*2.54)+' cm';
 var cut=drop>=8?'Athletic':drop>=6?'Classic':drop>=4?'Relaxed':'Full';$('sz-cut').textContent=cut;
 $('sz-n').textContent=drop>=8?'A big drop: look for an athletic or slim cut, or plan to take in the waist.':drop>=6?'A standard 6" drop: most ready-made suits are cut for you.':drop>=3?'A smaller drop: choose a relaxed cut, or size jacket and trousers separately.':'Very little drop: separates or made-to-measure will fit best.';
 var t=$('sz-s');t.style.animation='none';t.offsetHeight;t.style.animation='';}
if($('sz-c')){['sz-c','sz-w','sz-h'].forEach(function(i){$(i).addEventListener('input',sz);});var ub=[].slice.call(document.querySelectorAll('.tl-units button'));ub.forEach(function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.addEventListener('click',function(){U=b.dataset.u;ub.forEach(function(o){o.classList.toggle('on',o===b);o.setAttribute('aria-pressed',o===b);});sz();});});sz();}
var C={linen:['Linen','cool &amp; textured','Light, breathable and relaxed. It creases, and that is part of its charm.','220&ndash;280 g/m&sup2;','Plain weave','Sand, sky, olive','repeating-linear-gradient(0deg,#D9C9A8 0 2px,#CDBB96 2px 3px),repeating-linear-gradient(90deg,#D9C9A8 0 3px,#C8B48C 3px 4px)'],
tropical:['Tropical wool','light worsted','A fine, open-weave worsted that breathes in heat yet still drapes and resists creasing.','230&ndash;260 g/m&sup2;','Open plain weave','Mid-grey, tan, light navy','repeating-linear-gradient(45deg,#8E96A3 0 2px,#7E8794 2px 4px)'],
worsted:['Worsted wool','the all-rounder','Smooth, durable and crisp. A mid-weight worsted is the most versatile suit cloth there is.','260&ndash;300 g/m&sup2;','Twill','Navy, charcoal, mid-grey','repeating-linear-gradient(90deg,#2B3550 0 10px,#C9C3B6 10px 11px,#2B3550 11px 22px),repeating-linear-gradient(45deg,#2B3550 0 2px,#24304A 2px 4px)'],
fresco:['Fresco','high-twist wool','A springy, porous high-twist wool that bounces back from creases. Ideal for hot city days.','280&ndash;320 g/m&sup2;','Open hopsack','Navy, grey, brown','repeating-conic-gradient(#3C4766 0 25%,#2E3854 0 50%) 0 0/8px 8px'],
flannel:['Flannel','soft &amp; warm','A brushed wool with a soft, slightly fuzzy face. Warm, comfortable and quietly elegant.','320&ndash;400 g/m&sup2;','Brushed twill','Grey, chalk-stripe navy','repeating-linear-gradient(90deg,#6E7078 0 14px,#E8E2D6 14px 15px,#6E7078 15px 28px),radial-gradient(#7A7C84 1px,#6E7078 1px) 0 0/3px 3px'],
tweed:['Tweed','rugged &amp; heathery','A thick, hard-wearing wool with flecks of colour. Best for country weekends and cold weather.','400&ndash;500 g/m&sup2;','Herringbone','Brown, moss, heather','repeating-linear-gradient(45deg,#6B5A3E 0 4px,#7D6A4A 4px 8px),repeating-linear-gradient(-45deg,#6B5A3E 0 4px,#5E4F36 4px 8px)'],
velvet:['Wool &amp; mohair','evening sheen','A wool-mohair blend with a subtle lustre that catches the light. Crisp, smart and made for occasions.','260&ndash;300 g/m&sup2;','Plain weave','Midnight, black, deep green','linear-gradient(135deg,#1D2A44,#34466B 45%,#1D2A44)']};
var A={s:0,c:1,o:1};function cl(){var k;if(A.s===2||A.c===2){k=A.o===2?'tweed':'flannel';}else if(A.s===0&&A.c===0){k=A.o===0?'fresco':'linen';}else if(A.s===0){k=A.o===2?'linen':'tropical';}else{k=A.o===1?'velvet':'worsted';}if(A.o===1&&A.s===0&&A.c===0)k='tropical';
 var x=C[k];$('cl-t').innerHTML=x[0];$('cl-k').innerHTML=x[1];$('cl-d').innerHTML=x[2];$('cl-w').innerHTML=x[3];$('cl-v').innerHTML=x[4];$('cl-c').innerHTML=x[5];$('cl-sw').style.background=x[6];}
[].forEach.call(document.querySelectorAll('.tl-chips'),function(g){var bs=[].slice.call(g.querySelectorAll('button'));bs.forEach(function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.addEventListener('click',function(){A[g.dataset.q]=+b.dataset.v;bs.forEach(function(o){o.classList.toggle('on',o===b);o.setAttribute('aria-pressed',o===b);});cl();});});});if($('cl-t'))cl();
})();
