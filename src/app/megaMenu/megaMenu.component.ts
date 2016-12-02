import { Component,OnInit } from '@angular/core';
import { MegaMenuService } from './megaMenu.service'

@Component({
	selector:'MegaMenu',
	styleUrls:['./megaMenu.scss'],
	templateUrl:'./megaMenu.html'
})

export class MegaMenuComponent implements OnInit{
	
	megaMenuData:any;

	constructor(private _megaMenuService:MegaMenuService){

	}

	ngOnInit(){
		this.getMegaMenuData()
	}

	getMegaMenuData(){
		this._megaMenuService.getMegaMenuService()
							 .subscribe((data)=>{
							 	this.megaMenuData=data;
							 })
	}

	getwidth(val){
		let value = 100 / val;
		return `${value}%`
	}

}