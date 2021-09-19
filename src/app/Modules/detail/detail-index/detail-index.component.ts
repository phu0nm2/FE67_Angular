import { MovieDataService } from './../../../services/movie-data.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/models/movie';

@Component({
  selector: 'app-detail-index',
  templateUrl: './detail-index.component.html',
  styleUrls: ['./detail-index.component.scss'],
})
export class DetailIndexComponent implements OnInit {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _http: HttpClient,
    private _movieService: MovieDataService
  ) {}

  // biến hứng
  movieDetail?: IMovie | null;

  fetchDetail(): void {
    const movieID = this._activatedRoute.snapshot.params.id;

    this._http
      .get('http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayThongTinPhim', {
        params: {
          maPhim: movieID,
        },
        headers: {
          TokenCybersoft:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjciLCJIZXRIYW5TdHJpbmciOiIyOS8wMS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDM0MTQ0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0MzU2MjAwMH0.N1IDGkovxIU1E2CjtI_QtEJksOO3lxZxuIwXABaa45w',
        },
      })
      .subscribe(
        (res: any) => {
          this._movieService.setMovieDetail(res.content);
        },
        (err) => console.log(err)
      );
  }
  ngOnInit(): void {
    //Tasks
    // 1. Tạo 1 dữ liệu mới trên movie data service để lưu movieDetail
    // 2. call api gửi id phim lên BE và lấy về chi tiết phim
    this.fetchDetail();
    // 3. lưu chi tiết phim lên service và lấy xuống dùng

    this._movieService.movieDetail.subscribe((val: IMovie | null) => {
      this.movieDetail = val;
    });
    // 4. render một số thông tin: tên, hình ảnh, mô tả
  }
}
