import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementchildComponent } from './elementchild.component';

describe('ElementchildComponent', () => {
  let component: ElementchildComponent;
  let fixture: ComponentFixture<ElementchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
