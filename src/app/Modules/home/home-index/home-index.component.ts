import { IMovie } from './../../../models/movie';
import { MovieDataService } from './../../../services/movie-data.service';
import {
  Component,
  OnInit,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss'],
})
export class HomeIndexComponent
  implements OnInit, AfterViewInit, OnChanges, OnDestroy
{
  // Dependency injection
  // Lấy dữ liệu từ movie_data.service (movieList)
  constructor(
    private _movieService: MovieDataService,
    private _http: HttpClient
  ) {}

  // Tạo biến hứng mảng movieList
  movieLists: IMovie[] = [];

  movieListDescription: Subscription | undefined;

  //
  fetchMovies(): void {
    this._http
      .get('https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim', {
        params: {
          maNhom: 'GP01',
        },
        headers: {
          TokenCybersoft:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjciLCJIZXRIYW5TdHJpbmciOiIyOS8wMS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDM0MTQ0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0MzU2MjAwMH0.N1IDGkovxIU1E2CjtI_QtEJksOO3lxZxuIwXABaa45w',
        },
      })
      .subscribe(
        (res: any) => {
          this._movieService.setMovieList(res.content);
        },
        (err) => console.log(err)
      );
  }

  // lifecycle, DidMount
  ngOnInit(): void {
    // call api
    this.fetchMovies();
    // console.log(this._movieService.movieList);
    this.movieListDescription = this._movieService.movieList.subscribe(
      (value) => {
        this.movieLists = value;
      }
    );

    // // DidMount của angular
    // // Promise
    // const promise = new Promise((resolve, reject) => {
    //   // call api
    //   setTimeout(() => {
    //     resolve('data promise');
    //   }, 200);
    // });
    // promise
    //   .then((res) => {
    //     console.log(res, 'data tra ve');
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // // Observable
    // const observable = new Observable((resolve) => {
    //   setTimeout(() => resolve.next('data Observable'), 2000);
    // });
    // // get() => Observable
    // observable.subscribe(
    //   (res) => {
    //     console.log(res);
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
  }

  //
  handleDelete(): void {
    this._movieService.deleteMovie(1288);
  }

  // chạy sau khi render giao diện xong
  ngAfterViewInit() {
    console.log('afterviewinit');
  }

  //chạy khi component nhận vào từ cha và input bị thay đổi
  // @Input() data: any;
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  // chạy khi component bị hủy ( giống componentWillUnMount của React)
  ngOnDestroy() {
    // ? : optional chaining
    this.movieListDescription?.unsubscribe();
  }
}
