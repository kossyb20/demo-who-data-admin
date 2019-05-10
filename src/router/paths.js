/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/dashboard',
    // Relative to /src/views
    view: 'Dashboard',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/annual-summaries',
    name: 'Annual Summaries',
    view: 'AnnualSummaries',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/user-manager',
    name: 'User Manager',
    view: 'UserManager'
  },
  {
    path: '/center-manager',
    name: 'Center Manager',
    view: 'CenterManager',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/create-center',
    name: 'Create Center',
    view: 'CreateCenter',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/entries',
    name: 'Entries',
    view: 'Entries',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    view: 'Login',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/create-user',
    name: 'Create User',
    view: 'CreateUser',
    meta: {
      requiresAuth: true
    }
  },
  // {
  //   path: '/typography',
  //   view: 'Typography'
  // },
  // {
  //   path: '/icons',
  //   view: 'Icons'
  // },
  // {
  //   path: '/maps',
  //   view: 'Maps'
  // },
  // {
  //   path: '/notifications',
  //   view: 'Notifications'
  // },
  // {
  //   path: '/upgrade',
  //   name: 'Upgrade to PRO',
  //   view: 'Upgrade'
  // }
]
