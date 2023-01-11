import React from "react";
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate"
import { GEO_API_URL, geoApiOptions } from "./api";

function Search({ onSearchChange }) {

    const [search, setSearch] = useState(null)

    const loadOptions = (inputValue) => {
        return fetch(
            `${GEO_API_URL}/cities?&namePrefix=${inputValue}`,
            geoApiOptions
        )
            .then(response => response.json())
            .then(response => {
                return {
                    //response is an object with a key of data which is an array that we need to map thru to get specific data points
                    options: response.data.map((city) => {
                        return {
                            //need lat and long for the API weather app to find location, so pull just that information the fetched data
                            value: `${city.latitude} ${city.longitude}`,
                            //will auto complete with the 'label' key in the format we put as the value
                            label: `${city.name}, ${city.countryCode}`,
                        }
                    })
                }
            })
            .catch(err => console.error(err));
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData)
        // setSearch('')
    }


    return (
        <>
            {/* AsyncPaginate is a package install that just allows a few more features such as:
        debounceTimeout- allow search to autocomplete after x milliseconds 
        loadOptions - */}
            <AsyncPaginate
                placeholder="Search for City"
                debounceTimeout={600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}

            />

        </>
    )
}

export default Search
