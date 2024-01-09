import React, { useEffect, useState } from 'react'
import { createTask, getTaskById, updateTask } from '../service/TaskService';
import { useNavigate, useParams } from 'react-router-dom';

function TaskComponent() {
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [completed,setCompleted]=useState('');

    const[errors,setErrors]=useState({
      title:'',
      description:'',
      completed:''
    })
  
   const navigator=useNavigate();
   
   const {id}=useParams();
   
   useEffect(()=>{

    if(id){
        getTaskById(id).then((response)=>{
          setTitle(response.data.title);
          setDescription(response.data.description);
          setCompleted(response.data.completed);
        }).catch((err)=>{
            console.error(err);
        })   
    }

   },[id])


   function saveAndUpdateEmploye(e){
    e.preventDefault();

    if(validation()){

      const task={title,description,completed};

      if(id){
        updateTask(id,task).then((response)=>{
            console.log(response.data);
             navigator("/");
          }).catch((err)=>{
             console.error(err);
          })
      }else{
          createTask(task).then((response)=>{
              console.log(response.data);
              navigator("/");
          }).catch((err)=>{
            console.error(err);
          })
  
      }

    }
    


      
    }

    function validation(){

      let valid=true;

      const errorsCopy={... errors};
      if (title.trim()) {
         errorsCopy.title='';
      }else{
        errorsCopy.title='Title is required';
        valid=false;
      }

      if (description.trim()) {
        errorsCopy.description='';
     }else{
       errorsCopy.description='Description is required';
       valid=false;
     }

     if (completed.trim()) {
      errorsCopy.completed='';
   }else{
     errorsCopy.completed='Required Please Write True or False';
     valid=false;
   }

     setErrors(errorsCopy);
     return valid;

    }

    function pageTitle(){
      if(id){
        return <h2 className='text-center'>Update Task</h2>
      }else{
        return <h2 className='text-center'>Add Task</h2>
      }
    }

  return (
    <div className='container'>
    <div className='row'>
       <div className="card col-md-6 offset-md-3 my-5">
       {
        pageTitle()
       }
        <div className="card-body">

             <form>
                <div className='form-group mb-2'>
                    <label className='form-label'>Task Task</label>
                    <input
                            type='text'
                            placeholder='Enter Task Title'
                            name='title'
                            value={title}
                            className={`form-control ${errors.title?'is-invalid':''}`}
                            onChange={(e) => setTitle(e.target.value)}

                    
                        >
                        </input>
                        {errors.title && <div className='invalid-feedback'>{errors.title}</div>}

                </div>
                <div className='form-group mb-2'>
                    <label className='form-label'>Task Description</label>
                    <input
                            type='text'
                            placeholder='Enter Task Description'
                            name='description'
                            value={description}
                            className={`form-control ${errors.description?'is-invalid':''}`}
                            onChange={(e) => setDescription(e.target.value)}
                            
                        >
                        </input>
                        {errors.description && <div className='invalid-feedback'>{errors.description}</div>}

                </div>

                <div className='form-group mb-2'>
                    <label className='form-label'>Enter Task Done or Not</label>
                    <input
                            type='text'
                            placeholder='Enter Task Done or Not / True or False '
                            name='completed'
                            value={completed}
                            className={`form-control ${errors.completed?'is-invalid':''}`}
                            onChange={(e) => setCompleted(e.target.value)}
                            
                        >
                        </input>
                        {errors.completed && <div className='invalid-feedback'>{errors.completed}</div>}

                </div>
                

                <button className="btn btn-success my-3" onClick={saveAndUpdateEmploye}>Sumbit</button>

             </form>


           </div>
         
         
         
         </div>

    </div>
</div>
  )
}

export default TaskComponent