const menuSelectorBtn = document.getElementById('menuselector-btn')
const dropDownMenuNav = document.getElementById('dropdownmenu-nav')
let menuIsOpen = false
menuSelectorBtn.addEventListener('click', ()=>{
    if(!menuIsOpen){
        menuIsOpen = true
        menuSelectorBtn.style.backgroundImage = 'url(res/xbutton.png)'
        menuSelectorBtn.style.rotate = '-45deg'
        if(isOnDesktop){dropDownMenuNav.style.visibility = 'visible'}
        else{openMenuMobile()}
        dropDownMenuNav.style.animationName = 'expandTopBottom'
        dropDownMenuNav.style.animationDuration = '250ms'
    }
    else {
        closeMenu()
    }
})
function openMenuMobile(){
    dropDownMenuNav.style.width='100vw'
    dropDownMenuNav.style.visibility = 'visible'  
}
function closeMenu(){ 
    menuSelectorBtn.style.backgroundImage = 'url(res/menuselector_nav.png)'
    menuSelectorBtn.style.rotate = '0deg'
    dropDownMenuNav.style.animationName = 'expandBottomTop'
    dropDownMenuNav.addEventListener('animationend', ()=>{
        if(dropDownMenuNav.style.animationName == 'expandBottomTop'){
            dropDownMenuNav.style.visibility = 'collapse'
        }      
    })
    menuIsOpen = false
}

const settingsPage = document.getElementById('settings-page')
const settingsBtn = document.getElementsByClassName('settings-btn')
const exitSettingsBtn = document.getElementsByClassName('exit-settings-btn')
const settingsContent = document.getElementsByClassName('settings-container')
settingsBtn[0].addEventListener('click', ()=>{openSettings()})
settingsBtn[1].addEventListener('click', ()=>{openSettings()})
function openSettings(){
    settingsPage.style.visibility = 'visible'
    settingsContent[0].style.visibility = 'visible'
    settingsPage.style.animationName = 'upBottom'
    //lines below are so that settings dont interfere with page before being opened
    if(currentTheme=='deafult'){selectTheme(deafultColorSelected, 'deafult')}
    if(currentTheme=='dark'){selectTheme(darkColorSelected, 'dark')}
    if(currentTheme=='grey'){selectTheme(greyColorSelected, 'grey')}
    if(currentTheme=='hypno'){selectTheme(hypnoColorSelected, 'hypno')}
}
exitSettingsBtn[0].addEventListener('click', ()=>{
    settingsContent[0].style.visibility = 'collapse'
    settingsPage.style.animationName = 'bottomUp'
    settingsPage.addEventListener('animationend', ()=>{
        if(settingsPage.style.animationName == 'bottomUp'){
            settingsPage.style.visibility = 'collapse'
        } 
    })
    collapseSelectTag()
})

const root = document.querySelector(':root');
if(currentTheme=='deafult'){
    setThemeForMain('rgb(255,255,255)', 'rgb(244,244,244)')
    root.style.setProperty("--prim-color", 'black')
}
if(currentTheme=='dark'){
    setThemeForMain('rgb(44,44,44)', 'rgb(144,144,144)')
    root.style.setProperty("--prim-color", 'white')
    root.style.setProperty("--second-color", 'white')
}
if(currentTheme=='grey'){
    setThemeForMain('rgb(100,100,100)', 'rgb(144,144,144)')
    root.style.setProperty("--prim-color", 'white')
    root.style.setProperty("--second-color", 'white')
}
function setThemeForMain(mainclr, secondclr){
    root.style.setProperty("--background-prim", mainclr)
    root.style.setProperty("--background-second", secondclr)
}


const cardMinimal = document.getElementById('card-minimal')
const cardDeluxe = document.getElementById('card-deluxe')
const cardMaster = document.getElementById('card-master')
const spanMinimal = document.getElementById('spancard-minimal')
const spanDeluxe = document.getElementById('spancard-deluxe')
const spanMaster = document.getElementById('spancard-master')
const scrlBtnLeft = document.querySelector('.scroll-btn-left')
const scrlBtnRight = document.querySelector('.scroll-btn-right')
const aTagMinimal = document.getElementById('link-card-minimal')
const aTagDeluxe = document.getElementById('link-card-deluxe')
const aTagMaster = document.getElementById('link-card-master')

