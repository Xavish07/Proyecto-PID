import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators, ReactiveFormsModule,ValidatorFn} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='miProyecto';
  submitted = false;
  isBold = false;
  isItalic = false;
  categoryForm: FormGroup = new FormGroup({});

  

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  this.categoryForm = this.fb.group({
    denomination: ['', Validators.required],
    startDate: ['', [Validators.required, minDateTodayValidator]],
    endDate: [''],
    color: ['#ff0000'],
    description: [''],
    fontFamily: ['Helvetica']
  }, { validators: this.dateOrderValidator });
}

  // Custom validator for date order
  dateOrderValidator(group: FormGroup) {
    const start = group.get('startDate')?.value;
    const end = group.get('endDate')?.value;
    if (start && end && end < start) {
      group.get('endDate')?.setErrors({ dateOrder: true });
    } else {
      group.get('endDate')?.setErrors(null);
    }
    return null;
  }

  get f() { return this.categoryForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.categoryForm.invalid) return;
    // Handle submit logic
    alert('Formulario válido y enviado');
  }

  onCancel() {
    // Handle cancel logic
    this.categoryForm.reset({
      color: '#ff0000',
      fontFamily: 'Helvetica'
    });
    this.submitted = false;
  }

  onApply() {
    this.submitted = true;
    if (this.categoryForm.valid) {
      // Handle apply logic (e.g., save but not close)
      alert('Cambios aplicados');
    }
  }

  toggleBold() {
    this.isBold = !this.isBold;
  }

  toggleItalic() {
    this.isItalic = !this.isItalic;
  }
}

export const minDateTodayValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value;
  if (!value) return null;

  
  const selected = new Date(value);
  selected.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return selected < today ? { minDateToday: true } : null;
};