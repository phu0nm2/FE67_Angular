import { IMovie } from './../models/movie';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

//
export class MovieDataService {
  movieList = new BehaviorSubject<IMovie[]>([]);

  movieDetail = new BehaviorSubject<IMovie | null>(null);

  deleteMovie(id: number) {
    // chỉnh sửa value của service
    // getValue gọi chỉ chạy 1 lần
    let movieListData = this.movieList.getValue();
    movieListData = movieListData.filter((item) => item.maPhim !== id);
    // và cập nhật lại
    this.movieList.next(movieListData);
  }

  // set lại mảng movieList sau khi call api
  setMovieList(data: IMovie[]) {
    this.movieList.next(data);
  }

  setMovieDetail(data: IMovie) {
    this.movieDetail.next(data);
  }
  constructor() {}
}
