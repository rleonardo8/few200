import { Component, OnInit } from '@angular/core';
import { CommunicationsService, selectMessageAsUpper, selectMessageAsLower } from '../communications.service';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-rhs',
  templateUrl: './rhs.component.html',
  styleUrls: ['./rhs.component.css']
})
export class RhsComponent implements OnInit {
  message = '';
  message$: Observable<string>;
  message2$: Observable<string>;
  constructor(private service: CommunicationsService) { }

  ngOnInit() {
    // this.message$ = this.service.getSubscription()
    // .pipe(
    //  filter(word => word === 'TACO'),
    // map(newValue => newValue.toUpperCase()),
    // tap(x => console.log(x))
    // );
    this.message$ = this.service.getSubscription2(selectMessageAsUpper);
    this.message2$ = this.service.getSubscription2(selectMessageAsLower);
  }
  getIt() {
    this.message = this.service.getMessage();
  }
}
