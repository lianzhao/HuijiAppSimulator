;(function () {
    $('a').click(function(evt){
        evt.preventDefault();
        var url = evt.target.href;
        console.log(url);
        var matches = url.match(/huiji.wiki\/wiki\/(%|\w|)*(\?)?/);
        var newurl = url.replace(matches[0], matches[0]+"?action=render&");
        console.log(newurl);
        window.location.href = newurl;
    });
})();