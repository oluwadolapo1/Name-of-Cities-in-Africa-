// const express = require('express');
// const app = express();

const app = require('express')();
require('dotenv').config();
const mongoose = require('mongoose');
const port = process.env.PORT || 5400;
const URI = process.env.uri || undefined;


mongoose.connect(URI)
.then(() => {
    console.log('Lift off!, database neural handshake completed');
})
.catch((err) => {
    console.log(err);
})


    const cities = [
        {
            name: "Lagos",
            population: "14,368,000",
            country: "Nigeria",
            landmass: "1,171 km²",
            landmark: "Lekki Conservation Centre",
            picture: "https://media.istockphoto.com/id/518024848/photo/lekki-ikoyi-link-bridge-lagos-nigeria.jpg?s=1024x1024&w=is&k=20&c=Z_KgmkwwBAdzZv3349uGK4ZLqvzMXv9_m6DcC0Nl-c8="
        },
        {
            name: "Cairo",
            population: "9,500,000",
            country: "Egypt",
            landmass: "606 km²",
            landmark: "Pyramids of Giza",
            picture: "https://images.pexels.com/photos/30298145/pexels-photo-30298145/free-photo-of-camels-resting-by-the-pyramids-of-giza-at-daytime.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "Kinshasa",
            population: "14,950,000",
            country: "Democratic Republic of the Congo",
            landmass: "9,965 km²",
            landmark: "Lola ya Bonobo",
            picture: "https://images.pexels.com/photos/30219278/pexels-photo-30219278/free-photo-of-aerial-view-of-bukavu-democratic-republic-of-congo.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Johannesburg",
            population: "5,635,127",
            country: "South Africa",
            landmass: "1,645 km²",
            landmark: "Apartheid Museum",
            picture: "https://images.pexels.com/photos/13754840/pexels-photo-13754840.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Nairobi",
            population: "4,397,073",
            country: "Kenya",
            landmass: "696 km²",
            landmark: "Nairobi National Park",
            picture: "https://media.istockphoto.com/id/1299026534/photo/nairobi-kenya.jpg?s=1024x1024&w=is&k=20&c=LeOxyYOOTjEZ7CxOckrR_Y9_XKRG-ldEsQi4dA_yR2M="
        },
        {
            name: "Addis Ababa",
            population: "4,794,000",
            country: "Ethiopia",
            landmass: "527 km²",
            landmark: "Holy Trinity Cathedral",
            picture: "https://images.pexels.com/photos/2101159/pexels-photo-2101159.png?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Dar es Salaam",
            population: "6,701,650",
            country: "Tanzania",
            landmass: "1,393 km²",
            landmark: "Kariakoo Market",
            picture: "https://images.pexels.com/photos/31093714/pexels-photo-31093714/free-photo-of-vibrant-afghan-market-scene-with-vendors.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Accra",
            population: "2,291,352",
            country: "Ghana",
            landmass: "225.67 km²",
            landmark: "Kwame Nkrumah Memorial Park",
            picture: "https://media.istockphoto.com/id/1450804000/photo/picturesque-night-view-of-the-mall-area-illuminated-with-colorful-lights-in-accra-ghana.jpg?s=1024x1024&w=is&k=20&c=zhgQdntWMXWfB5NOz4Qs3rlUZFigMAMFlRByCerHBq8="
        },
        {
            name: "Algiers",
            population: "3,415,811",
            country: "Algeria",
            landmass: "363 km²",
            landmark: "Casbah of Algiers",
            picture: "https://images.pexels.com/photos/30976818/pexels-photo-30976818/free-photo-of-bustling-urban-scene-in-algiers-algeria.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Abidjan",
            population: "4,707,000",
            country: "Ivory Coast",
            landmass: "2,119 km²",
            landmark: "St. Paul's Cathedral",
            picture: "https://www.pexels.com/photo/aerial-view-of-flyover-roads-and-highways-on-a-metropolitan-area-7381785/"
        },
        {
            name: "Kampala",
            population: "1,650,800",
            country: "Uganda",
            landmass: "189 km²",
            landmark: "Kasubi Tombs",
            picture: "https://images.pexels.com/photos/29512760/pexels-photo-29512760/free-photo-of-sunlit-alley-in-ugandan-market-town.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Dakar",
            population: "1,030,594",
            country: "Senegal",
            landmass: "83 km²",
            landmark: "African Renaissance Monument",
            picture: "https://images.pexels.com/photos/14598168/pexels-photo-14598168.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Luanda",
            population: "2,487,000",
            country: "Angola",
            landmass: "113 km²",
            landmark: "Fortress of São Miguel",
            picture: "https://images.pexels.com/photos/2767923/pexels-photo-2767923.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Harare",
            population: "1,485,231",
            country: "Zimbabwe",
            landmass: "960.6 km²",
            landmark: "Mbare Musika Market",
            picture: "https://images.pexels.com/photos/13355611/pexels-photo-13355611.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Casablanca",
            population: "3,359,818",
            country: "Morocco",
            landmass: "220 km²",
            landmark: "Hassan II Mosque",
            picture: "https://images.pexels.com/photos/3049885/pexels-photo-3049885.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Douala",
            population: "2,768,400",
            country: "Cameroon",
            landmass: "210 km²",
            landmark: "Douala-Edea Wildlife Reserve",
            picture: "https://images.pexels.com/photos/17290985/pexels-photo-17290985/free-photo-of-crowded-street-in-nigeria.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Tripoli",
            population: "1,165,600",
            country: "Libya",
            landmass: "400 km²",
            landmark: "Red Castle Museum",
            picture: "https://images.pexels.com/photos/12095379/pexels-photo-12095379.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Maputo",
            population: "1,101,170",
            country: "Mozambique",
            landmass: "347 km²",
            landmark: "Maputo Central Train Station",
            picture: "https://images.pexels.com/photos/30188152/pexels-photo-30188152/free-photo-of-aerial-view-of-maputo-cityscape-with-bustling-streets.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Tunis",
            population: "1,056,247",
            country: "Tunisia",
            landmass: "212.63 km²",
            landmark: "Medina of Tunis",
            picture: "https://images.pexels.com/photos/30660316/pexels-photo-30660316/free-photo-of-urban-street-scene-in-a-rainy-mediterranean-city.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Bamako",
            population: "2,009,109",
            country: "Mali",
            landmass: "245 km²",
            landmark: "National Museum of Mali",
            picture: "https://images.pexels.com/photos/7573711/pexels-photo-7573711.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
    ];
    
    console.log(cities);

    app.get('/', (req, res) => {
        // res.send('working');
        res.sendFile(__dirname+'/public/index.html')
        // res.send(__dirname)
        });


    app.get('/api', (req, res) => {
        res.send(cities);
        });

app.listen(port, () => {
    console.log(`server started at port: ${port}`);
})