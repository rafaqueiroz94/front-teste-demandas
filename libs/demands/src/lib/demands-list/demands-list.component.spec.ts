import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemandsListComponent } from './demands-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DemandsListComponent', () => {
  let component: DemandsListComponent;
  let fixture: ComponentFixture<DemandsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemandsListComponent],
      imports: [HttpClientTestingModule],
      providers: []
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
