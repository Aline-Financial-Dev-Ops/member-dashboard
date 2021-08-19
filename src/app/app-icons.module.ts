import {NgModule} from '@angular/core';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {
  faAngleRight, faCheckCircle,
  faExclamationCircle,
  faInfoCircle,
  faShieldAlt, faTimesCircle,
  faUserCheck,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';

const icons: IconDefinition[] = [
  faAngleRight,
  faUserCheck,
  faUserPlus,
  faInfoCircle,
  faShieldAlt,
  faExclamationCircle,
  faCheckCircle,
  faTimesCircle
];

@NgModule({
  declarations: [],
  imports: [
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class AppIconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(...icons);
  }
}
