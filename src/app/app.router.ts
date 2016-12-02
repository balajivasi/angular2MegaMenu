import { RouterModule,Routes } from '@angular/router';
import { HomePageComponent } from './homePage'

export const routes:Routes=[
	{ 
		path:'',
		redirectTo:'home',
		pathMatch:'full'
	},
	{ 
		path:'home',
		component:HomePageComponent
	},
	{ 
		path:'business',
		loadChildren:() => System.import('./businessPage/businessPage.module')
	},
	{ 
		path:'**',
		redirectTo:'home'
	}
]

export const routing=RouterModule.forRoot(routes,{useHash:true})