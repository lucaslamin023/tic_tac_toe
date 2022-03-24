$('document').ready(function() {
    // inicio do jogo
    $('.start-btn').click(function() {
        $('#start').addClass('hide')
        $('#game').removeClass('hide')
    })

    // troca dos botões de seleção
    $('.mark-select').click(function() {
        if ($(this).attr('id') === 'x-select') {
            $('#x-select').addClass('selected');
            $('#o-select').removeClass('selected');
        }
        else {
            $('#o-select').addClass('selected');
            $('#x-select').removeClass('selected');
        }
    })

    // restart-game 
    $('#restart-btn').click(function() {
        $('#game').addClass('hide')
        $('#start').removeClass('hide')
    })
})