import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {Author} from '../../models/author.model';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {


  registerForm: FormGroup;
  userImageFile: File;
  authors: Author[] = [];

  @ViewChild('userImage') userImage;

  constructor(private apiService: ApiService,
              private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'description': new FormControl(null),
      'image': new FormControl(null),
      'author_id': new FormControl(null, [Validators.required]),
      'quantity': new FormControl(null, [Validators.required])
    });
    this.apiService.getAuthors()
      .subscribe(
        (authors: Author[]) => {
          this.authors = authors;
        },
        (err: HttpErrorResponse) => { console.log(err.statusText); }
      );
  }

  onSubmit(){
    const book = {
      'name': this.registerForm.controls['name'].value,
      'description': this.registerForm.controls['description'].value,
      'image': this.registerForm.controls['image'].value,
      'author_id': this.registerForm.controls['author_id'].value,
      'quantity': this.registerForm.controls['quantity'].value
    };
    const image = this.userImage.nativeElement;
    if(image.files && image.files[0]) {
      this.userImageFile = image.files[0];
    }
    const imageFile: File = this.userImageFile;

    const formData: FormData = new FormData();
    formData.append('name', book.name);
    formData.append('description', book.description);
    if(imageFile != null) { formData.append('image', imageFile, imageFile.name); }
    formData.append('author_id', book.author_id);
    formData.append('quantity', book.quantity);

    console.log('formData');
    this.apiService.newBook(formData)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (err: HttpErrorResponse) => { console.log(err.statusText);
        },
        () => {
          this.router.navigate(['books']);
        }
      );
  }

  onCancel() {
    this.router.navigate(['books']);
  }

}
