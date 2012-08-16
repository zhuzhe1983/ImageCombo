/**
 * User: Zhu Zhe
 * Date: 2012-08-16
 * Slove the problem of mutil image loading problem
 */
(function( $ ){
    $.fn.ImageCombo = function( options ) {

        if(this.length == 0){
            return;
        }

        var settings = $.extend( {
            'server':'http://10.62.131.139/jquery_plugin/ImageCombo/server/ImageCombo.php',
            'attr':'combo'
        }, options);

        var server = settings['server']+"?";
        var images = {};

        this.each(function(i,o) {
            var url = encodeURIComponent($(o).attr(settings['attr']));
            images[url] = true;
        });

        //console.log(images);

        for(var url in images){
            server += "&"+url;
        }

        //console.log(server);

        //TODO: optimize image search
        $.getScript(server, function(){
            for(var image in ImageCombo){
                //console.log($("img[combo='"+image+"']"));
                $("img[combo='"+image+"']").attr('src',ImageCombo[image]);
            }
        });

        return this;
    };
})( jQuery );