import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jeans',
  templateUrl: './jeans.component.html',
  styleUrls: ['./jeans.component.css']
})
export class JeansComponent implements OnInit {

  produkList = [];

  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
    this.loadProdukList();
  }

  loadProdukList(){
    this.http.get("http://localhost:3000/api/produk/jeans")
    .subscribe(
      result => {
        this.produkList = result.json();
      },
      error => {

      }
    );
  }

}
