import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/components/postCrud/post-crud.model';
import { PostCrudService } from 'src/app/components/postCrud/post-crud.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post!: Post;

  constructor(private router: Router, private postCrudService: PostCrudService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.postCrudService.readById(this.route.snapshot.paramMap.get('id')).subscribe(post => this.post = post);
  }


  navigateToProductCreate(): void {
    this.router.navigate(['/posts'])
  }


  reload(): void {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    })
  }

  likes(): void {
    this.postCrudService.createLike(this.post.id).subscribe();
    this.router.navigate(['/home'])
  }
}


