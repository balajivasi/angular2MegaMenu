import { RouterModule,Routes } from '@angular/router';
import { BusinessPageComponent } from './businessPage.component'
import { BusinessComponent } from './business.component'
import { GasAndElectricityComponent } from './gasAndElectricity'


const routes:Routes=[
	{ 	
		path:'business',
		component:BusinessPageComponent,
		children:[
			{
				path:'',
				component:BusinessComponent,
				pathMatch:'full'
			},
			{ 
				path:':page',
				children:[
					{ 
						path: '',
						component:GasAndElectricityComponent,
						pathMatch:'full'
					},
					{ 
						path:':subMenu',
						children:[
							{
								path:'',
								component:GasAndElectricityComponent,
								pathMatch:'full'
							},
							{
								path:':link',
								component:GasAndElectricityComponent			
							}
						]
									
					}
				]
			}
		]
	}
]

export const Routing=RouterModule.forRoot(routes,{useHash:true})