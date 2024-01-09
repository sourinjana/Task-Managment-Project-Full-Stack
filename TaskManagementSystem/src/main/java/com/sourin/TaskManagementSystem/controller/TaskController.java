package com.sourin.TaskManagementSystem.controller;

import com.sourin.TaskManagementSystem.entity.Task;
import com.sourin.TaskManagementSystem.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    @Autowired
    private TaskService taskService;
    @PostMapping
    public ResponseEntity<String> addTask(@RequestBody Task task){
        return taskService.addTask(task);
    }


    @GetMapping
    public List<Task> findAllTask(){
        return taskService.findAllTask();
    }

    @GetMapping("{id}")
    public ResponseEntity<Task> findTaskById(@PathVariable Long id){
        return taskService.findTaskById(id);
    }

    @PutMapping("{id}")
    public ResponseEntity<String> updateTaskById(@PathVariable Long id,@RequestBody Task updateTask){
        return taskService.updateTaskById(id,updateTask);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTaskById(@PathVariable Long id){
        return taskService.deleteTaskById(id);
    }

}
