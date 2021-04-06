$(document).ready(function () {
    // $('#exampleModal_1').on('keypress', function (e) {
    //     if (e.which === 13) {
    //         var heading = $('.input_1').val();
    //         $('main').append($('<div><h1>' + heading + '<button type="button" style="font-size:10px; border-radius:50%; color:grey; border:none;" onclick="myFunction(this)">X</button></h1></div>'));

    //         $('.heading_1 option').remove()
    //         $('.heading-input option').remove()
    //         $('.heading_1').append('<option value=select heading>select heading</option>');
    //         $('.heading-input').append('<option value=select heading>select heading</option>');
    //         $('main div h1').each(function (index) {
    //             var heading1 = $(this).text()
    //             index = index + 1
    //             $('.heading_1').append('<option value="' + index + '">' + heading1 + '</option>');
    //             $('.heading-input').append('<option value="' + index + '">' + heading1 + '</option>');
    //         });

    //         $('.heading_1_form')[0].reset();
    //         e.preventDefault();
    //         // $('.heading_1_form').submit();
    //         $('.submit_1').click();
    //     }
    // })
    $('.heading_1_form').submit(function (event) {
        event.preventDefault();
        var heading = $('.input_1').val();
        $('main').append($('<div><h1>' + heading + '<button type="button" class="btn-close" onclick="myFunction(this)"></button></h1></div>'));

        $('.heading_1 option').remove()
        $('.heading-input option').remove()
        $('.heading_1').append('<option value=select heading>select heading</option>');
        $('.heading-input').append('<option value=select heading>select heading</option>');
        $('main div h1').each(function (index) {
            var heading1 = $(this).text()
            index = index + 1
            $('.heading_1').append('<option value="' + index + '">' + heading1 + '</option>');
            $('.heading-input').append('<option value="' + index + '">' + heading1 + '</option>');
        });

        $('.heading_1_form')[0].reset();


    });
    $('.heading_2_form').submit(function (event) {
        event.preventDefault();
        var sub_heading = $('.input_2').val();
        var heading_index = $('.heading_1').val()
        // var ccc = parseInt(heading_index) + 1

        $('main div:nth-child(' + heading_index + ') h1').append('<div style="padding:10px"><h2>' + sub_heading + '<button type="button" class="btn-close" onclick="myFunction(this)"></button></h2></div>');

        $('.heading_2_form')[0].reset();
        // $('#exampleModal_2').modal('hide');
    });




    $('.heading-input').change(function () {
        $('.heading-input_2 option').remove();
        $('.heading-input_2').append('<option value=select sub_heading>select sub_heading</option>');
        var fdn = $('.heading-input').val();
        // var ddd = fdn + 1
        // console.log("index:" + ddd)
        $('main div:nth-child(' + fdn + ') h2').each(function (index) {
            var this_value = $(this).text();
            index = index + 1
            $('.heading-input_2').append('<option value="' + index + '">' + this_value + '</option>');

        });

    });

    $('.heading_3_form').submit(function (event) {

        event.preventDefault();
        var input_value = $('.input_class').val();

        var label = $('.label').val();
        var clas = $('.clas').val();
        var value = $('.value').val();
        var placeholder = $('.placeholder').val();
        var option = $('.option').val();
        var fdn = $('.heading-input').val();
        var eee = $('.heading-input_2').val()
        var ddd = parseInt(eee) + 1
        console.log(fdn, '11111111111', ddd)



        if (input_value == 'Radio') {
            var arr = $('.option').val().split(",");
            var f1 = $('<p style="padding:10px">' + '<button type="button" class="btn-close" onclick="myFunction(this)"></button></p>');
            $.each(arr, function (i) {
                $('<input type="' + input_value + '" value="' + arr[i] + '"> <label>' + arr[i] + '</label><br />').appendTo(f1);
            });
            $('main div:nth-child(' + fdn + ') div:nth-child(' + ddd + ') h2').append(f1);
        }

        else if (input_value == 'select') {

            var arr1 = $('.option').val().split(",");
            var A = $('<p style="padding:10px"><label>' + label + '</label><button type="button" class="btn-close" onclick="myFunction(this)"></button></p>');
            var B = $('<select class="' + clas + '">' + '<option value=select a value>select a value</option>' + '</select>').appendTo(A);
            $.each(arr1, function (i) {
                B.append('<option>' + arr1[i] + '</option>');
                // '<p><select type="' + input_value + '" class="' + clas + '"> <option value="' + arr1[i] + '" > ' + arr1[i] + '</option></select></p>'
            });
            $('main div:nth-child(' + fdn + ') div:nth-child(' + ddd + ') h2').append(A);

        }

        else if (input_value == 'Textarea') {
            $('main div:nth-child(' + fdn + ')').append('<p><label>' + label + ':' + '</label>' + '<textarea type="' + input_value + '"' + ' class = "' + clas + '"' + ' placeholder="' + placeholder + '"' + '></textarea><button type="button" class="btn-close" onclick="myFunction(this)"></button></p>')
        }
        else if (input_value == 'checkbox') {
            var arr2 = $('.option').val().split(",");
            var g1 = $('<p style="padding:10px">' + '<button type="button" class="btn-close" onclick="myFunction(this)"></button></p>');
            $.each(arr2, function (i) {
                $('<input type="' + input_value + '" value="' + arr2[i] + '"> <label>' + arr2[i] + '</label><br />').appendTo(g1);
                // $('main div:nth-child(' + ddd + ')').append('<p><input type="' + input_value + '"' + ' value="' + value + '"' + '>' + '<label>' + arr2[i] + '</label>' + '</p>').text();
            });
            $('main div:nth-child(' + fdn + ') div:nth-child(' + ddd + ') h2').append(g1);

        }
        else {
            $('main div:nth-child(' + fdn + ') div:nth-child(' + ddd + ') h2').append('<p style="padding:10px">' + '<label>' + label + ' : ' + '</label>' + '<input type="' + input_value + '"' + ' class="' + clas + '"' + 'placeholder="' + placeholder + '"' + 'value="' + value + '"' + '>' + '<button type="button" class="btn-close" onclick="myFunction(this)"></button></p>');
        }

        $('.heading_3_form')[0].reset();
        // $('#exampleModal_3').modal('hide');
    });





    // $('.cross-button').on('click', function (index) {
    //     $('main div:nth-child(' + index + ')').remove();
    // })
});

function myFunction(el) {
    var element = el;
    element.parentNode.remove();
}

function ymFunction(el) {
    var element = el;
    element.remove();
}