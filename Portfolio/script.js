/*  window.onload = function(){
    const btn =document.getElementById("sayHiBtn");

btn.addEventListener("mouseover" ,function(){
    btn.style.backgroundColor="hotpink";
})

btn.addEventListener("mouseout" , function(){
    btn.style.backgroundColor = "rgba(36, 35, 35, 0.334)";
})
console.log("JS is working!");

const cards= document.querySelectorAll(".card")

cards.forEach(element => {
    element.addEventListener('mouseover' ,function(){
        element.style.transform = 'scale(1.05)';
    })
    
});

cards.forEach(element => {
    element.addEventListener('mouseout' ,function(){
        element.style.transform = 'scale(1)'
    })
})

} 
 */
 window.onload = function(){
    
    try {
        const btn = document.getElementById("sayHiBtn");

        if (btn) {
            btn.addEventListener("mouseover" ,function(){
                btn.style.backgroundColor = "hotpink";
            });

            btn.addEventListener("mouseout" , function(){
                btn.style.backgroundColor = "rgba(36, 35, 35, 0.334)";
            });
        } else {
            console.log("Button with id 'sayHiBtn' not found.");
        }

        const sendBtn = document.getElementById("send-message-btn")

        if(sendBtn){
            sendBtn.addEventListener('mouseover' ,function(){
                sendBtn.style.backgroundColor ="hotpink"

                sendBtn.addEventListener("mouseout" , function(){
                sendBtn.style.backgroundColor = "rgba(36, 35, 35, 0.334)";
            });

            });
        } else {
           console.log("Button with id 'sayHiBtn' not found.");
        }

        const cards = document.querySelectorAll(".card");

        if (cards.length === 0) {
            console.log("No elements with class 'card' found.");
        }

        cards.forEach(element => {
            element.addEventListener('mouseover' ,function(){
                element.style.transform = 'scale(1.05)';
            });

            element.addEventListener('mouseout' ,function(){
                element.style.transform = 'scale(1)';
            });
        });

    } catch (err) {
        console.error("Error inside window.onload:", err);
    }
};
 