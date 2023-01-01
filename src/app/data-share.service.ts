import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  // A Subject is a special type of Observable that allows values to be multicasted to many Observers. Subjects are like EventEmitters. 
  // Every Subject is an Observable and an Observer. You can subscribe to a Subject, and you can call next to feed values as well as error and complete.

  // =============================== using Subject<T>() ===============================
  // public myData = new Subject<string>(); 
  // <string> is called Generic Type, declaring what kind of data it can hold, it is written inside <diamond-brackets>
  // =============================== using Subject<T>() ===============================
  
  // =============================== using BehaviorSubject<T>('') ===============================
  public myData = new BehaviorSubject<string>(''); 
  // BehaviorSubject<T>('') is : A variant of Subject that requires an initial value and emits its current value whenever it is subscribed to.
  // It works exactly same as Subject, the only difference is that it can pass an initial value which Subject<T>() can not
  // =============================== using BehaviorSubject<T>('') ===============================

  constructor() { }
}
