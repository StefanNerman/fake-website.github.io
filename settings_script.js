const deafultColor = document.getElementById('deafult-color')
const darkColor = document.getElementById('dark-color')
const greyColor = document.getElementById('grey-color')
const deafultColorSelected = document.getElementById('deafult-color-selected')
const darkColorSelected = document.getElementById('dark-color-selected')
const greyColorSelected = document.getElementById('grey-color-selected')

let currentTheme = 'deafult'
try{
    const cDecoded = decodeURIComponent(document.cookie)
    let cookieMap = new Map()
    cDecoded.split("; ").forEach(e=>{
        let arr = e.split('=')
        cookieMap.set(arr[0], arr[1])
    })
    console.log(cookieMap)
    if(cookieMap.get('theme') != null){
        currentTheme = cookieMap.get('theme')
    }
}catch(e){
    console.log('Error happened in cookie parsing at settings_script.js line:11')
}

deafultColor.addEventListener('click', ()=>{selectTheme(deafultColorSelected, 'deafult')})
darkColor.addEventListener('click', ()=>{selectTheme(darkColorSelected, 'dark')})
greyColor.addEventListener('click', ()=>{selectTheme(greyColorSelected, 'grey')})

function selectTheme(selected, selection){
    deafultColorSelected.style.visibility = 'hidden'
    darkColorSelected.style.visibility = 'hidden'
    greyColorSelected.style.visibility = 'hidden'
    selected.style.visibility = 'visible'
    document.cookie = 'theme='+selection+'; expires=Fri, 18 September 2099 11:00:00 UTC; path=/'
    currentTheme = selection
    themeChange()
}
function collapseSelectTag(){
    deafultColorSelected.style.visibility = 'collapse'
    darkColorSelected.style.visibility = 'collapse'
    greyColorSelected.style.visibility = 'collapse'
}
function themeChange(){
    const poot = document.querySelector(':root');
    if(currentTheme=='deafult'){
        setTheme('rgb(255,255,255)', 'rgb(244,244,244)')
        poot.style.setProperty("--prim-color", 'black')
    }
    if(currentTheme=='dark'){
        setTheme('rgb(44,44,44)', 'rgb(144,144,144)')
        poot.style.setProperty("--prim-color", 'white')
    }
    if(currentTheme=='grey'){
        setTheme('rgb(100,100,100)', 'rgb(144,144,144)')
        poot.style.setProperty("--prim-color", 'white')
    }
    function setTheme(mainclr, secondclr){
        poot.style.setProperty("--background-prim", mainclr)
        poot.style.setProperty("--background-second", secondclr)
    }
}