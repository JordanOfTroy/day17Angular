import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetKittersComponent } from './get-kitters.component';

describe('GetKittersComponent', () => {
  let component: GetKittersComponent;
  let fixture: ComponentFixture<GetKittersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetKittersComponent]
    });
    fixture = TestBed.createComponent(GetKittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
