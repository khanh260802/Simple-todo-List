const key = 'TODOS'; 
export default { 
    get() { 
        return JSON.parse(localStorage.getItem(key)) || []; 
    },
    set(values) { 
        localStorage.setItem(key, JSON.stringify(values)); 
    }
}