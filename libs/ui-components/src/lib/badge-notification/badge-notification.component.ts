import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'everteam-badge-notification',
  templateUrl: './badge-notification.component.html',
  styleUrls: ['./badge-notification.component.scss']
})

export class BadgeNotificationComponent implements OnInit {
  // Flags
  hideNotification: boolean = true;
  @Input() counterBadge!: any[];

  constructor() { }

  ngOnInit() { }

  deleteNotification() {
    this.hideNotification = false;
  }
}