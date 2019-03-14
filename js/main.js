let customStyleBox = document.getElementsByClassName("customCSS")[0];


let defaultKeyDict = {
    "KEY_ESCAPE": "ESC",
    "KEY_TAB": "↹    ",
    "KEY_BACKTAB": "⇤     ",
    "KEY_BACKSPACE": "   ←  ",
    "KEY_ENTER": "   ↲   ",
    "KEY_KP_ENTER": "NP Enter",
    "KEY_INSERT": "Ins",
    "KEY_DELETE": "Del",
    "KEY_PAUSE": "Pause",
    "KEY_PRINT": "Print",
    "KEY_SYSREQ": "SysReq",
    "KEY_CLEAR": "Clear",
    "KEY_HOME": "Home",
    "KEY_END": "End",
    "KEY_LEFT": '<i class="material-icons">arrow_back</i>',
    "KEY_UP": '<i class="material-icons">arrow_upward</i>',
    "KEY_RIGHT": '<i class="material-icons">arrow_forward</i>',
    "KEY_DOWN": '<i class="material-icons">arrow_downward</i>',
    "KEY_PAGEUP": "Page Up",
    "KEY_PAGEDOWN": "Page Down",
    "KEY_SHIFT": "Shift",
    "KEY_CONTROL": "CTRL",
    "KEY_META": "Meta",
    "KEY_ALT": "Alt",
    "KEY_CAPSLOCK": "⇩",
    "KEY_NUMLOCK": "NumLock",
    "KEY_SCROLLLOCK": "ScrollLock",
    "KEY_F1": "F1",
    "KEY_F2": "F2",
    "KEY_F3": "F3",
    "KEY_F4": "F4",
    "KEY_F5": "F5",
    "KEY_F6": "F6",
    "KEY_F7": "F7",
    "KEY_F8": "F8",
    "KEY_F9": "F9",
    "KEY_F10": "F10",
    "KEY_F11": "F11",
    "KEY_F12": "F12",
    "KEY_F13": "F13",
    "KEY_F14": "F14",
    "KEY_F15": "F15",
    "KEY_F16": "F16",
    "KEY_KP_MULTIPLY": "NP ×",
    "KEY_KP_DIVIDE": "NP ÷",
    "KEY_KP_SUBTRACT": "NP -",
    "KEY_KP_PERIOD": "NP .",
    "KEY_KP_ADD": "NP +",
    "KEY_KP_0": "NP 0",
    "KEY_KP_1": "NP 1",
    "KEY_KP_2": "NP 2",
    "KEY_KP_3": "NP 3",
    "KEY_KP_4": "NP 4",
    "KEY_KP_5": "NP 5",
    "KEY_KP_6": "NP 6",
    "KEY_KP_7": "NP 7",
    "KEY_KP_8": "NP 8",
    "KEY_KP_9": "NP 9",
    "KEY_SUPER_L": "Super L",
    "KEY_SUPER_R": "Super R",
    "KEY_MENU": "Menu",
    "KEY_HYPER_L": "Hyper L",
    "KEY_HYPER_R": "Hyper R",
    "KEY_HELP": "Help",
    "KEY_DIRECTION_L": "Direction L",
    "KEY_DIRECTION_R": "Direction R",
    "KEY_BACK": '<i class="material-icons">skip_previous</i>',
    "KEY_FORWARD": '<i class="material-icons">skip_next</i>',
    "KEY_STOP": '<i class="material-icons">stop</i>',
    "KEY_REFRESH": '<i class="material-icons">loop</i>',
    "KEY_VOLUMEDOWN": '<i class="material-icons">volume_down</i>',
    "KEY_VOLUMEMUTE": '<i class="material-icons">volume_off</i>',
    "KEY_VOLUMEUP": '<i class="material-icons">volume_up</i>',
    "KEY_BASSBOOST": "BassBoost",
    "KEY_BASSUP": "BassUp",
    "KEY_BASSDOWN": "BassDown",
    "KEY_TREBLEUP": "TrebleUp",
    "KEY_TREBLEDOWN": "TrebleDown",
    "KEY_MEDIAPLAY": '<i class="material-icons">play_arrow</i>',
    "KEY_MEDIASTOP": '<i class="material-icons">stop</i>',
    "KEY_MEDIAPREVIOUS": '<i class="material-icons">skip_previous</i>',
    "KEY_MEDIANEXT": '<i class="material-icons">skip_next</i>',
    "KEY_MEDIARECORD": "MediaRecord",
    "KEY_HOMEPAGE": "HomePage",
    "KEY_FAVORITES": "Favorites",
    "KEY_SEARCH": "Search",
    "KEY_STANDBY": "StandBy",
    "KEY_LAUNCHMAIL": "LaunchMail",
    "KEY_LAUNCHMEDIA": "LaunchMedia",
    "KEY_LAUNCH0": "Launch0",
    "KEY_LAUNCH1": "Launch1",
    "KEY_LAUNCH2": "Launch2",
    "KEY_LAUNCH3": "Launch3",
    "KEY_LAUNCH4": "Launch4",
    "KEY_LAUNCH5": "Launch5",
    "KEY_LAUNCH6": "Launch6",
    "KEY_LAUNCH7": "Launch7",
    "KEY_LAUNCH8": "Launch8",
    "KEY_LAUNCH9": "Launch9",
    "KEY_LAUNCHA": "LaunchA",
    "KEY_LAUNCHB": "LaunchB",
    "KEY_LAUNCHC": "LaunchC",
    "KEY_LAUNCHD": "LaunchD",
    "KEY_LAUNCHE": "LaunchE",
    "KEY_LAUNCHF": "LaunchF",
    "KEY_UNKNOWN": "Unknown",
    "KEY_SPACE": "Space",
    "KEY_EXCLAM": "!",
    "KEY_QUOTEDBL": "\"",
    "KEY_NUMBERSIGN": "#",
    "KEY_DOLLAR": "$",
    "KEY_PERCENT": "%",
    "KEY_AMPERSAND": "&",
    "KEY_APOSTROPHE": "'",
    "KEY_PARENLEFT": "(",
    "KEY_PARENRIGHT": ")",
    "KEY_ASTERISK": "*",
    "KEY_PLUS": "+",
    "KEY_COMMA": ",",
    "KEY_MINUS": "-",
    "KEY_PERIOD": ".",
    "KEY_SLASH": "/",
    "KEY_0": "0",
    "KEY_1": "1",
    "KEY_2": "2",
    "KEY_3": "3",
    "KEY_4": "4",
    "KEY_5": "5",
    "KEY_6": "6",
    "KEY_7": "7",
    "KEY_8": "8",
    "KEY_9": "9",
    "KEY_COLON": ":",
    "KEY_SEMICOLON": ";",
    "KEY_LESS": "<",
    "KEY_EQUAL": "=",
    "KEY_GREATER": ">",
    "KEY_QUESTION": "?",
    "KEY_AT": "@",
    "KEY_A": "A",
    "KEY_B": "B",
    "KEY_C": "C",
    "KEY_D": "D",
    "KEY_E": "E",
    "KEY_F": "F",
    "KEY_G": "G",
    "KEY_H": "H",
    "KEY_I": "I",
    "KEY_J": "J",
    "KEY_K": "K",
    "KEY_L": "L",
    "KEY_M": "M",
    "KEY_N": "N",
    "KEY_O": "O",
    "KEY_P": "P",
    "KEY_Q": "Q",
    "KEY_R": "R",
    "KEY_S": "S",
    "KEY_T": "T",
    "KEY_U": "U",
    "KEY_V": "V",
    "KEY_W": "W",
    "KEY_X": "X",
    "KEY_Y": "Y",
    "KEY_Z": "Z",
    "KEY_BRACKETLEFT": "[",
    "KEY_BACKSLASH": "\\",
    "KEY_ASCIICIRCUM": "^",
    "KEY_UNDERSCORE": "_",
    "KEY_QUOTELEFT": "`",
    "KEY_BRACELEFT": "{",
    "KEY_BAR": "|",
    "KEY_BRACERIGHT": "}",
    "KEY_ASCIITILDE": "~",
    "KEY_NOBREAKSPACE": "⍽",
    "KEY_EXCLAMDOWN": "¡",
    "KEY_CENT": "¢",
    "KEY_STERLING": "£",
    "KEY_CURRENCY": "¤",
    "KEY_YEN": "¥",
    "KEY_BROKENBAR": "¦",
    "KEY_SECTION": "§",
    "KEY_DIAERESIS": "¨",
    "KEY_COPYRIGHT": "©",
    "KEY_ORDFEMININE": "♀",
    "KEY_GUILLEMOTLEFT": "«",
    "KEY_NOTSIGN": "¬",
    "KEY_HYPHEN": "-",
    "KEY_REGISTERED": "®",
    "KEY_MACRON": "¯",
    "KEY_DEGREE": "°",
    "KEY_PLUSMINUS": "±",
    "KEY_TWOSUPERIOR": "²",
    "KEY_THREESUPERIOR": "³",
    "KEY_ACUTE": "´",
    "KEY_MU": "μ",
    "KEY_PARAGRAPH": "¶",
    "KEY_PERIODCENTERED": "·",
    "KEY_CEDILLA": "¸",
    "KEY_ONESUPERIOR": "¹",
    "KEY_MASCULINE": "♂",
    "KEY_GUILLEMOTRIGHT": "»",
    "KEY_ONEQUARTER": "¼",
    "KEY_ONEHALF": "½",
    "KEY_THREEQUARTERS": "¾",
    "KEY_QUESTIONDOWN": "¿",
    "KEY_AGRAVE": "À",
    "KEY_AACUTE": "Á",
    "KEY_ACIRCUMFLEX": "Â",
    "KEY_ATILDE": "Ã",
    "KEY_ADIAERESIS": "Ä",
    "KEY_ARING": "Å",
    "KEY_AE": "æ",
    "KEY_CCEDILLA": "Ç",
    "KEY_EGRAVE": "È",
    "KEY_EACUTE": "É",
    "KEY_ECIRCUMFLEX": "Ê",
    "KEY_EDIAERESIS": "Ë",
    "KEY_IGRAVE": "Ì",
    "KEY_IACUTE": "Í",
    "KEY_ICIRCUMFLEX": "Î",
    "KEY_IDIAERESIS": "Ï",
    "KEY_ETH": "Ð",
    "KEY_NTILDE": "Ñ",
    "KEY_OGRAVE": "Ò",
    "KEY_OACUTE": "Ó",
    "KEY_OCIRCUMFLEX": "Ô",
    "KEY_OTILDE": "Õ",
    "KEY_ODIAERESIS": "Ö",
    "KEY_MULTIPLY": "×",
    "KEY_OOBLIQUE": "Ø",
    "KEY_UGRAVE": "Ù",
    "KEY_UACUTE": "Ú",
    "KEY_UCIRCUMFLEX": "Û",
    "KEY_UDIAERESIS": "Ü",
    "KEY_YACUTE": "Ý",
    "KEY_THORN": "Þ",
    "KEY_SSHARP": "ß",
    "KEY_DIVISION": "÷",
    "KEY_YDIAERESIS": "Ÿ"
}

