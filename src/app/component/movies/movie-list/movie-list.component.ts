import { Component, OnInit, Input } from '@angular/core';
import { AppConfig } from './../../../config/config.constant';

@Component({
	selector: 'app-movie-list',
	templateUrl: './movie-list.component.html',
	styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
	@Input() movies: Array<any>=[];
	@Input() flag: string;
	public movieUrl=AppConfig.baseUrl;
	constructor() { 
	}

	ngOnInit() {
	}

}
