import { Component, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'app-consulting-patient',
  templateUrl: './consulting-patient.component.html',
  styleUrls: ['./consulting-patient.component.scss']
})
export class ConsultingPatientComponent {

  constructor(public service: CountryService, private router: Router) {
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

  onNext() {
    this.router.navigate(["login"])
  }

}
