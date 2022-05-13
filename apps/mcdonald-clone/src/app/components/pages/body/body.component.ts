import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'mon-nx-monorepo-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  
  images = [
    {
      imageSrc: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt411cd6f2480cc8f1/6274f3c07bff923a68dfdfdf/1180x500_V3.jpg?auto=webp&width=1280&disable=upscale",
      imageAlt: "image1"
    },
    {
      imageSrc: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt1ead4c13bae8b3c4/61cc3fbb93723129e3d379ee/1_PDT_drone_2021_08.2024_8_SLIDER-HP-Desktop.jpg?auto=webp&width=1280&disable=upscale",
      imageAlt: "image2"
    },
    {
      imageSrc: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/bltec1c47f44dd52ce5/62701311f667160f89a8b656/1180x500_V2.jpg?auto=webp&width=1280&disable=upscale",
      imageAlt: "image3"
    },
    {
      imageSrc: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt9523c31b5e298d94/6260382abb8ba1624ac3d0f9/1180x500.jpg?auto=webp&width=1280&disable=upscale",
      imageAlt: "image4"
    },
    {
      imageSrc: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt29a193ff022c4c94/624fe098efe68c370de10eea/AUTOPROMO_POPPIK_2360x1000_V2.jpg?auto=webp&width=1280&disable=upscale",
      imageAlt: "image5"
    },
    {
      imageSrc: "https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/bltcb2c8b4ba6d427d9/61cc421aa2f30629e20b9aeb/Ble%CC%81_2021_Site_07.2026_7_SLIDER-HP_Desktop.jpg?auto=webp&width=1280&disable=upscale",
      imageAlt: "image6"
    }
  ]

  scrolled = false

  ngOnInit(): void {
      AOS.init()
  }


  // renvoyer true ou flase si le scrollTop > 100
  @HostListener("document:scroll") 
  onWindowScroll() {
    console.log('scrollTop => ', document.body.scrollTop);
    console.log('un autre', document.documentElement.scrollTop)
    
    if (document.documentElement.scrollTop > 100) {
      this.scrolled = true
      console.log("scrolled = ", this.scrolled);
      
    } else {
      this.scrolled = false
      console.log("scrolled = ", this.scrolled);
    }
  }



}
