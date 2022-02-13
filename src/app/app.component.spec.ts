import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DragdropComponent } from './dragdrop.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        DragdropComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DragdropComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'DragDrop'`, () => {
    const fixture = TestBed.createComponent(DragdropComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('DragDrop');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DragdropComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('DragDrop app is running!');
  });
});
