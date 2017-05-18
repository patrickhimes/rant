import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<h1>Welcome to {{name}}</h1>
            <rants></rants>`
})
export class AppComponent  { name = '< Rant >'; }
