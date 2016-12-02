import {Component} from '@angular/core'


@Component({
	selector:'Reports',
	templateUrl:'./reports.html'
})

export class ReportsComponent{
	
	frmmain:any;

	public checklist=[
		{
			"id":"1",
			"name":"balaji"
		},
		{
			"id":"2",
			"name":"charan"
		},
		{
			"id":"3",
			"name":"nithi"
		},
		{
			"id":"4",
			"name":"kumari"
		},
		{
			"id":"5",
			"name":"Raj"
		}
	]



	onSubmit(val):void{
		debugger;
		this.frmmain=val
	}
}