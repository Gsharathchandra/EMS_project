
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Prepare report",
        description: "Compile quarterly sales data.",
        date: "2025-05-20",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Client call",
        description: "Discuss new project requirements with client.",
        date: "2025-05-22",
        category: "Communication",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix bug #421",
        description: "Resolve login issue on mobile.",
        date: "2025-05-18",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    firstName: "Diya",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        title: "Update user manual",
        description: "Revise instructions for new features.",
        date: "2025-05-19",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "QA test payment module",
        description: "Ensure all edge cases are covered.",
        date: "2025-05-20",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix deployment script",
        description: "Resolve CI/CD pipeline errors.",
        date: "2025-05-21",
        category: "DevOps",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Research competitors",
        description: "Analyze pricing strategies.",
        date: "2025-05-17",
        category: "Market Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Design homepage",
        description: "Create a new responsive layout.",
        date: "2025-05-19",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Create wireframes",
        description: "Sketch UX wireframes for feedback.",
        date: "2025-05-18",
        category: "UX",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Client feedback session",
        description: "Present design drafts to the client.",
        date: "2025-05-21",
        category: "Client Interaction",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Optimize SQL queries",
        description: "Improve database performance.",
        date: "2025-05-20",
        category: "Database",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Weekly sync-up",
        description: "Team meeting for progress updates.",
        date: "2025-05-22",
        category: "Meetings",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Resolve ticket #555",
        description: "Investigate user logout issue.",
        date: "2025-05-18",
        category: "Support",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Prepare deployment plan",
        description: "Draft checklist for product release.",
        date: "2025-05-19",
        category: "Planning",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 5,
    firstName: "Karthik",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Create REST API",
        description: "Develop endpoint for data retrieval.",
        date: "2025-05-20",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update UI components",
        description: "Add dark mode support.",
        date: "2025-05-21",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Code review",
        description: "Review teammate's pull request.",
        date: "2025-05-19",
        category: "Code Quality",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Write test cases",
        description: "Add tests for critical modules.",
        date: "2025-05-20",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Onboard new intern",
        description: "Provide documentation and tasks.",
        date: "2025-05-22",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 100,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
   return{employees,admin}
    
    
    
}