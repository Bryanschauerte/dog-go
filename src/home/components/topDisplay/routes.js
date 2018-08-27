import React from 'react'

const subOne = () => < div > subOne < /div>
const subTwo = () => < div > subTwo < /div>
const ChildRoutes = {
	left: [{
		path: '/home/subOne',
		component: subOne
	},
	{
		path: '/home/subTwo',
		component: subTwo
	},
	{
		path: '/',
		component: subOne
	}
	],
	right: [{
		path: '/home/subOne',
		component: subOne
	},
	{
		path: '/home/subTwo',
		component: subTwo
	},
	{
		path: '/',
		component: subOne
	}
	]
}

export default ChildRoutes