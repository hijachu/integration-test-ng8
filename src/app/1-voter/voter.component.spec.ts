import { TestBed, ComponentFixture } from '@angular/core/testing';
import { VoterComponent } from './voter.component';
import { By } from '@angular/platform-browser';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterComponent ]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    // fixture.nativeElement
    // fixture.debugElement
  });

  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.vote-count'));
    // By.directive(VoterComponent)
    const el: HTMLElement = de.nativeElement;

    expect(el.innerHTML).toContain('21');
  });

  it('should highlight the upvote button if I have upvoted', () => {
    component.myVote = 1;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(de.classes.highlighted).toBeTruthy();
  });

  it('should increase total votes when I click the vote button', () => {
    const button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    button.triggerEventHandler('click', null);

    expect(component.totalVotes).toBe(1);
  });
});
