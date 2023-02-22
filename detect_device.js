const ua = detect.parse(navigator.userAgent)
let isOnDesktop
if(ua.device.type=='Desktop'){
    isOnDesktop = true;
    appendStyleSheet('servicecards_styles/cards_computer.css')
}
if(ua.device.type=='Mobile' || ua.device.type=='Tablet'){
    isOnDesktop = false;
    appendStyleSheet('servicecards_styles/cards_mobile.css')
}

function appendStyleSheet(hrefLink) {
    let styleSheet = document.createElement('link')
    let rel = document.createAttribute("rel")
    rel.value = 'stylesheet'
    styleSheet.setAttributeNode(rel)
    let href = document.createAttribute("href") 
    href.value = hrefLink
    styleSheet.setAttributeNode(href)
    document.head.append(styleSheet)
}