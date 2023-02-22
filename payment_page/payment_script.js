const jsonFile = JSON.parse(sessionStorage.getItem('package_info.json'))
const package = jsonFile.package

const oldPriceField = document.getElementById('regular-price')
const oldPriceText = document.getElementById("ptag")
const discountTag = document.getElementById('dicount-sign')
const realPriceField = document.getElementById('total-price') 
const packageTitle = document.getElementById('package-name')

discountTag.innerText = '-'+package.sale+'%'
oldPriceText.innerText = '$'+package.price
realPriceField.innerText = '$'+package.realPrice
packageTitle.innerText = package.name

const paymentExpand = document.getElementById('payment-expandselector')
const nextPaymentStageBtn = document.getElementById('checkout-btn')
const dropDownMenu = document.querySelector('.dropdown-menu')
const backToMainBtn = document.querySelector('.backto-mainpage-btn')

let isPaymentExpanded = false
paymentExpand.addEventListener('click', ()=>{
    if(!isPaymentExpanded){
        dropDownMenu.style.visibility = 'visible'
        isPaymentExpanded=true
    }
    else {
        dropDownMenu.style.visibility = 'collapse'
        isPaymentExpanded=false
    }
})
nextPaymentStageBtn.addEventListener('click', ()=>{
    if(isPaymentSelected){
        document.getElementById('error-msg').style.visibility = 'hidden'
        document.getElementById('select-payment').style.borderColor = 'green'
        nextPaymentStageBtn.style.borderColor = 'green'
        nextPaymentStageBtn.style.color = 'green'
    }
    else{
        document.getElementById('error-msg').style.visibility = 'visible'
        document.getElementById('select-payment').style.borderColor = 'red'
        nextPaymentStageBtn.style.borderColor = 'red'
        nextPaymentStageBtn.style.color = 'red'
    }
})
backToMainBtn.addEventListener('click', ()=>{
    location.href='/index.html'
})

let paymentMethod = ''
let isPaymentSelected = false
const paypalbtn = document.getElementById('paypal')
const visabtn = document.getElementById('visa')
const mastercardbtn = document.getElementById('mastercard')
const moneybtn1 = document.getElementById('money1')
const moneybtn2 = document.getElementById('money2')
const moneybtn3 = document.getElementById('money3')
const paymentTextField = document.getElementById('payment-ptag')

paypalbtn.addEventListener('click', ()=>{
    paymentTextField.innerText = 'PayPal'
    paymentMethod='PayPal'
    isPaymentSelected = true
    dropDownMenu.style.visibility = 'collapse'
    isPaymentExpanded=false
})
visabtn.addEventListener('click', ()=>{
    paymentTextField.innerText = 'visa'
    paymentMethod='visa'
    isPaymentSelected = true
    dropDownMenu.style.visibility = 'collapse'
    isPaymentExpanded=false
})
mastercardbtn.addEventListener('click', ()=>{
    paymentTextField.innerText = 'mastercard'
    paymentMethod='mastercard'
    isPaymentSelected = true
    dropDownMenu.style.visibility = 'collapse'
    isPaymentExpanded=false
})
moneybtn1.addEventListener('click', ()=>{
    paymentTextField.innerText = 'money1'
    paymentMethod='money1'
    isPaymentSelected = true
    dropDownMenu.style.visibility = 'collapse'
    isPaymentExpanded=false
})
moneybtn2.addEventListener('click', ()=>{
    paymentTextField.innerText = 'money2'
    paymentMethod='money2'
    isPaymentSelected = true
    dropDownMenu.style.visibility = 'collapse'
    isPaymentExpanded=false
})
moneybtn3.addEventListener('click', ()=>{
    paymentTextField.innerText = 'money3'
    paymentMethod='money3'
    isPaymentSelected = true
    dropDownMenu.style.visibility = 'collapse'
    isPaymentExpanded=false
})

//code below loads the right theme
const settings = jsonFile.settings

if(settings.theme=='deafult'){setThemeForPage('rgb(255,255,255)', 'rgb(244,244,244)')}
if(settings.theme=='dark'){setThemeForPage('rgb(144,144,144)', 'rgb(44,44,44)')}
if(settings.theme=='grey'){setThemeForPage('rgb(200,200,200)', 'rgb(144,144,144)')}
function setThemeForPage(mainclr, secondclr){
    document.body.style.setProperty("--background-prim", mainclr)
    document.body.style.setProperty("--background-second", secondclr)
}