const lengthSlider = document.querySelector(".pass-length input"),

options = document.querySelectorAll(".Option input"),
copyIcon = document.querySelector(".input-box span")
passwordInput = document.querySelector(".input-box input"),
passIndicator = document.querySelector(".pass-indicator"),
generateBtn - document.querySelector(".generate-btn");

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$#*&;:+={{}}~"
};


const generatePassword = () => {
    let staticPassword = "",
    randomPassword = "",
    excludeDuplicate = false,
    passLength = lengthSlider.value;

    options.forEach((Option) => {
        if (Option.checked){
            if(Option.id == 'exc-duplicate' && Option.id == 'spaces'){
                staticPassword += characters[Option.id]
            }else if (Option.id == 'spaces'){
                staticPassword += ` $(staticPassword) ` 
            }else {
                excludeDuplicate =true
            }
        }
    }
    )
}