let defaultKeyHTML = `<div class="wrapper1">
    <div class="wrapper2">
        <div class="keycontainer">
            <div class="letter">A</div>
        </div>
    </div>
</div>`

let defaultKeyStyle = `.letter {
    font-size: 24px;
    padding: 0px 10px;
    text-shadow: black 1px 1px;
    white-space: pre;
}

.keycontainer {
    background-color: #919191;
    padding: 5px;
    min-height: 40px;
    text-align: center;
    min-width: 40px;
    border-radius: 4px;
}

/*Something like box shadow is not supported, so we create 2 "shadows" by having it nested in wrapers*/
.wrapper1 {
    background-color: #4e4e4e;
    border-radius: 4px;
    padding: 2px 3px 4px 2px;
}

.wrapper2 {
    background-color: #5c5c5c;
    border-radius: 4px;
    padding: 0px 4px 6px 2px;
}
`


let KeyHTMLContainer = document.getElementsByClassName("imagekeyboard")[0]
let keyCustomDict = document.querySelector(".keyboard .settings .keyfiles .dict");
let keyCustomHTML = document.querySelector(".keyboard .settings .html .dict");
let keyCustomStyle = document.querySelector(".keyboard .settings .style .dict");
let keySubmitButton = document.querySelector(".keyboard .settings .sbutton .button")

