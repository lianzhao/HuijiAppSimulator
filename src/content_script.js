;(function () {
    $('a').click(function(evt){
        evt.preventDefault();
        var url = evt.target.href;
        console.log(url);
        var newurl = url.replace(/huiji.wiki\/wiki\/(%|\w|)*(\?)?/, "$1?action=render&");
        console.log(newurl);
        window.location.href = newurl;
    });
})();