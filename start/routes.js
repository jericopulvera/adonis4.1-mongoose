'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')
const Foo = use('App/Models/Foo')

Route.get('/', async () => {
  const foo = await Foo.create({ title: 'TEST' })
  console.log(foo)
  return JSON.stringify(foo)
})
