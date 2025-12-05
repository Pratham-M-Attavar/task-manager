A simple command-line Task Manager built using Node.js.  
Supports adding, listing, updating, completing, and removing tasks.  
Tasks are stored in `tasks.json`.
## Commands
### Add a task
node app.js add "Task title"
### List all tasks
node app.js list
### Mark task as done
node app.js done <id>
### Remove a task
node app.js remove <id>
### Update a task title
node app.js update <id> "new title"