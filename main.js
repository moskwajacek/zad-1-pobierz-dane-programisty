$(document).ready(function () {
    function getData() {

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {

            var divUser = document.createElement('div');
            divUser.id= 'dane-programisty';
            $(divUser).html(
            
                ' Imie: ' + data.imie + '<br> Nazwisko: ' + data.nazwisko + '<br> Zawod : ' + data.zawod + '<br> Miejsce pracy : ' + data.firma
            );

            $('body').append(divUser);
            
        });
    }

    $('#get-data').click(getData);
    
});
