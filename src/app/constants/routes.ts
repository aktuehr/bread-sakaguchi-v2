import { Route } from 'next';

export const ROUTES = {
  HOME: '/' as Route,
  ABOUT: '/about' as Route,
  CATEGORY: Object.assign('/category' as Route, {
    KASHIPAN: '/category/kashipan' as Route,
    SOUZAIPAN: '/category/souzaipan' as Route,
    CROISSANT: '/category/croissant' as Route,
    DANISH: '/category/danish' as Route,
    FRENCH_BREAD: '/category/french-bread' as Route,
    TENNENKOUBO: '/category/tennenkoubo' as Route,
    DONUT: '/category/donut' as Route,
    ROLLPAN: '/category/rollpan' as Route,
    SANDWICH: '/category/sandwich' as Route,
    SHOKUPAN: '/category/shokupan' as Route,
    SWEETS: '/category/sweets' as Route,
  }),
  ACCESS: '/access' as Route,
  INQUIRY: '/inquiry' as Route,
  TOPIC: {
    ECOBAG: '/topic/eco-bag' as Route,
  }
} as const; 