import {Component, Input, OnInit} from '@angular/core';
import {Author} from '../../../models/author.model';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  @Input() author: Author;

  imagesLink = 'http://biblio.milton-soft.com/images/';
  constructor() { }

  ngOnInit() {
  }

}
