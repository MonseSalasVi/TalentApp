const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoic3F1YWQ0IiwibmFtZSI6InNxdWFkIGZvdXIiLCJwYXNzd29yZCI6bnVsbCwiQVBJX1RJTUUiOjE1ODk0Njg2Mjh9.u__YkhNdmlvnRUj_qwG9UJJK2BV-rxpYsqd34m73XZQ";
//const cubosApiUrl = "https://cubosv2.4040.wtf/api/";
const tasksEndpoint = "https://cubosv2.4040.wtf/api/tasks/";
const staffsEndpoint = "https://cubosv2.4040.wtf/api/staffs/";
const staffsEndpointSearch = "https://cubosv2.4040.wtf/api/staffs/search/";
const projectsEndpoint = "https://cubosv2.4040.wtf/api/projects/";
const allTasksEndpoint = "https://cubosv2.4040.wtf/api/tasks/search/?keysearch=";

async function getTasks(taskId) {
    const response = await fetch(tasksEndpoint + taskId, {
        method: "GET",
        headers: {
            authToken: token,
        },
    });
    return response.json();
}

async function getStaffs(staffId) {
    const response = await fetch(staffsEndpointSearch + staffId, {
        method: "GET",
        headers: {
            authToken: token,
        },
    });
    return response.json();
}



async function getProjects(projectsId) {
    const response = await fetch(projectsEndpoint + projectsId, {
        method: "GET",
        headers: {
            authToken: token,
        },
    });
    return response.json();
}

async function allTasks() {
    const response = await fetch(allTasksEndpoint, {
        method: "GET",
        headers: {
            authToken: token,
        },
    });
    return response.json();
}

export {
    getStaffs,
    getProjects,
    getTasks,
    allTasks
};