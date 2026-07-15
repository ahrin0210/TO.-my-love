
const msg=`안녕 정현아.

아까 싸울 때 말을 너무 심하게 한 것 같아서 후회돼.

넌 나에게 있어서 가장 소중한 사람인데,
예쁜 말만 해줘도 시간이 모자란데...

우리 앞으로는 싸우지 말고
사랑만 하자.

정말 많이 사랑해 정현아. ❤️`;
function openLetter(){
document.getElementById('envelope').style.display='none';
let l=document.getElementById('letter');l.style.display='block';
let i=0,t=document.getElementById('text');
(function type(){if(i<msg.length){t.textContent+=msg[i++];setTimeout(type,45)}else document.getElementById('q').classList.remove('hide')})();}
const no=document.getElementById('no');
function mv(){no.style.position='fixed';no.style.left=Math.random()*(innerWidth-100)+'px';no.style.top=Math.random()*(innerHeight-50)+'px';}
no.onmouseover=mv;no.ontouchstart=(e)=>{e.preventDefault();mv();}
document.getElementById('yes').onclick=()=>{
document.getElementById('q').style.display='none';
for(let i=0;i<120;i++){let h=document.createElement('div');h.className='heart';h.textContent='❤️';h.style.left=Math.random()*innerWidth+'px';h.style.top=innerHeight+'px';h.style.animationDelay=(Math.random()*2)+'s';document.getElementById('hearts').appendChild(h);}
document.getElementById('final').classList.remove('hide');
}
