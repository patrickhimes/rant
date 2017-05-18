import { Component, OnInit } from '@angular/core';

import { Rant } from './rant';
import { RantService } from './rant.service';

@Component( { 
    selector: 'rants',
    templateUrl: './rants.component.html'
} )

export class RantsComponent implements OnInit{

    rants: Rant[];
    
    constructor ( private rantService: RantService) {}

    add(rantText: string): void {
        rantText = rantText.trim();

        if (!rantText) { return; }
        this.rantService.create(rantText)
        .then(rant => {
            this.rants.push(rant);
        });
    }

    getRants() : void {
        this.rantService.getRants().then( rants => this.rants = rants);
    }

    ngOnInit(): void {
        this.getRants();
    }

}