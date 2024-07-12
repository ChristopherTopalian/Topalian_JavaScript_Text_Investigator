// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// fetchMostRecentEarthquakeData.js

function fetchMostRecentEarthquakeData()
{
    fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&orderby=time&minmagnitude=4.5')

    .then(function(response)
    {
        if (!response.ok)
        {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })

    .then(function(data)
    {
        if (data.features.length > 0)
        {
            // get most recent earthquake
            let earthquake = data.features[0];

            // format date
            let date = new Date(earthquake.properties.time);

            let formattedDate = `${date.toDateString()} ${date.toLocaleTimeString()}`;

            // make earthquake info string
            let earthquakeInfo = `Date: ${formattedDate}, Magnitude: ${earthquake.properties.mag}, Location: ${earthquake.properties.place}`;

            // set value of textInput element with earthquake info
            ge("textInput").value = earthquakeInfo;

            return earthquakeInfo;
        }
        else
        {
            throw new Error('No earthquake data found');
        }
    })

    .catch(function(error)
    {
        console.error('Error fetching earthquake data:', error);
    });
}

