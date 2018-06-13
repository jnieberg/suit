import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
	selector: 'suit-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {
	@ViewChild('content') content;
	@Input() element: 'button' | 'link' | 'input' = 'button';
	@Input() class: string | string[];
	@Input() fa: string;
	@Input() disabled: boolean;
	@Input() type = 'button';
	@Input() value = '';
	@Input() href: string[] = [];
	@Input() alt: string;

	constructor() { }

	ngOnInit(): void {
	}

	get classes(): string {
		return (typeof this.class === 'string') ?
			' btn-' + this.class :
			(typeof this.class === 'object') ?
				' ' + this.class.map(result => 'btn-' + result).join(' ') : null;
	}
}
