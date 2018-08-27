import LeftDisplayContainer from './LeftDisplayContainer'
import React from 'react'
import { cleanup, render, wait } from 'react-testing-library'


describe('#LeftDisplayContainer component', async () => {
  const component = <LeftDisplayContainer  />

  beforeEach(cleanup)
  afterAll(cleanup)

  it('should render', () => {
    const { getByTestId } = render(component)
    wait(() =>
        expect(getByTestId('LeftDisplayContainer')).toBeInTheDOM()
    )
  })

})