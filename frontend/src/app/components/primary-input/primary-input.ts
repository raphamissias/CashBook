import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type InputTypes = 'text' | 'email' | 'password' | 'checkbox';

@Component({
  selector: 'app-primary-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrimaryInput),
      multi: true,
    },
  ],
  templateUrl: './primary-input.html',
  styleUrl: './primary-input.css',
})
export class PrimaryInput implements ControlValueAccessor {
  @Input() type: InputTypes = 'text';
  @Input() inputName: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';

  value: string = '';
  isChecked: boolean = true;
  onChange: any = () => {};
  onTouched: any = () => {};

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;

    this.type === 'checkbox' ? this.onChange(input.checked) : this.onChange(input.value);
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {}
}
