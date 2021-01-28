
function expandImage(img){

}

function clicked(){

    emailValue = document.getElementById("email").value;
    if(emailIsValid(emailValue))
    {
        alert("Email successfully recorded.");
    }
    else
    {
        alert("”Invalid email address.");
    }
}


// This function comes from https://ui.dev/validate-email-address-javascript/
function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}


document.querySelector("img").addEventListener("click", expandImage(Image));

