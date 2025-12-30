import { createMemoryHistory, createRouter } from 'vue-router';
import { UserPage } from 'src/pages/UserPage';
import { OrganizationPage } from 'src/pages/OrganizationPage';

const routes = [
  { 
    path: '/', 
    name: 'home',
    component: UserPage 
  },
  { 
    path: '/user', 
    name: 'user',
    component: UserPage 
  },
  { 
    path: '/organization', 
    name: 'organization',
    component: OrganizationPage 
  }
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes
})