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
    <section className='card'>

    { countries
    .sort((a,b) => a.name.official - b.name.official).map((country, index) => {
        const { name, population, region, capital, flags } = country

        return  (
            <article key={index}>
                <div>
                    <img src={flags.svg} alt={name.official} />
                    <div className='details'>
                        <h3>{name.official}</h3>
                        <p>Population: <span>{population}</span></p>
                        <p>Region: <span>{region}</span></p>
                        <p>Capital: <span>{capital}</span></p>
                    </div>
                </div>
            </article>
        )
    })
    }

    </section>
    </>
  )

  
}

export default Countries