var main = {
    init : function () {
        var _this = this;
        $('#btn-update').on('click', function () {
            _this.update();
        })
    },
    update : function () {
        var data = {
            menu : $("#menu").val(),
            price : $("#price").val(),
            img : $("#img").val(),
        };
        var id = $("#id").val();

        $.ajax({
            type : 'POST',
            url : '/api/v1/insert',
            dataType : 'json',
            contentType : 'application/json; charset=utf-8',
            data : JSON.stringify(data)
        }).done(function () {
            alert('글이 수정되었습니다.');
            window.location.href = '/see';
        }).fail(function (error) {
            alert(JSON.stringify(error));
        })
    }
};

main.init();