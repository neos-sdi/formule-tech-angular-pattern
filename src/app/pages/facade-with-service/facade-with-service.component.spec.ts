import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacadeWithServiceComponent } from './facade-with-service.component';

describe('FacadeWithServiceComponent', () => {
  let component: FacadeWithServiceComponent;
  let fixture: ComponentFixture<FacadeWithServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacadeWithServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacadeWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
