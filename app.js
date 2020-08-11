function Data(){
    var name = document.getElementById("name");
    var roll = document.getElementById("roll");

    var key = firebase.database().ref('student').push().key

    var student = {
        name: name.value,
        roll: roll.value,
        key: key
    }


    firebase.database().ref('student/' + key).push(student)

}


///////// firebase show database in console (  working in two steps first one is [once] and second is [on]   )///////

function getDatabase(){
    firebase.database().ref('student').on('child_added',function(data){
  
        console.log(data.val())
    })
}

getDatabase()




///////////////////// firebse remove data base /////////////////////////

// function removedatabase(){
//     firebase.database().ref('student/-METmDAZTOw6GvpO6mp3').remove()
// }

// removedatabase()


/////////////////////    firebase Edit Database ///////////////////////////

// function editDatabase(){
//     firebase.database().ref('student/-METkoTp39QmNIE3WzV-').set({
//         key: "-METkoTp39QmNIE3WzV-",
//         name: "Farhan",
//         roll: "345"
//     })
// }

// editDatabase()