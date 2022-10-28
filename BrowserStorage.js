//Cookies are much smaller in size 10kb max
//stored in browser but cookie gets sent on every request 
//If cookies are too large it could slow down request 
//need to set expiration 
document.cookie = 'name=Alex; expires=' + new Date(2022, 0, 1).toUTCString();
//Will create new cookie 
//No expire
document.cookie = 'name=Alex; expires=' + new Date(9999, 0, 1).toUTCString();

//Local storage - biggest browser storage 10 MB max 
//Is around forever until user deletes
localStorage.setItem('name', 'bob');
localStorage.getItem('name');
localStorage.removeItem('name')

//Session storage - 5 mb max
//deletes after browser is closed
sessionStorage.setItem('name', 'john');
sessionStorage.getItem('name');
sessionStorage.removeItem('name');