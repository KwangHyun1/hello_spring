$(document).ready(function(){
        $.getJSON("/api/v1/best", function(result){
            $.each(result, function(i, field){
                //$("div").append(field + " ");
                console.log(field);
            });
        });
});
