import React, {useState, useEffect} from 'react'

const url = 'https://restcountries.com/v3.1/all'

const Countries = () => {
    const [countries, setCountries] = useState([])
    
    const getCountryData = async() => {
        const data = await fetch(url)
        const countries = await data.json()
        setCountries(countries)
        console.log(countries)
    }

    useEffect(() => {
        getCountryData()
    }, [])
  return (
    <>

    { countries.map((country, index) => {
        const { name, population, region, capital, flags } = country

        return  (
            <article key={index}>
                <div>
                    <img src={flags.png} alt={name.official} />
                    <h3>{name.official}</h3>
                    <p>Population: {population}</p>
                    <p>Region: {region}</p>
                    <p>Capital: {capital}</p>
                </div>
            </article>
        )
    })}

    </>
  )

  
}

export default Countries