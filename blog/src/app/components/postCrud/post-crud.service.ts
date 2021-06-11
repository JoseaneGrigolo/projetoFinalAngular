import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { User } from 'src/app/user';
import { Categoria, Post } from './post-crud.model';


@Injectable({
  providedIn: 'root'
})
export class PostCrudService {
  baseUrl = "http://localhost:8080/posts"
  baseUrl2 = "http://localhost:8080/categorias"
  baseUrl3 = "http://localhost:8080"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.baseUrl2);
  }

  createCategoria(categoria: Categoria): Observable<Categoria> {
    console.log(categoria);
    return this.http.post<Categoria>(this.baseUrl2, categoria);
  }

  createLike(id: number): Observable<any> {
    const url = `${this.baseUrl3}/like/${id}/usuario/${sessionStorage.getItem('username')}`;
    console.log(url);
    return this.http.get<any>(url);
  }


  create(post: Post, selectedCategoria: string): Observable<Post> {
    let url = `http://localhost:8080/posts/${sessionStorage.getItem('username')}/categorias/${selectedCategoria}`
    console.log(url)
    return this.http.post<Post>(url, post);
  }

  read(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl);
  }

  readById(id: any): Observable<Post> {
    const url = `${this.baseUrl}/${id}`;
    console.log(url)
    return this.http.get<Post>(url);

  }

  readByUsername(): Observable<Post[]> {
    const url = `${this.baseUrl}/byuser/${sessionStorage.getItem('username')}`;
    console.log(url);
    return this.http.get<Post[]>(url);

  }

  update(post: Post): Observable<Post> {
    const url = `${this.baseUrl}/${post.id}`;
    return this.http.put<Post>(url, post);
  }

  delete(id: number): Observable<Post> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Post>(url);
  }
}
