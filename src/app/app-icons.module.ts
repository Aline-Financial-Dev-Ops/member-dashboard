import {NgModule} from '@angular/core';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {
  faAngleRight, faArrowRight, faBars, faChartBar, faCheckCircle, faCircle,
  faExclamationCircle, faIdCard,
  faInfoCircle,
  faShieldAlt, faTags, faTimesCircle, faUnlockAlt,
  faUserCheck, faUserCircle,
  faUserPlus, faWallet
} from '@fortawesome/free-solid-svg-icons';
import {faCircle as regCircle} from '@fortawesome/free-regular-svg-icons';

const icons: IconDefinition[] = [
  faAngleRight,
  faUserCheck,
  faUserPlus,
  faInfoCircle,
  faShieldAlt,
  faExclamationCircle,
  faCheckCircle,
  faTimesCircle,
  faUnlockAlt,
  regCircle,
  faBars,
  faChartBar,
  faWallet,
  faTags,
  faUserCircle,
  faArrowRight,
  faIdCard,
  faCircle
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
