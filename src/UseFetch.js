const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoic3F1YWQ0IiwibmFtZSI6InNxdWFkIGZvdXIiLCJwYXNzd29yZCI6bnVsbCwiQVBJX1RJTUUiOjE1ODk0Njg2Mjh9.u__YkhNdmlvnRUj_qwG9UJJK2BV-rxpYsqd34m73XZQ";
const cubosApiUrl = "https://cubosv2.4040.wtf/api/";
const tasksEndpoint = "https://cubosv2.4040.wtf/api/tasks/";

async function getTasks(taskId) {
    const response = await fetch(tasksEndpoint + taskId, {
        method: "GET",
        headers: {
            authToken: token,
        },
    });
    return response.json();
}

getTasks("1").then((data) => {
    console.log(data);
});
