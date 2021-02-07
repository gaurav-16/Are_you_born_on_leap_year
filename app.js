var inpName = document.querySelector("#inp-name")
var inpDate = document.querySelector("#inp-date")
var btnCheck = document.querySelector("#btn-check")
var otpText = document.querySelector("#otp-text")

btnCheck.addEventListener("click", function clickHandler(){
    var userData = new Date (inpDate.value)
    var year = userData.getFullYear();
    if (isNaN(year)){
        otpText.innerText = "Enter valid input."
    } else {
        if ((year%4==0)&&(year%100!=0)||(year%400==0)){
            otpText.innerText = `Congratlations! ${inpName.value} you were born on a leap year🥳`
        } else {
            otpText.innerText = `Oops... ${inpName.value} your birthyear is not a leap year.`
        }
    }
})
