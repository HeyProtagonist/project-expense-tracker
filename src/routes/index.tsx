import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Charts, Home, Messages, Profile, Report } from '../pages'

interface Props {}

const RootRoute = (props: Props) => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/messages' component={Messages} />
            <Route path='/explore' component={Charts} />
            <Route path='/profile' component={Profile} />
            <Route path='/report' component={Report} />
        </Switch>
    )
}

export default RootRoute
