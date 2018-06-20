import {Component, Input, OnInit} from '@angular/core';
import {Author} from '../../../models/author.model';

@Component({
  selector: 'app-single-author',
  templateUrl: './single-author.component.html',
  styleUrls: ['./single-author.component.css']
})
export class SingleAuthorComponent implements OnInit {

  @Input() selectedAuthor = new Author();
  @Input() showModal = false;
  hideModal = true;

  imagesLink = 'http://biblio.milton-soft.com/images/';

  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.hideModal = !this.hideModal;
  }

}
