// makeTiles.js

function makeTiles(whichArray)
{
    let titleContainer = ce('div');
    titleContainer.style.display = "flex";
    titleContainer.style.justifyContent = "center";
    titleContainer.style.alignItems = "center";
    ba(titleContainer);

    //-//

    let theTitle = ce("a");
    theTitle.style.fontFamily = "Arial";
    theTitle.style.fontWeight = "bold";
    theTitle.style.fontSize = "24px";
    theTitle.style.color = "rgb(255, 255, 255)";
    theTitle.style.margin = '0 auto';
    theTitle.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_College_of_Scripting_Universe';
    theTitle.style.target = '_blank';
    theTitle.style.display = 'flex';
    theTitle.style.textDecoration = 'none';
    theTitle.textContent = 'CATopalian JavaScript College of Scripting Universe';

    // glowing blue shadows behind black text
    theTitle.style.textShadow =
        "0 0 6px rgb(0, 200, 255), " +
        "0 0 12px rgb(0, 150, 255), " +
        "0 0 24px rgb(0, 100, 200)";

    // fade-in transition
    theTitle.style.opacity = 0;
    theTitle.style.transition = "opacity 1s ease-in-out, text-shadow 1s ease-in-out";

    // fade in after a moment
    setTimeout(function()
    {
        theTitle.style.opacity = 1;
    }, 100);

    // hover makes glow stronger
    theTitle.onmouseover = function()
    {
        theTitle.style.textShadow =
            "0 0 10px rgb(0, 255, 255), " +
            "0 0 20px rgb(0, 200, 255), " +
            "0 0 40px rgb(0, 150, 255)";
    };

    theTitle.onmouseout = function()
    {
        theTitle.style.textShadow =
            "0 0 6px rgb(0, 200, 255), " +
            "0 0 12px rgb(0, 150, 255), " +
            "0 0 24px rgb(0, 100, 200)";
    };
    titleContainer.append(theTitle);

    //-//

    ba(ce('hr'));

    //-//

    let mainDiv = ce("div");
    mainDiv.style.display = 'grid';
    mainDiv.style.gridTemplateColumns = "repeat(3, 1fr)";
    mainDiv.style.gap = "5px";
    mainDiv.id = "mainDivId";
    ba(mainDiv);

    //-//

    for (let x = 0; x < whichArray.length; x++)
    {
        let theTile = ce("div");
        theTile.style.position = 'relative';
        theTile.id = whichArray[x].name;
        theTile.className = "nameOfElement";
        theTile.style.zIndex = 1;
        theTile.style.borderStyle = "solid";
        theTile.style.borderWidth = "3px";
        theTile.style.borderColor = "white";

        // gloss
        theTile.setAttribute("gloss", whichArray[x].name);

        theTile.style.fontFamily = "tahoma";
        theTile.style.fontWeight = "bold";
        theTile.style.fontSize = "25px";
        theTile.style.color = "rgb(255, 255, 255)";

        theTile.oncontextmenu = function()
        {
            clickSound2();

            window.open(whichArray[x].codeURL, '_blank');
        };

        theTile.onclick = function()
        {
            clickSound();

            theTile.style.borderColor = 'rgb(255, 0, 255)';
            window.open(whichArray[x].appURL, '_blank');
        };

        theTile.onmouseover = function()
        {
            theTile.style.borderColor = 'rgb(0, 255, 255)';
        };

        theTile.onmouseout = function()
        {
            theTile.style.borderColor = 'rgb(255, 255, 255)';
        };

        mainDiv.append(theTile);

        //-//

        let theImage = ce("img");
        theImage.style.width = "100%";
        theImage.style.cursor = 'pointer';

        if (online == true)
        {
            theImage.src = whichArray[x].textureOnline;
        }
        else if (online == false)
        {
            if (whichArray[x].textureOffline)
            {
                theImage.src = whichArray[x].textureOffline;
            }
        }

        theImage.onmouseover = function()
        {
            hoverSound();
        };
        theImage.onclick = function()
        {
            clickSound();
        };

        theTile.append(theImage);
    } 
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

