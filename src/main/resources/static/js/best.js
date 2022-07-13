$(document).ready(function(){
        $.getJSON("/api/v1/best", function(result){
            let html ="";
            $.each(result, function(i, field){
                //$("div").append(field + " ");
                //console.log(field.menu);
               // console.log(field['price']);
                //console.log(field.img);
                html += "<h5>" + field.menu + "</h5>"
                html += "<h4>" + field.price + "</h4>"
                html += "<img src='" + field.img + "'>"
            });
            $("#bestmenu").html(html);
        });
});
