package com.example.backend.repository;

import com.example.backend.domain.TodoEntity
import org.springframework.data.jpa.repository.JpaRepository

interface TodoRepository: JpaRepository<TodoEntity, Long> {
}
