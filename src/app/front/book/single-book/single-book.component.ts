import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../../models/book.model';
import {CurrentUserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {

  @Input() selectedBook = new Book();
  @Input() showModal = false;
  hideModal = true;
  adminUser = false;

  imagesLink = 'http://biblio.milton-soft.com/images/';

  constructor(private router: Router, private userService: CurrentUserService) { }

  ngOnInit() {
    this.adminUser = this.userService.userIsAdmin();
  }

  onClose() {
    this.hideModal = !this.hideModal;
  }

  categoryOpen(id) {
    this.router.navigate(['categories', id]);
  }

  editBook(id) {
    this.router.navigate(['books', id, 'edit']);
  }

  onRentals(id) {
    this.router.navigate(['books', id, 'rentals']);
  }


}
