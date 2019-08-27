import { Injectable, EventEmitter, Output } from '@angular/core';
import { Subject, } from 'rxjs';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

@Injectable()
export class LoaderService {
    isLoading = new Subject<boolean>();
    show() {
        this.isLoading.next(true);
    }
    hide() {
        this.isLoading.next(false);
    }
}
@Injectable()
export class UpdateService {
    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

    UpdateSaldo(): void {
        this.getLoggedInName.emit(10);
    }
}