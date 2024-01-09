import React, { useEffect, useState } from 'react'
import { deleteTask, listTasks } from '../service/TaskService';
import { useNavigate } from 'react-router-dom';

function ListTaskComponent() {

    const [tasks,setTasks]=useState([]);

    const navigator=useNavigate();

    function getAllTasks(){
      listTasks().then((response)=>{
        setTasks(response.data);
      }).catch((err)=>{
        console.log("Connection Failed"+err);
        console.error(err);
      })
    }

    useEffect(()=>{
       getAllTasks();
    },[])
     
    function newAddEmployee(){
       navigator("/add-task")
    }

    function taskUpdate(id){
    navigator(`/edit-task/${id}`)
    console.log("navigate to update");

    }

    function removeTask(id){
        deleteTask(id).then((reponse)=>{
          getAllTasks();
        }).catch((err)=>{
          console.log("Delete note Done"+err);
          console.error(err);
        })
    }
  return (

    <div className='container my-3'>
    <h2 className='text-center'>List of Tasks</h2>
    <button className='btn btn-dark my-3' onClick={newAddEmployee}>Add Task</button>
      <table className='table table-striped table-bordered'>
          <thead>
                <tr>
                <th>Task Id</th>
                <th>Task Title</th>
                <th>Task Description</th>
                <th>Task completed/Or not</th>
                <th>Actions</th>
                </tr>
  </thead>
  <tbody>

    { 
    tasks.map(task=>

      <tr key={task.id}>
          <td>{task.id}</td>
          <td>{task.title}</td>
          <td>{task.description}</td>
          <td>{task.completed}</td>
          <td>
          <button className='btn btn-info' onClick={()=> taskUpdate(task.id)}>Update</button>
          <button className='btn btn-danger mx-2' onClick={()=> removeTask(task.id)}>Delete</button>
        </td>
       </tr>)

    }
         
       
  </tbody>
</table>

    </div>
  )
}

export default ListTaskComponent