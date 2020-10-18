$("button").click(function() {
    let age = $(".age").val();
    let type = $(".type").val();
    
    if (age === 'Less than 21' && type === 'Funny') {
        $(".message").text("You're Michael Scott!!");  
        $(".message").css("display","flex");
         $(".message").css("justify-content","center");
        $(".message").append('<img src= "https://ghezalplusmovies.files.wordpress.com/2016/12/the-office-michael-ryan-gif.gif?w=245">');
        
    }
    if (age === 'Over 21' && type === 'Funny') {
        $(".message").text("You're Jim Halpert!!"); 
         $(".message").append('<img src= "https://i.imgur.com/8AGgDKT.gif">');
    }
    if (age === 'Less than 21' && type === 'Passionate') {
        $(".message").text("You're Dwight Schrute!!"); 
         $(".message").append('<img src= "https://media2.giphy.com/media/134DVXcD94sOWI/giphy.webp?cid=ecf05e47rvbdh7h2fp9zggqfo0bmn9honiehf95yi1jbgt3o&rid=giphy.webp">');
    }
    if (age === 'Over 21' && type === 'Passionate') {
        $(".message").text("You're Pam Beesly"); 
         $(".message").append('<img src= "https://media.tenor.com/images/5f59a741e0d328ee78282a7986347633/tenor.gif">');
    }
    
});