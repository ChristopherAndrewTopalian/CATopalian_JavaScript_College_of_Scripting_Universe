// whenLoaded.js

function whenLoaded()
{
    makeTiles(content);

    //-//

    // prevent right click menu
    window.oncontextmenu = function(theEvent)
    {
        theEvent.preventDefault();
    };
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

