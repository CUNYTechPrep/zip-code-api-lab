# Zip Code API

API created using Express that provides city data based on provided zip codes, or zip code data based on provided cities

**API BASE URL:** https://ctp-zip-api.herokuapp.com/

Below is a description of the relevant API endpoints:

### Search by Zip Code

- **URL**

  `/zip/:zipcode`

- **Method**

  `GET`

- **URL Params**

  **Required:**

  `zipcode=[alphanumeric]`

- **Data Params**

  None

- **Success Response**

  - **Status Code:** 200

    **Content:**

    ```JSON
    [
        {"RecordNumber":"247","Zipcode":"10018","ZipCodeType":"STANDARD","City":"NEW YORK","State":"NY","LocationType":"PRIMARY","Lat":"40.71","Long":"-73.99","Xaxis":"0.20","Yaxis":"-0.72","Zaxis":"0.65","WorldRegion":"NA","Country":"US","LocationText":"New York, NY","Location":"NA-US-NY-NEW YORK","Decommisioned":"false","TaxReturnsFiled":"4416","EstimatedPopulation":"5928","TotalWages":"810026753","Notes":""},
        { ... },
        ...
    ]
    ```

- **Error Response**

  - **Status Code:** 404

    **Content:** `Not Found`

- **Examples**

  Provide the zipcode in the url and you will receive a JSON response with an array containing an object for each city found. For example see:

  https://ctp-zip-api.herokuapp.com/zip/10016

### Search by City Name

- **URL**

  `/city/:cityname`

- **Method**

  `GET`

- **URL Params**

  **Required:**

  `cityname=[string]`

  > String must be in all uppercase letters

- **Data Params**

  None

- **Success Response**

  - **Status Code:** 200

    **Content:**

    ```JSON
    ["05343","11405","11411","11412","11413", ...]
    ```

- **Error Response**

  - **Status Code:** 404

    **Content:** `Not Found`

- **Examples**

  Provide the city name in the url and you will receive a JSON response with an array containing all zip codes for that city:

  https://ctp-zip-api.herokuapp.com/city/SPRINGFIELD
