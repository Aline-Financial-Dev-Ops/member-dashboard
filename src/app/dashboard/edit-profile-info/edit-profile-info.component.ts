import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UserProfile} from '@core/models/user-profile.model';
import {FormGroup} from '@angular/forms';
import {UserProfileService} from '@core/services/user-profile.service';
import {UserProfileUpdate} from '@core/models/user-profile-update.model';

@Component({
  selector: 'app-edit-profile-info',
  templateUrl: './edit-profile-info.component.html',
  styleUrls: ['./edit-profile-info.component.sass']
})
export class EditProfileInfoComponent implements OnInit, OnChanges {

  @Input()
  formTitle!: string;

  @Input()
  userProfile?: UserProfile;

  @Input()
  formGroup!: FormGroup;

  initialFormValues = {};

  editMode = false;
  saving = false;

  originalOrder = (): number => {
    return 0;
  }

  constructor(private profileService: UserProfileService) {

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.initialFormValues = this.formGroup.value;
  }

  saveProfile() {
    this.editMode = false;
    this.saving = true;

    const update: UserProfileUpdate = {...this.formGroup.value};

    this.profileService.updateUserProfile(update)
      .subscribe(
        () => {},
        () => {
          this.editMode = true;
        },
        () => {
          this.saving = false;
        }
      )
  }

  editOrCancel() {
    if (this.editMode) {
      this.resetForm();
    }
    this.editMode = !this.editMode;
  }

  resetForm() {
    this.formGroup.setValue(this.initialFormValues);
  }

}
