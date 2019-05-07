var Constants = {

  //Text
  PAGE_TITLE: "World's Best Todo App",

  //Timeouts
  ALERT_MESSAGE_TIMEOUT: 10000, //Set to 10 thousand miliseconds

  //Authorization
  LOGIN_URL_LOCAL: '/auth/login/local',
  LOGIN_URL_GOOGLE: '/auth/login/google',
  REGISTER_URL_LOCAL: '/auth/register/local',
  
  //Hello.js

  GOOGLE_APP_ID: "256484107452-8gj6m3blt5p1imomu80kiaalc3pq5s4s.apps.googleusercontent.com",
  GOOGLE_APP_SECRET: "WhOMQd83qQ1AtAPyHxVALE9t",


  //Todo apis
  API_TASKS_GETALL: '/api/task_getall',
  API_TASKS_CREATE: '/api/task_create',
  API_TASKS_TOGGLEDONE: '/api/task_toggledone',
  API_TASKS_DELETE: '/api/task_delete',

  API_TAGS_GETALL: '/api/tasktag_getall',
  API_TAGS_CREATE: '/api/tasktag_create',
  API_TAGS_DELETE: '/api/tasktag_delete',

}  

export default Constants;