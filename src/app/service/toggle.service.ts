import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ToggleService {

    constructor() { }

    private Sidebar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


    // sidebar Modal
    getSidebarState() {
        return this.Sidebar;
    }
    setSidebarState(value: boolean) {
        this.Sidebar.next(value);
    }

}

