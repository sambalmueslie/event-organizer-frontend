import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-event-change',
  templateUrl: './event-change.component.html',
  styleUrls: ['./event-change.component.scss']
})
export class EventChangeComponent implements OnInit {

  eventForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.eventForm = fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      rounds: ['1', Validators.required],
      mapId: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submit() {
    if (!this.eventForm.valid) {
      return;
    }
    console.log(this.eventForm.value);
  }
}
