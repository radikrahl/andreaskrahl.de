import {
  AnimationAnimateMetadata,
  AnimationBuilder,
} from '@angular/animations';
import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  constructor(private builder: AnimationBuilder) {}

  animate(
    element: ElementRef,
    metadata: AnimationAnimateMetadata,
    fn: () => void = null
  ): void {
    const factory = this.builder.build(metadata);
    const player = factory.create(element.nativeElement);

    if (fn != null) {
      player.onDone(fn);
    }

    player.play();
  }
}
