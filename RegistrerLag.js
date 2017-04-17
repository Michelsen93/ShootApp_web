/**
 * Created by Sindre on 27.03.2017.
 * Denne kan vi vel bare fjerne egentlig? Er ikke sikker på hva jeg har gjort her selv..
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

