package com.example.backend.controller

import com.example.backend.domain.Todo
import com.example.backend.repository.TodoRepository
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class TodoController(private val todoRepository: TodoRepository) {
//    // setup database,
//    // not h2
//    // install postgres
//    // install docker deskop
//    // this is memory, not database
//    private val defaultTodos = listOf(
//        Todo(1, "Hello"),
//        Todo(2, "World"),
//        Todo(3, "Honda"),
//        Todo(4, "Tanzu")
//    )

    @GetMapping( "/todos")
    @CrossOrigin
    fun getTodoList(): List<String> {
        return todoRepository.findAll()
            .map { it.task }
    }
    // today study
    // what do you learn today?
    // 1. create database
    // 2. create table
    // 3. insert data
    // 4. different h2(embedded database for test) and real database
    // 5. library add (maven site)
    // 6. backend connect to database
}