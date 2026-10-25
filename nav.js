(function(){
var S={book:'<path d="M4 19V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M19 17v4H6"/>',run:'<circle cx="14" cy="4" r="2"/><path d="m6 22 4-6 3 2 1-6 4 3M8 9l4-2 3 3"/>',pen:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4z"/>',list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',medal:'<circle cx="12" cy="15" r="6"/><path d="m8 3 4 6 4-6"/>',star:'<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>',cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',chat:'<path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.4A8 8 0 1 1 21 12z"/>',tag:'<path d="M20 12 12 20 3 11V3h8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',users:'<circle cx="9" cy="8" r="3.5"/><path d="M2 21a7 7 0 0 1 14 0"/><circle cx="17" cy="9" r="2.5"/><path d="M17 15a5 5 0 0 1 5 5"/>',form:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',home:'<path d="M3 10.5 12 3l9 7.5V21H3z"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',down:'<path d="m6 9 6 6 6-6"/>'};
function ic(n){return '<svg class="ic" viewBox="0 0 24 24">'+S[n]+'</svg>'}
var M=[
['首页','index.html',[]],
['三大服务','services.html',[['services.html#read','book','阅读陪伴','分级共读，每周 2 次'],['services.html#run','run','体能带练','护照打卡，每周 2 次'],['services.html#hw','pen','作业看护','专注完成，自己订正']]],
['成长体系','books.html',[['books.html','list','分级书单','L1–L5 · 100 本好书'],['passport.html','medal','体能护照','四个站点，集章升级'],['game.html','star','成长游戏','探险地图 · 闯关 · 能量条']]],
['家长中心','parents.html',[['schedule.html','cal','一天 / 一周','放学到接回的节奏'],['parents.html','chat','每日小结与月报','每天知道孩子怎么样']]],
['加入我们','pricing.html',[['pricing.html','tag','价格与假期营','包月 · 5 日阅读营'],['founders.html','users','创始家长会','限额共建家庭'],['join.html','form','预约试听','免费体验一次']]],
['关于','about.html',[['about.html','info','关于我们','我们是谁 · 方法来源']]]];
var f=location.pathname.split('/').pop()||'index.html';
function cur(m){return m[1]==f||m[2].some(function(x){return x[0].split('#')[0]==f})}
var menu='',dr='';
M.forEach(function(m){var on=cur(m)?' on':'';
 if(!m[2].length){menu+='<div class="grp'+on+'"><a class="top" href="'+m[1]+'">'+m[0]+'</a></div>';dr+='<a class="dtop'+on+'" href="'+m[1]+'">'+m[0]+'</a>';return}
 var items=m[2].map(function(x){return '<a class="mi" href="'+x[0]+'"><span class="icb">'+ic(x[1])+'</span><span><b>'+x[2]+'</b><small>'+x[3]+'</small></span></a>'}).join('');
 menu+='<div class="grp'+on+'"><a class="top" href="'+m[1]+'">'+m[0]+ic('down')+'</a><div class="mega">'+items+'</div></div>';
 dr+='<details class="acc'+on+'"'+(on?' open':'')+'><summary>'+m[0]+ic('down')+'</summary>'+items+'</details>';});
var h=document.getElementById('nav');
if(h)h.outerHTML='<header class="hd"><div class="w"><a class="logo" href="index.html">'+ic('book')+'望京小书房 <i class="tag">示例</i></a><nav class="menu">'+menu+'</nav><a class="btn sm book" href="join.html">预约试听</a><button class="burger" aria-label="菜单">'+ic('menu')+'</button></div><div class="drawer"><div class="w">'+dr+'<a class="btn full" href="join.html" style="margin-top:14px">预约免费试听</a></div></div></header>';
var b=document.querySelector('.burger');if(b)b.onclick=function(){document.querySelector('.drawer').classList.toggle('open')};
var ft=document.getElementById('foot');
if(ft){var cols=M.slice(1,5).map(function(m){return '<div><h4>'+m[0]+'</h4>'+m[2].map(function(x){return '<a href="'+x[0]+'">'+x[2]+'</a>'}).join('')+'</div>'}).join('');
ft.outerHTML='<footer class="ft"><div class="w"><div class="cols"><div><a class="logo" href="index.html" style="color:#fff">'+ic('book')+'望京小书房</a><p style="margin-top:10px">望京社区民居里的课后托管。阅读陪伴 · 体能带练 · 作业看护。</p><p style="margin-top:8px">地址：望京 XX 小区 X 号楼 <i class="tag">示例</i><br>电话 / 微信：示例</p></div>'+cols+'</div><div class="bot">© 望京小书房（品牌名示例）· Demo 网站 · <a href="about.html" style="display:inline">关于我们 · 方法来源</a></div></div></footer><div class="fab"><a class="btn" href="join.html">预约免费试听</a></div>';}
})();
if(location.hash=="#qa-m"){document.querySelector('.drawer').classList.add('open');}
if(location.hash=='#qa-d'){var g=document.querySelectorAll('.menu .grp')[1];g.querySelector('.mega').style.display='block';}
