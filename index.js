// const express = require('express');
// const app = express();

const app = require('express')();
require('dotenv').config();
const port = process.env.PORT || 5400;



    const cities = [
        {
            name: "Lagos",
            population: "14,368,000",
            country: "Nigeria",
            landmass: "1,171 km²",
            landmark: "Lekki Conservation Centre",
            picture: "https://example.com/lagos.jpg"
        },
        {
            name: "Cairo",
            population: "9,500,000",
            country: "Egypt",
            landmass: "606 km²",
            landmark: "Pyramids of Giza",
            picture: "https://example.com/cairo.jpg"
        },
        {
            name: "Kinshasa",
            population: "14,950,000",
            country: "Democratic Republic of the Congo",
            landmass: "9,965 km²",
            landmark: "Lola ya Bonobo",
            picture: "https://example.com/kinshasa.jpg"
        },
        {
            name: "Johannesburg",
            population: "5,635,127",
            country: "South Africa",
            landmass: "1,645 km²",
            landmark: "Apartheid Museum",
            picture: "https://example.com/johannesburg.jpg"
        },
        {
            name: "Nairobi",
            population: "4,397,073",
            country: "Kenya",
            landmass: "696 km²",
            landmark: "Nairobi National Park",
            picture: "https://example.com/nairobi.jpg"
        },
        {
            name: "Addis Ababa",
            population: "4,794,000",
            country: "Ethiopia",
            landmass: "527 km²",
            landmark: "Holy Trinity Cathedral",
            picture: "https://example.com/addis_ababa.jpg"
        },
        {
            name: "Dar es Salaam",
            population: "6,701,650",
            country: "Tanzania",
            landmass: "1,393 km²",
            landmark: "Kariakoo Market",
            picture: "https://example.com/dar_es_salaam.jpg"
        },
        {
            name: "Accra",
            population: "2,291,352",
            country: "Ghana",
            landmass: "225.67 km²",
            landmark: "Kwame Nkrumah Memorial Park",
            picture: "https://example.com/accra.jpg"
        },
        {
            name: "Algiers",
            population: "3,415,811",
            country: "Algeria",
            landmass: "363 km²",
            landmark: "Casbah of Algiers",
            picture: "https://example.com/algiers.jpg"
        },
        {
            name: "Abidjan",
            population: "4,707,000",
            country: "Ivory Coast",
            landmass: "2,119 km²",
            landmark: "St. Paul's Cathedral",
            picture: "https://example.com/abidjan.jpg"
        },
        {
            name: "Kampala",
            population: "1,650,800",
            country: "Uganda",
            landmass: "189 km²",
            landmark: "Kasubi Tombs",
            picture: "https://example.com/kampala.jpg"
        },
        {
            name: "Dakar",
            population: "1,030,594",
            country: "Senegal",
            landmass: "83 km²",
            landmark: "African Renaissance Monument",
            picture: "https://example.com/dakar.jpg"
        },
        {
            name: "Luanda",
            population: "2,487,000",
            country: "Angola",
            landmass: "113 km²",
            landmark: "Fortress of São Miguel",
            picture: "https://example.com/luanda.jpg"
        },
        {
            name: "Harare",
            population: "1,485,231",
            country: "Zimbabwe",
            landmass: "960.6 km²",
            landmark: "Mbare Musika Market",
            picture: "https://example.com/harare.jpg"
        },
        {
            name: "Casablanca",
            population: "3,359,818",
            country: "Morocco",
            landmass: "220 km²",
            landmark: "Hassan II Mosque",
            picture: "https://example.com/casablanca.jpg"
        },
        {
            name: "Douala",
            population: "2,768,400",
            country: "Cameroon",
            landmass: "210 km²",
            landmark: "Douala-Edea Wildlife Reserve",
            picture: "https://example.com/douala.jpg"
        },
        {
            name: "Tripoli",
            population: "1,165,600",
            country: "Libya",
            landmass: "400 km²",
            landmark: "Red Castle Museum",
            picture: "https://example.com/tripoli.jpg"
        },
        {
            name: "Maputo",
            population: "1,101,170",
            country: "Mozambique",
            landmass: "347 km²",
            landmark: "Maputo Central Train Station",
            picture: "https://example.com/maputo.jpg"
        },
        {
            name: "Tunis",
            population: "1,056,247",
            country: "Tunisia",
            landmass: "212.63 km²",
            landmark: "Medina of Tunis",
            picture: "https://example.com/tunis.jpg"
        },
        {
            name: "Bamako",
            population: "2,009,109",
            country: "Mali",
            landmass: "245 km²",
            landmark: "National Museum of Mali",
            picture: "https://example.com/bamako.jpg"
        }
    ];
    
    console.log(cities);

    app.get('/', (req, res) => {
        res.send('working');
        });


    app.get('/api', (req, res) => {
        res.send(cities);
        });

app.listen(port, () => {
    console.log(`server started at port: ${port}`);
})