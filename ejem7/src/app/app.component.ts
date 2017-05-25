import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {

    name = 'Anybody';
    gender: string;
    javascript = false;
    angular = false;
    items = [
        { value: 'Item1', selected: true },
        { value: 'Item2', selected: false }
    ];
    city: string;

    @ViewChild('titleInput') titleInput: ElementRef;
    title: string;

    change() {
        this.name = 'Nobody';
        this.angular = !this.angular;
        this.javascript = !this.javascript;
        this.gender = this.gender === 'Male' ? 'Female' : 'Male';

        for (const item of this.items) {
            item.selected = !item.selected;
        }
    }

    update(city: string) {
        console.log('City: ' + city);
        this.city = city;
    }

    updateTitle() {
        this.title = this.titleInput.nativeElement.value;
        this.titleInput.nativeElement.value = '';
    }
}
