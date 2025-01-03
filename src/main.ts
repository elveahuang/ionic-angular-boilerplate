import { AppComponent } from '@/app/app.component';
import { routes } from '@/app/app.routes';
import { CoreModule } from '@/app/core/core.module';
import { environment } from '@/environments/environment';
import { enableProdMode, importProvidersFrom, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withHashLocation } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        provideExperimentalZonelessChangeDetection(),
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        provideClientHydration(),
        provideIonicAngular(),
        provideRouter(routes, withHashLocation()),
        importProvidersFrom(CoreModule.forRoot()),
    ],
}).catch((e) => console.error(e));
