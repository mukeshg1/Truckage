import { ComponentCanDeactivate } from './component-can-deactivate';
import { FormGroup } from '@angular/forms';

export abstract class FormCanDeactivate extends ComponentCanDeactivate {

 abstract get profileForm(): FormGroup;

 canDeactivate(): boolean {
   console.log(!this.profileForm.dirty);
   return  !this.profileForm.dirty;
  }
}
