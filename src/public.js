// import {default as process_callbacks} from './processors/process_callbacks'
import {NodeQuery} from './modifiers/nodequery'
// import {trigger_call} from './triggers'
import {Dispatcher, middleware, dispatchers} from './helpers'
import {DataStack, datastacks} from './stacks'
import {Router} from './routers'
// import {Request} from './requests'
import {load} from './loaders'
import {ready, debounce, range, randomCharacters, findAttribute, getTarget, findElementWithAttribute} from './utils'
import {render, node } from './renderers'
import {Component, model} from './components'

export const one = NodeQuery.one.bind(document)
export const all = NodeQuery.all.bind(document)
export const events = (new Dispatcher())
export const router = (new Router())
export const stack = (new DataStack())
export const componentActions = {}
export { 
    // process_callbacks, 
    // trigger_call, 
    // Request, 
    load, 
    ready, 
    debounce, 
    range, 
    randomCharacters, 
    findAttribute, 
    getTarget, 
    render, 
    node, 
    model,
    Component, 
    middleware, 
    findElementWithAttribute,
    datastacks,
    dispatchers,
}

export const settings = {
  pushPath: true,
  pushPathId: "content"
}