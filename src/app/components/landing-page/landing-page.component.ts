import { Component, QueryList, ViewChildren } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { NgbdSortableHeader, SortEvent } from 'src/app/directives/sortable.directive';
import { CountryService } from 'src/app/services/country.service';

interface Country {
	id: number;
	name: string;
	flag: string;
	area: number;
	population: number;
}

@Component({
	selector: 'app-landing-page',
	templateUrl: './landing-page.component.html',
	styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent {
	// images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
	images1 = "../../../assets/4 terlalu.png";
	images2 = "../../../assets/Manfaat KB.jpg";

	constructor(public service: CountryService, config: NgbCarouselConfig) {
		config.interval = 15000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;

		this.countries$ = service.countries$;
		this.total$ = service.total$;
	}

	countries$: Observable<Country[]>;
	total$: Observable<number>;

	@ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

	onSort({ column, direction }: SortEvent) {
		// resetting other headers
		this.headers.forEach((header) => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		this.service.sortColumn = column;
		this.service.sortDirection = direction;
	}
}
