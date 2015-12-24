import AppComponent from './components/app';
import IndexComponent from './components/index';
import AboutComponent from './components/about';

// main routes
const routes = {
  path: '',
  component: AppComponent,
  childRoutes: [
    {
      path: '/',
      component: IndexComponent
    },
    {
      path: '/about',
      component: AboutComponent
    }
  ]
}

export { routes };
