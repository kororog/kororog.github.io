var mapview, mapimg;

function mapj_close() {
	mapview.style.display = 'none';
}

function mapj_loaded() {
	mapview.innerHTML = '<div id="map_close" onclick="mapj_close()">CLOSE</div><img src="' + mapimg.src
		+ '" width="' + mapimg.width + '" height="' + mapimg.height + '" onclick="mapj_close()">';
}

function fixmap(obj) {
	if(!mapview) {
		mapview = document.createElement('div');
		mapview.id = 'map_view';
		document.body.appendChild(mapview);
	}

	if(mapimg) delete mapimg;
	mapimg = new Image();

	mapimg.onload = mapj_loaded;
	mapimg.onerror = mapj_close;
	mapimg.src = obj.href;

	mapview.innerHTML = '<div id="map_loading">loading...</div>';
	mapview.style.display = 'block';

	return false;
}
