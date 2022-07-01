import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDosComponent } from './banner-dos.component';

describe('BannerDosComponent', () => {
  let component: BannerDosComponent;
  let fixture: ComponentFixture<BannerDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
