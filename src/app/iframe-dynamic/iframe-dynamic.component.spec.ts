import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeDynamicComponent } from './iframe-dynamic.component';

describe('IframeDynamicComponent', () => {
  let component: IframeDynamicComponent;
  let fixture: ComponentFixture<IframeDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IframeDynamicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IframeDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
