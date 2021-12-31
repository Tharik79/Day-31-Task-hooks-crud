// /import logo from './logo.svg';
import './App.css';
import React, {  useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import{ Form, FormGroup, Label, Input, Button} from 'reactstrap';




function App() {

        const [tasks, setTasks] = useState([]); //access to variable we declare.
        const [task, setTask] = useState("");// set variable for the given task input.

      
        function handleSubmit(e) {
          e.preventDefault()
  
          const newTask = {
            id: new Date().getTime(),
            text: task,
            completed: false
  
          }

          setTasks([...tasks].concat(newTask)); //adding new task to existing arry of tasks created.

          setTask("");
        }

          function deleteTask(id) {
            const updatedTasks = [...tasks].filter((task) => task.id !== id) ;
            setTasks(updatedTasks);
          }

          const [taskEdit, setTaskEdit] = useState(null); // null value used becoz no editing work on the starting a task.
          const [editText, setEditText] = useState("");  // existing text input to edit.

          function editTask(id) {

            const updatedTasks = [...tasks].map((task) => {

              if (task.id === id){

                task.text = editText;
              }
              return task;
            })

            setTasks(updatedTasks)
            setTaskEdit(null)
            setEditText("")
          }

          

  return (
    <div className="App">
               
         
    
      <h1> Add Task</h1>
      <Form className='form' onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Your Task</Label>
          <Input type="text" placeholder="Enter Task" 
              onChange={(e) => setTask(e.target.value)} value={task} 
              />
        </FormGroup>
        <Button  type="submit" color='primary'>Submit</Button>
        
      </Form>
      {tasks.map((task) => <div key={task.id} className='task'>

        {taskEdit === task.id ? (
          <Input type='text' onChange={(e) => setEditText(e.target.value)} value={editText} />
        ) :
          
          (<div>{task.text}</div>)
      
      }      
                      {/* below edit and submit buttons applied conditional rendering during editing. */}
          <div >
        
            <Button className='bt'  onClick={() => deleteTask(task.id)} color='danger'>Delete</Button>

             {taskEdit === task.id ? ( <Button className='btr' onClick={() => editTask(task.id)} color='danger'>Submit Edit</Button>) :
          
                             (<Button className='btr'  onClick={() => setTaskEdit(task.id)} color='danger'>Edit</Button>)     
             }
          </div>   
             

        </div>
        
        )}

        
    </div>
  );
}

export default App;




  


