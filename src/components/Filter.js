import React from 'react'
import { GrSearch } from 'react-icons/gr';

const Filter = () => {
  return (
    <>
        <section className='filter'> 

            <form className='form-control'>

                <div className='searchBar'>
                    <GrSearch className='icon'/>
                    <input type="search" name="search" id="search" placeholder="Search for country" />
                </div>
            
            </form>

            <div className='region-filter'>
                <select name="select" id="select" className="select">
                    <option value="Filter By Region">Filter By Region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    </>
  )
}

export default Filter