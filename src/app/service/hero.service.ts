import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private list: Hero[] = [
    {id: 1, name: 'Enikő', superPower:'architect', address: 'Baracska'},
    {id: 2, name: 'Rebeka', superPower:'crochet', address: 'Budapest'},
    {id: 3, name: 'Dorottya', superPower:'counting', address: 'Wien'},
    {id: 4, name: 'Erzsébet', superPower:'biking', address: 'Békéscsaba'},
    {id: 5, name: 'Dániel', superPower:'mathematics', address: 'Baracska'}
  ];

  list$: BehaviorSubject<Hero[]>=
  new BehaviorSubject<Hero[]>([]);
  constructor() { }
  getAll(): void {
    this.list$.next(this.list);
  }
}

