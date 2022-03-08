$(document).ready(function(){
    $('h1').click(function(){
        alert('this is a header');
    })
    $('p').click(function(){
        alert('this is a paragrapgh');
    })
    $('img').click(function(){
        alert('this is an image');
    }
    )
    $('h2').click(function(){
        $('.image2').show();
    }
    )
    $('h3').click(function(){
        $('#hide').hide();
        $('#show').show();
    }
    )
});
