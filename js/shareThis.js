shareThis = function() {
	var currentUrl = encodeURIComponent(window.location.href);
	var currentTitle = encodeURIComponent(document.title);
	var fbText = '?u='+currentUrl+'&t='+currentTitle;
	var maxLength = 140 - (currentUrl.length + 1);
	
	if (currentTitle.length > maxLength) {
		currentTitle = currentTitle.substr(0, (maxLength - 3))+'...';
	};
	
	var fbShare = 'http://www.facebook.com/sharer.php'+fbText;
	var twtShare = 'http://twitter.com/home?status=Reading:%20'+currentTitle + ' ' + currentUrl;
	
	$('#fbShare').attr('href', fbShare);
	$('#twtShare').attr('href', twtShare);
};