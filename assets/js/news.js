for (var i = 0; i < announce.length; i++) {
	var obj = announce[i];
	var date = obj.date;
	var poster = obj.poster;
	var msg = obj.msg;
	var ele = document.getElementById("announce");
	ele.innerHTML = ele.innerHTML + "<pre><div class='pull-left clearfix' style='margin-right: 20px;'><img src='http://cravatar.eu/helmavatar/" + poster + "/100.png' width='64' height='64' class='img-rounded' rel='tooltip' data-toggle='tooltip' data-placement='top' title='" + poster + "'><b>    </b></div><h2>" + poster + "</h2><p>" + msg + "</p></pre><br></br>"
}
