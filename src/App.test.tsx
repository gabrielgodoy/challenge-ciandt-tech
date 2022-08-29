import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('should display correct text', () => {
    const rendered = render(<App />)
    expect(rendered.getByText("Gotta Catch'Em All!!!!")).toBeInTheDocument
  })
})
