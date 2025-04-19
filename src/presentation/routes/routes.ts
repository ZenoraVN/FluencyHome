import { ComponentType, LazyExoticComponent, lazy } from 'react';
import MainLayout from '../layouts/MainLayout';

interface RouteConfig {
  path: string;
  element: LazyExoticComponent<ComponentType<any>>;
  layout: ComponentType<{ children: React.ReactNode }>;
}

// Lazy load pages
const HomePage = lazy(() => import('../pages/HomePage'));
const FeaturesPage = lazy(() => import('../pages/FeaturesPage'));
const GuidePage = lazy(() => import('../pages/GuidePage'));
const BlogPage = lazy(() => import('../pages/BlogPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const UnknownPage = lazy(() => import('../pages/UnknownPage'));

const publicRoutes: RouteConfig[] = [
  {
    path: "/",
    element: HomePage,
    layout: MainLayout,
  },
  {
    path: "/tinh-nang",
    element: FeaturesPage,
    layout: MainLayout,
  },
  {
    path: "/huong-dan",
    element: GuidePage,
    layout: MainLayout,
  },
  {
    path: "/blog",
    element: BlogPage,
    layout: MainLayout,
  },
  {
    path: "/lien-he",
    element: ContactPage,
    layout: MainLayout,
  },
  {
    path: "*",
    element: UnknownPage,
    layout: MainLayout,
  },
];

export { publicRoutes };