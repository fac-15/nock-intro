// LET'S MOCK AN API RESPONSE WITH NOCK :D

// require nock and htttps

const nock = require("nock");
const https = require("https");

// create our dummy headers

const headers = {
    "Content-Type": "application/json"
};

// create our dummy response

const response = {
    name: "Ditto",
    weight: 40,
    types: [
        {
            slot: 1,
            type: {
                name: "normal",
                url: "https://pokeapi.co/api/v2/type/1/"
            }
        }
    ]
};

// nock will intercept a GET request to the /api/v2/pokemon/pikachu endpoint
// and will REPLY with a 200 status code and our dummy response (above)

nock("https://pokeapi.co/")
    .get("/api/v2/pokemon/pikachu/")
    .reply(200, response, headers);

// this runs our https request (we need to use https for the API)

https
    .get("https://pokeapi.co/api/v2/pokemon/pikachu/", res => {
        console.log("statusCode:", res.statusCode);
        console.log("headers:", res.headers);

        // data is delivered back to https as a stream
        process.stdout.write("body: ");
        res.on("data", d => {
            process.stdout.write(d);
        });
    })
    .on("error", e => {
        console.error(e);
    });
