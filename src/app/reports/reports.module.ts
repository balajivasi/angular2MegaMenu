import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ReportsComponent} from './reports.component'
import {FormsModule} from '@angular/forms'

import {Routing} from './reports.routing'

@NgModule({
	imports:[Routing,CommonModule,FormsModule],
	declarations:[ReportsComponent]
})


export class ReportsModule{
	
}