let selectedCard = 2
focusCard()
// event listeners open new page and send info to it
aTagMinimal.addEventListener('click', ()=>{
    if(selectedCard==1){
        location.href='payment_page/payment.html'
        sessionStorage.setItem('package_info.json',   
        `{"package":{"id":1,"price":5.99,"sale":0,"realPrice":5.99, "name":"minimal package"}, "settings":{"theme":"${currentTheme}"}}`
        )    
    }
})
aTagDeluxe.addEventListener('click', ()=>{
    if(selectedCard==2){
        location.href='payment_page/payment.html'
        sessionStorage.setItem('package_info.json',   
        `{"package":{"id":2,"price":11.99,"sale":25,"realPrice":8.99, "name":"deluxe package"}, "settings":{"theme":"${currentTheme}"}}`
        ) 
    }
})
aTagMaster.addEventListener('click', ()=>{
    if(selectedCard==3){
        location.href='payment_page/payment.html'
        sessionStorage.setItem('package_info.json',   
        `{"package":{"id":3,"price":19.99,"sale":20,"realPrice":15.99, "name":"master package"}, "settings":{"theme":"${currentTheme}"}}`
        ) 
    }
})
//scroll buttons to select cards
scrlBtnLeft.addEventListener('click',()=>{
    if(selectedCard==2){
        selectedCard = 1
        focusCard()
        if(isOnDesktop){
            scrlBtnLeft.style.visibility='hidden'
        }
    }
    else if(selectedCard==3){
        selectedCard = 2
        focusCard()
        if(isOnDesktop){
            scrlBtnRight.style.visibility='visible'
        }
    }
})
scrlBtnRight.addEventListener('click',()=>{
    if(selectedCard==2){
        selectedCard = 3
        focusCard()
        if(isOnDesktop){
            scrlBtnRight.style.visibility='hidden'
        }
    }
    else{
        selectedCard = 2
        focusCard()
        if(isOnDesktop){
            scrlBtnLeft.style.visibility='visible'
        }
    }
})
function focusCard(){
    let cardToFocus;
    let spanToFocus;
    if(selectedCard==1){
        cardToFocus = document.getElementById('card-minimal')
        spanToFocus = document.getElementById('spancard-minimal')
        appendUnFocusRules(cardDeluxe, spanDeluxe)
        appendUnFocusRules(cardMaster, spanMaster)
    }
    if(selectedCard==2){
        cardToFocus = document.getElementById('card-deluxe')
        spanToFocus = document.getElementById('spancard-deluxe')
        appendUnFocusRules(cardMinimal, spanMinimal)
        appendUnFocusRules(cardMaster, spanMaster)
    }
    if(selectedCard==3){
        cardToFocus = document.getElementById('card-master')
        spanToFocus = document.getElementById('spancard-master')
        appendUnFocusRules(cardMinimal, spanMinimal)
        appendUnFocusRules(cardDeluxe, spanDeluxe)
    }
    appendFocusRules(cardToFocus, spanToFocus)
}
function appendUnFocusRules(card, span){
    card.style.scale = '0.85'
    card.style.cursor='auto'
    span.style.zIndex='8'
    if(span.getAttribute('Id')=='spancard-deluxe'){
        span.style.zIndex='9'
    }
}
function appendFocusRules(card, span){
    card.style.scale = '1'
    span.style.zIndex = '10'
    card.style.cursor = 'pointer'
}
//code to detect swipes on mobile
const cardsBox = document.querySelector('.servicecards-box')
cardsBox.addEventListener('touchstart', (e)=>{
    let touchX = e.touches[0].pageX
    touchStarted(touchX)
})
function touchStarted(x) {
    let swipeDone = false
    cardsBox.addEventListener('touchmove', (e)=>{
        let result = x - e.touches[0].pageX
        if(result>=90 & !swipeDone & selectedCard!=3){
            swipeDone = true
            touchFocusNewCard('left')
        }
        if(result<=-90 & !swipeDone & selectedCard!=1){
            swipeDone = true
            touchFocusNewCard('right')
        }
    })
}
function touchFocusNewCard(direction){
    console.log(direction)
    if(direction=='left'){
        if(selectedCard==2){
            selectedCard=3
            focusCard()
        }
        if(selectedCard==1){
            selectedCard=2
            focusCard()
        }
    }
    if(direction=='right'){
        if(selectedCard==2){
            selectedCard=1
            focusCard()
        }
        if(selectedCard==3){
            selectedCard=2
            focusCard()
        }
    }
}
//document.addEventListener('DOMContentLoaded', ()=>{focusCard()})

