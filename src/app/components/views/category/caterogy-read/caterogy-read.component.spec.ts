import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaterogyReadComponent } from './caterogy-read.component';

describe('CaterogyReadComponent', () => {
  let component: CaterogyReadComponent;
  let fixture: ComponentFixture<CaterogyReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaterogyReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaterogyReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
