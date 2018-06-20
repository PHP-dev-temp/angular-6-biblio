import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-author-new',
  templateUrl: './author-new.component.html',
  styleUrls: ['./author-new.component.css']
})
export class AuthorNewComponent implements OnInit {


  registerForm: FormGroup;
  userImageFile: File;

  @ViewChild('userImage') userImage;

  constructor(private apiService: ApiService,
              private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'bio': new FormControl(null),
      'image': new FormControl(null)
    });
  }

  onSubmit(){
    const author = {
      'name': this.registerForm.controls['name'].value,
      'bio': this.registerForm.controls['bio'].value,
      'image': this.registerForm.controls['image'].value
    };
    const image = this.userImage.nativeElement;
    if(image.files && image.files[0]) {
      this.userImageFile = image.files[0];
    }
    const imageFile: File = this.userImageFile;

    const formData: FormData = new FormData();
    formData.append('name', author.name);
    formData.append('bio', author.bio);
    if(imageFile != null) { formData.append('image', imageFile, imageFile.name); }

    this.apiService.newAuthor(formData)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (err: HttpErrorResponse) => { console.log(err.statusText);
        },
        () => {
          this.router.navigate(['authors']);
        }
      );
  }

  onCancel() {
    this.router.navigate(['authors']);
  }

}
