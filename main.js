$(document).ready(function(){
    $("#submit").click(function(){
        alert($('form').serialize());
    });

    $.get('https://restcountries.eu/rest/v2/all',
      function (data, textStatus, jqXHR) { 
        $("#country1").each(function(){
            data.forEach(dt => {
                $(this).prepend(`<option value=${dt.callingCodes[0]} >${dt.name} </option>`);
            });
        });
        $("#country2").each(function(){
            data.forEach(dt => {
                $(this).prepend(`<option value=${dt.callingCodes[0]} >${dt.name} </option>`);
            });
        });
        $("#provincie").each(function(){
            data.forEach(dt => {
                $(this).prepend(`<option value=${dt.capital} >${dt.capital} </option>`);
            });
        });
    });

    $("#day").each(function(){

        for(i=1;i<32;i++){
            $(this).prepend(`<option value=${i} >${i} </option>`);
        }
    });

    $('#country1').on('change', function() {
        $('#number').empty();
        $('#number').append('+'+this.value);
    });
});