import BottomChild from './BottomChild'
import React from 'react'
import { cleanup, render, wait } from 'react-testing-library'


describe('#BottomChild component', async () => {
  const component = <BottomChild  />

  beforeEach(cleanup)
  afterAll(cleanup)

  it('should render', () => {
    const { getByTestId } = render(component)
    wait(() =>
        expect(getByTestId('BottomChild')).toBeInTheDOM()
    )
  })

})