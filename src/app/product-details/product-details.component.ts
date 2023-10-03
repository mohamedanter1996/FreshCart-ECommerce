import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
constructor(private _activatedRoute:ActivatedRoute){}
ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((param)=>{
      console.log(param.get("id"));
    })
}
}
