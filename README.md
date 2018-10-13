# Zip Code API

This repository is the solution to the [CUNY Tech Prep week 4 in-class project](https://github.com/CUNYTechPrep/week-04-projects). The code contained here is meant to implement a zip code API using ```Express.js```. The API has two main endpoints:

1. localhost:8000/zip/:zipcode
2. localhost:8000/city/:cityname

The first endpoint is used to request information based on zip code number, and the second for retrieving all the zip codes associated with a given city name.  

To start the API locally, change directories into ```zip-code-api``` and run ```node app.js```. Then, in a browser window, enter any of the two endpoints above. The API will respond appropriately if the zip code or city name is valid, otherwise a 404 code is returned in the response. For example:

* localhost:8000/zip/11377
* localhost:8000/city/WOODSIDE
