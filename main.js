
// Adding Vehicle JSON Array
var myArray = [
    {"vehicalID" : 1,"vehicalPhoto" : "image/1.jpeg","VehicleYear": 2008,"VehicleMake": "Ford","VehicleModel": "Mustang","VehicleSubTrim": "GT Base","Height": 55.4,"Width": 73.9,"Length": 187.6,"GroundClearance": 5.71},
    {"vehicalID" : 2,"vehicalPhoto" : "image/2.jpg","VehicleYear": 2009,"VehicleMake": "Toyota","VehicleModel": "Highlander","VehicleSubTrim": "XL","Height": 60.2,"Width": 83.,"Length": 187.6,"GroundClearance": 5.71},
    {"vehicalID" : 3,"vehicalPhoto" : "image/3.jpg","VehicleYear": 2012,"VehicleMake": "Hyndai","VehicleModel": "Tyscon","VehicleSubTrim": "VS","Height": 52.8,"Width": 73.9,"Length": 187.6,"GroundClearance": 5.71},
    {"vehicalID" : 4,"vehicalPhoto" : "image/4.jpg","VehicleYear": 2025,"VehicleMake": "Honda","VehicleModel": "CR-V","VehicleSubTrim": "Base","Height": 45.9,"Width": 73.9,"Length": 187.6,"GroundClearance": 5.71}
]


//Logic to return the searched result
$('#search-input').on('keyup',function(){
    var value = $(this).val()
    console.log('Value:', value)
    var data = searchTable(value, myArray)
    buildTable(data)
    
})

// Original Table -- Including all the values without filtering    
buildTable(myArray)

// Function to search for the user specific vehicle with Modl Name
function searchTable(value,data){
    var filtereddata = []
    for (var i=0; i<data.length; i++){
        value = value.toLowerCase()
        var name  = data[i].VehicleModel.toLowerCase()

        if(name.includes(value)){
            filtereddata.push(data[i])
        }
    }

    return filtereddata
}
    

// Function to return the JSON values and sending it back to HTML Page i.e. Index.html    
function buildTable(data){
    var table = document.getElementById('myTable')
    
    table.innerHTML = ''
    
    for (var i = 0; i < data.length; i++){
        
        var row = `<tr>
                        <td>${data[i].vehicalID}</td>
                        <td><img src=${data[i].vehicalPhoto} Width = "300" Height = "200"></td>
                        <td>${data[i].VehicleMake}</td>
                        <td>${data[i].VehicleModel}</td>
                        <td>${data[i].VehicleSubTrim}</td>
                        <td>${data[i].VehicleYear}</td>
                        <td>${data[i].Height}</td>
                        <td>${data[i].Width}</td>
                        <td>${data[i].Length}</td>
                        <td>${data[i].GroundClearance}</td>
                   </tr>`
        table.innerHTML += row
    }
}
