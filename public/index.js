$(document).ready(function(){
    $('#login').click(function (){
        console.log('sono stato clicatto')
        let data = 'ciao'
        $.ajax({
            type: "POST",
            url: '/schifo',
            data: data,
          // contentType: 'application/x-www-form-urlencoded',
          contentType: 'application/json',
            success: function (answer){
                console.log('it worked sono succ', answer)
                console.log (typeof answer)
                if (typeof answer === 'object'){
                    if (answer.msg === 'done'){
                        window.location.href = 'login.html';


                    }
                }
               
            },
            error: function (){
                console.log('nope, it didnt work sono err' )
            } 
    }) 
    })

    $('#register').click(function (){
        
    })
})