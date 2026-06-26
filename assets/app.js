/* ============================================================
   CreekHaus prototype — icons + interactions (v3)
   ============================================================ */
const S = (b,extra='') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" ${extra}>${b}</svg>`;
const ICONS = {
  menu:S('<path d="M3 6h18M3 12h18M3 18h18"/>'),
  back:S('<path d="M19 12H5M12 19l-7-7 7-7"/>'),
  x:S('<path d="M18 6 6 18M6 6l12 12"/>'),
  bell:S('<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>'),
  home:S('<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>'),
  book:S('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>'),
  clip:S('<rect x="8" y="3" width="8" height="4" rx="1"/><path d="M9 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3"/><path d="m9 14 2 2 4-4"/>'),
  alert:S('<path d="M10.3 3.8 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.8a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>'),
  plus:S('<path d="M12 5v14M5 12h14"/>'),
  user:S('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'),
  settings:S('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 0 1-4 0v-.1A1.6 1.6 0 0 0 6.7 19.4l-.1.1A2 2 0 1 1 3.8 16.7l.1-.1A1.6 1.6 0 0 0 3 14.1H3a2 2 0 0 1 0-4h.1A1.6 1.6 0 0 0 4.6 7.3l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 10 4.6V4a2 2 0 0 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 1.1 2.7H21a2 2 0 0 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z"/>'),
  help:S('<circle cx="12" cy="12" r="9"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2.5-3 4"/><path d="M12 17h.01"/>'),
  logout:S('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5M21 12H9"/>'),
  chev:S('<path d="m9 18 6-6-6-6"/>'),
  chevl:S('<path d="m15 18-6-6 6-6"/>'),
  chevd:S('<path d="m6 9 6 6 6-6"/>'),
  search:S('<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>'),
  mic:S('<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>'),
  keyboard:S('<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"/>'),
  paperclip:S('<path d="M21 11.5 12.5 20a4.5 4.5 0 0 1-6.4-6.4l8.5-8.5a3 3 0 0 1 4.2 4.2l-8.5 8.5a1.5 1.5 0 0 1-2.1-2.1l7.8-7.8"/>'),
  camera:S('<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3l2-3h8l2 3h3a2 2 0 0 1 2 2Z"/><circle cx="12" cy="13" r="4"/>'),
  lock:S('<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'),
  cal:S('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/>'),
  calcheck:S('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4m-7 9 2 2 4-4"/>'),
  sun:S('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"/>'),
  moon:S('<path d="M21 12.8A8 8 0 1 1 11.2 3a6 6 0 0 0 9.8 9.8Z"/>'),
  leaf:S('<path d="M11 20A7 7 0 0 1 4 13c0-6 5-9 16-10-1 11-4 16-9 17Z"/><path d="M11 20c0-5 2-9 6-12"/>'),
  wrench:S('<path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.5 2.5-2.8-.4-.4-2.8Z"/>'),
  droplet:S('<path d="M12 2.7 6.3 9a8 8 0 1 0 11.4 0Z"/>'),
  chef:S('<path d="M7 21h10M6 17h12v-1a6 6 0 0 0-2-11 4 4 0 0 0-8 0 6 6 0 0 0-2 11Z"/>'),
  users:S('<circle cx="9" cy="8" r="3.2"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M16 5.2a3 3 0 0 1 0 5.6M21 20a5.5 5.5 0 0 0-4-5.3"/>'),
  martini:S('<path d="M4 4h16l-8 8z"/><path d="M12 12v7M8 21h8"/>'),
  heater:S('<path d="M9 3h6l1 4H8z"/><path d="M12 7v9M8 20h8"/><path d="M10 10v4M14 10v4"/>'),
  keg:S('<rect x="7" y="3" width="10" height="18" rx="3"/><path d="M7 8h10M7 16h10M11 12h2"/>'),
  napkin:S('<path d="M4 9h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M9 9c0-2 1-3 3-3s3 1 3 3"/><path d="M12 12v5"/>'),
  restroom:S('<path d="M8 21v-6M8 9a2 2 0 1 0 0-.01M5 21l1.5-9h3L11 21M16 21v-5h-2l2-7h0l2 7h-2"/><circle cx="16" cy="6.5" r="1.6"/>'),
  table:S('<path d="M3 8h18M5 8l-2 12M19 8l2 12M8 8l-1 12M16 8l1 12M3 13h18"/>'),
  star:S('<path d="m12 3 2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.6 6.7 19.4l1-5.8L3.5 9.5l5.9-.9z"/>'),
  check:S('<path d="m4 12 5 5L20 6"/>'),
  hex:S('<path d="M12 2.5 20 7v10l-8 4.5L4 17V7z"/>'),
  phone:S('<path d="M5 3h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-3Z"/>'),
  faceid:S('<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><path d="M9 10v1M15 10v1M12 9v4l-1 1M9 15a4 4 0 0 0 6 0"/>'),
  filter:S('<path d="M3 5h18l-7 8v6l-4-2v-4z"/>'),
  megaphone:S('<path d="M3 11v2a1 1 0 0 0 1 1h2l9 5V5L6 10H4a1 1 0 0 0-1 1Z"/><path d="M18 8a4 4 0 0 1 0 8"/>'),
  bars:S('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
  file:S('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>'),
  filepdf:S('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M8.5 13.5h1a1 1 0 0 1 0 2h-1zM8.5 17.5v-4M13 13.5v4M13 13.5h1.4M13 15.5h1.2"/>'),
  filecheck:S('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5m-7 8 1.5 1.5L17 14"/>'),
  shield:S('<path d="M12 2 4 5v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V5z"/><path d="m9 12 2 2 4-4"/>'),
  fork:S('<path d="M5 3v6a2 2 0 0 0 4 0V3M7 11v10M16 3c-1.5 1-2 3-2 5s.5 3 2 3v10"/>'),
  send:S('<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>'),
  arrow:S('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  dollar:S('<path d="M12 2v20M17 6.5C17 4.5 14.8 3.5 12 3.5S7 4.7 7 6.7 9 9.5 12 10s5 1.3 5 3.4-2.2 3.1-5 3.1-5-1-5-3"/>'),
  clock:S('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  dots:S('<circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/>'),
  edit:S('<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>'),
  userplus:S('<circle cx="9" cy="8" r="3.5"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0M19 8v6M22 11h-6"/>'),
  guest:S('<circle cx="9" cy="8" r="3.2"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><circle cx="17" cy="9" r="2.4"/>'),
  flag:S('<path d="M4 21V4M4 4h12l-2 4 2 4H4"/>'),
  trash:S('<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>'),
  sig:`<svg viewBox="0 0 18 13" fill="currentColor"><rect x="0" y="9" width="3" height="4" rx="1"/><rect x="5" y="6" width="3" height="7" rx="1"/><rect x="10" y="3" width="3" height="10" rx="1"/><rect x="15" y="0" width="3" height="13" rx="1"/></svg>`,
  wifi:`<svg viewBox="0 0 18 13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M2 5a11 11 0 0 1 14 0M4.5 7.5a7 7 0 0 1 9 0M7 10a3 3 0 0 1 4 0"/><circle cx="9" cy="12" r="0.6" fill="currentColor" stroke="none"/></svg>`,
  batt:`<svg viewBox="0 0 26 13" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="1" y="1" width="21" height="11" rx="3"/><rect x="3" y="3" width="16" height="7" rx="1.5" fill="currentColor"/><path d="M24 4.5v4" stroke-width="2"/></svg>`,
};
function paintIcons(root=document){
  root.querySelectorAll('i[data-i]').forEach(el=>{
    const k=el.getAttribute('data-i');
    if(ICONS[k] && !el.dataset.painted){ el.innerHTML=ICONS[k]; el.dataset.painted='1'; }
  });
}

/* ---------- helpers ---------- */
function flipMove(container, reorder, sel){
  const items=[...container.querySelectorAll(sel)];
  const first=new Map(); items.forEach(el=>first.set(el, el.getBoundingClientRect().top));
  reorder();
  [...container.querySelectorAll(sel)].forEach(el=>{
    const f=first.get(el); if(f==null) return;
    const dy=f-el.getBoundingClientRect().top;
    if(dy){
      el.style.transition='none'; el.style.transform=`translateY(${dy}px)`;
      requestAnimationFrame(()=>{ el.style.transition='transform .32s cubic-bezier(.2,.7,.3,1)'; el.style.transform=''; });
    }
  });
}
let _doneSeq=1;
function resort(container, sel, doneClass){
  flipMove(container, ()=>{
    [...container.querySelectorAll(sel)]
      .sort((a,b)=>{
        const da=a.classList.contains(doneClass)?1:0, db=b.classList.contains(doneClass)?1:0;
        if(da!==db) return da-db;
        if(da===1) return (+a.dataset.seq||0)-(+b.dataset.seq||0);   // done: by completion order
        return (+a.dataset.order||0)-(+b.dataset.order||0);          // active: original order
      })
      .forEach(el=>container.appendChild(el));
  }, sel);
}
function toast(msg){
  let t=document.querySelector('.toast');
  if(!t){ t=document.createElement('div'); t.className='toast'; document.body.appendChild(t); }
  t.textContent=msg; t.classList.add('show');
  clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove('show'),1900);
}
function closeSheet(bd){ if(bd) bd.classList.remove('show'); }
function cleanName(el){ return [...el.childNodes].filter(n=>n.nodeType===3).map(n=>n.textContent).join(' ').replace(/\s+/g,' ').trim(); }

const MONTHS=['January','February','March','April','May','June','July','August','September','October','November','December'];
const DOW=['Su','Mo','Tu','We','Th','Fr','Sa'];
function buildCalendar(pop, host){
  let y=2026, m=5, selDay=12;
  function render(){
    const first=new Date(y,m,1).getDay(), days=new Date(y,m+1,0).getDate();
    let html=`<div class="cal-head"><button data-mv="-1"><i data-i="chevl"></i></button><span class="mo">${MONTHS[m]} ${y}</span><button data-mv="1"><i data-i="chev"></i></button></div><div class="cal-grid">`;
    DOW.forEach(d=>html+=`<div class="dow">${d}</div>`);
    for(let i=0;i<first;i++) html+=`<button class="day muted"></button>`;
    for(let d=1;d<=days;d++){
      const cls=(d===12&&m===5&&y===2026?'today ':'')+(d===selDay&&m===5?'sel ':'');
      html+=`<button class="day ${cls}" data-d="${d}">${d}</button>`;
    }
    html+='</div>'; pop.innerHTML=html; paintIcons(pop);
  }
  render();
  pop.addEventListener('click', e=>{
    const mv=e.target.closest('[data-mv]');
    if(mv){ m+=(+mv.dataset.mv); if(m<0){m=11;y--} if(m>11){m=0;y++} render(); e.stopPropagation(); return; }
    const day=e.target.closest('.day[data-d]');
    if(day){
      selDay=+day.dataset.d; const dt=new Date(y,m,selDay);
      const lbl=host.querySelector('.cal-label');
      if(lbl) lbl.textContent=dt.toLocaleDateString('en-US',{weekday:'short',month:'long',day:'numeric',year:'numeric'});
      pop.classList.remove('show');
      toast('Showing '+dt.toLocaleDateString('en-US',{month:'short',day:'numeric'}));
      e.stopPropagation();
    }
  });
}

document.addEventListener('DOMContentLoaded',()=>{
  paintIcons();

  /* checklist toggle + done-to-bottom */
  document.querySelectorAll('[data-list="checklist"]').forEach(list=>{
    [...list.querySelectorAll('.check')].forEach((row,i)=>{ if(!row.dataset.order) row.dataset.order=i; if(row.classList.contains('done')&&!row.dataset.seq) row.dataset.seq=_doneSeq++; });
  });
  document.querySelectorAll('.check').forEach(row=>{
    row.addEventListener('click',e=>{
      if(e.target.closest('.chev')) return;
      row.classList.toggle('done');
      const pill=row.querySelector('.pill'), box=row.querySelector('.box');
      if(row.classList.contains('done')){
        row.dataset.seq=_doneSeq++;
        if(box) box.innerHTML=ICONS.check;
        if(pill){ pill.textContent='Done'; pill.className='pill done'; }
      } else {
        delete row.dataset.seq;
        if(box) box.innerHTML='';
        if(pill){ pill.textContent='To-Do'; pill.className='pill todo'; }
      }
      const list=row.closest('[data-list="checklist"]');
      if(list) resort(list,'.check','done');
    });
  });

  /* unified compose: mic record + char count */
  document.querySelectorAll('.compose').forEach(c=>{
    const mic=c.querySelector('.tap-ic'), recbar=c.querySelector('.recbar'),
          ta=c.querySelector('textarea'), count=c.querySelector('.count');
    let timer=null,secs=0;
    if(ta&&count) ta.addEventListener('input',()=>count.textContent=`${ta.value.length}/2000`);
    if(mic&&recbar){
      const timeEl=recbar.querySelector('.time');
      mic.addEventListener('click',()=>{
        const on=mic.classList.toggle('rec'); recbar.classList.toggle('show',on);
        if(on){ secs=0; if(timeEl)timeEl.textContent='0:00';
          timer=setInterval(()=>{secs++; if(timeEl)timeEl.textContent=`${Math.floor(secs/60)}:${String(secs%60).padStart(2,'0')}`;},1000);
        } else clearInterval(timer);
      });
    }
  });

  /* incident chips */
  document.querySelectorAll('.chip').forEach(ch=>ch.addEventListener('click',()=>ch.classList.toggle('sel')));

  /* guides search */
  const gs=document.querySelector('.search input');
  if(gs) gs.addEventListener('input',()=>{
    const q=gs.value.trim().toLowerCase();
    document.querySelectorAll('.guide-row').forEach(r=>{ r.style.display=r.querySelector('.gt').textContent.toLowerCase().includes(q)?'':'none'; });
    document.querySelectorAll('.guide-group').forEach(g=>{ g.style.display=[...g.querySelectorAll('.guide-row')].some(r=>r.style.display!=='none')?'':'none'; });
  });

  /* generic sheet open + close */
  document.querySelectorAll('[data-open]').forEach(btn=>{
    btn.addEventListener('click',()=>{ const bd=document.getElementById(btn.dataset.open); if(bd){ bd.classList.add('show'); paintIcons(bd); } });
  });
  document.addEventListener('click',e=>{
    if(e.target.classList.contains('backdrop')) closeSheet(e.target);
    const c=e.target.closest('.close'); if(c) closeSheet(c.closest('.backdrop'));
  });

  /* people add/remove inside any sheet */
  document.addEventListener('click',e=>{
    const x=e.target.closest('.pchip .x');
    if(x){ x.closest('.pchip').remove(); return; }
    const add=e.target.closest('.add-row');
    if(add && add.dataset.name){
      const target=add.closest('.sheet').querySelector('.people-edit');
      if(target && !add.classList.contains('used')){
        const chip=document.createElement('div'); chip.className='pchip';
        chip.innerHTML=`<span class="avatar sm">${add.dataset.name[0]}</span> ${add.dataset.name} <button class="x"><i data-i="x"></i></button>`;
        target.appendChild(chip); paintIcons(chip);
        add.classList.add('used'); add.style.opacity=.45; add.style.pointerEvents='none';
      }
    }
  });

  /* manager: edit/assign → sheet, save writes back to card */
  let activeAssignCard=null;
  document.querySelectorAll('.assign .edit, [data-assign-open]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      activeAssignCard=btn.closest('.assign');
      const sheet=document.getElementById('assignSheet'); if(!sheet) return;
      const role=activeAssignCard?activeAssignCard.querySelector('.ti .t').textContent:'New assignment';
      sheet.querySelector('.sh-head h3').textContent=activeAssignCard?('Edit · '+role):'Assign team member';
      const pe=sheet.querySelector('.people-edit'); pe.innerHTML='';
      if(activeAssignCard){
        activeAssignCard.querySelectorAll('.person').forEach(p=>{
          const nm=cleanName(p);
          const chip=document.createElement('div'); chip.className='pchip';
          chip.innerHTML=`<span class="avatar sm">${nm[0]}</span> ${nm} <button class="x"><i data-i="x"></i></button>`;
          pe.appendChild(chip);
        });
      }
      sheet.querySelectorAll('.add-row').forEach(a=>{a.classList.remove('used');a.style.opacity='';a.style.pointerEvents='';});
      paintIcons(sheet);
      sheet.classList.add('show');
    });
  });
  const saveAssign=document.querySelector('#assignSheet [data-save-assign]');
  if(saveAssign) saveAssign.addEventListener('click',()=>{
    const sheet=document.getElementById('assignSheet');
    const names=[...sheet.querySelectorAll('.people-edit .pchip')].map(c=>cleanName(c));
    if(activeAssignCard){
      const wrap=activeAssignCard.querySelector('.people');
      const editBtn=wrap.querySelector('.edit');
      wrap.querySelectorAll('.person').forEach(p=>p.remove());
      names.forEach(nm=>{
        const sp=document.createElement('div'); sp.className='person';
        sp.innerHTML=`<span class="avatar sm">${nm[0]}</span> ${nm}`;
        wrap.insertBefore(sp, editBtn);
      });
      const pill=activeAssignCard.querySelector('.pill'); if(pill) pill.textContent=names.length+' Assigned';
    }
    closeSheet(sheet.closest('.backdrop')); toast('Assignment saved');
  });

  /* manager: report review */
  let activeReport=null;
  const reportSheet=document.getElementById('reportSheet');
  document.querySelectorAll('.rev-item').forEach((it,i)=>{
    if(!it.dataset.order) it.dataset.order=i;
    if(it.classList.contains('reviewed')&&!it.dataset.seq) it.dataset.seq=_doneSeq++;
    it.addEventListener('click',e=>{
      if(e.target.closest('button')) return;
      if(!reportSheet) return;
      activeReport=it;
      reportSheet.querySelector('[data-rd-title]').textContent=it.dataset.title||'Report';
      reportSheet.querySelector('[data-rd-meta]').innerHTML=
        `<span class="pill ${it.dataset.pillclass||'open'}">${it.dataset.status||'Open'}</span>`+
        `<span class="pill" style="background:var(--sage);color:var(--green)">${it.dataset.cat||''}</span>`+
        `<span class="by" style="align-self:center">${it.dataset.by||''}</span>`;
      reportSheet.querySelector('[data-rd-body]').textContent=it.dataset.body||'';
      reportSheet.querySelector('[data-flag]').textContent=it.classList.contains('flagged')?'Flagged':'Flag';
      reportSheet.classList.add('show'); paintIcons(reportSheet);
    });
  });
  if(reportSheet){
    reportSheet.querySelector('[data-review]').addEventListener('click',()=>{
      if(activeReport){
        activeReport.classList.add('reviewed');
        activeReport.dataset.seq=_doneSeq++;
        const pill=activeReport.querySelector('.pill'); if(pill){ pill.textContent='Reviewed'; pill.className='pill resolved'; }
        const list=activeReport.closest('[data-list="reports"]');
        closeSheet(reportSheet.closest('.backdrop'));
        if(list) setTimeout(()=>resort(list,'.rev-item','reviewed'),60);
        toast('Marked reviewed');
      }
    });
    reportSheet.querySelector('[data-flag]').addEventListener('click',()=>{
      if(activeReport){
        const on=activeReport.classList.toggle('flagged');
        let fp=activeReport.querySelector('.pill.flagged');
        if(on && !fp){ const s=document.createElement('span'); s.className='pill flagged'; s.style.marginLeft='6px'; s.textContent='Flagged'; activeReport.querySelector('.rh').appendChild(s); }
        if(!on && fp) fp.remove();
        reportSheet.querySelector('[data-flag]').textContent=on?'Flagged':'Flag';
        toast(on?'Flagged for follow-up':'Flag removed');
      }
    });
  }

  /* web: clickable table rows open a sheet */
  document.querySelectorAll('tr.clickable[data-sheet]').forEach(tr=>{
    tr.addEventListener('click',e=>{
      if(e.target.closest('button')) return;
      const bd=document.getElementById(tr.dataset.sheet); if(!bd) return;
      if(tr.dataset.title){ const h=bd.querySelector('.sh-head h3'); if(h) h.textContent=tr.dataset.title; }
      bd.classList.add('show'); paintIcons(bd);
    });
  });

  /* web: review checkbox in tables → move row to bottom (completion order) */
  document.querySelectorAll('tbody').forEach(tb=>{
    [...tb.querySelectorAll('tr')].forEach((r,i)=>{ if(!r.dataset.order) r.dataset.order=i; if(r.classList.contains('reviewed')&&!r.dataset.seq) r.dataset.seq=_doneSeq++; });
  });
  document.querySelectorAll('.mini-check').forEach(mc=>{
    mc.addEventListener('click',e=>{
      e.stopPropagation();
      const on=mc.classList.toggle('on'); mc.innerHTML=on?ICONS.check:'';
      const tr=mc.closest('tr'); tr.classList.toggle('reviewed',on);
      if(on) tr.dataset.seq=_doneSeq++; else delete tr.dataset.seq;
      const st=tr.querySelector('[data-statuscell]');
      if(st){ st.innerHTML=on?'<span class="pill resolved">Reviewed</span>':(tr.dataset.origstatus||''); }
      const tb=tr.closest('tbody');
      if(tb) flipMove(tb,()=>{ [...tb.querySelectorAll('tr')].sort((a,b)=>{const da=a.classList.contains('reviewed')?1:0,db=b.classList.contains('reviewed')?1:0; if(da!==db)return da-db; if(da===1)return(+a.dataset.seq||0)-(+b.dataset.seq||0); return(+a.dataset.order)-(+b.dataset.order);}).forEach(r=>tb.appendChild(r)); },'tr');
    });
  });

  /* calendars */
  document.querySelectorAll('[data-cal]').forEach(el=>{
    let pop=el.querySelector('.cal-pop');
    if(!pop){ pop=document.createElement('div'); pop.className='cal-pop'; el.appendChild(pop); }
    buildCalendar(pop, el);
    el.addEventListener('click',e=>{ if(e.target.closest('.cal-pop')) return; pop.classList.toggle('show'); });
    document.addEventListener('click',e=>{ if(!el.contains(e.target)) pop.classList.remove('show'); });
  });
});
