import {Routes,RouterModule} from '@angular/router'
import {ReportsComponent} from './reports.component'

const routes: Routes=[
		{path:'reports',component:ReportsComponent,
			children:[
				//{path:'',redirectTo:'page1'},
				//{path:'page1',loadChildren: () => require('./homepage/homepage.module')},
				//{path:'page2',loadChildren: () => require('./homepage/homepage.module')}
			]
		}
	]


export const Routing =RouterModule.forRoot(routes,{useHash:true})