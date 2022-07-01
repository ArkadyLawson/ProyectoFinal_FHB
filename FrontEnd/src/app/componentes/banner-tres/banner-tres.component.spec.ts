import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerTresComponent } from './banner-tres.component';

describe('BannerTresComponent', () => {
  let component: BannerTresComponent;
  let fixture: ComponentFixture<BannerTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerTresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
