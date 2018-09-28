import {  OnDestroy, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class AutoUnsubscribe implements  OnDestroy {

    public unsubscribe: Subject<void> = new Subject();

    ngOnDestroy() {
     this.unsubscribe.next();
     this.unsubscribe.complete();
     console.log('ngOnDestory');
    }
}