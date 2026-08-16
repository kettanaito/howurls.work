import React from 'react'
import { Link } from 'react-router'
import Logo from '../images/logo-small.svg?react'
import { Grid } from './grid'

export const Header = () => {
  return (
    <header>
      <Grid>
        <div className="flex items-center justify-center py-[2rem]">
          <Link
            className="inline-flex rounded-[2px] focus:shadow-[0_0_0_3px_hsla(9,83%,58%,0.3)] focus:outline-none"
            to="/"
            title="How URLs work?"
          >
            <Logo />
          </Link>
        </div>
      </Grid>
    </header>
  )
}
