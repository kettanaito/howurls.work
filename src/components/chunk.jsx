import React, { useMemo, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router'

const popoverClassNames = [
  'absolute [--offset:6rem] top-(--offset) w-[85%] whitespace-normal font-sans text-[1rem]',
  'md:w-[550px]',
  'tall:[--offset:5rem] tall:w-[370px]',
  '[&_a]:inline-block [&_a]:text-primary [&_a]:no-underline',
  '[&_a:hover]:-mb-px [&_a:hover]:border-b [&_a:hover]:border-dotted [&_a:hover]:border-primary',
  '[&_a:focus]:outline-none [&_a:focus]:-mb-px [&_a:focus]:border-b [&_a:focus]:border-dotted [&_a:focus]:border-primary',
].join(' ')

const buttonClassNames = 'inline-block cursor-pointer focus:outline-none'

const activeClassNames =
  'text-primary -mb-px border-b border-dotted border-primary'

const inactiveClassNames = [
  'hover:text-black hover:-mb-px hover:border-b hover:border-dotted hover:border-primary',
  'focus:text-primary focus:-mb-px focus:border-b focus:border-dotted focus:border-primary',
].join(' ')

export const Chunk = ({
  children,
  color,
  align,
  orientation,
  explanation,
  url,
}) => {
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = useMemo(() => {
    return location.pathname.includes(url)
  }, [location.pathname, url])

  const handleChunkClick = useCallback(() => {
    navigate(`/${url}`, { replace: true })
  }, [url, navigate])

  const orientationClassNames =
    orientation === 'top'
      ? 'tall:top-auto tall:bottom-(--offset)'
      : ''

  const alignClassNames = align === 'right' ? 'tall:right-0' : 'tall:left-0'

  return (
    <span className="md:relative" style={{ '--color-primary': color }}>
      <button
        className={[
          buttonClassNames,
          isActive ? activeClassNames : inactiveClassNames,
        ].join(' ')}
        onClick={handleChunkClick}
      >
        {children}
      </button>
      {isActive && explanation && (
        <div
          className={[popoverClassNames, orientationClassNames, alignClassNames]
            .filter(Boolean)
            .join(' ')}
        >
          {explanation()}
        </div>
      )}
    </span>
  )
}
