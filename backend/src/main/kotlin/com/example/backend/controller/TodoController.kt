import com.example.backend.DefaultTodo.Todo
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class TodoController {
    private val defaultTodos = listOf(
        Todo(1, "Hello"),
        Todo(2, "World"),
        Todo(3, "Honda"),
        Todo(4, "Tanzu")
    )

    @GetMapping(name = "/todos")
    @CrossOrigin
    fun getTodoList(): List<Unit> {
        return defaultTodos.map { it.task }
    }
}