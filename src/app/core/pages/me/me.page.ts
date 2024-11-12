import { CoreModule } from '@/app/core/core.module';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-me',
    standalone: true,
    imports: [CommonModule, CoreModule, RouterOutlet],
    templateUrl: 'me.page.html',
    styleUrls: ['me.page.scss'],
})
export class MePage {}
