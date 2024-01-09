package com.sourin.TaskManagementSystem.service;

import com.sourin.TaskManagementSystem.entity.Task;
import com.sourin.TaskManagementSystem.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;
    public ResponseEntity<String> addTask(Task task) {
          taskRepository.save(task);
          return ResponseEntity.ok("Save Done");
    }

    public List<Task> findAllTask() {
        List<Task> tasks=taskRepository.findAll();
        return tasks;
    }


    public ResponseEntity<Task> findTaskById(Long id) {
        Task task=taskRepository.findByIdTask(id);
        return ResponseEntity.ok(task);
    }

    public ResponseEntity<String> updateTaskById(Long id, Task updateTask) {
        Task taskList=taskRepository.findByIdTask(id);
        if(taskList!=null){
            taskList.setTitle(updateTask.getTitle());
            taskList.setDescription(updateTask.getDescription());
            taskList.setCompleted(updateTask.getCompleted());
            taskRepository.save(taskList);
            return ResponseEntity.ok("Update Done");
        }

        return ResponseEntity.ofNullable("Id Not Found");
    }

    public ResponseEntity<String> deleteTaskById(Long id) {
        Task taskList=taskRepository.findByIdTask(id);
        if(taskList!=null){
            taskRepository.delete(taskList);
            return ResponseEntity.ok("Delete Done");
        }
        return ResponseEntity.ofNullable("Id Not Found");
    }
}
