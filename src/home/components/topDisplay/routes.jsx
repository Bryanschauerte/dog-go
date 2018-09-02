import React from 'react'
import { Redirect } from 'react-router-dom'
import LargeMediaDisplay from '../largeMediaDisplay/LargeMediaDisplay.jsx'
// const SubOne = () => <div> subOne </div>
const SubTwo = () => <div> subTwo </div>
const Default = () => <Redirect to="home/0" />
const ChildRoutes = {
	right: [
		{
			path: '/0',
			component: LargeMediaDisplay
		},
		{
			path: '/2',
			component: SubTwo
		},
		{
			path: '/1',
			component: Default
		}
	],
	left: [
		{
			path: '/0',
			component: LargeMediaDisplay
		}
	]
}

export default ChildRoutes
