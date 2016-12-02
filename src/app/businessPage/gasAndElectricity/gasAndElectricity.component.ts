import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'

@Component({
	selector:'gasAndElectricity',
	templateUrl:'./gasAndElectricity.html',
	styleUrls:['./gasAndElectricity.scss']
})

export class GasAndElectricityComponent implements OnInit{
	
	pageTitle:string | number;
	breadcrumb:any;

	constructor(private _activatedRoute:ActivatedRoute,private _router:Router){

	}
	ngOnInit(){
		this.breadcrumb=this._router.url.slice(1).split('/');

		this._activatedRoute.params.subscribe(params => {
			this.pageTitle=params['page'];
        });
	}
}
