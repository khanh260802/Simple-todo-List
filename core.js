function html([first, ...strings], ...values) { 
    return strings.reduce( (result, string) => { 
        return result.concat( values.shift(), string); 
    }, [first])
    .filter( x => x && x !== true || x === 0 )
    .join('')
}

function createStore(reducer) { 
    let state = reducer(); 
    const roots = new Map(); 

    function render() { 
        for( const [root, component] of roots) {
            root.innerHTML = component(); 
        }
    }

    return { 
        attach(component, root) { 
            roots.set(root, component); 
            render(); 
        }, 
        connect(selector = state => state) { 
            return component => (props, ...args) => 
                component(Object.assign({}, props, selector(state), ...args)); 
        }, 
        dispatch(action, ...args) { 
            state = reducer(state, action, args); 
            render(); 
        }
    }
}

export {html, createStore}; 







