import { Route } from 'next';

export const ROUTES = {
  HOME: '/' as Route,
  ABOUT: '/about' as Route,
  CATEGORY: Object.assign('/category' as Route, {
    KASHIPAN: '/category/kashipan' as Route,
  }),
  ACCESS: '/access' as Route,
  INQUIRY: '/inquiry' as Route,
  TOPIC: {
    ECOBAG: '/topic/eco-bag' as Route,
  }
} as const; 