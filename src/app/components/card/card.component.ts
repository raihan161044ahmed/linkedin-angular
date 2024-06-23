import { Component, EventEmitter, Input, Output, computed, input,ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,AsyncPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

  @Output() action: EventEmitter<string> = new EventEmitter();
  data = input.required<any>();
  @Input() configs!: Observable<any>;

  longText = computed(() => {
    if (this.data().bodyLong.length > 100)
    {
      return this.data().bodyLong.substring(0, 100) + '..';
    } else{
      return this.data().bodyLong;
    }
  });
}
