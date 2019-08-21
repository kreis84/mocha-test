const unique = (collection, uniqueAttr) => 
{
    if(!uniqueAttr){
        return Array.from(new Set(collection))
    }
    const set = new Set()
    const result = []
    collection.forEach(item => {
        if(!set.has(item[uniqueAttr])){
            set.add(item[uniqueAttr])
            result.push(item)
        }
    })
    return result;
}

const memoize = (wrappedFn) => {
    const cache = {}
    return (...args) => { 
        const key = JSON.stringify(args)
        if(!cache[key]) {
            cache[key] = wrappedFn(...args)
        }
        return cache[key];
    }
}

module.exports = {
    unique, memoize
}