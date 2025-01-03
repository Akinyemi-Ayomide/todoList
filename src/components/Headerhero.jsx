

const Headerhero = ({todos_completed, total_todos}) => {
  return (
    <section>
        <div>
            <p>Todo Done</p>
            <p>Keep it up</p>
        </div>
        <div>
            {todos_completed}/{total_todos}
        </div>
    </section>
  )
}

export default Headerhero