let KeyInProgress = false;

keyCustomDict.innerHTML = JSON.stringify(defaultKeyDict, null, 2)
keyCustomStyle.innerHTML = defaultKeyStyle
keyCustomHTML.innerHTML = defaultKeyHTML
updateKeyHTML()
keyCustomStyle.onpaste = updateCustomCSS
keyCustomStyle.oninput = updateCustomCSS
keyCustomHTML.onpaste = updateKeyHTML
keyCustomHTML.oninput = updateKeyHTML
keySubmitButton.onclick = clickKeyImages

function updateKeyHTML(){
    KeyHTMLContainer.innerHTML = keyCustomHTML.value
}

function clickKeyImages(){
    if(!KeyInProgress){
        generateKeyImages();
        KeyInProgress = true;
        keySubmitButton.innerHTML = "Generate Images (in progress)"
    }
}

async function generateKeyImages(){
    let Zip = new JSZip();
    document.getElementsByClassName("outKeyImages")[0].innerHTML = "";
    for(let key in defaultKeyDict){
        let text = defaultKeyDict[key];
        document.querySelector(".keyboard .imagekeyboard .letter").innerHTML = text;
        let canvas = await html2canvas(document.querySelector(".imagekeyboard"), {
            backgroundColor: null,
            scale: parseInt(document.querySelector(".keyboard .settings .scale .dict").value) || 1
        })
        document.getElementsByClassName("outKeyImages")[0].appendChild(canvas)
        Zip.file(key + document.querySelector(".keyboard .settings .filenameappend .dict").value + ".png", canvas.toDataURL().split("base64,")[1], {
            base64: true
        })
    }
    Zip.generateAsync({type:"blob"}).then(blob => {
        saveAs(blob, document.querySelector(".keyboard .settings .zipfilename .dict").value)
    })
    KeyInProgress = false;
    keySubmitButton.innerHTML = "Generate Images"
}



