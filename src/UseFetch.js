const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoic3F1YWQ0IiwibmFtZSI6InNxdWFkIGZvdXIiLCJwYXNzd29yZCI6bnVsbCwiQVBJX1RJTUUiOjE1ODk0Njg2Mjh9.u__YkhNdmlvnRUj_qwG9UJJK2BV-rxpYsqd34m73XZQ";
const cubosApiUrl = "https://cubosv2.4040.wtf/api/";
const tasksEndpoint = "https://cubosv2.4040.wtf/api/tasks/";
const staffsEndpoint = "https://cubosv2.4040.wtf/api/staffs/";
const staffsEndpointSearch = "https://cubosv2.4040.wtf/api/staffs/search/";
const projectsEndpoint = "https://cubosv2.4040.wtf/api/projects/";

async function getTasks(taskId) {
    const response = await fetch(tasksEndpoint + taskId, {
        method: "GET",
        headers: {
            authToken: token,
        },
    });
    return response.json();
}
//REspuesta donde regresa la data de task, esta se agrega al componente donde se va a mostrar la data 
// getTasks("1").then((data) => {
//     console.log(data);
// });

async function getStaffs(staffId) {
    const response = await fetch(staffsEndpointSearch + staffId, {
        method: "GET",
        headers: {
            authToken: token,
        },
    });

    return response.json();

}
//REspuesta donde regresa la data de staff, esta se agrega al componente donde se va a mostrar la data 


async function getProjects(projectsId) {
    const response = await fetch(projectsEndpoint + projectsId, {
        method: "GET",
        headers: {
            authToken: token,
        },
    });
    return response.json();
}

export { getStaffs, getProjects, getTasks };
//REspuesta donde regresa la data de projects, esta se agrega al componente donde se va a mostrar la data
// getProjects("1").then((data) => {
//     console.log(data);
// });

