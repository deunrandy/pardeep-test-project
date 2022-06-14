import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MOCK_PROJECTS, MOCK_TASKS } from 'src/app/shared/constants/mock.constant';
import { IProjectTable } from 'src/app/shared/interface/project.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public projects = MOCK_PROJECTS
  public tasks = MOCK_TASKS
  public projectTable: IProjectTable[] = []
  public task: string = ''
  public totalEstimate: number = 0;
  public form!: FormGroup;
  public employees: any[] = [];
  public hasError: boolean = false;
  public isSuccess: boolean = false;
  public errorMessage: string = '';
  public readonly formFields = ['task', 'totalEstimate']
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      task: [null, Validators.required],
      totalEstimate: [null, Validators.required],
    })

  }

  addEmployee() {
    let id = uuidv4()
    this.employees.push({ id, estimate: 0 })
    this.form.addControl((id).toString(), new FormControl(null, Validators.required));

  }

  submitForm() {
    this.isSuccess = false;
    if (this.form.invalid) {
      this.hasError = true;
      this.errorMessage = "Please fill up all required fields"
      return;
    }
    let formValues = this.form.getRawValue();
    if (Object.keys(formValues).length < 3){
      this.hasError = true;
      this.errorMessage = "Task should have at least 1 employee estimate"
      return
    }

    let total = 0;
    Object.keys(formValues).forEach((estimate) => {
      if (this.formFields.includes(estimate)){
        return;
      }
      total += formValues[estimate];
    })
    if (formValues.totalEstimate !== total){
      this.hasError = true;
      this.errorMessage = "Total estimate is not equal to employee estimates"
      return
    } else {
      this.hasError = false;
      this.isSuccess = true;
    }
  }

  removeEmployee(id: string) {
    this.employees = this.employees.filter(item => item.id !== id);
    this.form.removeControl(id);
  }
}
