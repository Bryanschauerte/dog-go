import RightDisplayContainer from './RightDisplayContainer'
import React from 'react'
import { cleanup, render, wait } from 'react-testing-library'


describe('#RightDisplayContainer component', async () => {
  const component = <RightDisplayContainer  />

  beforeEach(cleanup)
  afterAll(cleanup)

  it('should render', () => {
    const { getByTestId } = render(component)
    wait(() =>
        expect(getByTestId('rightdisplaycontainer')).toBeInTheDOM()
    )
  })

})