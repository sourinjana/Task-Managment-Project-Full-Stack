import axios from 'axios';
const REST_API="http://localhost:8080/api/tasks";

export const listTasks=()=>{
      return axios.get(REST_API);
}
export const createTask=(task)=>{
    return axios.post(REST_API,task);
}

export const deleteTask=(taskId)=>{
    return axios.delete(REST_API+'/'+taskId);
}

export const getTaskById=(taskId)=>{
     return axios.get(REST_API+'/'+taskId);

}

export const updateTask=(taskId,task)=>{
     return axios.put(REST_API+'/'+taskId,task)
}