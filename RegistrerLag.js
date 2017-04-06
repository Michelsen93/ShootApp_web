/**
 * Created by Sindre on 27.03.2017.
 */


$('#myTable').on('click', '.clickable-row', function(event) {
    $(this).addClass('active').siblings().removeClass('active');
});

$('#myTable').on('click', '.clickable-row', function(event) {
    if($(this).hasClass('active')){
        $(this).removeClass('active');
    } else {
        $(this).addClass('active').siblings().removeClass('active');
    }
});

