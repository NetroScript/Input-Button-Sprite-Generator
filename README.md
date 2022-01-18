Input-Button-Sprite-Generator
=============================

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Introduction
------------

When playing games it is always nice to be able to remap their key input, especially if you are not using QWERTZ.  
So developers often give the player the ability to rebind their controls. Sadly in the most cases you then have a more or less text window (look f.e. at the source engine remapping) which tells you jump is bound to "space".  
But imagine you have a tutorial, where you tell the player which key press leads to which action, but they already rebound it, so you get your input map and tell them "To jump press 'Left Mouse Click'". But in my opinion a visual representation is much nicer than just the text. For a project I worked on I would have liked to additionally (or only) show images of the input, instead of writing their text form. But to do that you would need to get the sprites from somewhere. There are some free sprites available for the keyboard and even more which you have to pay for, but still they maybe don't have all keys the players might want to try out. So for the case the player would like to bind something to Ä you probably won't have an image for it. But creating every sprite is a big pain.  
So I searched for generators which can do the job, where you can provide the base structure, but I didn't find anything, so I wrote my [own one](https://netroscript.github.io/Input-Button-Sprite-Generator/).  

Screenshots
------------------

The following examples are the base settings.

Generated keyboardkeys:  
![Generated keyboardkeys](https://i.imgur.com/eQs5HW9.png)

Generated mouse previews:  
![Generated mouse previews](https://i.imgur.com/cXLcJHT.png)

Generated mouse previews:  
![Generated mouse previews in Windows Explorer](https://i.imgur.com/cfTQ59L.png)

The Interface:  
![The Interface](https://i.imgur.com/luhP1KZ.png)

How it works
------------

You have a web form, where you can fill in a base HTML structure and your own CSS (of course examples are also already given), and the script then iterates through a list of characters and generates an image for every possible character by putting it into your base structure and then taking a "screenshot" using [html2canvas](https://github.com/niklasvh/html2canvas) and so you have less work, [JSZip](https://stuk.github.io/jszip/) is used to put it into a neat zip file, which you just have to downoad.  
You may ask what about the files names and what if I only want certain characters in my set? Or more than there are provided?  
Well currently the keyboard scancodes from [Godot](https://godotengine.org/) are used, so I think every possible input should be in there. But you can customize what you want. For the keyboard you have a JSON object where all keys are the file names which will be generated, and the values will be the HTML which will be put into your base structure. Neat stuff like Material Icons as characters is already included.  

But the sprites aren't limited to the keyboard!  
A mouse is already included too, in the same fashion as the keyboard, only change is that the values in the JSON are not the content now, but the classes which will be added to the container.  

Feel free to tryout as much as you want.

Usage
-----

Just download this as a folder, and open index.html in your browser.  
If you want to use images in the CSS, you have to host a server, otherwise the browser won't allow to export the images.

Or try it out [yourself](https://netroscript.github.io/Input-Button-Sprite-Generator/)!

Further example styles
-----------------------

Keyboard:

* White and more minimalistic

![Minimalistic preview](https://i.imgur.com/RFDIT2X.png)

CSS:

```CSS
.letter {
    font-size: 10px;
    padding: 0px 3px;
    text-shadow: gray 0px 1px;
    white-space: pre;
    color: black;
}

.keycontainer {
    background-color: #FFFFFF;
    padding: 5px;
    min-height: 10px;
    text-align: center;
    min-width: 10px;
    border-radius: 5px;
}

/*Something like box shadow is not supported, so we create 2 "shadows" by having it nested in wrapers*/
.wrapper1 {
    background-color: #EEEEEE;
    border-radius: 4px;
    padding: 1px 3px 5px 2px;
}
```

* Using images in the CSS

![images preview](https://i.imgur.com/LgJrEZg.png)

CSS:

```CSS
.letter {
    font-size: 20px;
    padding: 0px 3px;
    text-shadow: #333333 0px 1px;
    white-space: pre;
    color: gray;
}

/*Because you access local files here, when not run on a WebServer, this needs to be run on a server, otherwise the canvas can't be converted to a DataURL*/
.keycontainer {
    background: linear-gradient(black, #474747);
    padding: 5px;
    min-height: 40px;
    text-align: center;
    min-width: 23px;
    background-image: url("img/keycap_middle.png");
    background-repeat: repeat-x;
    display:inline-block;
}

.leftimg{
    background-image: url(img/keycap_left.png);
    width: 12px;
    height: 50px;
    display:inline-block;
}

.rightimg{
    background-image: url(img/keycap_right.png);
    width: 11px;
    height: 50px;
    display:inline-block;
}

.con {
    display:flex;
}
```

HTML:

```HTML
<div class="con">
    <div class="leftimg"></div>
    <div class="keycontainer">
        <div class="letter">A</div>
    </div>
    <div class="rightimg"></div>
</div>
```

Mouse:

* 30x30 Pixel mouse icons:

![30x30 mouse preview](https://i.imgur.com/PjmCGPq.png)

CSS:

```CSS
.hor {
    display: flex;
    flex: 1;
}

.vert {
    display: flex;
    flex-direction: column;
}

.mousecontainer {
    width: 30px;
    height: 30px;
    overflow: hidden;
}

.lmb .lmbutton, .rmb .lmbutton, .mm .lmbutton, .mmu .lmbutton, .mmd .lmbutton, .mml .lmbutton, .mmr .lmbutton {
    width:12px;
    height:25px;
    background-color:gray;
    border-radius: 10px 5px 3px 3px;
}

.lmb .rmbutton, .rmb .rmbutton, .mm .rmbutton, .mmu .rmbutton, .mmd .rmbutton, .mml .rmbutton, .mmr .rmbutton {
    width:12px;
    height:25px;
    background-color:gray;
    border-radius: 5px 10px 3px 3px;
    margin-right: -17px;
    margin-left: 6px;
}

.lmb .wheel, .rmb .wheel, .mm .wheel, .mmu .wheel, .mmd .wheel, .mml .wheel, .mmr .wheel {
    height: 12px;
    width: 4px;
    margin-top: 7px;
    border-radius: 20px;
    background-color:gray;
}

.lmb .mbody, .rmb .mbody, .mm .mbody, .mmu .mbody, .mmd .mbody, .mml .mbody, .mmr .mbody {
    width: 30px;
    margin-top: 2px;
    height:3px;
    background-color:gray;
    border-radius: 50px;
}


.mmu .scrollup {
    position:absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 3px 6px 3px;
    margin-left: -1px;
    border-color: transparent transparent #58aea3 transparent;
}

.mmd .scrolldown {
    position:absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 3px 0 3px;
    border-color: #58aea3 transparent transparent transparent;
    margin-top:20px;
    margin-left: -1px;
}

.mml .wheell {
    position:absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 3px 6px 3px 0;
    border-color: transparent #58aea3 transparent transparent;
    margin-top:10px;
    margin-left: -6px;
}

.mmr .wheelr {
    position:absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 3px 0 3px 6px;
    border-color: transparent transparent transparent #58aea3;
    margin-top:10px;
    margin-left: 4px;
}

.me1 .lmbutton, .me2 .lmbutton {
    width:12px;
    height:5px;
    margin-left:4px;
    background-color:gray;
    border-radius: 10px 5px 5px 10px;
}

.me1 .rmbutton, .me2 .rmbutton {
    width:12px;
    height:5px;
    background-color:gray;
    border-radius: 5px 10px 10px 5px;
    margin-left: 2px;
}

.me1 .mbody, .me2 .mbody {
    width: 27px;
    margin-top: 2px;
    height:23px;
    background-color:gray;
    border-radius: 4px 2px 0px 0px;
}



.me1 .mextrabutton1, .me1 .mextrabutton2, .me2 .mextrabutton1, .me2 .mextrabutton2 {
    height: 9px;
    width: 3px;
    background-color: #626262;
    margin-top:2px;
    border-radius: 30px 0px 0px 30px
}

.me1 .mextrabutton1, .me2 .mextrabutton1 {
    margin-top:5px;
}

.lmb .lmbutton, .rmb .rmbutton, .mm .wheel, .me1 .mextrabutton1, .me2 .mextrabutton2 {
    background-color: #58aea2;
}

```

Credits
-------

Following Libraries are included and used:

* [FileSaver.js](https://github.com/eligrey/FileSaver.js) - Licensed under the MIT License
* [html2canvas](https://html2canvas.hertzen.com/) - Licensed under the MIT License
* [JSZip](https://stuk.github.io/jszip/) - Licensed under the MIT License
