import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routing } from './businessPage.router'
import { BusinessPageComponent } from './businessPage.component'
import { BusinessComponent } from './business.component'

import { GasAndElectricityComponent } from './gasAndElectricity'

import { MegaMenuComponent } from '../megaMenu';
import { MegaMenuService } from '../megaMenu/megaMenu.service'


@NgModule({
	imports:[
		CommonModule,
		Routing
	],
	declarations:[
		BusinessPageComponent,
		BusinessComponent,
		MegaMenuComponent,
		GasAndElectricityComponent
	],
	providers:[
		MegaMenuService
	]
})

export class BusinessPageModule{

}
