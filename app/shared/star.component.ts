import { Component, OnChanges, Input
    , Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'amazing-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.scss'],
})

export class StarComponent {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth =  86 * this.rating/5
    }

    onClick(){
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}
