function add_div(name) {
	o = document.createElement('div');
	o.id = name;
	document.body.appendChild(o);
	return o
}

function menu_init(url) {
	var linkstr = ['index;TOP', 'story/index;ストーリー攻略', 'hhyoma;変異憑魔一覧', 'sp_chat;サポートタレント関連のチャット', 'skill;スキル一覧', 'degree;称号', 'weapon;武器', 'chat/index;チャットデータ', 'enemy/index;敵データ'];

	o = add_div('jmenu_icon');
	o.onclick = menu_show;
	o.innerHTML = '▼ MENU';

	o = add_div('jmenu');
	o.style.display = 'none';

	t = '<a href="#" onclick="return menu_hide()" style="cursor:pointer">▲ MENU</a><hr>'
	len = linkstr.length;

	if(!url) url = '..';

	for(i = 0; i < len; i++) {
		s = linkstr[i].split(';');
		t += '<a href="' + url + '/' + s[0] + '.html">' + s[1] + '</a>';
	}

	o.innerHTML = t;
}

function menu_show() {
	document.getElementById('jmenu_icon').style.display = 'none';
	document.getElementById('jmenu').style.display = 'block';
}

function menu_hide() {
	document.getElementById('jmenu_icon').style.display = 'block';
	document.getElementById('jmenu').style.display = 'none';
	return false;
}

function word(o,t) {
	if(o.innerText == '★') o.innerHTML = '<br>' + t;
	else o.innerText = '★';
	return false;
}

function showhide(lo,id) {
	o = document.getElementById(id);
	if(o.style.display == 'none'){o.style.display = 'block';lo.innerText = '▲閉じる';}
	else{o.style.display = 'none';lo.innerText = '▼開く';}
	return false;
}
