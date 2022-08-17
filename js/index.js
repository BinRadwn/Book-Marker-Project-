var sitNameInput = document.getElementById("sitName");
var sitUrlInput = document.getElementById("sitUrl");
var arr ;

if(localStorage.getItem("list") == null){
    arr = []
}
else{
    arr = JSON.parse(localStorage.getItem("list")) 
    displayData()
}


function Submit(){
    var content ={
        name : sitNameInput.value,
        url  : sitUrlInput.value
    }
    arr.push(content)
    localStorage.setItem("list",JSON.stringify(arr))
    displayData()
}



function deleteIndex(index){
    arr.splice(index, 1)
    displayData()
}
function displayData(){
    var temp = "";
    for(var i = 0;i<arr.length; i++){
        temp += `<div class="d-flex content p-5 mt-4">
					<h3>` + arr[i].name + `</h3>
				<div class="mx-auto w-50">
                <a href="` + arr[i].url + `" target="_blank"><button class="btn btn-Primary">visit</button></a>
					<button class="btn btn-Danger" onclick="deleteIndex(`+ i +`)">delete</button>
				</div>
				</div>`
    }
    document.getElementById("visitDelet").innerHTML = temp
}
