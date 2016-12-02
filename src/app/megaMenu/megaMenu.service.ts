import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map'

@Injectable()

export class MegaMenuService{
	
	constructor(private _http:Http){

	}

	getMegaMenuService():Observable<any>{
		
		return this._http.get('assets/data.json')
				  		 .map((response)=>
				  		 	{
				  		 		return response.json()
				  		 	}
				  		 )
	}


}




