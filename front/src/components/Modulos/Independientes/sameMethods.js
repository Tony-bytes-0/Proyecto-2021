let viewHide = function(x){
    alert(x)
    if(x.style.visibility === 'visible'){x.style.visibility = 'hidden';x.style.opacity = '0'}
    else{x.style.visibility = 'visible';x.style.opacity = '100'}
}
let captureInput = function(param){
    let x = document.getElementById(param).value;//console.log(x)
    return x
}
let editContent = function(content, param){
    document.getElementById(param).innerHTML = content
}
let clearInput = function(param){
    document.getElementById(param).value = ""
}
let deletes = async function(id){//console.log(id)
    fetch(this.state.baseUrl + '/' + id,{ "method":"DELETE"})
    .then(response => document.getElementById('fetchBtn').click() )//debo arreglar esto luego
    
}
let viewAllTasks = async function (){
    fetch(this.state.baseUrl)
    .then(response => response.json()) 
    .then(data => {let x = [];let ALLDATA = [];
        data.forEach(element => {x.push([element.name, element.description, element.id])});
        x.forEach(element => {ALLDATA.push(element)})
        this.setState({taskList : ALLDATA});
    })
}

export{viewHide}