let defaultMouseDict = {
    "BUTTON_LEFT": "lmb",
    "BUTTON_RIGHT": "rmb",
    "BUTTON_MIDDLE": "mm",
    "BUTTON_WHEEL_UP": "mmu",
    "BUTTON_WHEEL_DOWN": "mmd",
    "BUTTON_WHEEL_LEFT": "mml",
    "BUTTON_WHEEL_RIGHT": "mmr",
    "BUTTON_XBUTTON1": "me1",
    "BUTTON_XBUTTON2": "me2"
}

let defaultMouseHTML = `<div class="lmb">
    <div class="mousecontainer">
        <div class="vert">
            <div class="hor">
                <div class="lmbutton"></div>
                <div class="rmbutton"></div>
                <div class="hor">
                    <div class="wheell"></div>
                    <div class="vert">
                        <div class="scrollup"></div>
                        <div class="wheel"></div>
                        <div class="scrolldown"></div>
                    </div>
                    <div class="wheelr"></div>
                </div>
            </div>
            <div class="hor">
                <div class="vert"><div class="mextrabutton1"></div><div class="mextrabutton2"></div></div>
                <div class="vert"><div class="mbody"></div></div>
            </div>
        </div>
    </div>
</div>
`

let defaultMouseStyle = `.mbody {
    width: 50px;
    background-color: gray;
    border-radius: 4px 4px 40px 20px;
    height: 70px;
}

.mextrabutton1, .mextrabutton2 {
    max-height: 15px;
    width: 5px;
    flex: 1;
    border-radius: 3px 0px 0px 3px;
    background-color: #9c9c9c;
    margin-top: 12px;
}

.hor {
    display: flex;
    flex: 1;
}

.vert {
    display: flex;
    flex-direction: column;
}

.mextrabutton2 {
    margin-top: 5px;
}

.lmbutton, .rmbutton {
    width: 20px;
    height: 30px;
    background-color: grey;
    margin-bottom: 2px;
    border-radius: 3px;
}

.lmbutton {
    margin-left: 5px;
    border-radius: 20px 5px 3px 3px;
}

.rmbutton {
    border-radius: 5px 20px 3px 3px;
    margin-left: 10px;
}

.wheell {
    margin-top:12px;
    margin-left: -35px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 3px 6px 3px 0;
    border-color: transparent #9c9c9c transparent transparent;
}

.wheelr {
    margin-top:12px;
    margin-left: 1px;
    margin-right: -6px;
    width: 0;
    height: 0;
    border-style: solid;
    z-index: 5;
    border-width: 3px 0 3px 6px;
    border-color: transparent transparent transparent #9c9c9c;
}


.wheel {
    width: 6px;
    height: 15px;
    background-color: gray;
    margin-left: 1px;
    border-radius: 100px;
    margin-top: 1px;
}

.scrollup {
    width: 0;
    height: 0;
    margin-top: 1px;
    margin-left: 1px;
    border-style: solid;
    border-width: 0 3px 6px 3px;
    border-color: transparent transparent #9c9c9c transparent;
}

.scrolldown {
    width: 0;
    margin-top: 1px;
    margin-left: 1px;
    height: 0;
    border-style: solid;
    border-width: 6px 3px 0 3px;
    border-color: #9c9c9c transparent transparent transparent;
}

.lmb .lmbutton, .rmb .rmbutton, .mm .wheel, .me2 .mextrabutton2, .me1 .mextrabutton1 {
    background-color: #ae2222;
}

.mmu .scrollup {
    border-color: transparent transparent #ae2222 transparent;
}

.mmr .wheelr {
    border-color: transparent transparent transparent #ae2222;
}

.mml .wheell {
    border-color: transparent #ae2222 transparent transparent;
}

.mmd .scrolldown {
    border-color: #ae2222 transparent transparent transparent;
}
`




