import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-servey",
  templateUrl: "./servey.component.html",
  styleUrls: ["./servey.component.css"],
})
export class ServeyComponent implements OnInit {
  @ViewChild("surveyform") surveyform: FormGroup;
  roles = [
    "Student",
    "Full Time Job",
    "Full Time Learner",
    "Prefer not to say",
    "Other",
  ];
  likes = ["Challenges", "Projects", "Community", "Open Source"];
  recommends = ["Definitely", "Maybe", "Not sure"];
  checks = [
    "Front-end Projects",
    "Back-end Projects",
    "Data Visualization",
    "Challenges",
    "Open Source Community",
    "Gitter help rooms",
    "Videos",
    "City Meetups",
    "Wiki",
    "Forum",
    "Additional Courses",
  ];
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    // this.check/box.push(this.surveyform.controls['check'].value);
    console.log(this.surveyform);
  }
}
