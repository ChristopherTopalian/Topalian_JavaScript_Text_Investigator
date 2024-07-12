// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// makeTitleOfApp.js

function makeTitleOfApp()
{
    // titleContainer
    let titleContainer = ce('div');
    titleContainer.style.position = 'absolute';
    titleContainer.style.right = '20px';
    titleContainer.style.top = titleContainer.style.top = '2px';
    titleContainer.style.zIndex = 1;
    ba(titleContainer);

    //-//

    // titleOfApp
    let titleOfApp = ce('div');
    titleOfApp.id = 'titleOfApp';
    titleOfApp.innerHTML =
    `<a href = 'https://github.com/christophertopalian/topalian_javascript_text_investigator' target = '_blank'> Topalian JavaScript Text Investigator </a>`;
    titleOfApp.style.fontSize = '17px';
    titleOfApp.style.fontWeight = 'bold';
    titleContainer.append(titleOfApp);
}

