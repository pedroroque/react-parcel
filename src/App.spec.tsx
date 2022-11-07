import React from 'react'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import { App } from './App'

describe('App', () => {
  beforeEach(() => render(<App />))

  it('should render', () => {
    expect(screen.getByText(/Hello World/i)).toBeDefined()
  })

  it('should error', () => {
    expect(screen.getByText(/Hello World/i)).toBeUndefined()
  })
})
