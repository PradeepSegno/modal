$(document).ready(function () {
    var arr_local = []
    if (localStorage.getItem('arr_local')) {
        var returnObjName = JSON.parse(localStorage.getItem('arr_local'));
        $(returnObjName).each(function (key, val) {
            var key = key + 1;
            $('main').append($('<section><h1>' + val['heading'] + '<button type="button" class="btn-close" onclick="myFunction(this)"></button></h1></section>'));

            $('.heading_1').append('<option value="' + key + '">' + val['heading'] + '</option>');
            $('.heading-input').append('<option value="' + key + '">' + val['heading'] + '</option>');
            $(val['sub_arr']).each(function (key1, value1) {
                $('main section:nth-child(' + key + ')').append('<div style="padding:10px"><h2>' + value1['subheading'] + '<button type="button" class="btn-close" onclick="myFunction(this)"></button></h2></div>');
                $(value1['form']).each(function (key2, value2) {
                    var label = value2['label']
                    var input_value = value2['input_value']
                    var clas = value2['class']
                    var placeholder = value2['placeholder']
                    var value = value2['value']
                    var keyf = key1 + 1;
                    // console.log(input_value, 'rrr')
                    // console.log(value2[1])
                    // console.log(value2['option'], 'arroption')
                    if (input_value == 'Radio') {
                        var arr = value2['option']
                        // console.log(arr, 'apna')
                        var f1 = $('<p style="padding:10px">' + '<button type="button" class="btn-close" onclick="myFunction(this)"></button></p>');
                        $.each(arr, function (i) {
                            $('<input type="' + input_value + '" value="' + arr[i] + '"> <label>' + arr[i] + '</label><br />').appendTo(f1);
                        });
                        $('main section:nth-child(' + key + ') div:nth-child(' + parseInt(key + 1) + ') ').append(f1);
                    }
                    else if (input_value == 'select') {
                        var arr1 = value2['option']
                        var A = $('<p style="padding:10px"><button type="button" class="btn-close" onclick="myFunction(this)"></button></p>');
                        var B = $('<select class="' + clas + '">' + '<option value=select a value>select a value</option>' + '</select>').appendTo(A);
                        $.each(arr1, function (i) {
                            B.append('<option>' + arr1[i] + '</option>');
                        });
                        $('main section:nth-child(' + key + ') div:nth-child(' + parseInt(key + 1) + ') ').append(A);
                    }
                    else if (input_value == 'Textarea') {
                        $('main section:nth-child(' + key + ')').append('<p><label>' + label + ':' + '</label>' + '<textarea type="' + input_value + '"' + ' class = "' + clas + '"' + ' placeholder="' + placeholder + '"' + '></textarea><button type="button" class="btn-close" onclick="myFunction(this)"></button></p>')

                    }
                    else if (input_value == 'checkbox') {
                        var arr2 = value2['option']
                        var g1 = $('<p style="padding:10px">' + '<button type="button" class="btn-close" onclick="myFunction(this)"></button></p>');
                        $.each(arr2, function (i) {
                            $('<input type="' + input_value + '" value="' + arr2[i] + '"> <label>' + arr2[i] + '</label><br />').appendTo(g1);
                        });
                        $('main section:nth-child(' + key + ') div:nth-child(' + parseInt(key + 1) + ') ').append(g1);
                    }
                    else {
                        $('main section:nth-child(' + key + ') div:nth-child(' + parseInt(key + 1) + ') ').append('<p style="padding:10px">' + '<label class="label">' + label + ' : ' + '</label>' + '<input type="' + input_value + '"' + ' class="' + clas + '"' + 'placeholder="' + placeholder + '"' + 'value="' + value + '"' + '>' + '<button type="button" class="btn-close" onclick="myFunction(this)"></button></p>');

                    }
                    // $('main section:nth-child(' + key + ') div:nth-child(' + parseInt(key + 1) + ') ').append('<p style="padding:10px">' + '<label class="label">' + label + ' : ' + '</label>' + '<input type="' + input_value + '"' + ' class="' + clas + '"' + 'placeholder="' + placeholder + '"' + 'value="' + value + '"' + '>' + '<button type="button" class="btn-close" onclick="myFunction(this)"></button></p>');

                })
            })
        })
    };


    $('.heading_1_form').submit(function (event) {
        event.preventDefault();
        var heading = $('.input_1').val();
        arr_local.push({ 'heading': heading, 'sub_arr': [] })
        $('main').append($('<section><h1>' + heading + '<button type="button" class="btn-close" onclick="myFunction(this)"></button></h1></section>'));
        $('.heading_1 option').remove()
        $('.heading-input option').remove()
        $('.heading_1').append('<option value=select heading>select heading</option>');
        $('.heading-input').append('<option value=select heading>select heading</option>');
        $('main section h1').each(function (index) {
            var heading1 = $(this).text()
            index = index + 1
            $('.heading_1').append('<option value="' + index + '">' + heading1 + '</option>');
            $('.heading-input').append('<option value="' + index + '">' + heading1 + '</option>');
        });
        $('.heading_1_form')[0].reset();
        localFunction()
        // $('#exampleModal_1').modal('hide');
    });
    $('.heading_2_form').submit(function (event) {
        event.preventDefault();
        var sub_heading = $('.input_2').val();
        var heading_index = $('.heading_1').val()
        $('main section:nth-child(' + heading_index + ')').append('<div style="padding:10px"><h2>' + sub_heading + '<button type="button" class="btn-close" onclick="myFunction(this)"></button></h2></div>');
        arr_local[heading_index - 1].sub_arr.push({ 'subheading': sub_heading, 'form': [] })
        $('.heading_2_form')[0].reset();
        localFunction()
        $('#exampleModal_2').modal('hide');
    });
    $('.heading-input').change(function () {
        $('.heading-input_2 option').remove();
        $('.heading-input_2').append('<option value=select sub_heading>select sub_heading</option>');
        var fdn = $('.heading-input').val();
        $('main section:nth-child(' + fdn + ') h2').each(function (index) {
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
        if (input_value == 'Radio') {
            var arr = $('.option').val().split(",");
            var f1 = $('<p style="padding:10px">' + '<button type="button" class="btn-close" onclick="myFunction(this)"></button></p>');
            $.each(arr, function (i) {
                $('<input type="' + input_value + '" value="' + arr[i] + '"> <label>' + arr[i] + '</label><br />').appendTo(f1);

            });
            arr_local[fdn - 1].sub_arr[eee - 1].form.push({ 'option': arr, 'input_value': input_value })
            // arr_local.push({ 'option': arr })

            $('main section:nth-child(' + fdn + ') div:nth-child(' + ddd + ') ').append(f1);
        }
        else if (input_value == 'select') {
            var arr1 = $('.option').val().split(",");
            var A = $('<p style="padding:10px"><label>' + label + '</label><button type="button" class="btn-close" onclick="myFunction(this)"></button></p>');
            var B = $('<select class="' + clas + '">' + '<option value=select a value>select a value</option>' + '</select>').appendTo(A);
            $.each(arr1, function (i) {
                B.append('<option>' + arr1[i] + '</option>');

                // '<p><select type="' + input_value + '" class="' + clas + '"> <option value="' + arr1[i] + '" > ' + arr1[i] + '</option></select></p>'
            });
            arr_local[fdn - 1].sub_arr[eee - 1].form.push({ 'option': arr1, 'input_value': input_value })
            // arr_local.push({ 'option': arr[i] })

            $('main section:nth-child(' + fdn + ') div:nth-child(' + ddd + ') ').append(A);
        }
        else if (input_value == 'Textarea') {
            $('main section:nth-child(' + fdn + ')').append('<p><label>' + label + ':' + '</label>' + '<textarea type="' + input_value + '"' + ' class = "' + clas + '"' + ' placeholder="' + placeholder + '"' + '></textarea><button type="button" class="btn-close" onclick="myFunction(this)"></button></p>')
            // arr_local.push({ 'option': arr[i] })
            arr_local[fdn - 1].sub_arr[eee - 1].form.push({ 'label': label, 'input_value': input_value, 'class': clas, 'placeholder': placeholder })

        }
        else if (input_value == 'checkbox') {
            var arr2 = $('.option').val().split(",");
            var g1 = $('<p style="padding:10px">' + '<button type="button" class="btn-close" onclick="myFunction(this)"></button></p>');
            $.each(arr2, function (i) {
                $('<input type="' + input_value + '" value="' + arr2[i] + '"> <label>' + arr2[i] + '</label><br />').appendTo(g1);

                // $('main div:nth-child(' + ddd + ')').append('<p><input type="' + input_value + '"' + ' value="' + value + '"' + '>' + '<label>' + arr2[i] + '</label>' + '</p>').text();
            });
            arr_local[fdn - 1].sub_arr[eee - 1].form.push({ 'option': arr2, 'input_value': input_value })
            // arr_local.push({ 'option': arr[i] })

            $('main section:nth-child(' + fdn + ') div:nth-child(' + ddd + ') ').append(g1);
        }
        else {
            $('main section:nth-child(' + fdn + ') div:nth-child(' + ddd + ') ').append('<p style="padding:10px">' + '<label class="label">' + label + ' : ' + '</label>' + '<input type="' + input_value + '"' + ' class="' + clas + '"' + 'placeholder="' + placeholder + '"' + 'value="' + value + '"' + '>' + '<button type="button" class="btn-close" onclick="myFunction(this)"></button></p>');
            // arr_local.push({ 'label': label, 'input_value': input_value, 'class': clas, 'placeholder': placeholder, 'value': value })
            arr_local[fdn - 1].sub_arr[eee - 1].form.push({ 'label': label, 'input_value': input_value, 'class': clas, 'placeholder': placeholder, 'value': value })

        }
        $('.heading_3_form')[0].reset();
        localFunction()
        $('#exampleModal_3').modal('hide');
        // window.localStorage.setItem('all_values', JSON.stringify(arr_local));
    });
    function localFunction() {
        //     var arr_local = []
        //     $('main section h1').each(function (index) {
        //         var heading_text = $(this).text();
        //         index = index + 1
        //         arr_local.push({ 'heading': heading_text, 'subheading_arr': [] });
        //         $('main section:nth-child(' + index + ') div h2').each(function (index1) {
        //             index1 = index1 + 1
        //             
        //             var subheading_text = $(this).text();
        //             arr_local[index - 1].subheading_arr.push({ 'subheading_key': subheading_text, 'form': [] });
        //             $('main section:nth-child(' + index + ') div:nth-child(' + index1 + ') p ').each(function (index2) {
        //                 index2 = index2 + 1
        //                 var label_1 = $(this).text();
        //                 
        //                 arr_local[index - 1].subheading_arr[index - 1].form.push({ 'label': label_1, 'option': [] })
        //                 // index2 = index2 + 1
        //             });
        //             // index1 = index1 + 1
        //         });
        //         // index = index + 1
        //     });
        window.localStorage.setItem('arr_local', JSON.stringify(arr_local));
        // 
        // var head = window.localStorage.getItem('heading_text')
        // $.each(head, function () {

        // })



    }


});



function myFunction(el) {
    // var element = el;
    el.parentNode.parentNode.parentNode.removeChild(el.parentNode.parentNode);
}
function ymFunction(el) {
    var element = el;
    element.remove();
}

// [0].subheading_arr[0].form
// [0].subheading_arr[1].form
// [1].subheading_arr[0].form
// [1].subheading_arr[1].form