
## Run Locally

Clone the project

```bash
  git clone https://github.com/Procen/task-list-example.git
```

Go to the project directory

```bash
  cd task-list-example
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Usage

1. In the project directory, you can find file `tasks.json`.
There is an example of the data to be received in the response. You can use data from this file, or create your own data using the same format.
```bash
  Example:
  [{
    "id": 1,
    "title": "Buy groceries",
    "description": "Milk, bread, and eggs",
    "dueDate": "2023-10-25",
    "createdAt": "2023-10-20",
    "priority": "High",
    "storyPoints": 2
  }]
```
2. Copy your JSON.  Go to the [Moki](https://mocki.io/) and paste the JSON into the `Free API Editor`.
3. Click `Create API` to get a mock URL:
```bash
Example: https://mocki.io/v1/b0605e54-dc48-497c-aecd-82fd16f8a3bf
```
4. Copy the recived URL.  Go back to the project `src/services/tasks.ts`  and paste the URL in the url constant.
```bash
  const url = "https://mocki.io/v1/b0605e54-dc48-497c-aecd-82fd16f8a3bf";
```