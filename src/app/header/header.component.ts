import { Component, OnInit} from '@angular/core';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dt:DataShareService){}

  ngOnInit(): void {
  }

  public onSearchData(search:any){
    console.log(search.value);

    this.dt.myData.next(search.value);
  }

}
