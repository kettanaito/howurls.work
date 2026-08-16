import React from 'react'

export const Grid = ({ className, children }) => {
  const gridClassNames = [
    'mx-auto w-full max-w-full px-4 md:w-[724px]',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={gridClassNames}>{children}</div>
}
