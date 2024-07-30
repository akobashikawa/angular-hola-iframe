import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeStaticComponent } from './iframe-static.component';

describe('IframeStaticComponent', () => {
  let component: IframeStaticComponent;
  let fixture: ComponentFixture<IframeStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IframeStaticComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IframeStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
