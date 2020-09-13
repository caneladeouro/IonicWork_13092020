import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeConstructorPage } from './home-constructor.page';

describe('HomeConstructorPage', () => {
  let component: HomeConstructorPage;
  let fixture: ComponentFixture<HomeConstructorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeConstructorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeConstructorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
