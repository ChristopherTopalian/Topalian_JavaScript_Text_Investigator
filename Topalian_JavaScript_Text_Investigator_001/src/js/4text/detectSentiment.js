// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// detectSentiment.js

function detectSentiment(whichText)
{
    // positive words
    let positiveWords = ["happy", "joy", "love", "excellent", "good", "great", "fantastic", "positive", "nice", "wonderful"];

    // negative words
    let negativeWords = ["sad", "anger", "hate", "terrible", "bad", "horrible", "negative", "mean", "evil"];

    // initialize sentiment scores
    let positiveScore = 0;
    let negativeScore = 0;

    // convert whichText to lowercase and split it into words
    let words = whichText.toLowerCase().split(/\W+/);

    // loop through words in whichText
    for (let i = 0; i < words.length; i++)
    {
        let word = words[i];

        // is word in list of pos words
        for (let j = 0; j < positiveWords.length; j++)
        {
            if (word === positiveWords[j])
            {
                positiveScore++;
                // exit inner loop if match found
                break;
            }
        }

        // is word in list of neg words
        for (let k = 0; k < negativeWords.length; k++)
        {
            if (word === negativeWords[k])
            {
                negativeScore++;
                // exit inner loop if match found
                break;
            }
        }
    }

    let sentiment;

    // determine sentiment
    if (positiveScore > negativeScore)
    {
        sentiment = "Positive";
    }
    else if (negativeScore > positiveScore)
    {
        sentiment = "Negative";
    }
    else
    {
        sentiment = "Neutral";
    }

    return sentiment;
}

