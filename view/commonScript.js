/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


//test edit moh97\\
//looool :D\\
//test/test\\

//test edit moh97\\
//looool :D\\
//test/test\\

//test edit moh97\\
//looool :D\\
//test/test\\
function executeAjaxRequest(server, requestDate, successCallback, failureCallback) {

    jQuery.ajax({
        url: server,
        type: "POST",
        dataType: 'JSON',
        data: requestDate,
        success: successCallback,
        error:failureCallback
    });
}

function deleteVisit(res){
    if(res == "1")
        $(".message").text("تم حذف الزيارة بنجاح.");
    else{
        $(".message").text("لم يتم حذف الزيارة");
    }
//eshi\\
	console.log(res)
cosnole.log('alaa edit here');
}
function onError(request, status, error) {
    alert("Error: "+error);
}

var dayOfWeek , month, year ;

$(document).ready(function(){
    $("#time").timePicker({
        startTime: "08:00",  // Using string. Can take string or Date object.
        endTime: new Date(0, 0, 0, 15, 0, 0),  // Using Date object.
        show24Hours: false,
        separator:':',
        step: 30
    });
    $("input[name=search_date]").datepicker({
        dateFormat: 'yy-mm-dd',
        changeYear:true,
        changeMonth:true,
        firstDay: 1 // Start with Monday

    });

    $("input[name=date]").datepicker({
        dateFormat: 'yy-mm-dd',
        changeYear:true,
        changeMonth:true,
        firstDay: 1, // Start with Monday
        onSelect: function(dateText, inst) {
            var date = $(this).datepicker('getDate');

            var weekday=new Array(7);
            weekday[6]="الأحد";
            weekday[0]="الإثنين";
            weekday[1]="الثلاثاء";
            weekday[2]="الأربعاء";
            weekday[3]="الخميس";
            weekday[4]="الجمعة";
            weekday[5]="السبت";
            var dayOfWeek = weekday[date.getUTCDay()];
            $("input[name='day']").val(dayOfWeek);


        }
    });
    $(".allvistsTb a.delete").live('click',function(e){
        e.preventDefault();
        var visitDate = new Date($(this).parent().siblings(".date").html());
        //        var date = $(this).parent().siblings(".date").html();

        if(visitDate<new Date())
            alert("لا يمكن حذف زيارة انتهى موعدها.")
        else
        {
            var conf = confirm("هل انت متاكد من حذف الزيارة؟");
            if(conf == true)
            {
                var data={
                    "visit_id":$(this).parent().parent().attr("id")
                };
                executeAjaxRequest("/visits/delete",data,deleteVisit,onError);
                $("#"+$(this).parent().parent().attr("id")).remove();
            }
        }

    });

    if($(".visit-target").is(":checked")){
         $("input[name=search_target]").css(
                'background-color','white'
            );
    }

 if($(".visit-date").is(":checked")){
         $("input[name=search_date]").css(
                'background-color','white'
            );
    }

    //disable, enable visit date input
    $(".visit-date").click(function(){

        if($(this).is(":checked")){

            $("input[name=search_date]").removeAttr('disabled');
            $("input[name=search_date]").css(
                'background-color','white'
            );

        }else{
            $("input[name=search_date]").attr("disabled", "disabled");
             $("input[name=search_date]").css(
                'background-color','#ccc'
            );
        }
    });

   /* //disable, enable visit date input
    $(".visit-target").click(function(){

        if($(this).is(":checked")){

            $("input[name=search_target]").removeAttr('disabled');
            $("input[name=search_target]").css({
                'background-color':'white'
            });
        }else{
            $("input[name=search_target]").attr("disabled", "disabled");

             $("input[name=search_target]").css(
                'background-color','#ccc'
            );
        }
    });
*/

});

