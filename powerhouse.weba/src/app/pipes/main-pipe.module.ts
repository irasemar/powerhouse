import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {JsonFilterByPipe} from "./json-filter-by.pipe" // <---

@NgModule({
  declarations:[JsonFilterByPipe], // <---
  imports:[CommonModule],
  exports:[JsonFilterByPipe] // <---
})

export class MainPipe{
    static forRoot() {
        return {
            ngModule: MainPipe,
            providers: [],
        };
     }
}