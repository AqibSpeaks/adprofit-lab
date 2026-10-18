'use strict';
const $=id=>document.getElementById(id);
const num=id=>{const x=Number($(id).value);return Number.isFinite(x)&&x>=0?x:NaN};
const money=n=>Number.isFinite(n)?new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:2}).format(n):'—';
const fmt=n=>Number.isFinite(n)?n.toFixed(2):'—';
function compute(){
 const r=num('revenue'),s=num('spend'),c=num('cost'),o=num('other');
 $('roasOut').textContent=[r,s,c,o].some(Number.isNaN)?'Enter valid non-negative amounts.':`ROAS: ${s>0?fmt(r/s)+'x':'N/A (zero ad spend)'}\nNet profit (before tax): ${money(r-s-c-o)}\nProfit margin: ${r>0?fmt(100*(r-s-c-o)/r)+'%':'N/A (zero revenue)'}\nBreak-even revenue at current costs: ${money(s+c+o)}`;
 const a=num('aov'),v=num('variable'),p=num('perorder');
 $('cpaOut').textContent=[a,v,p].some(Number.isNaN)?'Enter valid non-negative amounts.':`Break-even ad CPA: ${money(a-v-p)}\nContribution before advertising: ${money(a-v-p)}\n${a-v-p<0?'Warning: each order loses money before ad spend.':'At this CPA, contribution after acquisition is zero.'}`;
 const m=num('monthly'),t=num('targetcpa'),d=num('days');
 $('budgetOut').textContent=[m,t,d].some(Number.isNaN)||d<1?'Enter valid amounts and at least 1 day.':`Daily budget: ${money(m/d)}\nEstimated acquisitions at target CPA: ${t>0?fmt(m/t):'N/A (zero target CPA)'}\nThis is a planning estimate, not a forecast.`;
 updateUTM();
}
let currentUTM='';
function updateUTM(){try{const raw=$('url').value.trim();if(!raw){$('utmOut').textContent='Enter a destination URL.';currentUTM='';return}const u=new URL(raw);if(!['https:','http:'].includes(u.protocol))throw Error('Use an HTTP(S) URL');const source=$('source').value.trim(),medium=$('medium').value.trim(),campaign=$('campaign').value.trim();if(!source||!medium||!campaign){$('utmOut').textContent='Source, medium, and campaign are required.';currentUTM='';return}for(const [key,value] of [['utm_source',source],['utm_medium',medium],['utm_campaign',campaign],['utm_content',$('content').value.trim()]]){if(value)u.searchParams.set(key,value)}currentUTM=u.toString();$('utmOut').textContent=currentUTM}catch(e){currentUTM='';$('utmOut').textContent='Enter a valid http:// or https:// URL.'}}
function generate(){const p=$('product').value.trim(),a=$('audience').value.trim(),b=$('benefit').value.trim();if(!p||!a||!b){$('copyOut').textContent='Complete all three fields.';return}const ideas=[`Question hook: Looking for a simpler way to ${b.toLowerCase()}? Explore ${p} for ${a}.`,`Benefit-led: ${p} is designed for ${a}. Discover how it can help you ${b.toLowerCase()}.`,`Curiosity-led: What could change if ${a} had a better way to ${b.toLowerCase()}? Take a look at ${p}.`];$('copyOut').textContent=ideas.map((s,i)=>`${i+1}. ${s}`).join('\n\n')+'\n\nReview every claim before publishing.'}
document.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-tab]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-selected',String(x===b))});document.querySelectorAll('.panel').forEach(p=>p.classList.toggle('hidden',p.id!==b.dataset.tab))}));
document.querySelectorAll('input').forEach(x=>x.addEventListener('input',compute));$('generate').addEventListener('click',generate);$('copyLink').addEventListener('click',async()=>{if(!currentUTM)return;try{await navigator.clipboard.writeText(currentUTM);$('copyLink').textContent='Copied!'}catch{$('copyLink').textContent='Select and copy URL above'}});$('year').textContent=new Date().getFullYear();compute();
