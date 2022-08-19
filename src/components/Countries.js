import React, {useState, useEffect} from 'react'
import { GrSearch } from 'react-icons/gr';

const url = 'https://restcountries.com/v3.1/all'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [q, setQ] = useState("");
    const [f, setF] = useState("Filter By Region");
    // const [filterParam, setFilterParam] = useState(["Filter By Region"])



    const getCountryData = async() => {
        const data = await fetch(url)
            const countries = await data.json()
            setCountries(countries)
    }

    useEffect(() => {
        getCountryData()
    }, [])

    const handleSearchInput = (e) => {
        e.preventDefault()
        const lowercase = e.target.value.toLowerCase();
        setQ(lowercase)
        // console.log(q)
    }

    const handleFilter = (e) => {
        setF(e.target.value)
        console.log(f)
    }

    const filteredCountries = countries.filter((country) => {
        if(q === ''){
            if (f === 'Filter By Region'){
                return country;
            }
            else if(f === 'Asia'){
                return country.region === 'Asia'
            }
            else if(f === 'Africa'){
                return country.region === 'Africa'
            }
            else if(f === 'Americas'){
                return country.region === 'Americas'
            }
            else if(f === 'Europe'){
                return country.region === 'Europe'
            }
            else if(f === 'Oceania'){
                return country.region === 'Oceania'
            }
        }
        else {
            return country.name.official.toLowerCase().startsWith(q)
        }
    })

      return (
        <>
        <section className='filter'> 

        <form className='form-control'>

        <div className='searchBar'>
            <GrSearch className='icon'/>
            <input onChange={handleSearchInput} type="search" name="search" id="search" placeholder="Search for country" value={q}/>
        </div>

        </form>

            <div className='region-filter'>
                 <select onChange={handleFilter} name="select" id="select" className="select">
                     <option value="Filter By Region">Filter By Region</option>
                     <option value="Africa">Africa</option>
                     <option value="Americas">Americas</option>
                     <option value="Asia">Asia</option>
                     <option value="Europe">Europe</option>
                     <option value="Oceania">Oceania</option>
                 </select>
             </div>

        </section>

        <section className='card'>

        { 
                filteredCountries.map((country, index) => {
                    const { name, population, region, capital, flags } = country
                
                    return  (
                        <article key={index}>
                            <div className='item'>
                                <div className='img-container'> 
                                <img src={flags.svg} alt={name.official} />
                                </div>
                                
                                <div className='details'>
                                    <h3 className='country-name'>{name.official}</h3>
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
      );
  
}

export default Countries