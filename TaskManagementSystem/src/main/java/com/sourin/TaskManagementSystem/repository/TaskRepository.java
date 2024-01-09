package com.sourin.TaskManagementSystem.repository;

import com.sourin.TaskManagementSystem.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task,Long> {

    @Query(value = "select * from tasks where id= :id",nativeQuery = true)
    Task findByIdTask(Long id);
}
