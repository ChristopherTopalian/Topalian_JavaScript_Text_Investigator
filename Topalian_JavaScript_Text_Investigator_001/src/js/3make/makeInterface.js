// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// makeInterface.js

function makeInterface()
{
    // mainContainer
    let mainContainer = ce('div');
    mainContainer.id = 'mainContainer';
    mainContainer.style.position = 'absolute';
    mainContainer.style.left = '20px';
    mainContainer.style.top = '25px';
    ba(mainContainer);

    //-//

    // textInput
    let textInput = ce('textarea');
    textInput.id = 'textInput';
    textInput.placeholder = 'Enter words here...';
    mainContainer.append(textInput);

    //-//

    // btnDivInternetData
    let btnDivInternetData = ce('div');
    btnDivInternetData.style.display = 'flex';
    btnDivInternetData.style.flexDirection = 'row';
    btnDivInternetData.style.overflowX = 'auto';
    btnDivInternetData.style.whiteSpace = 'nowrap';

    // horizontal scrolling mouse wheel, without needing to hold shift button
    btnDivInternetData.addEventListener('wheel', function(event)
    {
        if (event.deltaY !== 0)
        {
            btnDivInternetData.scrollLeft += event.deltaY;
            event.preventDefault();
        }
    });

    mainContainer.append(btnDivInternetData);

    //-//

    let internetDataBtnArray = 
    [
        {
            name: 'Earthquake (latest)',
            functionName: `fetchMostRecentEarthquakeData()`,
            description: 'Get most recent Earthquake data from the internet'
        },

        {
            name: 'Earthquake (All)',
            functionName: `fetchAllEarthquakeData()`,
            description: 'Get all Earthquake data from the internet'
        },

        {
            name: 'Get Random Joke',
            functionName: `fetchRandomJoke()`,
            description: 'Get a random joke from the internet'
        }
    ];

    for (let i = 0; i < internetDataBtnArray.length; i++)
    {
        let theButton = ce('button');
        theButton.className = 'buttonStyle001';
        theButton.innerHTML = internetDataBtnArray[i].name;
        theButton.title = internetDataBtnArray[i].description;
        theButton.onmouseover = function()
        {
            audioPlay('sfx_warp_001', 1.0);
        };

        theButton.onclick = function(buttonInfo)
        {
            audioPlay('sfx_blip_001', 1.0);

            ge('resultContainer').innerHTML = eval(internetDataBtnArray[i].functionName);
        }

        btnDivInternetData.append(theButton);
    }

    //-//

    // btnDivAnalyzeText
    let btnDivAnalyzeText = ce('div');
    btnDivAnalyzeText.style.display = 'flex';
    btnDivAnalyzeText.style.flexDirection = 'row';
    btnDivAnalyzeText.style.overflowX = 'auto';
    btnDivAnalyzeText.style.whiteSpace = 'nowrap';

    // horizontal scrolling mouse wheel, without needing to hold shift button
    btnDivAnalyzeText.addEventListener('wheel', function(event)
    {
        if (event.deltaY !== 0)
        {
            btnDivAnalyzeText.scrollLeft += event.deltaY;
            event.preventDefault();
        }
    });

    mainContainer.append(btnDivAnalyzeText);

    //-//

    let analyzeButtons = 
    [
        {
            name: 'Word Count',
            functionName: `getWordCount(textInput.value)`,
            description: 'Count the number of words'
        },

        {
            name: 'Word Frequency',
            functionName: `getWordFrequency(textInput.value)`,
            description: 'Count the frequency of each word'
        },

        {
            name: 'Pattern Recognition',
            functionName: `detectPattern(textInput.value)`,
            description: 'Search for Pattern of word THE'
        },

        {
            name: 'Average Word Length',
            functionName: `calculateAvgWordLength(textInput.value)`,
            description: 'Average length of words'
        },

        {
            name: 'Sentiment Rating',
            functionName: `detectSentiment(textInput.value)`,
            description: 'The general intention of the text'
        },

        {
            name: 'Extract Keywords',
            functionName: `extractKeywords(textInput.value)`,
            description: 'Get Keywords without getting common link words'
        },

        {
            name: 'Extract Keywords Uppercase',
            functionName: `extractKeywordsUppercase(textInput.value)`,
            description: 'Uppercase extracted keywords'
        },

        {
            name: 'Titlecase Keywords',
            functionName: `titleCaseKeywords(textInput.value)`,
            description: 'Titlecases the words'
        },

        {
            name: 'Categorize Words',
            functionName: `categorizeWords(textInput.value)`,
            description: 'Put words into categories'
        }, 

    ];

    for (let i = 0; i < analyzeButtons.length; i++)
    {
        let theButton = ce('button');
        theButton.className = 'buttonStyle001';
        theButton.innerHTML = analyzeButtons[i].name;
        theButton.title = analyzeButtons[i].description;
        theButton.onmouseover = function()
        {
            audioPlay('sfx_warp_001', 1.0);
        };

        theButton.onclick = function(buttonInfo)
        {
            audioPlay('sfx_blip_001', 1.0);

            ge('resultContainer').innerHTML = eval(analyzeButtons[i].functionName);
        }

        btnDivAnalyzeText.append(theButton);
    }

    //-//

    // btnDivFormatting
    let btnDivFormatting = ce('div');
    btnDivFormatting.style.display = 'flex';
    btnDivFormatting.style.flexDirection = 'row';
    btnDivFormatting.style.overflowX = 'auto';
    btnDivFormatting.style.whiteSpace = 'nowrap';

    // horizontal scrolling mouse wheel, without needing to hold shift button
    btnDivFormatting.addEventListener('wheel', function(event)
    {
        if (event.deltaY !== 0)
        {
            btnDivFormatting.scrollLeft += event.deltaY;
            event.preventDefault();
        }
    });
    mainContainer.append(btnDivFormatting);

    //-//

    let formattingButtons = 
    [
        {
            name: 'Capitalize Text',
            functionName: `capitalizeText(textInput.value)`,
            description: 'Capitalizes all words'
        },

        {
            name: 'Lowercase Text',
            functionName: `lowercaseText(textInput.value)`,
            description: 'Lowercases all words'
        },

        {
            name: 'Capitalize 1st Letter',
            functionName: `capitalizeFirstLetters(textInput.value)`,
            description: 'Capitalizes the 1st Letter of each word'
        },

        {
            name: 'Bold Text',
            functionName: `boldText(textInput.value)`,
            description: 'Bold all words'
        },

        {
            name: 'Normal Text',
            functionName: `normalText(textInput.value)`,
            description: 'Normalize all words'
        },

        {
            name: 'Italic Text',
            functionName: `italicText(textInput.value)`,
            description: 'Italicize all words'
        },

        {
            name: 'Underline Text',
            functionName: `underlineText(textInput.value)`,
            description: 'Underline all words'
        },

        {
            name: 'Format as Bulleted List',
            functionName: `formatAsBulletedList(textInput.value)`,
            description: 'Format words as Bullet List'
        }
    ];

    for (let i = 0; i < formattingButtons.length; i++)
    {
        let theButton = ce('button');
        theButton.className = 'buttonStyle001';
        theButton.innerHTML = formattingButtons[i].name;
        theButton.title = formattingButtons[i].description;
        theButton.onmouseover = function()
        {
            audioPlay('sfx_warp_001', 1.0);
        };

        theButton.onclick = function(buttonInfo)
        {
            audioPlay('sfx_blip_001', 1.0);

            ge('resultContainer').innerHTML = eval(formattingButtons[i].functionName);
        }

        btnDivFormatting.append(theButton);
    }

    //-//

    let resultContainer = ce('div');
    resultContainer.id = 'resultContainer';
    resultContainer.style.minHeight = '100px';
    mainContainer.append(resultContainer);
}