let MouseHTMLContainer = document.getElementsByClassName("imagemouse")[0]
let MouseCustomDict = document.querySelector(".mouse .settings .keyfiles .dict");
let MouseCustomHTML = document.querySelector(".mouse .settings .html .dict");
let MouseCustomStyle = document.querySelector(".mouse .settings .style .dict");
let MouseSubmitButton = document.querySelector(".mouse .settings .sbutton .button")

let MouseInProgress = false;

MouseCustomDict.innerHTML = JSON.stringify(defaultMouseDict, null, 2)
MouseCustomStyle.innerHTML = defaultMouseStyle
MouseCustomHTML.innerHTML = defaultMouseHTML
updateMouseHTML()
MouseCustomStyle.onpaste = updateCustomCSS
MouseCustomStyle.oninput = updateCustomCSS
MouseCustomHTML.onpaste = updateMouseHTML
MouseCustomHTML.oninput = updateMouseHTML
MouseSubmitButton.onclick = clickMouseImages

function updateMouseHTML() {
    MouseHTMLContainer.innerHTML = MouseCustomHTML.value
}

function clickMouseImages() {
    if (!MouseInProgress) {
        generateMouseImages();
        MouseInProgress = true;
        MouseSubmitButton.innerHTML = "Generate Images (in progress)"
    }
}

async function generateMouseImages() {
    let Zip = new JSZip();
    document.getElementsByClassName("outMouseImages")[0].innerHTML = "";
    for (let key in defaultMouseDict) {
        let classes = defaultMouseDict[key];
        document.querySelector(".imagemouse").firstElementChild.className = classes;
        let canvas = await html2canvas(document.querySelector(".imagemouse"), {
            backgroundColor: null,
            scale: parseInt(document.querySelector(".mouse .settings .scale .dict").value) || 1
        })
        document.getElementsByClassName("outMouseImages")[0].appendChild(canvas)
        Zip.file(key + document.querySelector(".mouse .settings .filenameappend .dict").value + ".png", canvas.toDataURL().split("base64,")[1], {
            base64: true
        })
    }
    Zip.generateAsync({
        type: "blob"
    }).then(blob => {
        saveAs(blob, document.querySelector(".mouse .settings .zipfilename .dict").value)
    })
    MouseInProgress = false;
    MouseSubmitButton.innerHTML = "Generate Images"
}


updateCustomCSS()
function updateCustomCSS() {
    customStyleBox.innerHTML = keyCustomStyle.value + "\n"+MouseCustomStyle.value
}
