import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UnderDevelopmentComponent } from './components/under-development/under-development.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            }
        ]

    },
    {
        path: 'services',
        component: UnderDevelopmentComponent
    },
    {
        path: 'products',
        component: UnderDevelopmentComponent
    },
    {
        path: 'about-us',
        component: UnderDevelopmentComponent
    },

];
