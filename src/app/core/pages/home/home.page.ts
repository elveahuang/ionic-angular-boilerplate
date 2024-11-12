import { CoreModule } from '@/app/core/core.module';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, CoreModule, RouterOutlet],
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {}
