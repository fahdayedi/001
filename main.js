var arabic = document.getElementById("arabic");
var english = document.getElementById("english");
var title_text = document.getElementById("title-text");
var welcome_text = document.getElementById("Welcome-text");
var about_text = document.getElementById("about-text");
var about_title = document.getElementById("about-title");
var text_button = document.getElementById("text-button");

arabic.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("lanug" ,"arabic")
    document.body.dir = "rtl" ;
    localStorage.setItem("Direction",document.body.dir = "rtl")
}

english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("lanug" ,"english")
    document.body.dir = "ltr" ;
    localStorage.setItem("Direction",document.body.dir = "ltr")
}
onload = ()=>{
    setLanugage(localStorage.getItem("lanug"))
    document.body.dir = localStorage.getItem("Direction") ;
};

function setLanugage(getLanugage){
    if(getLanugage === "arabic"){
        title = document.title = "فهد العيادي" ;
        title_text.innerHTML = "فهد العيادي" ;
        welcome_text.innerHTML = "مرحبا بكم في موقع فهد العيادي" ;
        about_text.innerHTML = "أنا طالب ومطور برامج" ;
        about_title.innerHTML = "معلومات عنا" ;
        text_button.innerHTML = "اتصل بنا" ;
    }else if(getLanugage === "english"){
        title_text.innerHTML = "FAHD AYEDI"
        welcome_text.innerHTML = "Welcome to website of Fahd ayedi";
        about_text.innerHTML = "I am a teacher and a Software Developer" ;
        about_title.innerHTML = "About US" ;
        text_button.innerHTML = "Contact us" ;
        title = document.title = "fahd ayedi" ;
    }
}