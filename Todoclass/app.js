//where we will collect teh user Input
let TodoList = [];
//collect user input
let Task = document.getElementById( "task" );
let Time = document.getElementById( "time" );
let Personell = document.getElementById( "personell" );

function categorizeInput () {
  let currenTodo = {
    task: Task.value,
    time: Time.value,
    personell: Personell.value,
  };

  ///  TodoList.push(currenTodo);
  if ( Task.value == "" && Time.value == "" && Personell.value == "" ) {
    alert( "FIll an Values" );
  } else {
    TodoList = [ currenTodo, ...TodoList ];
    console.log( TodoList );

    AddToDom();
  }
}

//add Todos to the dom
function AddToDom () {
  let display = "";

  for ( let i = 0; i < TodoList.length; i++ ) {
    display += `<tr>
<td>${TodoList[ i ].task}</td>
<td>${TodoList[ i ].personell}</td>
<td>${TodoList[ i ].time}</td>
<td> <button onclick='deleteTodo(${i})'>Delete</button> </td>
<td> <button onclick='Edit(${i})'>Edit</button> </td>


</tr>`;
  }
  document.getElementById( "table-body" ).innerHTML = display;

  resetForm();
}
AddToDom();

function resetForm () {
  Task.value = "";
  Personell.value = "";
  Time.value = "";
}

function deleteTodo ( i ) {
  console.log( "Delete operation" );
  TodoList.splice( i, 1 );
  AddToDom();
}
