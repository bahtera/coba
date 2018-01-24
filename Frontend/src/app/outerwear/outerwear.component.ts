import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outerwear',
  templateUrl: './outerwear.component.html',
  styleUrls: ['./outerwear.component.css']
})
export class OuterwearComponent implements OnInit {

  produkList = [];

  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
    this.loadProdukList();
  }

  loadProdukList(){
    this.http.get("http://localhost:3000/api/produk/outerwear")
    .subscribe(
      result => {
        this.produkList = result.json();
      },
      error => {

      }
    );
  }

}
