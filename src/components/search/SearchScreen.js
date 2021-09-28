import React, { useMemo } from 'react'
import queryString from 'query-string'

import { useLocation } from 'react-router';
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

  const { search } = useLocation()

  const { q = '' } = queryString.parse(search)

  const [formValues, handleInputChange, reset] = useForm({ searchHero: q })

  const { searchHero } = formValues


  const heroesFiltered = useMemo(() => getHeroesByName(q), [q])


  const handleSearch = (e) => {
    e.preventDefault()
    history.push(`?q=${searchHero}`)
  }


  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className='row' >
        <div className='col-5' >
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              tpye='text'
              placeholder='Find your hero'
              className='form-control'
              name='searchHero'
              value={searchHero}
              autoComplete='off'
              onChange={handleInputChange}
            />
            <button
              className='btn m-1 btn-block btn-primary'
              type='submit'

            >
              Search
            </button>

          </form>
        </div>
        <div className='col-7' >
          <h4>Results</h4>
          <hr />
          {
            (q === '') && <div className='alert alert-info' >
              Search a hero
            </div>
          }
          {
            (q !== '' && heroesFiltered.length === 0) && <div className='alert alert-danger' >
              There is not a hero with {q}
            </div>
          }
          {
            heroesFiltered.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>

      </div>
    </div>
  )
}
