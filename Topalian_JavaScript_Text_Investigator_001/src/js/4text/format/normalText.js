// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// normalText.js

function normalText(whichText)
{
    // replace <b> and </b> tags with empty strings
    whichText = whichText.replace(/<\/?b>/gi, "");

    // replace <strong> and </strong> tags with empty strings
    whichText = whichText.replace(/<\/?strong>/gi, "");

    return whichText;
}

