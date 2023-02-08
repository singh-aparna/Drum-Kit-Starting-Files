//select length of buttons by selecting a buttons class (.drum) = 7
var numberOfButtons = document.querySelectorAll(".drum").length;

//To escape from selecting button one by one we will pick up a for loop to select buttons.
for (var i = 0; i < numberOfButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function()
    
    {
        //this keyword identity of a button
        var buttonInnerHTML = this.innerHTML;
        switch(buttonInnerHTML)
        {
            case "w":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();   
                break;
                console.log(buttonInnerHTML);  

            case "a":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();   
                break;
            
            case "s":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();   
                break;
                console.log(buttonInnerHTML);  

            case "d":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();   
                break;
                console.log(buttonInnerHTML);  
            
            case "j":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();   
                break;
                console.log(buttonInnerHTML);  
            case "k":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();   
                break;
                console.log(buttonInnerHTML);  
            case "l":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();  
                break;
                console.log(buttonInnerHTML);            
        }
        
    });
}


