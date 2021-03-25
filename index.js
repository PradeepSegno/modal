$(document).ready(function () {

    // modal-1 starts here 

    $('#primary').click(function () {
        $('#Modal_1').modal('show');
        $('#form_1').keypress(function (e) {
            if (e.which == 13) {
                var name = $('#heading').val();
                window.localStorage.setItem('heading', name);
                var val = window.localStorage.getItem('heading');
                $('#h1').html(val);
                $('#Modal_1').modal('hide');
                $('#form_1').submit();
            }
        });
        $('#submit').click(function () {
            // var allNames = [];
            // var name = $('#heading').val();
            // allNames.push(name);
            // console.log(allNames)
            // window.localStorage.setItem('heading', JSON.stringify(allNames));
            // $('#Modal_1').modal('hide');
            // for (i = 0; i <= allNames.length; i++) {
            //     var val = JSON.parse(window.localStorage.getItem('heading'));
            // }

            // $('#h1').html(val);
            // $('#form_1').submit();
            // var toAdd = $('input[id=heading]').val();
            // var lst = $('.list').append("<div class='item'>" + toAdd + "</div>");


            var name = $('#heading').val();
            window.localStorage.setItem('heading', name);
            var val = window.localStorage.getItem('heading');
            $('#h1').html(val);
            $('#Modal_1').modal('hide');
        });
    });

    // modal-1 ends here 

    // modal-2 starts here 
    $('#secondary').click(function () {
        $('#Modal_2').modal('show');
        // var resultData = window.localStorage.content;
        $('#select_heading_1').html(window.localStorage.getItem('heading'));
        $('#form_2').keypress(function (e) {
            if (e.which == 13) {
                var subname = $('#sub-heading').val();
                window.localStorage.setItem('heading2', subname);
                $('#Modal_2').modal('hide');
                var val = window.localStorage.getItem('heading2');
                $('#h2').html(val);
                $('#form_2').submit();
            }
        });

        $('#submit2').click(function () {
            var subname = $('#sub-heading').val();

            window.localStorage.setItem('heading2', subname);
            $('#Modal_2').modal('hide');
            var val = window.localStorage.getItem('heading2');
            $('#h2').html(val);
        });

        // $('#submit2').click(function () {
        //     var subname = $('#sub-heading').val();

        //     window.localStorage.setItem('heading2', subname);
        //     $('#Modal_2').modal('hide');
        //     var val = window.localStorage.getItem('heading2');
        //     $('#h2').html(val);
        // });
    });
    // modal-2 ends here 

    // modal-3 starts here 
    $('#third').click(function () {
        $('#Modal_3').modal('show');
        $('#select_heading_again_1').html(window.localStorage.getItem('heading'));
        $('#select_subheading_1').html(window.localStorage.getItem('heading2'));
        $('#form_select').on('change', function () {
            var selection = $(this).val();
            if (selection == '1') {
                $('#form_3').keypress(function (e) {
                    if (e.which == 13) {
                        var selValue = $("input[type='radio']:checked").val();
                        window.localStorage.setItem('kradio', selValue);
                        var val1 = window.localStorage.getItem('kradio');
                        $('#radio').html(val1);
                    }
                });
                $("#submit3").click(function () {
                    var selValue = $("input[type='radio']:checked").val();
                    window.localStorage.setItem('kradio', selValue);
                    var val1 = window.localStorage.getItem('kradio');
                    $('#radio').html(val1);
                });
                $('#dropselect').hide();
            }
            else if (selection == '2') {
                $('#form_3').keypress(function (e) {
                    if (e.which == 13) {
                        var dvalue = $('#dropselect').val();
                        window.localStorage.setItem('kdrop', dvalue);
                        var val2 = window.localStorage.getItem('kdrop');
                        $('#dropdown').html(val2);
                    }
                });
                $('#submit3').click(function () {
                    var dvalue = $('#dropselect').val();
                    window.localStorage.setItem('kdrop', dvalue);
                    var val2 = window.localStorage.getItem('kdrop');
                    $('#dropdown').html(val2);
                });
                $('#radioselect').hide();
            };
        });
        $('#form_3').keypress(function (e) {
            if (e.which == 13) {
                var content = $('#content').val();
                // var msg = $('#message-text').val();
                window.localStorage.setItem('text', content);
                // document.getElementById('p1').innerHTML = msg;
                $('#Modal_3').modal('hide');
                var val3 = window.localStorage.getItem('text');
                $('#h3').html(val3);
            }
        });
        $('#submit3').click(function () {
            var content = $('#content').val();
            // var msg = $('#message-text').val();
            window.localStorage.setItem('text', content);
            // document.getElementById('p1').innerHTML = msg;
            $('#Modal_3').modal('hide');
            var val3 = window.localStorage.getItem('text');
            $('#h3').html(val3);
        });
    });
    // modal-3 ends here 

    // drag and drop starts here 
    $(function () {
        $("#h2").draggable();
        $("#drop").droppable({
            drop: function (event, ui) {
                $(this)
                    .addClass("ui-state-highlight")
                    .find("p")
                    .html("Dropped!");
            }
        });
    });
    // drag and drop ends here 

    // remove functions start here 
    $("#removeh1").click(function () {
        localStorage.removeItem('heading');
    });
    $("#removeh2").click(function () {
        localStorage.removeItem('heading2');
    });
    $("#removeh3").click(function () {
        localStorage.removeItem('text');
    });
    $("#removehradio").click(function () {
        localStorage.removeItem('kradio');
    });
    $("#removedropdown").click(function () {
        localStorage.removeItem('kdrop');
    });
    // remove functions end here 

    // home page values start here
    document.getElementById('h1').innerHTML = window.localStorage.getItem('heading');
    document.getElementById('h2').innerHTML = window.localStorage.getItem('heading2');
    document.getElementById('radio').innerHTML = window.localStorage.getItem('kradio');
    document.getElementById('dropdown').innerHTML = window.localStorage.getItem('kdrop');
    document.getElementById('h3').innerHTML = window.localStorage.getItem('text');
    // home page values ends here 
});


