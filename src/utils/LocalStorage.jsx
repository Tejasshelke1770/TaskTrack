
    const employee = [
      {
        "id": 1,
        "name": "John",
        "email": "employee1@example.com",
        "password": "123",
        "taskCount":{
          "completed": 1,
          "active": 2,
          "failed": 1,
          "newTask": 1
        },
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Complete Project Report",
            "description": "Finalize and submit the project report by end of the week.",
            "date": "2024-11-20",
            "category": "Work"
          },
          {
            "active": true,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Team Meeting",
            "description": "Participate in the weekly team meeting.",
            "date": "2024-11-15",
            "category": "Meeting"
          },
          {
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true,
            "taskTitle": "Update Client Presentation",
            "description": "Revise the client presentation based on feedback.",
            "date": null,
            "category": null
          }
        ]
      },
      {
        "id": 2,
        "name" :"Mathew",
        "email": "employee2@example.com",
        "password": "123",
        "taskCount":{
          "completed": 1,
          "active": 3,
          "failed": 0,
          "newTask": 1
        },
        "tasks": [
          {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Research Market Trends",
            "description": "Conduct research on current market trends for the upcoming strategy meeting.",
            "date": "2024-11-22",
            "category": "Research"
          },
          {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "Prepare Budget Forecast",
            "description": "Create a budget forecast for the next quarter.",
            "date": null,
            "category": null
          },
          {
            "active": true,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Submit Expense Reports",
            "description": null,
            "date": null,
            "category": null
          }
        ]
      },
      {
        "id": 3,
        "name": "David",
        "email": "employee3@example.com",
        "password": "123",
        "taskCount":{
          "completed": 1,
          "active": 2,
          "failed": 0,
          "newTask": 1
        },
        "tasks": [
          {
              active: true, 
              newTask: true, 
              completed: false, 
              failed: false, 
              taskTitle: 'Design New Marketing Campaign', 
              description: 'Create a new marketing campaign for product launch.', 
              date: '2024-11-30', 
              category: 'Marketing'
          },
          {
              active: true, 
              newTask: false, 
              completed: false, 
              failed: false, 
              taskTitle: 'Client Follow-Up', 
              description: 'Follow up with clients regarding their feedback.', 
              date: '2024-11-28', 
              category: 'Client'
          },
          {
              active: false, 
              newTask: false, 
              completed: true, 
              failed: false, 
              taskTitle: 'Team Building Activity', 
              description: 'Organize a team-building activity for the department.', 
              date: '2024-11-10', 
              category: 'Event'
          }
        ]
      },
      {
        id: 4,
        "name": "Franklin",
        email: 'employee4@example.com',
        password: '123',
        "taskCount":{
          "completed": 1,
          "active": 2,
          "failed": 1,
          "newTask": 1
        },
        tasks: [
          {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle: 'Implement New Feature',
            description: 'Develop and implement the new feature in the application.',
            date: '2024-12-01',
            category: 'Development'
          },
          {
            active: true,
            newTask: false,
            completed: true,
            failed: false,
            taskTitle: 'Code Review',
             description:'Review code submitted by team members.',
             date:null, 
             category:null
           },
           {
             active:false, 
             newTask:false, 
             completed:false, 
             failed:true, 
             taskTitle:'Fix Bugs in Application', 
             description:'Address bugs reported in the last sprint.', 
             date:null, 
             category:null
           }
         ]
       },
       {
         id: 5,
         "name":"Gorge",
         email: 'employee5@example.com',
         password: '123',
         "taskCount":{
          "completed": 1,
          "active": 3,
          "failed": 0,
          "newTask": 1
        },
         tasks: [
           {
             active: true, 
             newTask: true, 
             completed: false, 
             failed: false, 
             taskTitle: 'Create User Documentation', 
             description: 'Draft user documentation for the new software.', 
             date: '2024-11-29', 
             category: 'Documentation'
           },
           {
             active: true,  
             newTask:false,  
             completed:true,  
             failed:false,  
             taskTitle:'Conduct Training Session',  
             description:'Conduct a training session for new employees.',  
             date:null,  
             category:null
           },
           {
             active:true,  
             newTask:false,  
             completed:false,  
             failed:false,  
             taskTitle:'Review Internal Policies',  
             description:'Review and update internal policies as necessary.',  
             date:'2024-12-05',  
             category:'Policy'
           }
         ]
       }
     ]

  const admin = [
        {
        id :1 ,
        email :'admin@example.com' ,
        name :"Admin",
        password :'123' 
      }
  ]

  // localStorage.clear()
  export const setLocalStorage = () =>{
        localStorage.setItem("employee" , JSON.stringify(employee))
        localStorage.setItem("admin" , JSON.stringify(admin))
  }
// setLocalStorage()

  export const getLocalStorage = ()=>{
     const employees = JSON.parse(localStorage.getItem('employee'))
     const admin = JSON.parse(localStorage.getItem('admin'))
     
     return {employees, admin}
     
  }