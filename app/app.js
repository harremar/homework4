function addModalListener(){
    $(".bg-click").click(function(e) {
        // $(".modal").css("display", "none");
        gsap.to($(".modal"), { scale : 0, duration: 0, onComplete: showAlert});
    });
}

function route(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#/", "");


    if (pageID == "") {
        MODEL.getMyContent("home");
    }
    else {
        MODEL.getMyContent(pageID);
    }
}

function initListeners(){

    $(window).on("hashchange", route);
    route();

    $("#submit").click(function(e){
        e.preventDefault();

        let text = $("#email-text").val();
        gsap.to($(".modal"), { scale : 0, duration: 0, onComplete: showAlert, onCompleteParams: [text]});

        let text2 = $("#password-text").val();
        gsap.to($(".modal"), { scale : 0, duration: 0, onComplete: showAlert2, onCompleteParams: [text2]});

        $(".btn").css("display", "none");
        console.log("you are signed in")
    });

    

    $("#loginModal").click(function(e){
        // $("body").append(`<div class="modal">
        // <div class="bg-click"></div>
        // <div class="callout"></div>
        // </div>`)

        // $(".modal").css("display", "flex");
        gsap.to($(".modal"), { ease: "ease.out" ,  scale : 1 , duration: 1});
        addModalListener();
    });

    $("#signinModal").click(function(e){
        // $("body").append(`<div class="modal">
        // <div class="bg-click"></div>
        // <div class="callout"></div>
        // </div>`)

        // $(".modal").css("display", "flex");
        gsap.to($(".modal2"), { ease: "ease.out" ,  scale : 1 , duration: 1});
        addModalListener();
    });

}



function showAlert(info) {
    console.log("Email: " + info);
    $("#email-text").val("");
}
function showAlert2(info2) {
    console.log("Password: " + info2);
    $("#password-text").val("");
}

$(document).ready(function(){
    gsap.set($(".modal"), { scale : 0});
    initListeners();
    
});

