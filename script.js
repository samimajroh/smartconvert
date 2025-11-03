
function copyFormula(id){
  const el = document.getElementById(id);
  if(!el) return;
  navigator.clipboard.writeText(el.innerText).then(()=>{
    alert('✅ Formula copied to clipboard!');
  });
}
function searchFormula(){
  const q = document.getElementById('search').value.toLowerCase();
  const cards = document.querySelectorAll('.formula-card');
  let visible = 0;
  cards.forEach(c=>{
    const key = (c.getAttribute('data-key')||'').toLowerCase();
    if(q === '' || key.indexOf(q) !== -1){
      c.style.display = '';
      visible++;
    } else c.style.display = 'none';
  });
  // show pro-tip on exact match
  cards.forEach(c=>{
    const key = (c.getAttribute('data-key')||'').toLowerCase();
    if(q !== '' && key === q){
      const tip = c.querySelector('.pro-tip');
      if(tip) tip.style.display='block';
    } else {
      const tip = c.querySelector('.pro-tip');
      if(tip) tip.style.display='none';
    }
  });
}
