import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Feed from './pages/Feed';
import New  from './pages/New';

function Routes(){
    return(
        <Switch> {/* Switch certifica que somente uma rota será chamada. "Route" sozinho chama o primeiro o componente cujo "path" está contido na URL. "Exact" faz o match ser exato. */}
            <Route path="/" exact component={Feed} />   {/* "/": Rota inicial, sem adicionar URL, chama componente Feed. */}
            <Route path="/new" component={New} /> {/* "/new": Quando usuário digital /new, chama o componente New. */}
        </Switch>
    );
}

export default Routes;