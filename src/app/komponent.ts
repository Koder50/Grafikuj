import { Component } from '@angular/core';
import { TimeInterval } from 'rxjs';
import { isString } from 'util';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faSquareFull } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faEgg } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faBezierCurve } from '@fortawesome/free-solid-svg-icons';
import { faDrawPolygon } from '@fortawesome/free-solid-svg-icons';
import { faVial } from '@fortawesome/free-solid-svg-icons';
import { faFont } from '@fortawesome/free-solid-svg-icons';
import { faFill } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faCut } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { faArrowsAltH, faArrowsAltV, faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { faSign } from '@fortawesome/free-solid-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faMousePointer } from '@fortawesome/free-solid-svg-icons';
//import { Context } from 'vm';

@Component({
  selector: 'Grafikuj',
  templateUrl: './szablon.html',
  styleUrls: ['./szablon.css']
})
export class Komponent {

  title = 'Grafikuj';

  faPencilAlt = faPencilAlt;
  
  faEraser = faEraser;
  faMinus = faMinus;
  faSquareFull = faSquareFull;
  faSquare = faSquare;
  faCircle = faCircle;
  faEgg = faEgg;
  faPlay = faPlay;
  faBezierCurve = faBezierCurve;
  faDrawPolygon = faDrawPolygon;
  faVial = faVial;
  faFont = faFont;
  faFill = faFill;
  faPlusCircle = faPlusCircle;
  faMinusCircle = faMinusCircle;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faAngleDoubleDown = faAngleDoubleDown;
  faAngleDoubleRight = faAngleDoubleRight;
  faCopy = faCopy;
  faCut = faCut;
  faSave = faSave;
  faArrowsAltH = faArrowsAltH;
  faArrowsAltV = faArrowsAltV;
  faArrowsAlt = faArrowsAlt;
  faSign = faSign;
  faFileDownload = faFileDownload;
  faUndo = faUndo;
  faFilter = faFilter;
  faTimes = faTimes;
  faMousePointer = faMousePointer;

  wysokosc: number = 100;
  szerokosc: number = 100;
  szerokoscGlowna: number = 100;
  wysokoscGlowna: number = 100;
  wysokoscGlowna2: number = 100;

  wysokosc2: number = 100;
  szerokosc2: number = 100;

  wysokosc3: number = 100;
  szerokosc3: number = 100;

  czyTylkoTlo: boolean = false;
  kolor: string = "rgba(0, 123, 255, 1)";
  funkcja: string = "olowek";
  czyKlikniety: boolean = false;
  rozmiarFX: number = 1;
  rozmiarFY: number = 1;
  wspX: number = 0;
  wspY: number = 0;
  wspX2: number = 0;
  wspY2: number = 0;
  skalaRozmiaruX: number = 1;
  skalaRozmiaruY: number = 1;
  ostatniRozmiar: number = 1;
  ostatniImageData: ImageData;

  poczatekX: number = -1;
  poczatekY: number = -1;

  trojkatX: number[] = [];
  trojkatY: number[] = [];

  szesciennaX: number = 0;
  szesciennaY: number = 0;

  ktoryBok: number = 0;

  lupa: string = "normalny";

  mnoznik: number = 1;

  tekst: string = "";

  public canvas: HTMLCanvasElement ;
  public ctx: CanvasRenderingContext2D;
  offset = 0;
  rectangle = new Path2D();
  zaznaczony: boolean = false;

  czyUkryte: boolean = true;

  kolejkaData: Uint8ClampedArray[] = [];
  kolejkaX: number[] = [];
  kolejkaY: number[] = [];
  kolejkaNumerKoloru: number[] = [];
  poprzedniRzadPrzedzialyX: number[] = [];
  obecnyRzadPrzedzialyX: number[] = [];

  kolejkaXRezerwa: number[] = [];
  kolejkaYRezerwa: number[] = [];

  tablica: boolean[][] = [];
  data: Uint8ClampedArray;
  dataNumer: Uint32Array = new Uint32Array([0,0,0,0]);
  tymcz: Uint8ClampedArray;
  tymczX: number;
  tymczY: number;

  czyTylkoObrys: boolean = false;

  tablicaCofnij: ImageData[] = [];
  tablicaCofnijSzerokosc: number[] = [];
  tablicaCofnijWysokosc: number[] = [];

  licznik: number = 0;

  obiektyFigurObrys: Path2D[] = [];

  czyTolerancja: boolean = true;
  czyWypelnienieJedenPion: boolean = false;
  czyTolerancjaWielokat: boolean = false;

  tolerancja: number = 50;

  czyWypelnienieTrwa: boolean = false;

  wyborSzer: number = 0;

  X: number[] = [];
  Y: number[] = [];
  przedWielokat: ImageData;
  przedWielokatSzer: number;
  przedWielokatWys: number;

  czyWielokatTrwa: boolean = false;

  czyPoOryginalnym: boolean = true;

  czasAutozapisu: number = 15; //w minutach
  interval: any;   //jak sie tylko da, unikaj any

  leftRozszerz1: number = 205 + this.szerokosc;
  topRozszerz1: number = 36 + 5 + this.wysokosc / 2 - 1;
  czyWPrawo: boolean = false;
  czyPoPrzekatnej: boolean = false;
  czyWDol: boolean = false;
  wspolrzWPrawo: number[] = [];

  calosc: ImageData = new ImageData(this.szerokosc, this.wysokosc);
  czyWypelniacTylkoObrysIProstokaty: boolean = false;

  czyITenSam: boolean = false;

  czyPokaz: boolean = false;

  minX: number = this.szerokosc;
  minY: number = this.wysokosc;
  maxX: number = 0;
  maxY: number = 0;

  czyWGore: boolean = false;

  wysokoscTytulu: any = "";
  
  czyWpiszWspolrzedne: boolean = false;
  
  control: boolean = false;

  pokaz: boolean = false;
  pokazF: boolean = false;
  pokazK: boolean = false;
  pokazP: boolean = false;
  pokazZ: boolean = false;
  pokazS: boolean = false;
  pokazC: boolean = false;
  pokazRo: boolean = false;
  pokazO: boolean = false;
  pokazG: boolean = false;
  pokazLi: boolean = false;
  pokazPro: boolean = false;
  pokazKo: boolean = false;
  pokazEl: boolean = false;
  pokazTr: boolean = false;
  pokazKKB: boolean = false;
  pokazSKB: boolean = false;
  pokazWie: boolean = false;
  pokazProb: boolean = false;
  pokazTe: boolean = false;
  pokazWyp: boolean = false;
  pokazKop: boolean = false;
  pokazWyt: boolean = false;
  pokazPow: boolean = false;
  pokazZmn: boolean = false;
  pokazNor: boolean = false;
  pokazObrL: boolean = false;
  pokazObrP: boolean = false;
  pokazOdbPi: boolean = false;
  pokazOdbPo: boolean = false;
  pokazPaleta: boolean = false;
  
  ukryteFiltry: boolean = true;

  ten; 
  tab; 
  link; 
  panel;

  najechanie: boolean = false;
  najechanie2: boolean = false;
  najechanie3: boolean = false;
  najechanie4: boolean = false;
  najechanie5: boolean = false;
  najechanie6: boolean = false;
  najechanie7: boolean = false;
  najechanie8: boolean = false;
  najechanie9: boolean = false;
  najechanie10: boolean = false;
  najechanie11: boolean = false;
  najechanie12: boolean = false;
  najechanie13: boolean = false;
  najechanie14: boolean = false;
  najechanie15: boolean = false;
  najechanie16: boolean = false;
  najechanie17: boolean = false;
  najechanie18: boolean = false;
  najechanie19: boolean = false;
  najechaniePaleta: boolean = false;

  lewo: number = 40;
  gora: number = -35;

  goraOst: number = 0;
  lewoOst: number = 0;

  lewo2: number = 40;
  gora2: number = -35;

  goraOst2: number = 0;
  lewoOst2: number = 0;
  
  lewo3: number = 40;
  gora3: number = -35;

  goraOst3: number = 0;
  lewoOst3: number = 0;
  
  lewo4: number = 15;
  gora4: number = -35;

  goraOst4: number = 0;
  lewoOst4: number = 0;
  
  lewo5: number = 15;
  gora5: number = -35;

  goraOst5: number = 0;
  lewoOst5: number = 0;
  
  lewo6: number = 205;
  gora6: number = 305;

  goraOst6: number = 0;
  lewoOst6: number = 0;
  
  lewo7: number = 205;
  gora7: number = 305;

  goraOst7: number = 0;
  lewoOst7: number = 0;
  
  lewo8: number = 205;
  gora8: number = 305;

  goraOst8: number = 0;
  lewoOst8: number = 0;
  
  lewo9: number = 205;
  gora9: number = 305;

  goraOst9: number = 0;
  lewoOst9: number = 0;
  
  lewo10: number = 205;
  gora10: number = 305;

  goraOst10: number = 0;
  lewoOst10: number = 0;
  
  lewo11: number = 205;
  gora11: number = 305;

  goraOst11: number = 0;
  lewoOst11: number = 0;
  
  lewo12: number = 205;
  gora12: number = 305;

  goraOst12: number = 0;
  lewoOst12: number = 0;
  
  lewo13: number = 205;
  gora13: number = 305;

  goraOst13: number = 0;
  lewoOst13: number = 0;
  
  lewo14: number = 205;
  gora14: number = 305;

  goraOst14: number = 0;
  lewoOst14: number = 0;
  
  lewo15: number = 205;
  gora15: number = 305;

  goraOst15: number = 0;
  lewoOst15: number = 0;
  
  lewo16: number = 205;
  gora16: number = 305;

  goraOst16: number = 0;
  lewoOst16: number = 0;
  
  lewo17: number = 205;
  gora17: number = 305;

  goraOst17: number = 0;
  lewoOst17: number = 0;
  
  lewo18: number = 205;
  gora18: number = 305;

  goraOst18: number = 0;
  lewoOst18: number = 0;
  
  lewo19: number = 205;
  gora19: number = 305;

  goraOst19: number = 0;
  lewoOst19: number = 0;

  lewoPaleta: number = 205;
  goraPaleta: number = 205;

  goraOstPaleta: number = 0;
  lewoOstPaleta: number = 0;

  kliknietyRusz: boolean = false;
  kliknietyRusz2: boolean = false;
  kliknietyRusz3: boolean = false;
  kliknietyRusz4: boolean = false;
  kliknietyRusz5: boolean = false;
  kliknietyRusz6: boolean = false;
  kliknietyRusz7: boolean = false;
  kliknietyRusz8: boolean = false;
  kliknietyRusz9: boolean = false;
  kliknietyRusz10: boolean = false;
  kliknietyRusz11: boolean = false;
  kliknietyRusz12: boolean = false;
  kliknietyRusz13: boolean = false;
  kliknietyRusz14: boolean = false;
  kliknietyRusz15: boolean = false;
  kliknietyRusz16: boolean = false;
  kliknietyRusz17: boolean = false;
  kliknietyRusz18: boolean = false;
  kliknietyRusz19: boolean = false;
  kliknietyRuszPaleta: boolean = false;
  
  krawedzModala: boolean = true;
  krawedzModala2: boolean = true;
  krawedzModala3: boolean = true;
  krawedzModala4: boolean = true;
  krawedzModala5: boolean = true;
  krawedzModala6: boolean = false;
  krawedzModala7: boolean = false;
  krawedzModala8: boolean = false;
  krawedzModala9: boolean = false;
  krawedzModala10: boolean = false;
  krawedzModala11: boolean = false;
  krawedzModala12: boolean = false;
  krawedzModala13: boolean = false;
  krawedzModala14: boolean = false;
  krawedzModala15: boolean = false;
  krawedzModala16: boolean = false;
  krawedzModala17: boolean = false;
  krawedzModala18: boolean = false;
  krawedzModala19: boolean = false;
  krawedzModalaPaleta: boolean = false;
  
  ktoryFiltr: string = "Oryginalny";
  
  wymiary: any;
  
  przewijanieGdyZaMalaWysokosc: any;
  
  wysPionowejPrzerwy: number = 445;

  calaGrafika: ImageData;

  kolorek: number[] = [];

  szero1: number = 0;
  wyso1: number = 0;

  kolejnosc1: number = 0
  kolejnosc2: number = 0;
  kolejnosc3: number = 0;

  xKursora: number = 205;
  yKursora: number = 0;

  ukryjKursor: boolean = true;

  ktoraLupa: number = 0;

  czyKursorZawszeZwykly: boolean = false;

  poprawnaTolerancja: boolean = true;

  numerKarty: number = 0;

  ngOnInit() {

  this.yKursora = Math.abs(Math.abs(document.getElementsByClassName("tytul")[0].getBoundingClientRect().top) - Math.abs(document.getElementsByClassName("tytul")[0].getBoundingClientRect().bottom)) + 5;
	  
	this.wymiary=this.zwrocWymiary();

    this.uaktywnijCanvas();

    var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

    var ctx = canvas.getContext('2d');

    this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

    var canvas2: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka2")[0];

    var ctx2 = canvas2.getContext('2d');

	this.canvas = canvas;

    this.autozapis(true);
	
	this.lewo6 = this.lewo7 = this.lewo8 = this.lewo9 = this.lewo10 = this.lewo11 = this.lewo12 = this.lewo13 = this.lewo14 = this.lewo15 = this.lewo16 = this.lewo17 = this.lewo18 = this.lewo19 =205;  //szerokosc wybor + 5
	this.gora6 = this.gora7 = this.gora8 = this.gora9 = this.gora10 = this.gora11 = this.gora12 = this.gora13 = this.gora14 = this.gora15 = this.gora16 = this.gora17 = this.gora18 = this.gora19 = this.zwrocGora();
	
  }

  ngAfterViewInit() {

    var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

    var ctx = canvas.getContext('2d');

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, this.szerokosc,this.wysokosc);
    ctx.fillStyle = this.kolor;

    this.zapiszStanObrazu();
	
    let ten = this;

    let wysPrzedResize: number = document.getElementsByClassName("glowne")[0].clientHeight;

    let szerPrzedResize: number = document.getElementsByClassName("glowne")[0].clientWidth;

    window.addEventListener('resize', function(e) {
	
	   ten.wymiary = ten.zwrocWymiary();
	   
      if (ten.wymiary.bottom - ten.wymiary.top == 500) ten.wysokosc2 = 550;

      if (wysPrzedResize > Number(document.getElementsByClassName("glowne")[0].clientHeight)) {

        let modal: Element = document.getElementsByClassName("tytul")[0];

        ten.gora6 = ten.gora7 = ten.gora8 = ten.gora9 = ten.gora10 = ten.gora11 = ten.gora12 = ten.gora13 = ten.gora14 = ten.gora15 = ten.gora16 = ten.gora17 = ten.gora18 = ten.gora19 = modal.getBoundingClientRect().bottom + 120;

        ten.gora = ten.gora2 = ten.gora3 = ten.gora4 = ten.gora5 = -35;

      }

      if (szerPrzedResize > Number(document.getElementsByClassName("glowne")[0].clientWidth)) {

        ten.lewo6 = ten.lewo7 = ten.lewo8 = ten.lewo9 = ten.lewo10 = ten.lewo11 = ten.lewo12 = ten.lewo13 = ten.lewo14 = ten.lewo15 = ten.lewo16 = ten.lewo17 = ten.lewo18 = ten.lewo19 = 205;

        ten.lewo = ten.lewo2 = ten.lewo3 = 40;
        ten.lewo4 = ten.lewo5 = 15;

        ten.krawedzModala = ten.krawedzModala2 = ten.krawedzModala3 = ten.krawedzModala4 = ten.krawedzModala5 = true;


      }

      wysPrzedResize = Number(document.getElementsByClassName("glowne")[0].clientHeight);
      szerPrzedResize = Number(document.getElementsByClassName("glowne")[0].clientWidth);


	});

    window.addEventListener("keydown", function(e) {  //zapewnia cofanie i anulowanie cofania

		if(e.key=="z" && ten.control) { 
		
		    ten.cofnij();
		}
		
		if(e.key=="y" && ten.control) { 
		
		    ten.anulujCofnij()	
		}
		
		if((e.key == "+" || e.key == "=" || e.key == "-" || e.key== "0" ) && ten.control) e.preventDefault();  //zapobiega recznemu skalowaniu
		
		if(e.ctrlKey) {
			
			ten.control = true;
			
	    }
		else ten.control = false;

    });


  }
  
  zwrocWymiary() {
	  
	  return document.getElementsByClassName("glowne")[0].getBoundingClientRect(); 
	  
  }
  
  test() {
	  
  }
  
  zwrocGora():number {
	  
	  return  Math.abs(Math.abs(document.getElementsByClassName("tytul")[0].getBoundingClientRect().top)-Math.abs(document.getElementsByClassName("tytul")[0].getBoundingClientRect().bottom))+120;
	  
  }

  wykonaj(e: MouseEvent) {


  }

  draw() {

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);  //clearRect zostawia tylko przezroczysty kolor wszedzie gdzie dziala
    this.ctx.setLineDash([4, 2]);
    this.ctx.lineDashOffset = -this.offset;
    this.ctx.strokeRect(10, 10, 100, 100);


  }

  march() {

    this.offset++;
    if (this.offset > 16) {
      this.offset = 0;
    }

    this.draw();

    setTimeout(() => { this.march(); }, 20);
  }

  kliknijKarte(num: number) {

    this.numerKarty = num;

  }

  sprawdzCzyWpisacWspolrzedne() {

	this.czyWpiszWspolrzedne = !this.czyWpiszWspolrzedne;

  }

  sprawdzCzyKursorZawszeZwykly() {

    this.czyKursorZawszeZwykly = !this.czyKursorZawszeZwykly;

  }

  zwrocWarunekKursora(): boolean {

    return !this.czyKursorZawszeZwykly && !(this.zwrocMojKursor(this.funkcja, this.kolor) == 'default');

  }

  sprawdzCzyWypelnienieTolerancja(czyTak: boolean) {

    this.czyTolerancja = czyTak;

  }

  sprawdzCzyWypelnienieJedenPion(czyTak: boolean) {

    this.czyWypelnienieJedenPion = czyTak;

  }
  
  sprawdzCzyWielokatTolerancja() {

    this.czyTolerancjaWielokat = !this.czyTolerancjaWielokat;
	
	var checkbox8:any = document.getElementsByClassName("szuk1")[0]; 
	
	if(this.czyTolerancjaWielokat) checkbox8.checked = true;
    else checkbox8.checked = false;

  }

  sprawdzCzyTylkoObrysFigury(czyTak: boolean) {

    this.czyTylkoObrys = czyTak;

  }


  // Zapisz / pobierz grafike
  pobierzGrafike(dane: string, nazwaPliku: string) {
    var a = document.createElement('a');
    a.href = dane;                   //Zawiera URL lub fragment URL do którego wskazuje hiperłącze.
    a.download=nazwaPliku;         //Jeśli chcesz pozwolić użytkownikom na pobranie elementu HTML <canvas> jako obrazu, możesz utworzyć odnośnik z atrybutem download
  
    a.click();
  }


  zapiszGrafike(nazwaPliku: string) {

    var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];
	
	setTimeout(()=>{

    var grafika: string = canvas.toDataURL("image/png");

    if (!nazwaPliku) nazwaPliku = "Grafika.png";

    this.pobierzGrafike(grafika, nazwaPliku);

    },10);

  }

  otworzGrafike(e: any,czyNowyObraz: any) {   //jak sie tylko da, unikaj any

    if(this.lupa=="normalny"){

		let imageFile = e.target.files[0]; //here we get the image file

		var reader = new FileReader();

		reader.readAsDataURL(imageFile);

		let ten = this;

		reader.onloadend = function (e) {

		  var myImage: any = new Image(); // Creates image object

		  myImage.src = e.target.result; // Assigns converted image to image object

		  myImage.onload = function (ev) {

			var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];
			var ctx = canvas.getContext('2d');

			if (!czyNowyObraz) {

			  var canvas2: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka2")[0];
			  var ctx2 = canvas2.getContext('2d');

			  ten.ostatniImageData = ctx.getImageData(0, 0, ten.szerokosc, ten.wysokosc);

			  ctx2.putImageData(ten.ostatniImageData, 0, 0);

			}

			let staraSzerokosc: number = ten.szerokosc;

			if (czyNowyObraz) staraSzerokosc = 0

			ten.szerokosc = Number(this.width) + Number(staraSzerokosc);
			ten.szerokosc2 = Number(this.width) + Number(staraSzerokosc);
			ten.szerokosc3 = Number(this.width) + Number(staraSzerokosc);

			if (Number(this.height) > ten.wysokosc || czyNowyObraz) {
				
				ten.wysokosc = Number(this.height);
				ten.wysokosc2 = Number(this.height);
				ten.wysokosc3 = Number(this.height);
			}

			ten.szerokoscGlowna = Number(ten.szerokosc) + Number(250);
			ten.wysokoscGlowna = Number(ten.wysokosc);
			ten.wysokoscGlowna2 = Number(ten.wysokosc) + Number(50);

        setTimeout(() => {

          if (!czyNowyObraz) ctx2.putImageData(ten.ostatniImageData, 0, 0);

          ctx.fillStyle = "white";

        ctx.fillRect(0, 0, ten.szerokosc, ten.wysokosc);

          ctx.fillStyle = this.kolor;

			  if (!czyNowyObraz) {

				ten.ostatniImageData = ctx2.getImageData(0, 0, ten.szerokosc, ten.wysokosc);

				ctx.putImageData(ten.ostatniImageData, 0, 0);

				ctx2.fillStyle = "white";

				ctx2.fillRect(0, 0, ten.szerokosc, ten.wysokosc);

			  }


			  ten.szerokosc2 = ten.szerokosc;
			  ten.wysokosc2 = ten.wysokosc;
			  

			  ctx.drawImage(myImage, staraSzerokosc, 0); // Draws the image on canvas
			  let imgData = canvas.toDataURL("image/jpeg", 1); /*Assigns image base64 string in jpeg format to a variable */

			  ten.zapiszStanObrazu();

			}, 1)  //co najmniej 1s opoznienia, aby zaktualizowaly sie wymiary canvas



		  }
		}
	
	}
	
  }

  wybierzKolor(kolor: string) {

    this.kolor = kolor;

  }

  wybierzFunkcje(funkcja: string, ktory: number = 2) {

    this.funkcja = funkcja;

    this.ktoraLupa = ktory;

    if (this.funkcja == "lupa") {

      var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

      var canvas2: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka2")[0];
	  
	  var canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("doKsztaltow")[0];

     var canvas4: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("doKsztaltow2")[0];


      let cx = 0, cy = 0;

      if (ktory == 1) {

        this.lupa = "powieksz";

        cx = 2, cy = 2, this.mnoznik *= 2;
		
		

        if (this.mnoznik > 8) {

          this.mnoznik = 8;

          ktory = -3;

        }
		else {
			
			let sz:any=canvas.style.width.replace("px", ""); 
			let w:any=canvas.style.height.replace("px", "");	

            let sz2: number = Number(sz);
			let w2: number = Number(w);
			
			sz2 *= 2;
			w2 *= 2;
			sz=sz2.toString();
			w=w2.toString();
			sz +="px";
			w +="px";
			
			canvas.style.width = sz;
			this.canvas.style.width = sz;
            canvas.style.height = w;	
			this.canvas.style.height = w;
			
			canvas2.style.width = sz;
			canvas2.style.height = w;
			
			canvas3.style.width = sz;
			canvas3.style.height = w;
			
			canvas4.style.width = sz;
			canvas4.style.height = w;
			
		}
        
      }
      else if (ktory == 0) {

        this.lupa = "normalny";

        if (this.mnoznik == 1) ktory = -3;
		else {
			 
			let sz:any=canvas.style.width.replace("px", ""); 
			let w:any=canvas.style.height.replace("px", "");	
			
			let sz2: number = Number(sz);
			let w2: number = Number(w);
			
			sz2 *= 1 / this.mnoznik;
			w2 *= 1 / this.mnoznik;
			sz=sz2.toString();
			w=w2.toString();
			
			sz +="px";
			w +="px";
			
			canvas.style.width = sz;
            canvas.style.height = w;	
			
			canvas2.style.width = sz;
			canvas2.style.height = w;
			
			canvas3.style.width = sz;
			canvas3.style.height = w;
			
			canvas4.style.width = sz;
			canvas4.style.height = w;
			
		}

      }
      else {
        this.lupa = "zmniejsz";

        cx = 1 / 2, cy = 1 / 2, this.mnoznik *= 1 / 2;

        if (this.mnoznik < 1 / 8) {

          this.mnoznik = 1 / 8;

          ktory = -3;

        }
		else {
			
			let sz:any=canvas.style.width.replace("px", ""); 
			let w:any=canvas.style.height.replace("px", "");	

            let sz2: number = Number(sz);
			let w2: number = Number(w);
			
			sz2 *= 1/2;
			w2 *= 1/2;
			sz=sz2.toString();
			w=w2.toString();
			
			sz +="px";
			w +="px";
			
			canvas.style.width = sz;
            canvas.style.height = w;
			
			canvas2.style.width = sz;
			canvas2.style.height = w;
			
			canvas3.style.width = sz;
			canvas3.style.height = w;
			
			canvas4.style.width = sz;
			canvas4.style.height = w;
			
		}
        
      }

      if (this.lupa == "normalny") cx = 1, cy = 1, this.mnoznik = 1;

      setTimeout(() => {

        

        if (Number(canvas.style.width.substring(0, canvas.style.width.length - 2)) + Number(210) > window.innerHeight) {

          this.szerokoscGlowna = Number(canvas.style.width.substring(0, canvas.style.width.length - 2)) + Number(250);
          this.wysokoscGlowna = Number(canvas.style.height.substring(0, canvas.style.height.length - 2));
          this.wysokoscGlowna2 = Number(canvas.style.height.substring(0, canvas.style.height.length - 2)) + Number(50);

        }

      }, 5);

      setTimeout(() => {

        if (ktory != -3 && this.mnoznik == 1) this.zapiszStanObrazu();

      }, 1);

    }
    else if (this.funkcja == "obrotPrawo" || this.funkcja == "obrotLewo" || this.funkcja == "odbicieWPionie" || this.funkcja == "odbicieWPoziomie") setTimeout(() => this.wywolajFunkcje(), 1);

  }

  prostokat(x: number, y: number, ctx: CanvasRenderingContext2D, szer: number = 1, wysok: number = 1) {

    ctx.beginPath();

    ctx.moveTo(x, y);

    ctx.imageSmoothingEnabled = true;

    if (this.czyTylkoObrys) {

      ctx.strokeStyle = this.kolor;
      ctx.fillStyle = this.kolor;
      ctx.lineWidth = this.rozmiarFX;

      if (this.mnoznik != 1 && this.lupa != "normalny") {

		if(this.funkcja!="wielokat") {

			if (this.funkcja == "prostokat") ctx.strokeRect(x , y, szer/ this.mnoznik, wysok/ this.mnoznik); //przy lupie musi
			else ctx.strokeRect(x /*/ this.skalaRozmiaruX*/, y  /*/ this.skalaRozmiaruY*/, this.rozmiarFX/ this.mnoznik /*/ this.skalaRozmiaruX*/, this.rozmiarFY/ this.mnoznik /*/ this.skalaRozmiaruY*/);

		}
		else {
			
			if (this.funkcja == "wielokat") ctx.strokeRect(x, y, 1/ this.mnoznik, 1/ this.mnoznik); //przy lupie musi
			else ctx.strokeRect(x /*/ this.skalaRozmiaruX*/, y  /*/ this.skalaRozmiaruY*/, 1/ this.mnoznik, 1/ this.mnoznik);

			
		}
		
      }
      else {

		if(this.funkcja!="wielokat") {

			if (this.funkcja == "prostokat") ctx.strokeRect(x , y, szer/ this.mnoznik, wysok/ this.mnoznik); //przy lupie musi
			else ctx.strokeRect(x/*/ this.skalaRozmiaruX*/, y /*/ this.skalaRozmiaruY*/, this.rozmiarFX / this.mnoznik /*/ this.skalaRozmiaruX*/, this.rozmiarFY / this.mnoznik/*/ this.skalaRozmiaruY*/);

		
		}
		else {
			
			if (this.funkcja == "wielokat") ctx.strokeRect(x, y, 1/ this.mnoznik, 1/ this.mnoznik); //przy lupie musi
			else ctx.strokeRect(x/this.mnoznik/*/ this.skalaRozmiaruX*/, y/this.mnoznik /*/ this.skalaRozmiaruY*/, 1/ this.mnoznik , 1/ this.mnoznik);

			
		}

      }

    }
    else {

      if (this.mnoznik != 1 && this.lupa != "normalny") {

        if (this.funkcja == "prostokat") ctx.fillRect(x, y, szer/ this.mnoznik, wysok/ this.mnoznik); //przy lupie musi
        else ctx.fillRect(x /*/ this.skalaRozmiaruX*/, y  /*/ this.skalaRozmiaruY*/, this.rozmiarFX/ this.mnoznik /*/ this.skalaRozmiaruX*/, this.rozmiarFY/ this.mnoznik /*/ this.skalaRozmiaruY*/);


      }
      else {

        if (this.funkcja == "prostokat") ctx.fillRect(x, y, szer/ this.mnoznik, wysok/ this.mnoznik); //przy lupie musi
        else ctx.fillRect(x/*/ this.skalaRozmiaruX*/, y /*/ this.skalaRozmiaruY*/, this.rozmiarFX/ this.mnoznik /*/ this.skalaRozmiaruX*/, this.rozmiarFY / this.mnoznik/*/ this.skalaRozmiaruY*/);

        

      }
    }
    
  }

  aktualizuj(czyTylkoTlo: boolean = true, czyBezLupy: boolean = false) {

    var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

    var ctx = canvas.getContext('2d');

    var canvas2: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka2")[0];

    var ctx2 = canvas2.getContext('2d');

    ctx.fillStyle = "white";
    
    ctx.fillRect(0, 0, this.szerokosc, this.wysokosc);
    ctx.fillStyle = this.kolor;

    ctx2.imageSmoothingEnabled = true;
    ctx2.imageSmoothingEnabled = true;

    if (czyTylkoTlo) {

      this.ostatniImageData = ctx2.getImageData(0, 0, this.szerokosc2, this.wysokosc2);

      if (this.ostatniImageData) {

        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, this.szerokosc, this.wysokosc);
        ctx.fillStyle = this.kolor;

        ctx.putImageData(this.ostatniImageData, 0, 0);
      }

    }
    else {

      if (!this.czyTylkoTlo) {

        this.szerokosc2 = this.szerokosc;
        this.wysokosc2 = this.wysokosc;

        this.ostatniImageData = ctx2.getImageData(0, 0, this.szerokosc2, this.wysokosc2);

        ctx.scale(this.skalaRozmiaruX, this.skalaRozmiaruY);

        ctx.drawImage(canvas2, 0, 0);

        ctx.setTransform(1, 0, 0, 1, 0, 0);

      }

    }

    this.szerokosc2 = this.szerokosc;
    this.wysokosc2 = this.wysokosc;

    this.szerokosc3 = this.szerokosc;
    this.wysokosc3 = this.wysokosc;

	ctx2.fillStyle = "white";

    ctx2.fillRect(0, 0, this.szerokosc2, this.wysokosc2);

    if (this.lupa != "normalny" || czyBezLupy) this.zapiszStanObrazu();

  }

  zapiszStanObrazu() {

    var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

    if (canvas.getContext("2d")) {

      var ctx = canvas.getContext('2d');

    

    if (this.licznik < 49) {

      for (let i = this.tablicaCofnijSzerokosc.length - 1; i > this.licznik; i--) {

        this.tablicaCofnij.pop();
        this.tablicaCofnijSzerokosc.pop();
        this.tablicaCofnijWysokosc.pop();
		

      }

      if (this.tablicaCofnijSzerokosc.length > 0) this.licznik = this.tablicaCofnijSzerokosc.length;

    }
    else {

      for (let i = this.tablicaCofnijSzerokosc.length - 1; i > this.licznik; i--) {

        this.tablicaCofnij.pop();

        this.tablicaCofnijSzerokosc.pop();
        this.tablicaCofnijWysokosc.pop();

      }

      if (this.licznik == 49) {

        this.tablicaCofnij.shift();

        this.tablicaCofnijSzerokosc.shift();
        this.tablicaCofnijWysokosc.shift();
      }

      if (this.tablicaCofnijSzerokosc.length > 0) this.licznik = this.tablicaCofnijSzerokosc.length;
    }

	setTimeout(()=> {	

    this.tablicaCofnij[this.licznik] = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);
	
	
    this.tablicaCofnijSzerokosc[this.licznik] = this.szerokosc;
    this.tablicaCofnijWysokosc[this.licznik] = this.wysokosc;

	
	},10);  //potrzebuje 10 milisekund, aby poprawnie dzialalo cofanie, gdy wczesniej myszka/recznie zmieniana wielkosc grafiki ( np. zachowuje kolor bialy zamiast przezroczystego)

	}
  }

  wywolajFunkcje(e: MouseEvent = null) {


    if (this.funkcja != "linia" && this.funkcja != "prostokat" && this.funkcja != "kolo" && this.funkcja != "elipsa" && this.funkcja != "trojkat"
      && this.funkcja != "tekst") this.czyKlikniety = true;


    var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];


    if (canvas.getContext("2d")) {

      var ctx = canvas.getContext('2d');

      var canvas2: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka2")[0];

      var ctx2 = canvas2.getContext('2d');

      if (this.funkcja != "wytnij" && this.funkcja != "kopiuj") {

        this.zaznaczony = false;

        ctx2.fillStyle = "white";
        ctx2.fillRect(0, 0, this.szerokosc2, this.wysokosc2);

      }

      if (this.funkcja == "olowek" || this.funkcja == "gumka") {

        this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

        ctx.fillStyle = this.kolor;
        ctx.shadowBlur = 0;
        ctx.shadowColor = "white";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.imageSmoothingEnabled = true;        

        this.prostokat(e.offsetX/this.mnoznik, e.offsetY/this.mnoznik, ctx);   //przy this.lupa!="normalny" powinno byc jeszcze /this.mnoznik

        console.log("olowek lub gumka");

      }
      else if (this.funkcja == "wielokat") {

        this.czyWielokatTrwa = true;

        if (this.X.length == 0) {

          this.przedWielokat = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);
          this.przedWielokatSzer = this.szerokosc;
          this.przedWielokatWys = this.wysokosc;



        }

        this.X.push(e.offsetX);
        this.Y.push(e.offsetY);

        if (this.X.length == 1) {

          ctx.fillStyle = this.kolor;

          ctx.lineWidth = this.rozmiarFX;

          if (this.mnoznik != 1 && this.lupa != "normalny") ctx.moveTo(this.X[0]/ this.mnoznik, this.Y[0]/ this.mnoznik);
          else ctx.moveTo(this.X[0] / this.mnoznik, this.Y[0] / this.mnoznik); 

          this.prostokat(this.X[0]/this.mnoznik, this.Y[0]/this.mnoznik, ctx, this.rozmiarFX/ this.mnoznik, this.rozmiarFY/ this.mnoznik);

        }
        else if (this.X.length > 1) {

          ctx.beginPath();
          ctx.lineWidth = this.rozmiarFX;

			if (this.mnoznik != 1 && this.lupa != "normalny") {

				ctx.moveTo(this.X[this.X.length - 2]/ this.mnoznik, this.Y[this.Y.length - 2]/ this.mnoznik);
				
				let tol: number=0;
			  
				if(this.czyTolerancjaWielokat) tol = 5; //sumarycznie 5 px roznicy
				
				if((Math.abs(this.X[0] - this.X[this.X.length - 1]) + Math.abs(this.Y[0] - this.Y[this.Y.length - 1])<=tol) && (Math.abs(this.X[0] - this.X[this.X.length - 1]) 
				  + Math.abs(this.Y[0] - this.Y[this.Y.length - 1])>=0))  ctx.lineTo(this.X[0]/ this.mnoznik, this.Y[0]/ this.mnoznik);
				else ctx.lineTo(this.X[this.X.length - 1]/ this.mnoznik, this.Y[this.Y.length - 1]/ this.mnoznik);

			}
			else {

				ctx.moveTo(this.X[this.X.length - 2] / this.mnoznik, this.Y[this.Y.length - 2] / this.mnoznik);
				
				let tol: number=0;
			  
				if(this.czyTolerancjaWielokat) tol = 5; //sumarycznie 5 px roznicy
				
				if((Math.abs(this.X[0] - this.X[this.X.length - 1]) + Math.abs(this.Y[0] - this.Y[this.Y.length - 1])<=tol) && (Math.abs(this.X[0] - this.X[this.X.length - 1]) 
				  + Math.abs(this.Y[0] - this.Y[this.Y.length - 1])>=0))  ctx.lineTo(this.X[0] / this.mnoznik, this.Y[0] / this.mnoznik);
				else ctx.lineTo(this.X[this.X.length - 1] / this.mnoznik, this.Y[this.Y.length - 1] / this.mnoznik);

            }

          ctx.strokeStyle = this.kolor;
          ctx.stroke();
          ctx.closePath();

        }
		
		let tol: number=0;
	  
	    if(this.czyTolerancjaWielokat) tol = 5; //sumarycznie 5 px roznicy

        if (this.X.length > 2 && (Math.abs(this.X[0] - this.X[this.X.length - 1]) + Math.abs(this.Y[0] - this.Y[this.Y.length - 1])<=tol) && (Math.abs(this.X[0] - this.X[this.X.length - 1]) 
		  + Math.abs(this.Y[0] - this.Y[this.Y.length - 1])>=0)) {
          this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

          ctx.shadowBlur = 0;
          ctx.shadowColor = "white";
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
          ctx.imageSmoothingEnabled = true;

          ctx.beginPath();
          ctx.lineWidth = this.rozmiarFX;

          if (this.mnoznik != 1 && this.lupa != "normalny") ctx.moveTo(this.X[0]/ this.mnoznik, this.Y[0]/ this.mnoznik);
          else ctx.moveTo(this.X[0] / this.mnoznik, this.Y[0] / this.mnoznik);

          ctx.imageSmoothingEnabled = true;

          for (let i = 1; i < this.X.length; i++) {

            if (this.mnoznik != 1 && this.lupa != "normalny") {
				
				if(i!=this.X.length-1) ctx.lineTo(this.X[i]/ this.mnoznik, this.Y[i]/ this.mnoznik);
				else ctx.lineTo(this.X[0]/ this.mnoznik, this.Y[0]/ this.mnoznik);
				
			}
            else {
				
				if(i!=this.X.length-1) ctx.lineTo(this.X[i] / this.mnoznik, this.Y[i] / this.mnoznik);
			else ctx.lineTo(this.X[0] / this.mnoznik, this.Y[0] / this.mnoznik);
				
			}

          }

          if (this.czyTylkoObrys) {

            ctx.strokeStyle = this.kolor;
            ctx.closePath();
            ctx.stroke();

          }
          else {

            ctx.fillStyle = this.kolor;
            ctx.fill();

          }

          this.zapiszStanObrazu();

          this.czyWielokatTrwa = false;

          this.czyKlikniety = false;

          this.X.splice(0);
          this.Y.splice(0);

        }
        else if ((this.X.length == 2 && this.X[0] == this.X[this.X.length - 1] && this.Y[0] == this.Y[this.Y.length - 1]) || (this.X[this.X.length - 1] == -1 || this.Y[this.Y.length - 1] == -1)) {

          this.czyWielokatTrwa = false;

          this.X.splice(0);
          this.Y.splice(0);

        }

      }
      else {

        if (this.funkcja == "linia" || this.funkcja == "prostokat" || this.funkcja == "kolo" || this.funkcja == "elipsa" || this.funkcja == "trojkat" || this.funkcja == "kwadratowaKrzywaBeziera"
          || this.funkcja == "szesciennaKrzywaBeziera" || this.funkcja == "tekst" || (this.funkcja == "kopiuj" && !(this.zaznaczony)) || (this.funkcja == "wytnij" && !(this.zaznaczony))) {

          if ((this.funkcja == "trojkat" || this.funkcja == "elipsa" || this.funkcja == "kwadratowaKrzywaBeziera" || this.funkcja == "szesciennaKrzywaBeziera") && this.ktoryBok == 1) {



            if (this.funkcja != "elipsa") this.trojkatX[0] = e.offsetX;

            this.trojkatY[0] = e.offsetY;

            ctx.lineWidth = this.rozmiarFX;

            ctx.fillStyle = this.kolor;

            if (this.funkcja == "elipsa") {

            
            }
            else if (this.funkcja == "trojkat" || this.funkcja == "kwadratowaKrzywaBeziera" || this.funkcja == "szesciennaKrzywaBeziera") {

              ctx.lineWidth = this.rozmiarFX;

              if (this.mnoznik != 1 && this.lupa != "normalny") ctx.moveTo(this.trojkatX[0]/ this.mnoznik, this.trojkatY[0]/ this.mnoznik);
              else ctx.moveTo(this.trojkatX[0] / this.mnoznik, this.trojkatY[0] / this.mnoznik);

              this.prostokat(this.trojkatX[0]/ this.mnoznik, this.trojkatY[0]/ this.mnoznik, ctx, this.rozmiarFX/ this.mnoznik, this.rozmiarFY/ this.mnoznik);

              
            }

            this.ktoryBok++;

            this.czyKlikniety = true;

          }
          else if ((this.funkcja == "trojkat" || this.funkcja == "elipsa" || this.funkcja == "kwadratowaKrzywaBeziera" || this.funkcja == "szesciennaKrzywaBeziera") && this.ktoryBok == 2) {



            if (this.funkcja != "elipsa") {

              this.trojkatX[1] = e.offsetX;
              this.trojkatY[1] = e.offsetY;

            }
            else this.trojkatX[0] = e.offsetX;

            var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

            var ctx = canvas.getContext('2d');

            if (this.funkcja == "szesciennaKrzywaBeziera") {

              if (this.mnoznik != 1 && this.lupa != "normalny") ctx.moveTo(this.trojkatX[1]/ this.mnoznik, this.trojkatY[1]/ this.mnoznik);
              else ctx.moveTo(this.trojkatX[1] / this.mnoznik, this.trojkatY[1] / this.mnoznik);

              this.prostokat(this.trojkatX[1]/ this.mnoznik, this.trojkatY[1]/ this.mnoznik, ctx, this.rozmiarFX/ this.mnoznik, this.rozmiarFY/ this.mnoznik);

              this.ktoryBok++;

            }
            else if (this.funkcja == "elipsa" || this.funkcja == "trojkat" || this.funkcja == "kwadratowaKrzywaBeziera") {

              this.czyWielokatTrwa = true;

            }

          }
          else if (this.funkcja == "szesciennaKrzywaBeziera" && this.ktoryBok == 3) {

            this.szesciennaX = e.offsetX;
            this.szesciennaY = e.offsetY;

            this.czyWielokatTrwa = true;


          }
          else {

            if ((this.funkcja != "linia" && this.funkcja != "prostokat" && this.funkcja != "kolo" && this.funkcja != "elipsa" && this.funkcja != "trojkat"
              && this.funkcja != "kwadratowaKrzywaBeziera" && this.funkcja != "szesciennaKrzywaBeziera" && this.funkcja != "tekst") || ((this.funkcja == "linia" || this.funkcja == "prostokat"
                || this.funkcja == "kolo" || this.funkcja == "elipsa" || this.funkcja == "trojkat" || this.funkcja == "kwadratowaKrzywaBeziera" || this.funkcja == "szesciennaKrzywaBeziera"
                || this.funkcja == "tekst") && this.poczatekX == -1 && this.poczatekY == -1)) {

              this.poczatekX = e.offsetX;
              this.poczatekY = e.offsetY;

            }

            if ((this.funkcja == "trojkat" || this.funkcja == "elipsa" || this.funkcja == "kwadratowaKrzywaBeziera" || this.funkcja == "szesciennaKrzywaBeziera"
              || this.funkcja == "tekst") && this.ktoryBok == 0) {



              this.przedWielokat = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);
              this.przedWielokatSzer = this.szerokosc;
              this.przedWielokatWys = this.wysokosc;

              ctx.lineWidth = this.rozmiarFX;

              ctx.fillStyle = this.kolor;

              ctx.beginPath();

              if (this.funkcja != "elipsa" && this.funkcja != "tekst") {

                if (this.mnoznik != 1 && this.lupa != "normalny") ctx.moveTo(this.poczatekX/ this.mnoznik, this.poczatekY/ this.mnoznik);
                else ctx.moveTo(this.poczatekX / this.mnoznik, this.poczatekY / this.mnoznik);

                this.prostokat(this.poczatekX/ this.mnoznik, this.poczatekY/ this.mnoznik, ctx, this.rozmiarFX/ this.mnoznik, this.rozmiarFY/ this.mnoznik);



              }

              this.ktoryBok++;
              this.czyKlikniety = true;
            }
            else if ((this.funkcja == "linia" || this.funkcja == "prostokat" || this.funkcja == "kolo") && !this.czyKlikniety) {

              this.czyKlikniety = true;

              this.przedWielokat = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);
              this.przedWielokatSzer = this.szerokosc;
              this.przedWielokatWys = this.wysokosc;

              ctx.fillStyle = this.kolor;
              ctx.strokeStyle = this.kolor;

              ctx.lineWidth = this.rozmiarFX;

            }
            else if ((this.funkcja == "linia" || this.funkcja == "prostokat" || this.funkcja == "kolo" || this.funkcja == "tekst") && this.czyKlikniety) {

              this.czyWielokatTrwa = true;

            }


          }

          if (this.funkcja == "kopiuj" || this.funkcja == "wytnij") {  //w tych funkcjach klikamy na punkt, ktory jest lewym gornym rogiem prostokata, kopiowany/wycinany jest prostokat
            //o dlugosciach bokow this.rozmiarX,this.rozmiarY i nastepnie klikamy lewy gorny rog nowego prostokata, ktory bedzie mial te same dlugosci bokow 

            var canvas2: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka2")[0];

            var ctx2 = canvas2.getContext('2d');

            this.zaznaczony = true;

            if (this.mnoznik != 1 && this.lupa != "normalny") this.ostatniImageData = ctx.getImageData(this.poczatekX, this.poczatekY, this.rozmiarFX, this.rozmiarFY);
            else this.ostatniImageData = ctx.getImageData(this.poczatekX / this.mnoznik, this.poczatekY / this.mnoznik, this.rozmiarFX / this.mnoznik, this.rozmiarFY / this.mnoznik);

            ctx2.putImageData(this.ostatniImageData, 0, 0);

            if (this.funkcja == "wytnij") {

              ctx.fillStyle = "white";

              if (this.mnoznik != 1 && this.lupa != "normalny") ctx.fillRect(this.poczatekX, this.poczatekY, this.rozmiarFX, this.rozmiarFY);
              else ctx.fillRect(this.poczatekX / this.mnoznik, this.poczatekY / this.mnoznik, this.rozmiarFX / this.mnoznik, this.rozmiarFY / this.mnoznik);

              ctx.fillStyle = this.kolor;

            }

            this.czyKlikniety = false;

          }

        }
        else if (this.funkcja == "probnik") {

          var x = e.offsetX;
          var y = e.offsetY;

          if (this.mnoznik != 1 && this.lupa != "normalny") var pixel = ctx.getImageData(x/this.mnoznik, y/this.mnoznik, 1, 1);
          else var pixel = ctx.getImageData(x / this.mnoznik, y / this.mnoznik, 1, 1);
          var data = pixel.data;

          const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;

          this.kolor = rgba;

          if (this.kolor == "rgba(220, 53, 69, 1)") this.kolor = "rgba(220, 53, 69, 1)";
          else if (this.kolor == "rgba(0, 123, 255, 1)") this.kolor = "rgba(0, 123, 255, 1)";
          else if (this.kolor == "rgba(40, 167, 69, 1)") this.kolor = "rgba(40, 167, 69, 1)";
          else if (this.kolor == "rgba(255, 255, 255, 1)") this.kolor = "rgba(255, 255, 255, 1)";
          else if (this.kolor == "rgba(255, 193, 7, 1)") this.kolor = "rgba(255, 193, 7, 1)";
          else if (this.kolor == "rgba(52, 58, 64, 1)") this.kolor = "rgba(52, 58, 64, 1)";
          else {

            this.kolor = rgba;

          }

          this.czyKlikniety = false;

        }
        else if (!e && (this.funkcja == "obrotPrawo" || this.funkcja == "obrotLewo")) {

          this.czyKlikniety = false;
		  
		  let staraSzerokosc: number = Number(this.szerokosc);  //byl problem, this.szerokosc i this.wysokosc byla podawana blednie jako string
		  let staraWysokosc: number = Number(this.wysokosc);

          if (this.szerokosc >= this.wysokosc) {

            this.szerokosc2 = this.szerokosc;
            this.wysokosc2 = this.szerokosc;
			this.szerokosc3 = this.szerokosc;
            this.wysokosc3 = this.szerokosc;

          }
          else {

            this.szerokosc2 = this.wysokosc;
            this.wysokosc2 = this.wysokosc;
			this.szerokosc3 = this.wysokosc;
            this.wysokosc3 = this.wysokosc;

          }


          setTimeout(() => {

            var canvas2: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka2")[0];

            var ctx2 = canvas2.getContext('2d');

            this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

			ctx2.fillStyle = "white";

            ctx2.fillRect(0, 0, this.szerokosc, this.wysokosc);

            if (this.szerokosc >= this.wysokosc) ctx2.translate(this.szerokosc / 2, this.szerokosc / 2);
            else ctx2.translate(this.wysokosc / 2, this.wysokosc / 2);

            let i = 1;

            if (this.funkcja == "obrotLewo") i = -1;

            ctx2.rotate(i * Math.PI / 2);

            if (this.szerokosc >= this.wysokosc) ctx2.translate(-this.szerokosc / 2, -this.szerokosc / 2);
            else ctx2.translate(-this.wysokosc / 2, -this.wysokosc / 2);

            ctx2.drawImage(canvas, 0, 0);

            ctx2.setTransform(1, 0, 0, 1, 0, 0);

            if (this.szerokosc >= this.wysokosc) this.wysokosc = this.szerokosc;
            else this.szerokosc = this.wysokosc;
              
            this.szerokoscGlowna = Number(this.szerokosc) + Number(250);
            this.wysokoscGlowna = Number(this.wysokosc);
            this.wysokoscGlowna2 = Number(this.wysokosc) + Number(50);

          }, 1);

          setTimeout(() => {

            this.ostatniImageData = ctx2.getImageData(0, 0, this.szerokosc, this.wysokosc);

            ctx.fillStyle = "white";

            ctx.fillRect(0, 0, this.szerokosc, this.wysokosc);

            ctx.drawImage(canvas2, 0, 0);

            ctx2.fillStyle = "white";

            ctx2.fillRect(0, 0, this.szerokosc, this.wysokosc);

          }, 1);
		  
		  setTimeout(()=>{
			  
			  if (this.funkcja == "obrotPrawo" && staraSzerokosc >= staraWysokosc) this.kopiujWspolrzedne((this.szerokosc-staraWysokosc).toString(),"0",(this.szerokosc).toString(),
			  (this.wysokosc).toString(),"0","0",true);
			  else if (this.funkcja == "obrotPrawo" && staraSzerokosc < staraWysokosc ) { }
			  else if (this.funkcja == "obrotLewo" && staraSzerokosc>=staraWysokosc) { }
			  else if (this.funkcja == "obrotLewo" && staraSzerokosc<staraWysokosc) this.kopiujWspolrzedne("0",(this.wysokosc-staraSzerokosc).toString(),(this.szerokosc).toString(),
			  (this.wysokosc).toString(),"0","0",true);

		  },4);
		  
		  setTimeout(()=>{
			  
              this.zmienRozmiar((staraSzerokosc).toString(),(staraWysokosc).toString(),true,true);	//podawac jako string!
	
			  this.zapiszStanObrazu();
			  
		  },8);

        }
        else if ((this.funkcja == "kopiuj" || this.funkcja == "wytnij") && this.zaznaczony) {

          this.zaznaczony = false;

          var canvas2: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka2")[0];

          var ctx2 = canvas2.getContext('2d');

          if (this.mnoznik != 1 && this.lupa != "normalny") {

            this.ostatniImageData = ctx2.getImageData(0, 0, this.rozmiarFX, this.rozmiarFY);

            ctx.putImageData(this.ostatniImageData, e.offsetX, e.offsetY);

          }
          else {

            this.ostatniImageData = ctx2.getImageData(0, 0, this.rozmiarFX / this.mnoznik, this.rozmiarFY / this.mnoznik);

            ctx.putImageData(this.ostatniImageData, e.offsetX / this.mnoznik, e.offsetY / this.mnoznik);

          }



          ctx2.fillStyle = "white";

          ctx2.fillRect(0, 0, this.rozmiarFX, this.rozmiarFY);

          ctx2.fillStyle = this.kolor;

          this.czyKlikniety = false;

          console.log("Zapis");

          this.zapiszStanObrazu();

        }
        else if (this.funkcja == "wypelnienie") {

          if (this.poprawnaTolerancja) {

            this.czyKlikniety = false;

            var x = Math.floor((e.offsetX) / this.mnoznik);
            var y = Math.floor((e.offsetY) / this.mnoznik);
            var pixel = ctx.getImageData(x, y, 1, 1);
            this.data = pixel.data;

            for (let i = 0; i < 4; i++) this.dataNumer[i] = this.data[i];

            this.czyWypelnienieTrwa = true;

            setTimeout(() => {

              var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

              this.canvas = canvas;

              let szero1: number = Number(this.canvas.style.width.replace("px", ""));
              let wyso1: number = Number(this.canvas.style.height.replace("px", ""));

              for (let i = 0; i < szero1; i++) {

                this.tablica[i] = [];

                for (let j = 0; j < wyso1; j++) {

                  this.tablica[i][j] = false;

                }

              }

              if (this.tablica[x][y] == false) {

                this.kolejkaData.push(this.data);

                this.kolejkaX.push(x);
                this.kolejkaY.push(y);

                if (!this.czyWypelnienieJedenPion) this.tablica[x][y] = true;

                var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

                if (canvas.getContext("2d")) {

                  this.ctx = canvas.getContext('2d');

                }

                this.canvas = canvas;

                let kolorekString: String[] = this.kolor.replace("rgba(", "").replace(")", "").split(",");

                this.kolorek[0] = Number(kolorekString[0]);
                this.kolorek[1] = Number(kolorekString[1]);
                this.kolorek[2] = Number(kolorekString[2]);
                this.kolorek[3] = Number(kolorekString[3]);

                this.szero1 = Number(this.canvas.style.width.replace("px", ""));
                this.wyso1 = Number(this.canvas.style.height.replace("px", ""));

                if (!this.czyTolerancja) this.tolerancja = 0;

                this.calaGrafika = ctx.getImageData(0, 0, szero1, wyso1);

                if (this.tolerancja == 0) {

                  this.kolejnoscNajwiekszegoNumeruKoloru(this.kolorek);

                  if (this.czyWypelnienieJedenPion) {

                    while (this.kolejkaX.length > 0) this.skanowanieLinii2();

                  }
                  else while (this.kolejkaX.length > 0) this.samaSiebie();

                }
                else {

                  if (this.czyWypelnienieJedenPion) {

                    while (this.kolejkaX.length > 0) this.skanowanieLinii2Tolerancja();

                  }
                  else {

                    while (this.kolejkaX.length > 0) this.samaSiebieTolerancja();  //nie wszystko zoptymalizowane - patrz this.samaSiebie()

                  }


                }
                

                ctx.putImageData(this.calaGrafika, 0, 0);

                this.zapiszStanObrazu();

                this.czyWypelnienieTrwa = false;

              }

            }, 20);        

          }

        }
        else if (!e && this.funkcja == "odbicieWPionie") {  //podejrzenie,ze problemem jest jakies setTimeout gdy nierowne boki

            const biezacy: ImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);
            const dataAkt = biezacy.data;
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, this.szerokosc, this.wysokosc);
            const wPionie: ImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);
            const data = wPionie.data;

            var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

            var ctx = canvas.getContext('2d');

            let j;
			      let i;

            for (j = 0; j < this.szerokosc; j++) {

              for (i = 0; i < this.wysokosc; i++) {

                data[i * this.szerokosc * 4 + j * 4] = dataAkt[i * this.szerokosc * 4 + (this.szerokosc - j - 1) * 4];
                data[i * this.szerokosc * 4 + j * 4 + 1] = dataAkt[i * this.szerokosc * 4 + (this.szerokosc - j - 1) * 4 + 1];
                data[i * this.szerokosc * 4 + j * 4 + 2] = dataAkt[i * this.szerokosc * 4 + (this.szerokosc - j - 1) * 4 + 2];

              }

            }

            setTimeout(() => {

              ctx.putImageData(wPionie, 0, 0);
			  
			  

            }, 1);

          

        }
        else if (!e && this.funkcja == "odbicieWPoziomie") {

            const biezacy: ImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);
            const dataAkt = biezacy.data;
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, this.szerokosc, this.wysokosc);
            const wPionie: ImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);
            const data = wPionie.data;

            var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

            var ctx = canvas.getContext('2d');

            let j;
			      let i;

            for (j = 0; j < this.szerokosc; j++) {

              for (i = 0; i < this.wysokosc; i++) {

                data[i * this.szerokosc * 4 + j * 4] = dataAkt[(this.wysokosc - i - 1) * this.szerokosc * 4 + j * 4];
                data[i * this.szerokosc * 4 + j * 4 + 1] = dataAkt[(this.wysokosc - i - 1) * this.szerokosc * 4 + j * 4 + 1];
                data[i * this.szerokosc * 4 + j * 4 + 2] = dataAkt[(this.wysokosc - i - 1) * this.szerokosc * 4 + j * 4 + 2];

              }

            }

            setTimeout(() => {

              ctx.putImageData(wPionie, 0, 0);

            }, 1);

        }
      }

    }

  }

  skanowanieLinii() {

    let licznik = 0;

    var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

    if (canvas.getContext("2d")) {

      this.ctx = canvas.getContext('2d');

    }

    var ctx = this.ctx;

    for (let j = 0; j < this.wysokosc; j++) {

      if (this.tymczY - j >= 0) {  //ide wyzej po Y

        let nieCalaLinia = false;


        for (let i = 0; i < this.szerokosc; i++) {

          if (this.tymczX - i >= 0) {  //wyznaczam punkty do kolejki z lewej xa i x

            var pixel2: ImageData = ctx.getImageData(this.tymczX - i, this.tymczY - j, 1, 1);
            var dataSprawdzanegoPiksela: Uint8ClampedArray = pixel2.data;

            if (!this.czyTolerancja) this.tolerancja = 0;

            if (dataSprawdzanegoPiksela[0] <= this.data[0] + this.tolerancja && dataSprawdzanegoPiksela[0] >= this.data[0] - this.tolerancja && dataSprawdzanegoPiksela[1] <= this.data[1] + this.tolerancja
              && dataSprawdzanegoPiksela[1] >= this.data[1] - this.tolerancja && dataSprawdzanegoPiksela[2] <= this.data[2] + this.tolerancja && dataSprawdzanegoPiksela[2] >= this.data[2] - this.tolerancja
              && dataSprawdzanegoPiksela[3] == this.data[3]) nieCalaLinia = true;
            else { //jesli nie taki kolor jak wybrany, to dodaj punkt do kolejki

              this.kolejkaX.push(this.tymczX - i);
              this.kolejkaY.push(this.tymczY - j);

            }

            if (this.tymczX - i == 0 && this.kolejkaX[this.kolejkaX.length - 1] != 0) {

              this.kolejkaX.push(-1);
              this.kolejkaY.push(this.tymczY - j);

            }

          }
          else i = this.szerokosc + 10;

        }

        for (let i = 0; i <= this.tymczX; i++) {

          if ((this.kolejkaX.length > 1 && this.kolejkaX[this.kolejkaX.length - 1]+1 == this.kolejkaX[this.kolejkaX.length - 2]
            && this.kolejkaY.length > 1 && this.kolejkaY[this.kolejkaY.length - 1] == this.tymczY - j)) {

            this.kolejkaX.pop();
            this.kolejkaY.pop();

          }
  
        }

        for (let i = 1; i < this.szerokosc; i++) {

          
          if (this.tymczX + i < this.szerokosc) {  //wyznaczam punkty do kolejki z prawejX

            var pixel2: ImageData = ctx.getImageData(this.tymczX + i, this.tymczY - j, 1, 1);
            var dataSprawdzanegoPiksela: Uint8ClampedArray = pixel2.data;

            if (!this.czyTolerancja) this.tolerancja = 0;

            if (dataSprawdzanegoPiksela[0] <= this.data[0] + this.tolerancja && dataSprawdzanegoPiksela[0] >= this.data[0] - this.tolerancja && dataSprawdzanegoPiksela[1] <= this.data[1] + this.tolerancja && dataSprawdzanegoPiksela[1] >= this.data[1] - this.tolerancja
              && dataSprawdzanegoPiksela[2] <= this.data[2] + this.tolerancja && dataSprawdzanegoPiksela[2] >= this.data[2] - this.tolerancja && dataSprawdzanegoPiksela[3] == this.data[3]) { nieCalaLinia = true; /*console.log("cos" + i);*/ }
            else {

                this.kolejkaX.push(this.tymczX + i);
                this.kolejkaY.push(this.tymczY - j);    
              
            }

            if (this.tymczX + i == this.szerokosc - 1 && this.kolejkaX[this.kolejkaX.length - 1] != this.szerokosc - 1) {

              this.kolejkaX.push(this.szerokosc);
              this.kolejkaY.push(this.tymczY - j);

            }

          }
          else i = this.szerokosc + 10;

        }

        licznik = 0;

        for (let i = this.szerokosc-1; i > this.tymczX; i--) {

          if ((this.kolejkaX.length > 1 && this.kolejkaX[this.kolejkaX.length - 1] - 1 == this.kolejkaX[this.kolejkaX.length - 2]
            && this.kolejkaY.length > 1 && this.kolejkaY[this.kolejkaY.length - 1] == this.tymczY - j)) {

            this.kolejkaX.pop();
            this.kolejkaY.pop();

          }

        }

        if (!nieCalaLinia) j = this.wysokosc + 10;

      }
      else j = this.wysokosc + 10;;

    }


    for (let j = 1; j < this.wysokosc; j++) {   //ZASTANOW SIE CZY J ! CZY 0

      if (this.tymczY + j < this.wysokosc) { //ide nizej po y(w dol na ekranie)

        let nieCalaLinia = false;

        for (let i = 0; i < this.szerokosc; i++) {



          if (this.tymczX - i >= 0) { //ide w lewo

            var pixel2: ImageData = ctx.getImageData(this.tymczX - i, this.tymczY + j, 1, 1);
            var dataSprawdzanegoPiksela: Uint8ClampedArray = pixel2.data;

            if (!this.czyTolerancja) this.tolerancja = 0;

            if (dataSprawdzanegoPiksela[0] <= this.data[0] + this.tolerancja && dataSprawdzanegoPiksela[0] >= this.data[0] - this.tolerancja && dataSprawdzanegoPiksela[1] <= this.data[1] + this.tolerancja && dataSprawdzanegoPiksela[1] >= this.data[1] - this.tolerancja
              && dataSprawdzanegoPiksela[2] <= this.data[2] + this.tolerancja && dataSprawdzanegoPiksela[2] >= this.data[2] - this.tolerancja && dataSprawdzanegoPiksela[3] == this.data[3]) nieCalaLinia = true;
            else {

              this.kolejkaX.push(this.tymczX - i);
              this.kolejkaY.push(this.tymczY + j);

              
            }

            if (this.tymczX - i == 0 && this.kolejkaX[this.kolejkaX.length - 1] != 0) {

              this.kolejkaX.push(- 1);
              this.kolejkaY.push(this.tymczY + j);

            }

          }
          else i = this.szerokosc + 10;


        }

        licznik = 0;

        for (let i = 0; i <= this.tymczX; i++) {

          if ((this.kolejkaX.length > 1 && this.kolejkaX[this.kolejkaX.length - 1]+1 == this.kolejkaX[this.kolejkaX.length - 2]
            && this.kolejkaY.length > 1 && this.kolejkaY[this.kolejkaY.length - 1] == this.tymczY + j)) {

            this.kolejkaX.pop();
            this.kolejkaY.pop();

          }
          

        }    
          

       for (let i = 1; i < this.szerokosc; i++) {

          if (this.tymczX + i < this.szerokosc) { //ide w prawo

            var pixel2: ImageData = ctx.getImageData(this.tymczX + i, this.tymczY + j, 1, 1);
            var dataSprawdzanegoPiksela: Uint8ClampedArray = pixel2.data;

            if (!this.czyTolerancja) this.tolerancja = 0;

            if (dataSprawdzanegoPiksela[0] <= this.data[0] + this.tolerancja && dataSprawdzanegoPiksela[0] >= this.data[0] - this.tolerancja && dataSprawdzanegoPiksela[1] <= this.data[1] + this.tolerancja && dataSprawdzanegoPiksela[1] >= this.data[1] - this.tolerancja
              && dataSprawdzanegoPiksela[2] <= this.data[2] + this.tolerancja && dataSprawdzanegoPiksela[2] >= this.data[2] - this.tolerancja && dataSprawdzanegoPiksela[3] == this.data[3]) nieCalaLinia = true;
            else {

              this.kolejkaX.push(this.tymczX + i);
              this.kolejkaY.push(this.tymczY + j);

              
            }

            if (this.tymczX + i == this.szerokosc - 1 && this.kolejkaX[this.kolejkaX.length - 1] != this.szerokosc - 1) {

              this.kolejkaX.push(this.szerokosc);
              this.kolejkaY.push(this.tymczY + j);

            }

          }
          else i = this.szerokosc + 10;

        }

        licznik = 0;

        for (let i = this.szerokosc - 1; i > this.tymczX; i--) {

          if ((this.kolejkaX.length > 1 && this.kolejkaX[this.kolejkaX.length - 1]-1 == this.kolejkaX[this.kolejkaX.length - 2]
            && this.kolejkaY.length > 1 && this.kolejkaY[this.kolejkaY.length - 1] == this.tymczY + j)) {

            this.kolejkaX.pop();
            this.kolejkaY.pop();

          }
          
        }

       

        if (this.kolejkaX.length > 1 && this.kolejkaX[this.kolejkaX.length - 1] == this.kolejkaX[this.kolejkaX.length - 2] && this.kolejkaY[this.kolejkaY.length - 1] == this.kolejkaY[this.kolejkaY.length - 2]) {

          this.kolejkaX.pop();
          this.kolejkaX.pop();
          this.kolejkaY.pop();
          this.kolejkaY.pop();

        }

        if (!nieCalaLinia) j = this.wysokosc + 10;
      }
      else j = this.wysokosc + 10;

    }

  }

  promise1() {

    new Promise<void>((resolve, reject) => {


      if (this.tymczX - 1 >= 0 && this.tablica[this.tymczX - 1][this.tymczY] == false) {

        let data2: Number[] = [];

        data2.push(this.calaGrafika.data[this.tymczY * this.szero1 * 4 + (this.tymczX - 1) * 4]);
        data2.push(this.calaGrafika.data[this.tymczY * this.szero1 * 4 + (this.tymczX - 1) * 4 + 1]);
        data2.push(this.calaGrafika.data[this.tymczY * this.szero1 * 4 + (this.tymczX - 1) * 4 + 2]);
        data2.push(this.calaGrafika.data[this.tymczY * this.szero1 * 4 + (this.tymczX - 1) * 4 + 3]);

        if (data2[0] == this.data[0] && data2[1] == this.data[1] && data2[2] == this.data[2] && data2[3] == this.data[3]) {

          this.kolejkaX.push(this.tymczX - 1);
          this.kolejkaY.push(this.tymczY);
          
          this.tablica[this.tymczX - 1][this.tymczY] = true;

        }

        data2.slice(0);

      }

      if (this.tymczY - 1 >= 0 && this.tablica[this.tymczX][this.tymczY - 1] == false) {

        let data2: Number[] = [];

        data2.push(this.calaGrafika.data[(this.tymczY - 1) * this.szero1 * 4 + (this.tymczX) * 4]);
        data2.push(this.calaGrafika.data[(this.tymczY - 1) * this.szero1 * 4 + (this.tymczX) * 4 + 1]);
        data2.push(this.calaGrafika.data[(this.tymczY - 1) * this.szero1 * 4 + (this.tymczX) * 4 + 2]);
        data2.push(this.calaGrafika.data[(this.tymczY - 1) * this.szero1 * 4 + (this.tymczX) * 4 + 3]);

        if (data2[0] == this.data[0] && data2[1] == this.data[1] && data2[2] == this.data[2] && data2[3] == this.data[3]) {

          this.kolejkaX.push(this.tymczX);
          this.kolejkaY.push(this.tymczY - 1);
          this.tablica[this.tymczX][this.tymczY - 1] = true;

        }

        data2.slice(0);

      }

      resolve();

      resolve();

    });

    

  }

  promise2() {

    
  }


  promise3() {

    new Promise<void>((resolve, reject) => {


      if (this.tymczX + 1 < this.szero1 && this.tablica[this.tymczX + 1][this.tymczY] == false) {

        let data2: Number[] = [];

        data2.push(this.calaGrafika.data[this.tymczY * this.szero1 * 4 + (this.tymczX + 1) * 4]);
        data2.push(this.calaGrafika.data[this.tymczY * this.szero1 * 4 + (this.tymczX + 1) * 4 + 1]);
        data2.push(this.calaGrafika.data[this.tymczY * this.szero1 * 4 + (this.tymczX + 1) * 4 + 2]);
        data2.push(this.calaGrafika.data[this.tymczY * this.szero1 * 4 + (this.tymczX + 1) * 4 + 3]);

        if (data2[0] == this.data[0] && data2[1] == this.data[1] && data2[2] == this.data[2] && data2[3] == this.data[3]) {

          this.kolejkaX.push(this.tymczX + 1);
          this.kolejkaY.push(this.tymczY);
          this.tablica[this.tymczX + 1][this.tymczY] = true;
          
        }

        data2.slice(0);

      }

      if (this.tymczY + 1 < this.wyso1 && this.tablica[this.tymczX][this.tymczY + 1] == false) {

        let data2: Number[] = [];

        data2.push(this.calaGrafika.data[(this.tymczY + 1) * this.szero1 * 4 + (this.tymczX) * 4]);
        data2.push(this.calaGrafika.data[(this.tymczY + 1) * this.szero1 * 4 + (this.tymczX) * 4 + 1]);
        data2.push(this.calaGrafika.data[(this.tymczY + 1) * this.szero1 * 4 + (this.tymczX) * 4 + 2]);
        data2.push(this.calaGrafika.data[(this.tymczY + 1) * this.szero1 * 4 + (this.tymczX) * 4 + 3]);

        if (data2[0] == this.data[0] && data2[1] == this.data[1] && data2[2] == this.data[2] && data2[3] == this.data[3]) {

          this.kolejkaX.push(this.tymczX);
          this.kolejkaY.push(this.tymczY + 1);
          this.tablica[this.tymczX][this.tymczY + 1] = true;
          
        }

        data2.slice(0);

      }

      resolve();

    });

    


  }

  promise4() {

  }

  sprawdzPixel1() {

    if (this.tymczX - 1 >= 0 && this.tablica[this.tymczX - 1][this.tymczY] == false) {

      let data2: Number[] = [];

      let podstaw: number = (this.tymczY * this.szero1 + this.tymczX - 1) * 4;

      data2.push(this.calaGrafika.data[podstaw]);
      data2.push(this.calaGrafika.data[podstaw + 1]);
      data2.push(this.calaGrafika.data[podstaw + 2]);
      data2.push(this.calaGrafika.data[podstaw + 3]);

       if (data2[3] == this.dataNumer[3] && data2[this.kolejnosc1] == this.dataNumer[this.kolejnosc1] && data2[this.kolejnosc2] == this.dataNumer[this.kolejnosc2]
        && data2[this.kolejnosc3] == this.dataNumer[this.kolejnosc3]) {

        this.kolejkaX.push(this.tymczX - 1);
        this.kolejkaY.push(this.tymczY);
        this.tablica[this.tymczX - 1][this.tymczY] = true;

      }

    }

  }

  sprawdzPixel2() {

    if (this.tymczX + 1 < this.szero1 && this.tablica[this.tymczX + 1][this.tymczY] == false) {

      let data2: Number[] = [];

      let podstaw: number = (this.tymczY * this.szero1 + this.tymczX + 1) * 4;

      data2.push(this.calaGrafika.data[podstaw]);
      data2.push(this.calaGrafika.data[podstaw + 1]);
      data2.push(this.calaGrafika.data[podstaw + 2]);
      data2.push(this.calaGrafika.data[podstaw + 3]);

      if (data2[3] == this.dataNumer[3] && data2[this.kolejnosc1] == this.dataNumer[this.kolejnosc1] && data2[this.kolejnosc2] == this.dataNumer[this.kolejnosc2]
        && data2[this.kolejnosc3] == this.dataNumer[this.kolejnosc3]) {

        this.kolejkaX.push(this.tymczX + 1);
        this.kolejkaY.push(this.tymczY);
        this.tablica[this.tymczX + 1][this.tymczY] = true;

      }

    }

  }

  sprawdzPixel3() {

    if (this.tymczY - 1 >= 0 && this.tablica[this.tymczX][this.tymczY - 1] == false) {

      let data2: Number[] = [];

      let podstaw: number = ((this.tymczY - 1) * this.szero1 + this.tymczX) * 4;

      data2.push(this.calaGrafika.data[podstaw]);
      data2.push(this.calaGrafika.data[podstaw + 1]);
      data2.push(this.calaGrafika.data[podstaw + 2]);
      data2.push(this.calaGrafika.data[podstaw + 3]);

      if (data2[3] == this.dataNumer[3] && data2[this.kolejnosc1] == this.dataNumer[this.kolejnosc1] && data2[this.kolejnosc2] == this.dataNumer[this.kolejnosc2]
        && data2[this.kolejnosc3] == this.dataNumer[this.kolejnosc3]) {

        this.kolejkaX.push(this.tymczX);
        this.kolejkaY.push(this.tymczY - 1);
        this.tablica[this.tymczX][this.tymczY - 1] = true;

      }

    }

  }

  sprawdzPixel4() {

    if (this.tymczY + 1 < this.wyso1 && this.tablica[this.tymczX][this.tymczY + 1] == false) {

      let data2: Number[] = [];

      let podstaw: number = ((this.tymczY + 1) * this.szero1 + this.tymczX) * 4;

      data2.push(this.calaGrafika.data[podstaw]);
      data2.push(this.calaGrafika.data[podstaw + 1]);
      data2.push(this.calaGrafika.data[podstaw + 2]);
      data2.push(this.calaGrafika.data[podstaw + 3]);

      if (data2[3] == this.dataNumer[3] && data2[this.kolejnosc1] == this.dataNumer[this.kolejnosc1] && data2[this.kolejnosc2] == this.dataNumer[this.kolejnosc2]
        && data2[this.kolejnosc3] == this.dataNumer[this.kolejnosc3]) {

        this.kolejkaX.push(this.tymczX);
        this.kolejkaY.push(this.tymczY + 1);
        this.tablica[this.tymczX][this.tymczY + 1] = true;

      }

    }

  }

  skanowanieLinii2() {

    this.tymczX = this.kolejkaX.shift();
    this.tymczY = this.kolejkaY.shift();

    for (let j = 0; j <= this.tymczY; j++) {
      for (let i = 0; i < this.szero1; i++) {

        if (this.tymczX - i >= 0 && this.tablica[this.tymczX - i][this.tymczY - j] == false) {

          let data2: Number[] = [];

          let podstaw: number = ((this.tymczY - j) * this.szero1 + this.tymczX - i) * 4;

          data2.push(this.calaGrafika.data[podstaw]);
          data2.push(this.calaGrafika.data[podstaw + 1]);
          data2.push(this.calaGrafika.data[podstaw + 2]);
          data2.push(this.calaGrafika.data[podstaw + 3]);

          if (data2[3] == this.dataNumer[3] && data2[this.kolejnosc1] == this.dataNumer[this.kolejnosc1] && data2[this.kolejnosc2] == this.dataNumer[this.kolejnosc2]
            && data2[this.kolejnosc3] == this.dataNumer[this.kolejnosc3]) {

            let podstaw: number = ((this.tymczY - j) * this.szero1 + this.tymczX - i) * 4;

            this.calaGrafika.data[podstaw] = Number(this.kolorek[0]);
            this.calaGrafika.data[podstaw + 1] = Number(this.kolorek[1]);
            this.calaGrafika.data[podstaw + 2] = Number(this.kolorek[2]);

            this.tablica[this.tymczX - i][this.tymczY - j] = true;

          }
          else {

            if (i == 0) j = this.tymczY + 1;

            break;

          }

        }
        else {

          if (i == 0) j = this.tymczY + 1;

          break;

        }

      }

      if (j != this.tymczY + 1) {

        for (let i = 1; i < this.szero1; i++) {

          if (this.tymczX + i < this.szero1 && this.tablica[this.tymczX + i][this.tymczY - j] == false) {

            let data2: Number[] = [];

            let podstaw: number = ((this.tymczY - j) * this.szero1 + this.tymczX + i) * 4;

            data2.push(this.calaGrafika.data[podstaw]);
            data2.push(this.calaGrafika.data[podstaw + 1]);
            data2.push(this.calaGrafika.data[podstaw + 2]);
            data2.push(this.calaGrafika.data[podstaw + 3]);

            if (data2[3] == this.dataNumer[3] && data2[this.kolejnosc1] == this.dataNumer[this.kolejnosc1] && data2[this.kolejnosc2] == this.dataNumer[this.kolejnosc2]
              && data2[this.kolejnosc3] == this.dataNumer[this.kolejnosc3]) {

              let podstaw: number = ((this.tymczY - j) * this.szero1 + this.tymczX + i) * 4;

              this.calaGrafika.data[podstaw] = Number(this.kolorek[0]);
              this.calaGrafika.data[podstaw + 1] = Number(this.kolorek[1]);
              this.calaGrafika.data[podstaw + 2] = Number(this.kolorek[2]);

              this.tablica[this.tymczX + i][this.tymczY - j] = true;

            }
            else break;

          }
          else break;

        }

      }
    }

    let tym: number = (this.wyso1 - this.tymczY);

    for (let j = 1; j < tym; j++) {
      for (let i = 0; i < this.szero1; i++) {

        if (this.tymczX - i >= 0 && this.tablica[this.tymczX - i][this.tymczY + j] == false) {

          let data2: Number[] = [];

          let podstaw: number = ((this.tymczY + j) * this.szero1 + this.tymczX - i) * 4;

          data2.push(this.calaGrafika.data[podstaw]);
          data2.push(this.calaGrafika.data[podstaw + 1]);
          data2.push(this.calaGrafika.data[podstaw + 2]);
          data2.push(this.calaGrafika.data[podstaw + 3]);

          if (data2[3] == this.dataNumer[3] && data2[this.kolejnosc1] == this.dataNumer[this.kolejnosc1] && data2[this.kolejnosc2] == this.dataNumer[this.kolejnosc2]
            && data2[this.kolejnosc3] == this.dataNumer[this.kolejnosc3]) {

            let podstaw: number = ((this.tymczY + j) * this.szero1 + this.tymczX - i) * 4;

            this.calaGrafika.data[podstaw] = Number(this.kolorek[0]);
            this.calaGrafika.data[podstaw + 1] = Number(this.kolorek[1]);
            this.calaGrafika.data[podstaw + 2] = Number(this.kolorek[2]);

            this.tablica[this.tymczX - i][this.tymczY + j] = true;

          }
          else {

            if (i == 0) j = tym + 1;

            break;

          }

        }
        else {

          if (i == 0) j = tym + 1;

          break;

        }

      }

      if (j != tym + 1) {

        for (let i = 1; i < this.szero1; i++) {

          if (this.tymczX + i < this.szero1 && this.tablica[this.tymczX + i][this.tymczY + j] == false) {

            let data2: Number[] = [];

            let podstaw: number = ((this.tymczY + j) * this.szero1 + this.tymczX + i) * 4;

            data2.push(this.calaGrafika.data[podstaw]);
            data2.push(this.calaGrafika.data[podstaw + 1]);
            data2.push(this.calaGrafika.data[podstaw + 2]);
            data2.push(this.calaGrafika.data[podstaw + 3]);

            if (data2[3] == this.dataNumer[3] && data2[this.kolejnosc1] == this.dataNumer[this.kolejnosc1] && data2[this.kolejnosc2] == this.dataNumer[this.kolejnosc2]
              && data2[this.kolejnosc3] == this.dataNumer[this.kolejnosc3]) {

              let podstaw: number = ((this.tymczY + j) * this.szero1 + this.tymczX + i) * 4;

              this.calaGrafika.data[podstaw] = Number(this.kolorek[0]);
              this.calaGrafika.data[podstaw + 1] = Number(this.kolorek[1]);
              this.calaGrafika.data[podstaw + 2] = Number(this.kolorek[2]);

              this.tablica[this.tymczX + i][this.tymczY + j] = true;

            }
            else break;

          }
          else break;

        }

      }
    }

  }

  skanowanieLinii2Tolerancja() {

    this.tymczX = this.kolejkaX.shift();
    this.tymczY = this.kolejkaY.shift();

    for (let j = 0; j <= this.tymczY; j++) {
      for (let i = 0; i < this.szero1; i++) {

        if (this.tymczX - i >= 0 && this.tablica[this.tymczX - i][this.tymczY - j] == false) {

          let data2: Number[] = [];

          let podstaw: number = ((this.tymczY - j) * this.szero1 + this.tymczX - i) * 4;

          data2.push(this.calaGrafika.data[podstaw]);
          data2.push(this.calaGrafika.data[podstaw + 1]);
          data2.push(this.calaGrafika.data[podstaw + 2]);
          data2.push(this.calaGrafika.data[podstaw + 3]);

          if (data2[3] == this.dataNumer[3] && data2[this.kolejnosc1] <= this.dataNumer[this.kolejnosc1] + this.tolerancja && data2[this.kolejnosc1] >= this.dataNumer[this.kolejnosc1] - this.tolerancja
            && data2[this.kolejnosc2] <= this.dataNumer[this.kolejnosc2] + this.tolerancja && data2[this.kolejnosc2] >= this.dataNumer[this.kolejnosc2] - this.tolerancja
            && data2[this.kolejnosc3] <= this.dataNumer[this.kolejnosc3] + this.tolerancja && data2[this.kolejnosc3] >= this.dataNumer[this.kolejnosc3] - this.tolerancja) {

            let podstaw: number = ((this.tymczY - j) * this.szero1 + this.tymczX - i) * 4;

            this.calaGrafika.data[podstaw] = Number(this.kolorek[0]);
            this.calaGrafika.data[podstaw + 1] = Number(this.kolorek[1]);
            this.calaGrafika.data[podstaw + 2] = Number(this.kolorek[2]);

            this.tablica[this.tymczX - i][this.tymczY - j] = true;

          }
          else {

            if (i == 0) j = this.tymczY + 1;

            break;

          }

        }
        else {

          if (i == 0) j = this.tymczY + 1;

          break;

        }

      }

      if (j != this.tymczY + 1) {

        for (let i = 1; i < this.szero1; i++) {

          if (this.tymczX + i < this.szero1 && this.tablica[this.tymczX + i][this.tymczY - j] == false) {

            let data2: Number[] = [];

            let podstaw: number = ((this.tymczY - j) * this.szero1 + this.tymczX + i) * 4;

            data2.push(this.calaGrafika.data[podstaw]);
            data2.push(this.calaGrafika.data[podstaw + 1]);
            data2.push(this.calaGrafika.data[podstaw + 2]);
            data2.push(this.calaGrafika.data[podstaw + 3]);

            if (data2[3] == this.dataNumer[3] && data2[this.kolejnosc1] <= this.dataNumer[this.kolejnosc1] + this.tolerancja && data2[this.kolejnosc1] >= this.dataNumer[this.kolejnosc1] - this.tolerancja
              && data2[this.kolejnosc2] <= this.dataNumer[this.kolejnosc2] + this.tolerancja && data2[this.kolejnosc2] >= this.dataNumer[this.kolejnosc2] - this.tolerancja
              && data2[this.kolejnosc3] <= this.dataNumer[this.kolejnosc3] + this.tolerancja && data2[this.kolejnosc3] >= this.dataNumer[this.kolejnosc3] - this.tolerancja) {

              let podstaw: number = ((this.tymczY - j) * this.szero1 + this.tymczX + i) * 4;

              this.calaGrafika.data[podstaw] = Number(this.kolorek[0]);
              this.calaGrafika.data[podstaw + 1] = Number(this.kolorek[1]);
              this.calaGrafika.data[podstaw + 2] = Number(this.kolorek[2]);

              this.tablica[this.tymczX + i][this.tymczY - j] = true;

            }
            else break;

          }
          else break;

        }

      }
    }

    let tym: number = (this.wyso1 - this.tymczY);

    for (let j = 1; j < tym; j++) {
      for (let i = 0; i < this.szero1; i++) {

        if (this.tymczX - i >= 0 && this.tablica[this.tymczX - i][this.tymczY + j] == false) {

          let data2: Number[] = [];

          let podstaw: number = ((this.tymczY + j) * this.szero1 + this.tymczX - i) * 4;

          data2.push(this.calaGrafika.data[podstaw]);
          data2.push(this.calaGrafika.data[podstaw + 1]);
          data2.push(this.calaGrafika.data[podstaw + 2]);
          data2.push(this.calaGrafika.data[podstaw + 3]);

          if (data2[3] == this.dataNumer[3] && data2[this.kolejnosc1] <= this.dataNumer[this.kolejnosc1] + this.tolerancja && data2[this.kolejnosc1] >= this.dataNumer[this.kolejnosc1] - this.tolerancja
            && data2[this.kolejnosc2] <= this.dataNumer[this.kolejnosc2] + this.tolerancja && data2[this.kolejnosc2] >= this.dataNumer[this.kolejnosc2] - this.tolerancja
            && data2[this.kolejnosc3] <= this.dataNumer[this.kolejnosc3] + this.tolerancja && data2[this.kolejnosc3] >= this.dataNumer[this.kolejnosc3] - this.tolerancja) {

            let podstaw: number = ((this.tymczY + j) * this.szero1 + this.tymczX - i) * 4;

            this.calaGrafika.data[podstaw] = Number(this.kolorek[0]);
            this.calaGrafika.data[podstaw + 1] = Number(this.kolorek[1]);
            this.calaGrafika.data[podstaw + 2] = Number(this.kolorek[2]);

            this.tablica[this.tymczX - i][this.tymczY + j] = true;

          }
          else {

            if (i == 0) j = tym + 1;

            break;

          }

        }
        else {

          if (i == 0) j = tym + 1;

          break;

        }

      }

      if (j != this.tymczY + 1) {

        for (let i = 1; i < this.szero1; i++) {

          if (this.tymczX + i < this.szero1 && this.tablica[this.tymczX + i][this.tymczY + j] == false) {

            let data2: Number[] = [];

            let podstaw: number = ((this.tymczY + j) * this.szero1 + this.tymczX + i) * 4;

            data2.push(this.calaGrafika.data[podstaw]);
            data2.push(this.calaGrafika.data[podstaw + 1]);
            data2.push(this.calaGrafika.data[podstaw + 2]);
            data2.push(this.calaGrafika.data[podstaw + 3]);

            if (data2[3] == this.dataNumer[3] && data2[this.kolejnosc1] <= this.dataNumer[this.kolejnosc1] + this.tolerancja && data2[this.kolejnosc1] >= this.dataNumer[this.kolejnosc1] - this.tolerancja
              && data2[this.kolejnosc2] <= this.dataNumer[this.kolejnosc2] + this.tolerancja && data2[this.kolejnosc2] >= this.dataNumer[this.kolejnosc2] - this.tolerancja
              && data2[this.kolejnosc3] <= this.dataNumer[this.kolejnosc3] + this.tolerancja && data2[this.kolejnosc3] >= this.dataNumer[this.kolejnosc3] - this.tolerancja) {

              let podstaw: number = ((this.tymczY + j) * this.szero1 + this.tymczX + i) * 4;

              this.calaGrafika.data[podstaw] = Number(this.kolorek[0]);
              this.calaGrafika.data[podstaw + 1] = Number(this.kolorek[1]);
              this.calaGrafika.data[podstaw + 2] = Number(this.kolorek[2]);

              this.tablica[this.tymczX + i][this.tymczY + j] = true;

            }
            else break;

          }
          else break;

        }

      }
    }

  }

  samaSiebie() {

    this.tymczX = this.kolejkaX.shift();
    this.tymczY = this.kolejkaY.shift();

    let podstaw: number = (this.tymczY * this.szero1 + this.tymczX) * 4;

    this.calaGrafika.data[podstaw] = Number(this.kolorek[0]);
    this.calaGrafika.data[podstaw+1] = Number(this.kolorek[1]);    
    this.calaGrafika.data[podstaw+2] = Number(this.kolorek[2]);    

    if (this.tymczX - 1 >= 0 && this.tablica[this.tymczX - 1][this.tymczY] == false) {

      let data2: Number[] = [];

      let podstaw: number= (this.tymczY * this.szero1 + this.tymczX - 1) * 4;

      data2.push(this.calaGrafika.data[podstaw]);
      data2.push(this.calaGrafika.data[podstaw+1]);
      data2.push(this.calaGrafika.data[podstaw+2]);
      data2.push(this.calaGrafika.data[podstaw+3]);

      if (data2[3] == this.dataNumer[3] && data2[this.kolejnosc1] == this.dataNumer[this.kolejnosc1] && data2[this.kolejnosc2] == this.dataNumer[this.kolejnosc2]
        && data2[this.kolejnosc3] == this.dataNumer[this.kolejnosc3]) {

        this.kolejkaX.push(this.tymczX - 1);
        this.kolejkaY.push(this.tymczY);
        this.tablica[this.tymczX - 1][this.tymczY] = true;

      }

      }

    if (this.tymczY - 1 >= 0 && this.tablica[this.tymczX][this.tymczY - 1] == false) {

      let data2: Number[] = [];

      let podstaw: number = ((this.tymczY - 1) * this.szero1 + this.tymczX) * 4;

      data2.push(this.calaGrafika.data[podstaw]);
      data2.push(this.calaGrafika.data[podstaw + 1]);
      data2.push(this.calaGrafika.data[podstaw + 2]);
      data2.push(this.calaGrafika.data[podstaw + 3]);

      if (data2[3] == this.dataNumer[3] && data2[this.kolejnosc1] == this.dataNumer[this.kolejnosc1] && data2[this.kolejnosc2] == this.dataNumer[this.kolejnosc2]
        && data2[this.kolejnosc3] == this.dataNumer[this.kolejnosc3]) {

        this.kolejkaX.push(this.tymczX);
        this.kolejkaY.push(this.tymczY-1);
        this.tablica[this.tymczX][this.tymczY - 1] = true;

      }

      }

    if (this.tymczX + 1 < this.szero1 && this.tablica[this.tymczX + 1][this.tymczY] == false) {

      let data2: Number[] = [];

      let podstaw: number = (this.tymczY * this.szero1 + this.tymczX + 1) * 4;

      data2.push(this.calaGrafika.data[podstaw]);
      data2.push(this.calaGrafika.data[podstaw + 1]);
      data2.push(this.calaGrafika.data[podstaw + 2]);
      data2.push(this.calaGrafika.data[podstaw + 3]);


      if (data2[3] == this.dataNumer[3] && data2[this.kolejnosc1] == this.dataNumer[this.kolejnosc1] && data2[this.kolejnosc2] == this.dataNumer[this.kolejnosc2]
        && data2[this.kolejnosc3] == this.dataNumer[this.kolejnosc3]) {

       this.kolejkaX.push(this.tymczX + 1);
        this.kolejkaY.push(this.tymczY);
        this.tablica[this.tymczX + 1][this.tymczY] = true;

      }

      }

    if (this.tymczY + 1 < this.wyso1 && this.tablica[this.tymczX][this.tymczY + 1] == false) {

      let data2: Number[] = [];

      let podstaw: number = ((this.tymczY + 1) * this.szero1 + this.tymczX) * 4;

      data2.push(this.calaGrafika.data[podstaw]);
      data2.push(this.calaGrafika.data[podstaw + 1]);
      data2.push(this.calaGrafika.data[podstaw + 2]);
      data2.push(this.calaGrafika.data[podstaw + 3]);

      if (data2[3] == this.dataNumer[3] && data2[this.kolejnosc1] == this.dataNumer[this.kolejnosc1] && data2[this.kolejnosc2] == this.dataNumer[this.kolejnosc2]
        && data2[this.kolejnosc3] == this.dataNumer[this.kolejnosc3]) {

        this.kolejkaX.push(this.tymczX);
        this.kolejkaY.push(this.tymczY+1);
        this.tablica[this.tymczX][this.tymczY + 1] = true;

      }

      }

  }

  samaSiebieTolerancja() {

    this.tymczX = this.kolejkaX.shift();
    this.tymczY = this.kolejkaY.shift();

    this.calaGrafika.data[this.tymczY * this.szero1 * 4 + (this.tymczX) * 4] = Number(this.kolorek[0]);
    this.calaGrafika.data[this.tymczY * this.szero1 * 4 + (this.tymczX) * 4 + 1] = Number(this.kolorek[1]);
    this.calaGrafika.data[this.tymczY * this.szero1 * 4 + (this.tymczX) * 4 + 2] = Number(this.kolorek[2]);

    if (this.tymczX - 1 >= 0 && this.tablica[this.tymczX - 1][this.tymczY] == false) {

      let data2: Number[] = [];

      data2.push(this.calaGrafika.data[this.tymczY * this.szero1 * 4 + (this.tymczX - 1) * 4]);
      data2.push(this.calaGrafika.data[this.tymczY * this.szero1 * 4 + (this.tymczX - 1) * 4 + 1]);
      data2.push(this.calaGrafika.data[this.tymczY * this.szero1 * 4 + (this.tymczX - 1) * 4 + 2]);
      data2.push(this.calaGrafika.data[this.tymczY * this.szero1 * 4 + (this.tymczX - 1) * 4 + 3]);

      if (data2[0] <= this.data[0] + this.tolerancja && data2[0] >= this.data[0] - this.tolerancja && data2[1] <= this.data[1] + this.tolerancja && data2[1] >= this.data[1] - this.tolerancja
        && data2[2] <= this.data[2] + this.tolerancja && data2[2] >= this.data[2] - this.tolerancja && data2[3] == this.data[3]) {

        this.kolejkaX.push(this.tymczX - 1);
        this.kolejkaY.push(this.tymczY);
        this.tablica[this.tymczX - 1][this.tymczY] = true;

      }

    }

    if (this.tymczY - 1 >= 0 && this.tablica[this.tymczX][this.tymczY - 1] == false) {

      let data2: Number[] = [];

      data2.push(this.calaGrafika.data[(this.tymczY - 1) * this.szero1 * 4 + (this.tymczX) * 4]);
      data2.push(this.calaGrafika.data[(this.tymczY - 1) * this.szero1 * 4 + (this.tymczX) * 4 + 1]);
      data2.push(this.calaGrafika.data[(this.tymczY - 1) * this.szero1 * 4 + (this.tymczX) * 4 + 2]);
      data2.push(this.calaGrafika.data[(this.tymczY - 1) * this.szero1 * 4 + (this.tymczX) * 4 + 3]);

      if (data2[0] <= this.data[0] + this.tolerancja && data2[0] >= this.data[0] - this.tolerancja && data2[1] <= this.data[1] + this.tolerancja && data2[1] >= this.data[1] - this.tolerancja
        && data2[2] <= this.data[2] + this.tolerancja && data2[2] >= this.data[2] - this.tolerancja && data2[3] == this.data[3]) {

        this.kolejkaX.push(this.tymczX);
        this.kolejkaY.push(this.tymczY - 1);
        this.tablica[this.tymczX][this.tymczY - 1] = true;

      }

    }

    if (this.tymczX + 1 < this.szero1 && this.tablica[this.tymczX + 1][this.tymczY] == false) {

      let data2: Number[] = [];

      data2.push(this.calaGrafika.data[this.tymczY * this.szero1 * 4 + (this.tymczX + 1) * 4]);
      data2.push(this.calaGrafika.data[this.tymczY * this.szero1 * 4 + (this.tymczX + 1) * 4 + 1]);
      data2.push(this.calaGrafika.data[this.tymczY * this.szero1 * 4 + (this.tymczX + 1) * 4 + 2]);
      data2.push(this.calaGrafika.data[this.tymczY * this.szero1 * 4 + (this.tymczX + 1) * 4 + 3]);

      if (data2[0] <= this.data[0] + this.tolerancja && data2[0] >= this.data[0] - this.tolerancja && data2[1] <= this.data[1] + this.tolerancja && data2[1] >= this.data[1] - this.tolerancja
        && data2[2] <= this.data[2] + this.tolerancja && data2[2] >= this.data[2] - this.tolerancja && data2[3] == this.data[3]) {

        this.kolejkaX.push(this.tymczX + 1);
        this.kolejkaY.push(this.tymczY);
        this.tablica[this.tymczX + 1][this.tymczY] = true;

      }

    }

    if (this.tymczY + 1 < this.wyso1 && this.tablica[this.tymczX][this.tymczY + 1] == false) {

      let data2: Number[] = [];

      data2.push(this.calaGrafika.data[(this.tymczY) * this.szero1 * 4 + (this.tymczX+1) * 4]);
      data2.push(this.calaGrafika.data[(this.tymczY) * this.szero1 * 4 + (this.tymczX+1) * 4 + 1]);
      data2.push(this.calaGrafika.data[(this.tymczY) * this.szero1 * 4 + (this.tymczX+1) * 4 + 2]);
      data2.push(this.calaGrafika.data[(this.tymczY) * this.szero1 * 4 + (this.tymczX+1) * 4 + 3]);

      if (data2[0] <= this.data[0] + this.tolerancja && data2[0] >= this.data[0] - this.tolerancja && data2[1] <= this.data[1] + this.tolerancja && data2[1] >= this.data[1] - this.tolerancja
        && data2[2] <= this.data[2] + this.tolerancja && data2[2] >= this.data[2] - this.tolerancja && data2[3] == this.data[3]) {

        this.kolejkaX.push(this.tymczX);
        this.kolejkaY.push(this.tymczY + 1);
        this.tablica[this.tymczX][this.tymczY + 1] = true;

      }

    }

  }



  fu(k: any, ctx: any) {

    for (let m = 0; m < this.wysokosc; m++) {

      console.log("Petla: " + m);

      if (this.tablica[k][m] == true) {

        ctx.fillStyle = this.kolor;

        if (this.mnoznik != 1 && this.lupa != "normalny") ctx.fillRect(k, m, 1, 1);
        else ctx.fillRect(k / this.mnoznik, m / this.mnoznik, 1 / this.mnoznik, 1 / this.mnoznik);

        if (m == this.wysokosc - 1 && k < this.szerokosc - 1) {

          k++;
          this.fu(k, ctx);

        }

      }

    }

  }

  wypelnij(k: number, m: number) {

    var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

    if (canvas.getContext("2d")) {

      var ctx = canvas.getContext('2d');

    }



  }

  zwrocXKursora(): number {

    return this.xKursora;

  }

  zwrocYKursora(): number {

    return this.yKursora;

  }

  okreslRozmiaryKursora(): number {

    let rozmiary: number = 20;

    if (this.funkcja == "gumka") rozmiary = this.rozmiarFX;

    return rozmiary;

  }

  poruszaj(e: MouseEvent) {

    let dodajX: number = 0;
    let dodajY: number = 0;

    if (this.funkcja == "olowek" || this.funkcja == "probnik" || this.funkcja == "kopiuj" || this.funkcja == "wytnij") { dodajY = 20; }
    else if (this.funkcja == "linia") { dodajY = 8; }
    else if (this.funkcja == "kolo" || this.funkcja == "elipsa" || this.funkcja == "trojkat" || this.funkcja == "kwadratowaKrzywaBeziera" || this.funkcja == "szesciennaKrzywaBeziera"
      || this.funkcja == "wielokat") { dodajY = dodajX = 10; }
    else if (this.funkcja == "tekst") { dodajX = 10; }
    else if (this.funkcja == "wypelnienie") { dodajY = 10; }

    this.xKursora = (e.clientX-  dodajX);
    this.yKursora = (e.clientY - dodajY);

    if(e.offsetX>=0 && e.offsetY>=0){

		this.wspX = e.offsetX;
		this.wspY = e.offsetY;

	}

    if (this.czyKlikniety) {

      var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

      if (canvas.getContext("2d")) {

        var ctx = canvas.getContext('2d');

        if (this.funkcja == "olowek" || this.funkcja == "gumka") {

          ctx.imageSmoothingEnabled = true;

          ctx.fillStyle = this.kolor;

          this.prostokat(e.offsetX/this.mnoznik, e.offsetY/this.mnoznik, ctx);

          console.log("olowek lub gumka");
        }
        else if (this.funkcja == "linia" && this.czyKlikniety) {

          var canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("doKsztaltow")[0];

          var ctx3 = canvas3.getContext('2d');

          let linia = new Path2D();

		  ctx3.clearRect(0, 0, this.szerokosc, this.wysokosc);

		  ctx3.fillStyle = this.kolor;

          if (this.mnoznik != 1 && this.lupa != "normalny") linia.moveTo(this.poczatekX/this.mnoznik, this.poczatekY/this.mnoznik);
          else linia.moveTo(this.poczatekX / this.mnoznik, this.poczatekY / this.mnoznik);

          ctx3.imageSmoothingEnabled = true;
          
          ctx3.strokeStyle = this.kolor;
          ctx3.lineWidth = this.rozmiarFX;
          

          if (this.mnoznik != 1 && this.lupa != "normalny") linia.lineTo(e.offsetX/this.mnoznik, e.offsetY/this.mnoznik);
          else linia.lineTo(e.offsetX / this.mnoznik, e.offsetY / this.mnoznik);
          
          ctx3.stroke(linia);

          this.obiektyFigurObrys.push(linia);

        }
        else if (this.funkcja == "prostokat" && this.czyKlikniety) {

          var canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("doKsztaltow")[0];

          var ctx3 = canvas3.getContext('2d');

		  ctx3.clearRect(0, 0, this.szerokosc, this.wysokosc);

          ctx3.fillStyle = this.kolor;
          ctx3.strokeStyle = this.kolor;

          this.prostokat(this.poczatekX/this.mnoznik, this.poczatekY/this.mnoznik, ctx3, e.offsetX - this.poczatekX, e.offsetY - this.poczatekY);

        }
        else if (this.funkcja == "kolo" && this.czyKlikniety) {

          var canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("doKsztaltow")[0];

          var ctx3 = canvas3.getContext('2d');

          ctx3.clearRect(0, 0, this.szerokosc, this.wysokosc);

          ctx3.fillStyle = this.kolor;
          ctx3.strokeStyle = this.kolor;

          ctx3.beginPath();

          if (this.mnoznik != 1 && this.lupa != "normalny") {

            ctx3.arc(this.poczatekX/ this.mnoznik, this.poczatekY/ this.mnoznik, Math.abs(e.offsetY - this.poczatekY)/ this.mnoznik, 0, Math.PI * 2);  //trzeba rysowac wysokosc promienia kola,tylko to sie liczy(wartosc w pionie)

          }
          else ctx3.arc(this.poczatekX / this.mnoznik, this.poczatekY / this.mnoznik, Math.abs(e.offsetY - this.poczatekY) / this.mnoznik, 0,
            Math.PI * 2);  //trzeba rysowac wysokosc promienia kola,tylko to sie liczy(wartosc w pionie)


          if (this.czyTylkoObrys) {

            ctx3.strokeStyle = this.kolor;
            ctx3.lineWidth = this.rozmiarFX;

            ctx3.stroke();
            ctx3.closePath();

          }
          else {

            ctx3.fillStyle = this.kolor;
            ctx3.lineWidth = this.rozmiarFX;
            ctx3.fill();
            ctx3.closePath();

          }

        }
        else if (this.funkcja == "elipsa" && this.czyKlikniety && this.ktoryBok == 2) {

          var canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("doKsztaltow")[0];

          var ctx3 = canvas3.getContext('2d');

          ctx3.clearRect(0, 0, this.szerokosc, this.wysokosc);

          ctx3.fillStyle = this.kolor;
          ctx3.strokeStyle = this.kolor;

          ctx3.beginPath();

          if (this.mnoznik != 1 && this.lupa != "normalny") {

            ctx3.ellipse(this.poczatekX/ this.mnoznik, this.poczatekY/ this.mnoznik, Math.abs(e.offsetX - this.poczatekX)/ this.mnoznik, Math.abs(this.trojkatY[0] - this.poczatekY)/ this.mnoznik,
              0, 0, Math.PI * 2);  //trzeba rysowac wysokosc promienia elipsy (wartosc w pionie) oraz szerokosc promienia elipsy (wartosc w poziomie)

          }
          else ctx3.ellipse(this.poczatekX / this.mnoznik, this.poczatekY / this.mnoznik, Math.abs(e.offsetX - this.poczatekX)/ this.mnoznik, Math.abs(this.trojkatY[0] - this.poczatekY)/ this.mnoznik
            / this.mnoznik, 0, 0, Math.PI * 2);  //trzeba rysowac wysokosc promienia elipsy (wartosc w pionie) oraz szerokosc promienia elipsy (wartosc w poziomie)


          if (this.czyTylkoObrys) {

            ctx3.strokeStyle = this.kolor;
            ctx3.lineWidth = this.rozmiarFX;

            ctx3.stroke();

          }
          else {

            ctx3.fillStyle = this.kolor;
            ctx3.fill();
          }

        }
        else if (this.funkcja == "elipsa" && this.czyKlikniety) {

          var canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("doKsztaltow")[0];

          var ctx3 = canvas3.getContext('2d');

          ctx3.clearRect(0, 0, this.szerokosc, this.wysokosc);

          ctx3.fillStyle = this.kolor;
          ctx3.strokeStyle = this.kolor;

          ctx3.beginPath();

          if (this.mnoznik != 1 && this.lupa != "normalny") {

            ctx3.ellipse(this.poczatekX/ this.mnoznik, this.poczatekY/ this.mnoznik, Math.abs(e.offsetY - this.poczatekY)/ this.mnoznik, Math.abs(e.offsetY - this.poczatekY)/ this.mnoznik,
              0, 0, Math.PI * 2);  //trzeba rysowac wysokosc promienia elipsy (wartosc w pionie) oraz szerokosc promienia elipsy (wartosc w poziomie)

          }
          else ctx3.ellipse(this.poczatekX / this.mnoznik, this.poczatekY / this.mnoznik, Math.abs(e.offsetY - this.poczatekY)/ this.mnoznik, Math.abs(e.offsetY - this.poczatekY)
            / this.mnoznik, 0, 0, Math.PI * 2);  //trzeba rysowac wysokosc promienia elipsy (wartosc w pionie) oraz szerokosc promienia elipsy (wartosc w poziomie)


          if (this.czyTylkoObrys) {

            ctx3.strokeStyle = this.kolor;
            ctx3.lineWidth = this.rozmiarFX;

            ctx3.stroke();

          }
          else {

            ctx3.fillStyle = this.kolor;
            ctx3.fill();
          }

        }
        else if (this.funkcja == "trojkat" && this.czyKlikniety && this.ktoryBok == 2) {

          

          var canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("doKsztaltow")[0];

          var ctx3 = canvas3.getContext('2d');

          ctx3.clearRect(0, 0, this.szerokosc, this.wysokosc);

          ctx3.fillStyle = this.kolor;
          ctx3.strokeStyle = this.kolor;

          ctx3.beginPath();

          this.szerokosc = this.przedWielokatSzer;
          this.wysokosc = this.przedWielokatWys;

          this.szerokoscGlowna = Number(this.szerokosc) + Number(250);
          this.wysokoscGlowna = Number(this.wysokosc);
          this.wysokoscGlowna2 = Number(this.wysokosc) + Number(50);
          this.wysokosc2 = this.wysokosc;
          this.szerokosc2 = this.szerokosc;

          setTimeout(() => {

            ctx.putImageData(this.przedWielokat, 0, 0);



          }, 1);

          setTimeout(() => {

            if (this.mnoznik != 1 && this.lupa != "normalny") ctx3.moveTo(this.poczatekX/ this.mnoznik, this.poczatekY/ this.mnoznik);
            else ctx3.moveTo(this.poczatekX / this.mnoznik, this.poczatekY / this.mnoznik);

            ctx3.imageSmoothingEnabled = true;

            if (this.mnoznik != 1 && this.lupa != "normalny") {

              ctx3.lineTo(this.trojkatX[0]/ this.mnoznik, this.trojkatY[0]/ this.mnoznik);
              ctx3.lineTo(e.offsetX/ this.mnoznik, e.offsetY/ this.mnoznik);

            }
            else {

              ctx3.lineTo(this.trojkatX[0] / this.mnoznik, this.trojkatY[0] / this.mnoznik);
              ctx3.lineTo(e.offsetX / this.mnoznik, e.offsetY / this.mnoznik);

            }

            if (this.czyTylkoObrys) {

              ctx3.strokeStyle = this.kolor;
              ctx3.closePath();
              ctx3.stroke();

            }
            else {

              ctx3.fillStyle = this.kolor;
              ctx3.fill();

            }
          }, 2);

        }
        else if (this.funkcja == "kwadratowaKrzywaBeziera" && this.czyKlikniety && this.ktoryBok == 2) {

          

          var canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("doKsztaltow")[0];

          var ctx3 = canvas3.getContext('2d');

          ctx3.clearRect(0, 0, this.szerokosc, this.wysokosc);

          ctx3.fillStyle = this.kolor;
          ctx3.strokeStyle = this.kolor;

          ctx3.beginPath();

          this.szerokosc = this.przedWielokatSzer;
          this.wysokosc = this.przedWielokatWys;

          this.szerokoscGlowna = Number(this.szerokosc) + Number(250);
          this.wysokoscGlowna = Number(this.wysokosc);
          this.wysokoscGlowna2 = Number(this.wysokosc) + Number(50);
          this.wysokosc2 = this.wysokosc;
          this.szerokosc2 = this.szerokosc;

          setTimeout(() => {

            ctx.putImageData(this.przedWielokat, 0, 0);



          }, 1);

          setTimeout(() => {

            ctx3.beginPath();

            ctx3.imageSmoothingEnabled = true;

            if (this.mnoznik != 1 && this.lupa != "normalny") {

              ctx3.moveTo(this.poczatekX/ this.mnoznik, this.poczatekY/ this.mnoznik);

              ctx3.quadraticCurveTo(this.trojkatX[0]/ this.mnoznik, this.trojkatY[0]/ this.mnoznik, e.offsetX/ this.mnoznik, e.offsetY/ this.mnoznik);

            }
            else {

              ctx3.moveTo(this.poczatekX / this.mnoznik, this.poczatekY / this.mnoznik);

              ctx3.quadraticCurveTo(this.trojkatX[0] / this.mnoznik, this.trojkatY[0] / this.mnoznik, e.offsetX / this.mnoznik, e.offsetY / this.mnoznik);

            }

            if (this.czyTylkoObrys) {

              ctx3.strokeStyle = this.kolor;
              ctx3.closePath();
              ctx3.stroke();

            }
            else {

              ctx3.fillStyle = this.kolor;
              ctx3.fill();

            }
          }, 2);



        }
        else if (this.funkcja == "szesciennaKrzywaBeziera" && this.czyKlikniety && this.ktoryBok == 3) {

         

          var canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("doKsztaltow")[0];

          var ctx3 = canvas3.getContext('2d');

		  ctx3.clearRect(0, 0, this.szerokosc, this.wysokosc);

          ctx3.fillStyle = this.kolor;
          ctx3.strokeStyle = this.kolor;

          ctx3.beginPath();

          this.szerokosc = this.przedWielokatSzer;
          this.wysokosc = this.przedWielokatWys;

          this.szerokoscGlowna = Number(this.szerokosc) + Number(250);
          this.wysokoscGlowna = Number(this.wysokosc);
          this.wysokoscGlowna2 = Number(this.wysokosc) + Number(50);
          this.wysokosc2 = this.wysokosc;
          this.szerokosc2 = this.szerokosc;

          setTimeout(() => {

            ctx.putImageData(this.przedWielokat, 0, 0);



          }, 1);

          setTimeout(() => {

            ctx3.beginPath();

            if (this.mnoznik != 1 && this.lupa != "normalny") {

              ctx3.moveTo(this.poczatekX/ this.mnoznik, this.poczatekY/ this.mnoznik);

              ctx3.bezierCurveTo(this.trojkatX[0]/ this.mnoznik, this.trojkatY[0]/ this.mnoznik, this.trojkatX[1]/ this.mnoznik, this.trojkatY[1]/ this.mnoznik, e.offsetX/ this.mnoznik, e.offsetY/ this.mnoznik);

            }
            else {

              ctx3.moveTo(this.poczatekX / this.mnoznik, this.poczatekY / this.mnoznik);

              ctx3.bezierCurveTo(this.trojkatX[0] / this.mnoznik, this.trojkatY[0] / this.mnoznik, this.trojkatX[1] / this.mnoznik, this.trojkatY[1] / this.mnoznik, e.offsetX
                / this.mnoznik, e.offsetY / this.mnoznik);

            }

            if (this.czyTylkoObrys) {

              ctx3.strokeStyle = this.kolor;
              ctx3.closePath();
              ctx3.stroke();

            }
            else {

              ctx3.fillStyle = this.kolor;
              ctx3.fill();

            }
          }, 2);

        }
        else if (this.funkcja == "tekst" && this.czyKlikniety && this.ktoryBok == 1) {

          var canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("doKsztaltow")[0];

          var ctx3 = canvas3.getContext('2d');
		  
		  ctx3.clearRect(0, 0, this.szerokosc, this.wysokosc);

          ctx3.fillStyle = this.kolor;
          ctx3.strokeStyle = this.kolor;

          if (this.mnoznik != 1 && this.lupa != "normalny") ctx3.font = Math.abs(e.offsetY - this.poczatekY) + 'px serif';
          else ctx3.font = Math.abs(e.offsetY / this.mnoznik - this.poczatekY / this.mnoznik) + 'px serif';

          if (this.czyTylkoObrys) {

            ctx3.strokeStyle = this.kolor;
            
            if (this.mnoznik != 1 && this.lupa != "normalny") ctx3.strokeText(this.tekst, e.offsetX/this.mnoznik, e.offsetY/this.mnoznik);
            else ctx3.strokeText(this.tekst, e.offsetX / this.mnoznik, e.offsetY / this.mnoznik);

          }
          else {

            ctx3.fillStyle = this.kolor;

            if (this.mnoznik != 1 && this.lupa != "normalny") ctx3.fillText(this.tekst, e.offsetX/this.mnoznik, e.offsetY/this.mnoznik);
            else ctx3.fillText(this.tekst, e.offsetX / this.mnoznik, e.offsetY / this.mnoznik);

          }

        }
      }

    }

  }

  poruszaj2(e: MouseEvent) {
	
	if(parseFloat(e.screenX.toString()) - 205>=0 && parseFloat(e.offsetY.toString())>=0){

		this.wspX2 = parseFloat(e.screenX.toString()) - 205;
		this.wspY2 = parseFloat(e.offsetY.toString());
		
	}

  }

  zakonczFunkcje(e: MouseEvent) {

    if (this.funkcja != "wielokat" && this.funkcja != "linia" && this.funkcja != "prostokat" && this.funkcja != "kolo" && this.funkcja != "elipsa"
      && this.funkcja != "trojkat" && this.funkcja != "kwadratowaKrzywaBeziera" && this.funkcja != "szesciennaKrzywaBeziera" && this.funkcja != "tekst") this.czyKlikniety = false;

    var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

    var ctx = canvas.getContext('2d');

    var canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("doKsztaltow")[0];

    var ctx3 = canvas.getContext('2d');

    if (this.funkcja == "olowek" || this.funkcja == "gumka") {

      this.zapiszStanObrazu();

      this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

      console.log("olowek lub gumka");


    }
    else if (this.funkcja == "linia" && this.czyKlikniety && this.czyWielokatTrwa) {

      this.szerokosc = this.przedWielokatSzer;
      this.wysokosc = this.przedWielokatWys;

      this.szerokoscGlowna = Number(this.szerokosc) + Number(250);
      this.wysokoscGlowna = Number(this.wysokosc);
      this.wysokoscGlowna2 = Number(this.wysokosc) + Number(50);
      this.wysokosc2 = this.wysokosc;
      this.szerokosc2 = this.szerokosc;

      setTimeout(() => {

        ctx.putImageData(this.przedWielokat, 0, 0);

      }, 1);

      setTimeout(() => {

        let linia = new Path2D();

        if (this.mnoznik != 1 && this.lupa != "normalny") linia.moveTo(this.poczatekX/this.mnoznik, this.poczatekY/this.mnoznik);
        else linia.moveTo(this.poczatekX / this.mnoznik, this.poczatekY / this.mnoznik);

        ctx.imageSmoothingEnabled = true;
        
        ctx.strokeStyle = this.kolor;
        ctx.lineWidth = this.rozmiarFX;
       

        if (this.mnoznik != 1 && this.lupa != "normalny") linia.lineTo(e.offsetX/this.mnoznik, e.offsetY/this.mnoznik);
        else linia.lineTo(e.offsetX / this.mnoznik, e.offsetY / this.mnoznik);
        
        ctx.stroke(linia);

        this.obiektyFigurObrys.push(linia);

        this.zapiszStanObrazu();

        this.czyKlikniety = false;
        this.czyWielokatTrwa = false;

        this.poczatekX = this.poczatekY = -1;

        
        var canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("doKsztaltow")[0];

        var ctx3 = canvas3.getContext('2d');

		  
		  ctx3.clearRect(0, 0, this.szerokosc, this.wysokosc);

      }, 2);
    }
    else if (this.funkcja == "prostokat" && this.czyKlikniety && this.czyWielokatTrwa) {

      
      this.szerokosc = this.przedWielokatSzer;
      this.wysokosc = this.przedWielokatWys;

      this.szerokoscGlowna = Number(this.szerokosc) + Number(250);
      this.wysokoscGlowna = Number(this.wysokosc);
      this.wysokoscGlowna2 = Number(this.wysokosc) + Number(50);
      this.wysokosc2 = this.wysokosc;
      this.szerokosc2 = this.szerokosc;

      setTimeout(() => {

        ctx.putImageData(this.przedWielokat, 0, 0);

      }, 1);

      setTimeout(() => {

        ctx.fillStyle = this.kolor;

        this.prostokat(this.poczatekX/this.mnoznik, this.poczatekY/this.mnoznik, ctx, e.offsetX - this.poczatekX, e.offsetY - this.poczatekY);

        this.zapiszStanObrazu();

        this.czyKlikniety = false;
        this.czyWielokatTrwa = false;

        this.poczatekX = this.poczatekY = -1;

        var canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("doKsztaltow")[0];

        var ctx3 = canvas3.getContext('2d');
		  
		  ctx3.clearRect(0, 0, this.szerokosc, this.wysokosc);


      }, 2);
    }
    else if (this.funkcja == "kolo" && this.czyKlikniety && this.czyWielokatTrwa) {

      this.szerokosc = this.przedWielokatSzer;
      this.wysokosc = this.przedWielokatWys;

      this.szerokoscGlowna = Number(this.szerokosc) + Number(250);
      this.wysokoscGlowna = Number(this.wysokosc);
      this.wysokoscGlowna2 = Number(this.wysokosc) + Number(50);
      this.wysokosc2 = this.wysokosc;
      this.szerokosc2 = this.szerokosc;

      setTimeout(() => {

        ctx.putImageData(this.przedWielokat, 0, 0);



      }, 1);

      setTimeout(() => {

        ctx.beginPath();

        ctx.fillStyle = this.kolor;


        if (this.mnoznik != 1 && this.lupa != "normalny") {

          ctx.arc(this.poczatekX/ this.mnoznik, this.poczatekY/ this.mnoznik, Math.abs(e.offsetY - this.poczatekY)/ this.mnoznik, 0, Math.PI * 2);  //trzeba rysowac wysokosc promienia kola,tylko to sie liczy(wartosc w pionie)

        }
        else ctx.arc(this.poczatekX / this.mnoznik, this.poczatekY / this.mnoznik, Math.abs(e.offsetY - this.poczatekY) / this.mnoznik, 0,
          Math.PI * 2);  //trzeba rysowac wysokosc promienia kola,tylko to sie liczy(wartosc w pionie)


        if (this.czyTylkoObrys) {

          ctx.imageSmoothingEnabled = false;

          ctx.strokeStyle = this.kolor;
          ctx.lineWidth = this.rozmiarFX;

          ctx.stroke();
          ctx.closePath();

        }
        else {

          ctx.fillStyle = this.kolor;
          ctx.fill();
          ctx.closePath();
        }

        this.zapiszStanObrazu();

        this.czyKlikniety = false;
        this.czyWielokatTrwa = false;

        this.poczatekX = this.poczatekY = -1;

        var canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("doKsztaltow")[0];

        var ctx3 = canvas3.getContext('2d');
		
		ctx3.clearRect(0, 0, this.szerokosc, this.wysokosc);


      }, 2);
    }
    else if (this.funkcja == "elipsa" && this.czyKlikniety && this.czyWielokatTrwa) {

      this.szerokosc = this.przedWielokatSzer;
      this.wysokosc = this.przedWielokatWys;

      this.szerokoscGlowna = Number(this.szerokosc) + Number(250);
      this.wysokoscGlowna = Number(this.wysokosc);
      this.wysokoscGlowna2 = Number(this.wysokosc) + Number(50);
      this.wysokosc2 = this.wysokosc;
      this.szerokosc2 = this.szerokosc;

      setTimeout(() => {

        ctx.putImageData(this.przedWielokat, 0, 0);



      }, 1);

      setTimeout(() => {

        this.czyKlikniety = false;

        ctx.beginPath();

        if (this.mnoznik != 1 && this.lupa != "normalny") {

          ctx.ellipse(this.poczatekX/ this.mnoznik, this.poczatekY/ this.mnoznik, Math.abs(this.trojkatX[0] - this.poczatekX)/ this.mnoznik, Math.abs(this.trojkatY[0] - this.poczatekY)/ this.mnoznik,
            0, 0, Math.PI * 2);  //trzeba rysowac wysokosc promienia elipsy (wartosc w pionie) oraz szerokosc promienia elipsy (wartosc w poziomie)

        }
        else ctx.ellipse(this.poczatekX / this.mnoznik, this.poczatekY / this.mnoznik, Math.abs(this.trojkatX[0] - this.poczatekX)/ this.mnoznik, Math.abs(this.trojkatY[0] - this.poczatekY)
          / this.mnoznik, 0, 0, Math.PI * 2);  //trzeba rysowac wysokosc promienia elipsy (wartosc w pionie) oraz szerokosc promienia elipsy (wartosc w poziomie)


        if (this.czyTylkoObrys) {

          ctx.strokeStyle = this.kolor;
          ctx.lineWidth = this.rozmiarFX;

          ctx.stroke();

        }
        else {

          ctx.fillStyle = this.kolor;
          ctx.fill();
        }

        this.zapiszStanObrazu();

        this.ktoryBok = 0;

        this.czyKlikniety = false;

        this.trojkatX = [];
        this.trojkatY = [];

        this.zapiszStanObrazu();

        this.czyWielokatTrwa = false;

        this.poczatekX = this.poczatekY = -1;

        var canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("doKsztaltow")[0];

        var ctx3 = canvas3.getContext('2d');
		
		ctx3.clearRect(0, 0, this.szerokosc, this.wysokosc);




      }, 2);
    }
    else if (this.funkcja == "trojkat" && this.czyKlikniety && this.czyWielokatTrwa) {

      this.szerokosc = this.przedWielokatSzer;
      this.wysokosc = this.przedWielokatWys;

      this.szerokoscGlowna = Number(this.szerokosc) + Number(250);
      this.wysokoscGlowna = Number(this.wysokosc);
      this.wysokoscGlowna2 = Number(this.wysokosc) + Number(50);
      this.wysokosc2 = this.wysokosc;
      this.szerokosc2 = this.szerokosc;

      setTimeout(() => {

        ctx.putImageData(this.przedWielokat, 0, 0);



      }, 1);

      setTimeout(() => {

        this.czyKlikniety = false;

        ctx.beginPath();

        if (this.mnoznik != 1 && this.lupa != "normalny") ctx.moveTo(this.poczatekX/ this.mnoznik, this.poczatekY/ this.mnoznik);
        else ctx.moveTo(this.poczatekX / this.mnoznik, this.poczatekY / this.mnoznik);

        ctx.imageSmoothingEnabled = true;

        if (this.mnoznik != 1 && this.lupa != "normalny") {

          ctx.lineTo(this.trojkatX[0]/ this.mnoznik, this.trojkatY[0]/ this.mnoznik);
          ctx.lineTo(this.trojkatX[1]/ this.mnoznik, this.trojkatY[1]/ this.mnoznik);

        }
        else {

          ctx.lineTo(this.trojkatX[0] / this.mnoznik, this.trojkatY[0] / this.mnoznik);
          ctx.lineTo(this.trojkatX[1] / this.mnoznik, this.trojkatY[1] / this.mnoznik);

        }

        if (this.czyTylkoObrys) {

          ctx.strokeStyle = this.kolor;
          ctx.closePath();
          ctx.stroke();

        }
        else {

          ctx.fillStyle = this.kolor;
          ctx.fill();

        }

        this.zapiszStanObrazu();

        this.ktoryBok = 0;

        this.czyKlikniety = false;

        this.czyWielokatTrwa = false;

        this.trojkatX = [];
        this.trojkatY = [];

        this.poczatekX = -1;
        this.poczatekY = -1;

        var canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("doKsztaltow")[0];

        var ctx3 = canvas3.getContext('2d');
		
		ctx3.clearRect(0, 0, this.szerokosc, this.wysokosc);

      }, 2);

    }
    else if (this.funkcja == "kwadratowaKrzywaBeziera" && this.czyKlikniety && this.czyWielokatTrwa) {

      this.szerokosc = this.przedWielokatSzer;
      this.wysokosc = this.przedWielokatWys;

      this.szerokoscGlowna = Number(this.szerokosc) + Number(250);
      this.wysokoscGlowna = Number(this.wysokosc);
      this.wysokoscGlowna2 = Number(this.wysokosc) + Number(50);
      this.wysokosc2 = this.wysokosc;
      this.szerokosc2 = this.szerokosc;

      setTimeout(() => {

        ctx.putImageData(this.przedWielokat, 0, 0);



      }, 1);

      setTimeout(() => {

        this.czyKlikniety = false;

        ctx.beginPath();

        ctx.imageSmoothingEnabled = true;

        if (this.mnoznik != 1 && this.lupa != "normalny") {

          ctx.moveTo(this.poczatekX/ this.mnoznik, this.poczatekY/ this.mnoznik);

          ctx.quadraticCurveTo(this.trojkatX[0]/ this.mnoznik, this.trojkatY[0]/ this.mnoznik, this.trojkatX[1]/ this.mnoznik, this.trojkatY[1]/ this.mnoznik);

        }
        else {

          ctx.moveTo(this.poczatekX / this.mnoznik, this.poczatekY / this.mnoznik);

          ctx.quadraticCurveTo(this.trojkatX[0] / this.mnoznik, this.trojkatY[0] / this.mnoznik, this.trojkatX[1] / this.mnoznik, this.trojkatY[1] / this.mnoznik);

        }

        if (this.czyTylkoObrys) {

          ctx.strokeStyle = this.kolor;
          ctx.closePath();
          ctx.stroke();

        }
        else {

          ctx.fillStyle = this.kolor;
          ctx.fill();

        }

        this.zapiszStanObrazu();

        this.ktoryBok = 0;

        this.czyKlikniety = false;

        this.trojkatX = [];
        this.trojkatY = [];

        this.poczatekX = -1;
        this.poczatekY = -1;

        this.czyWielokatTrwa = false;

        var canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("doKsztaltow")[0];

        var ctx3 = canvas3.getContext('2d');
		
		ctx3.clearRect(0, 0, this.szerokosc, this.wysokosc);

      }, 2);

    }
    else if (this.funkcja == "szesciennaKrzywaBeziera" && this.czyKlikniety && this.czyWielokatTrwa) {

      this.szerokosc = this.przedWielokatSzer;
      this.wysokosc = this.przedWielokatWys;

      this.szerokoscGlowna = Number(this.szerokosc) + Number(250);
      this.wysokoscGlowna = Number(this.wysokosc);
      this.wysokoscGlowna2 = Number(this.wysokosc) + Number(50);
      this.wysokosc2 = this.wysokosc;
      this.szerokosc2 = this.szerokosc;

      setTimeout(() => {

        ctx.putImageData(this.przedWielokat, 0, 0);



      }, 1);

      setTimeout(() => {

        ctx.imageSmoothingEnabled = true;

        ctx.beginPath();

        if (this.mnoznik != 1 && this.lupa != "normalny") {

          ctx.moveTo(this.poczatekX/ this.mnoznik, this.poczatekY/ this.mnoznik);

          ctx.bezierCurveTo(this.trojkatX[0]/ this.mnoznik, this.trojkatY[0]/ this.mnoznik, this.trojkatX[1]/ this.mnoznik, this.trojkatY[1]/ this.mnoznik, this.szesciennaX/ this.mnoznik, this.szesciennaY/ this.mnoznik);

        }
        else {

          ctx.moveTo(this.poczatekX / this.mnoznik, this.poczatekY / this.mnoznik);

          ctx.bezierCurveTo(this.trojkatX[0] / this.mnoznik, this.trojkatY[0] / this.mnoznik, this.trojkatX[1] / this.mnoznik, this.trojkatY[1] / this.mnoznik, this.szesciennaX
            / this.mnoznik, this.szesciennaY / this.mnoznik);

        }

        if (this.czyTylkoObrys) {

          ctx.strokeStyle = this.kolor;
          ctx.closePath();
          ctx.stroke();

        }
        else {

          ctx.fillStyle = this.kolor;
          ctx.fill();

        }

        this.zapiszStanObrazu();

        this.ktoryBok = 0;

        this.czyKlikniety = false;

        this.trojkatX = [];
        this.trojkatY = [];

        this.szesciennaX = this.szesciennaY = 0;

        this.poczatekX = -1;
        this.poczatekY = -1;

        this.czyWielokatTrwa = false;

        var canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("doKsztaltow")[0];

        var ctx3 = canvas3.getContext('2d');
		
		ctx3.clearRect(0, 0, this.szerokosc, this.wysokosc);

      }, 2);

      

    }
    else if (this.funkcja == "tekst" && this.czyKlikniety && this.czyWielokatTrwa) {

      this.szerokosc = this.przedWielokatSzer;
      this.wysokosc = this.przedWielokatWys;

      this.szerokoscGlowna = Number(this.szerokosc) + Number(250);
      this.wysokoscGlowna = Number(this.wysokosc);
      this.wysokoscGlowna2 = Number(this.wysokosc) + Number(50);
      this.wysokosc2 = this.wysokosc;
      this.szerokosc2 = this.szerokosc;

      setTimeout(() => {

        ctx.putImageData(this.przedWielokat, 0, 0);

      }, 1);

      setTimeout(() => {

        if (this.mnoznik != 1 && this.lupa != "normalny") ctx.font = Math.abs(e.offsetY/this.mnoznik - this.poczatekY/this.mnoznik) + 'px serif';
        else ctx.font = Math.abs(e.offsetY / this.mnoznik - this.poczatekY / this.mnoznik) + 'px serif';

        if (this.czyTylkoObrys) {

          ctx.strokeStyle = this.kolor;
          
          if (this.mnoznik != 1 && this.lupa != "normalny") ctx.strokeText(this.tekst, e.offsetX/this.mnoznik, e.offsetY/this.mnoznik);
          else ctx.strokeText(this.tekst, e.offsetX / this.mnoznik, e.offsetY / this.mnoznik);

        }
        else {

          ctx.fillStyle = this.kolor;

          if (this.mnoznik != 1 && this.lupa != "normalny") ctx.fillText(this.tekst, e.offsetX/this.mnoznik, e.offsetY/this.mnoznik);
          else ctx.fillText(this.tekst, e.offsetX / this.mnoznik, e.offsetY / this.mnoznik);

        }

        this.zapiszStanObrazu();

        this.czyKlikniety = false;
        this.czyWielokatTrwa = false;

        this.poczatekX = this.poczatekY = -1;

        this.X.splice(0);
        this.Y.splice(0);

        this.ktoryBok = 0;

        var canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("doKsztaltow")[0];

        var ctx3 = canvas3.getContext('2d');
		
		ctx3.clearRect(0, 0, this.szerokosc, this.wysokosc);

      }, 2);

      

    }

  }

  anulujLinie() {

    if (this.czyKlikniety && this.funkcja == "linia" || this.funkcja == "prostokat" || this.funkcja == "kolo" || this.funkcja == "elipsa" || this.funkcja == "tekst" || this.funkcja == "trojkat"
      || this.funkcja == "kwadratowaKrzywaBeziera" || this.funkcja == "szesciennaKrzywaBeziera" || this.funkcja == "wielokat" || this.funkcja == "tekst") {

      var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

      var ctx = canvas.getContext('2d');

      if ((this.funkcja == "linia" || this.funkcja == "tekst") && this.czyKlikniety) {

        this.szerokosc = this.przedWielokatSzer;
        this.wysokosc = this.przedWielokatWys;

        this.szerokoscGlowna = Number(this.szerokosc) + Number(250);
        this.wysokoscGlowna = Number(this.wysokosc);
        this.wysokoscGlowna2 = Number(this.wysokosc) + Number(50);
        this.wysokosc2 = this.wysokosc;
        this.szerokosc2 = this.szerokosc;

        setTimeout(() => {

          ctx.putImageData(this.przedWielokat, 0, 0);

          this.poczatekX = -1;
          this.poczatekY = -1;

          ctx.closePath();

          this.czyKlikniety = false;

          this.czyWielokatTrwa = false;

          this.ktoryBok = 0;

          var canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("doKsztaltow")[0];

          var ctx3 = canvas3.getContext('2d');
		  
		  ctx3.clearRect(0, 0, this.szerokosc, this.wysokosc);

        }, 1);

      }
      else if (this.funkcja == "prostokat" && this.czyKlikniety) {

        this.szerokosc = this.przedWielokatSzer;
        this.wysokosc = this.przedWielokatWys;

        this.szerokoscGlowna = Number(this.szerokosc) + Number(250);
        this.wysokoscGlowna = Number(this.wysokosc);
        this.wysokoscGlowna2 = Number(this.wysokosc) + Number(50);
        this.wysokosc2 = this.wysokosc;
        this.szerokosc2 = this.szerokosc;

        setTimeout(() => {

          ctx.putImageData(this.przedWielokat, 0, 0);

          this.poczatekX = -1;
          this.poczatekY = -1;

          ctx.closePath();

          this.czyKlikniety = false;

          this.czyWielokatTrwa = false;

          var canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("doKsztaltow")[0];

          var ctx3 = canvas3.getContext('2d');
		  
		  ctx3.clearRect(0, 0, this.szerokosc, this.wysokosc);

        }, 1);

      }
      else if (this.funkcja == "kolo" && this.czyKlikniety) {

        this.szerokosc = this.przedWielokatSzer;
        this.wysokosc = this.przedWielokatWys;

        this.szerokoscGlowna = Number(this.szerokosc) + Number(250);
        this.wysokoscGlowna = Number(this.wysokosc);
        this.wysokoscGlowna2 = Number(this.wysokosc) + Number(50);
        this.wysokosc2 = this.wysokosc;
        this.szerokosc2 = this.szerokosc;

        setTimeout(() => {

          ctx.putImageData(this.przedWielokat, 0, 0);

          this.poczatekX = -1;
          this.poczatekY = -1;

          ctx.closePath();

          this.czyKlikniety = false;

          this.czyWielokatTrwa = false;

          var canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("doKsztaltow")[0];

          var ctx3 = canvas3.getContext('2d');
		  
		  ctx3.clearRect(0, 0, this.szerokosc, this.wysokosc);

        }, 1);

      }
      else if (this.funkcja == "elipsa" && this.czyKlikniety) {

        this.szerokosc = this.przedWielokatSzer;
        this.wysokosc = this.przedWielokatWys;

        this.szerokoscGlowna = Number(this.szerokosc) + Number(250);
        this.wysokoscGlowna = Number(this.wysokosc);
        this.wysokoscGlowna2 = Number(this.wysokosc) + Number(50);
        this.wysokosc2 = this.wysokosc;
        this.szerokosc2 = this.szerokosc;

        setTimeout(() => {

          ctx.putImageData(this.przedWielokat, 0, 0);

          this.poczatekX = -1;
          this.poczatekY = -1;

          ctx.closePath();

          this.ktoryBok = 0;

          this.czyKlikniety = false;

          this.trojkatX = [];
          this.trojkatY = [];

          this.czyWielokatTrwa = false;

          var canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("doKsztaltow")[0];

          var ctx3 = canvas3.getContext('2d');
		  
		  ctx3.clearRect(0, 0, this.szerokosc, this.wysokosc);

        }, 1);

      } 
      else if ((this.funkcja == "trojkat" || this.funkcja == "kwadratowaKrzywaBeziera" || this.funkcja == "szesciennaKrzywaBeziera") && this.czyKlikniety) {

        

        this.szerokosc = this.przedWielokatSzer;
        this.wysokosc = this.przedWielokatWys;

        this.szerokoscGlowna = Number(this.szerokosc) + Number(250);
        this.wysokoscGlowna = Number(this.wysokosc);
        this.wysokoscGlowna2 = Number(this.wysokosc) + Number(50);
        this.wysokosc2 = this.wysokosc;
        this.szerokosc2 = this.szerokosc;

        setTimeout(() => {

          ctx.putImageData(this.przedWielokat, 0, 0);

          this.poczatekX = -1;
          this.poczatekY = -1;

          ctx.closePath();

          this.ktoryBok = 0;

          this.czyKlikniety = false;

          this.trojkatX = [];
          this.trojkatY = [];

          this.czyWielokatTrwa = false;

          this.szesciennaX = 0;
          this.szesciennaY = 0;

          var canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("doKsztaltow")[0];

          var ctx3 = canvas3.getContext('2d');
		  
		  ctx3.clearRect(0, 0, this.szerokosc, this.wysokosc);

        }, 1);

       
      }
      else if (this.funkcja == "wielokat" && this.czyKlikniety) {

        this.szerokosc = this.przedWielokatSzer;
        this.wysokosc = this.przedWielokatWys;

        this.szerokoscGlowna = Number(this.szerokosc) + Number(250);
        this.wysokoscGlowna = Number(this.wysokosc);
        this.wysokoscGlowna2 = Number(this.wysokosc) + Number(50);
        this.wysokosc2 = this.wysokosc;
        this.szerokosc2 = this.szerokosc;

        setTimeout(() => {

          ctx.putImageData(this.przedWielokat, 0, 0);

          this.X.splice(0);
          this.Y.splice(0);

          this.zapiszStanObrazu();

          ctx.closePath();

          this.czyKlikniety = false;

          this.czyWielokatTrwa = false;

          var canvas3: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("doKsztaltow")[0];

          var ctx3 = canvas3.getContext('2d');
		  
		  ctx3.clearRect(0, 0, this.szerokosc, this.wysokosc);

        }, 1);

      }
    }

  }

  uaktywnijCanvas() {

    var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

    if (canvas.getContext("2d")) {

      var ctx = canvas.getContext('2d');
      ctx.fillStyle = 'rgb(200, 0, 0)';
      ctx.imageSmoothingEnabled = true;

    }
    else console.log("Canvas nie jest obslugiwany!");

  }

  drawStar(ctx, r) {

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(r, 0);
    for (var i = 0; i < 9; i++) {
      ctx.rotate(Math.PI / 5);
      if (i % 2 === 0) {
        ctx.lineTo((r / 0.525731) * 0.200811, 0);
      } else {
        ctx.lineTo(r, 0);
      }
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();

  }

  roundedRect(ctx, x, y, width, height, radius) {

    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.lineTo(x + width - radius, y + height);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.lineTo(x + width, y + radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.lineTo(x + radius, y);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();

  }

  zmienRozmiarFunkcji(roz: number = 1) {

    if (roz > 0 && roz < 10000) {

      this.ostatniRozmiar = this.rozmiarFX;

      this.rozmiarFX = roz;
      this.rozmiarFY = roz;

    }

  }

  zmienKolor(kolorRgba: string) {

    this.kolor = "rgba(" + kolorRgba + ",1)";

  }

  zmienRozmiar(wysokosc: string, szerokosc: string, czyTylkoTlo: any, czyBezLupy: boolean = false) {  //wysokosc i szerokosc traktowana jak string

    let tymczWys: number = this.wysokosc;
    let tymczSzer: number = this.szerokosc;

    var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

    var ctx = canvas.getContext('2d');

    var canvas2: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka2")[0];

    var ctx2 = canvas2.getContext('2d');

    if (wysokosc.length > 0 && szerokosc.length > 0 && Number(wysokosc) > 0 && Number(wysokosc) < 10000 && Number(szerokosc) > 0 && Number(szerokosc) < 10000) {

      this.skalaRozmiaruX = Number(szerokosc) / this.szerokosc;
      this.skalaRozmiaruY = Number(wysokosc) / this.wysokosc;

      this.czyTylkoTlo = czyTylkoTlo;

      if (this.czyTylkoTlo) {

        this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

        ctx2.fillStyle = "white";
        
		    ctx2.fillRect(0, 0, this.szerokosc2, this.wysokosc2);
        ctx2.fillStyle = this.kolor;

        ctx2.putImageData(this.ostatniImageData, 0, 0);

      }
      else {

        ctx2.drawImage(canvas, 0, 0);      

      }

      if (wysokosc[wysokosc.length - 1] == "%") {

        wysokosc = wysokosc.slice(0, wysokosc.length - 1);
        szerokosc = szerokosc.slice(0, szerokosc.length - 1);

        this.wysokosc = this.wysokosc * Number(wysokosc) / 100;
        this.szerokosc = this.szerokosc * Number(szerokosc) / 100;

      }
      else {

        this.wysokosc = Number(wysokosc);
        this.szerokosc = Number(szerokosc);
        
      }

      this.szerokoscGlowna = Number(this.szerokosc) + Number(250); //+15 uwzglednione biale prostokaty do rozciagania obrazu
      this.wysokoscGlowna = Number(this.wysokosc);
      this.wysokoscGlowna2 = Number(this.wysokosc) + Number(50);

      var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

      var ctx = canvas.getContext('2d');

      ctx.imageSmoothingEnabled = true;

      if (!this.czyTylkoTlo) setTimeout(() => { this.aktualizuj(false, czyBezLupy); }, 1);
      else setTimeout(() => { this.aktualizuj(true, czyBezLupy); }, 1);

      setTimeout(() => {

        this.skalaRozmiaruX = 1;
        this.skalaRozmiaruY = 1;

        this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

        ctx2.putImageData(this.ostatniImageData, 0, 0);

        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, this.szerokosc, this.wysokosc);
        ctx.fillStyle = this.kolor;

        this.ostatniImageData = ctx2.getImageData(0, 0, this.szerokosc2, this.wysokosc2);

        ctx.putImageData(this.ostatniImageData, 0, 0);

      }, 3);

      

    }
  }

  zmienRozmiar2(wysokosc: string, szerokosc: string, czyTylkoTlo: any, czyBezLupy: boolean = false) {

    if (wysokosc.length > 0 && szerokosc.length > 0 && Number(wysokosc) > 0 && Number(wysokosc) < 10000 && Number(szerokosc) > 0 && Number(szerokosc) < 10000) {

      this.wysokosc3 = Number(wysokosc);

      this.szerokosc3 = Number(szerokosc);


    }
  }

  zmienRozmiar22(wysokosc: string, szerokosc: string, czyTylkoTlo: any, czyBezLupy: boolean = false) {



    var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

    var ctx = canvas.getContext('2d');

    var canvas2: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka2")[0];

    var ctx2 = canvas2.getContext('2d');

    if (wysokosc.length > 0 && szerokosc.length > 0 && Number(wysokosc) > 0 && Number(wysokosc) < 10000 && Number(szerokosc) > 0 && Number(szerokosc) < 10000) {

      this.skalaRozmiaruX = Number(szerokosc) / this.szerokosc;
      this.skalaRozmiaruY = Number(wysokosc) / this.wysokosc;

      this.czyTylkoTlo = czyTylkoTlo;

      if (this.czyTylkoTlo) {

        this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);
		
		    ctx2.fillStyle = "white";

        ctx2.fillRect(0, 0, this.szerokosc2, this.wysokosc2);

        ctx2.putImageData(this.ostatniImageData, 0, 0);

      }
      else {

        ctx2.drawImage(canvas, 0, 0);

      }

      if (wysokosc[wysokosc.length - 1] == "%") {

        wysokosc = wysokosc.slice(0, wysokosc.length - 1);
        szerokosc = szerokosc.slice(0, szerokosc.length - 1);

        this.wysokosc = this.wysokosc * Number(wysokosc) / 100;
        this.szerokosc = this.szerokosc * Number(szerokosc) / 100;

      }
      else {

        this.wysokosc = Number(wysokosc);
        this.szerokosc = Number(szerokosc);

        this.wysokosc3 = Number(wysokosc);

        this.szerokosc3 = Number(szerokosc);
        
      }


      this.szerokoscGlowna = Number(this.szerokosc) + Number(250); //+15 uwzglednione biale prostokaty do rozciagania obrazu
      this.wysokoscGlowna = Number(this.wysokosc);
      this.wysokoscGlowna2 = Number(this.wysokosc) + Number(50);

      var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

      var ctx = canvas.getContext('2d');

      ctx.imageSmoothingEnabled = true;


      if (!this.czyTylkoTlo) setTimeout(() => { this.aktualizuj(false, czyBezLupy); }, 1);
      else setTimeout(() => { this.aktualizuj(true, czyBezLupy); }, 1);

      setTimeout(() => {

        this.skalaRozmiaruX = 1;
        this.skalaRozmiaruY = 1;
      }, 3);

    }
  }

  zatwierdzTekst(tekst: string) {

    if (tekst.length > 0) this.tekst = tekst;

  }

  zwrocFunkcja(): string {

    return this.funkcja;

  }

  liniaWspolrzedne(poczatekX0: string, poczatekY0: string, koniecX0: string, koniecY0: string) {

    let poczatekX: number = Number(poczatekX0);
    let poczatekY: number = Number(poczatekY0);
    let koniecX: number = Number(koniecX0);
    let koniecY: number = Number(koniecY0);

    let szero1: number = Number(this.canvas.style.width.replace("px", ""));
    let wyso1: number = Number(this.canvas.style.height.replace("px", ""));

    if (poczatekX >= 0 && poczatekX < szero1 && koniecX >= 0 && koniecX < szero1 && poczatekY >= 0 && poczatekY < wyso1 && koniecY >= 0 && koniecY < wyso1) {

      var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

      if (canvas.getContext("2d")) {

        var ctx = canvas.getContext('2d');

        this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

        ctx.strokeStyle = this.kolor;
        ctx.lineWidth = this.rozmiarFX;
        ctx.shadowBlur = 0;
        ctx.shadowColor = "white";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.imageSmoothingEnabled = true;

        let linia = new Path2D();

        if (this.mnoznik != 1 && this.lupa != "normalny") {

          linia.moveTo(poczatekX / this.mnoznik, poczatekY / this.mnoznik);
          linia.lineTo(koniecX / this.mnoznik, koniecY / this.mnoznik);

        }
        else {

          linia.moveTo(poczatekX / this.mnoznik, poczatekY / this.mnoznik);
          linia.lineTo(koniecX / this.mnoznik, koniecY / this.mnoznik);

        }

        ctx.stroke(linia);

        this.obiektyFigurObrys.push(linia);

        this.zapiszStanObrazu();

      }

    }

  }

  prostokatWspolrzedne(poczatekX0: string, poczatekY0: string, koniecX0: string, koniecY0: string) {

    let poczatekX: number = Number(poczatekX0);
    let poczatekY: number = Number(poczatekY0);
    let koniecX: number = Number(koniecX0);
    let koniecY: number = Number(koniecY0);

    let szero1: number = Number(this.canvas.style.width.replace("px", ""));
    let wyso1: number = Number(this.canvas.style.height.replace("px", ""));

    if (poczatekX >= 0 && poczatekX < szero1 && koniecX >= 0 && koniecX < szero1 && poczatekY >= 0 && poczatekY < wyso1 && koniecY >= 0 && koniecY < wyso1) {

      var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

      if (canvas.getContext("2d")) {

        var ctx = canvas.getContext('2d');

        this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

        ctx.fillStyle = this.kolor;
        ctx.shadowBlur = 0;
        ctx.shadowColor = "white";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.imageSmoothingEnabled = true;

        if (this.czyTylkoObrys) {

          ctx.strokeStyle = this.kolor;
          ctx.lineWidth = this.rozmiarFX;

          if (this.mnoznik != 1 && this.lupa != "normalny") ctx.strokeRect(poczatekX / this.mnoznik, poczatekY / this.mnoznik, (koniecX - poczatekX) / this.mnoznik, (koniecY - poczatekY) / this.mnoznik); //przy lupie musi
          else ctx.strokeRect(poczatekX / this.mnoznik, poczatekY / this.mnoznik, (koniecX - poczatekX) / this.mnoznik, (koniecY - poczatekY) / this.mnoznik); //przy lupie musi

        }
        else {

          if (this.mnoznik != 1 && this.lupa != "normalny") ctx.fillRect(poczatekX / this.mnoznik, poczatekY / this.mnoznik, (koniecX - poczatekX) / this.mnoznik, (koniecY - poczatekY) / this.mnoznik); //przy lupie musi
          else ctx.fillRect(poczatekX / this.mnoznik, poczatekY / this.mnoznik, (koniecX - poczatekX) / this.mnoznik, (koniecY - poczatekY) / this.mnoznik); //przy lupie musi

        }

        this.zapiszStanObrazu();
      }

    }
  }

  koloWspolrzedne(poczatekX0: string, poczatekY0: string, koniecY0: string, koniecX0: string = "-1", stopnieOd0: string = "0", stopnie0: string = "360", koloKoniecX: any) { //rysuje fragment/calosc kola lub elipsy

    let poczatekX: number = Number(poczatekX0);
    let poczatekY: number = Number(poczatekY0);
    let koniecY: number = Number(koniecY0);
    let stopnieOd: number = Number(stopnieOd0);
    let stopnie: number = Number(stopnie0);
    let koniecX: number = Number(koniecX0);

    let szero1: number = Number(this.canvas.style.width.replace("px", ""));
    let wyso1: number = Number(this.canvas.style.height.replace("px", ""));

    if (poczatekX >= 0 && poczatekX < szero1 && poczatekY >= 0 && poczatekY < wyso1 && koniecY >= 0 && koniecY < wyso1 && stopnieOd >= 0 && stopnieOd <= 360 && stopnie >= 1 && stopnie <= 360 && stopnieOd < stopnie) {

      if (this.funkcja == "kolo" || (this.funkcja == "elipsa" && koniecX >= 0 && koniecX < szero1)) {

        var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

        if (canvas.getContext("2d")) {

          var ctx = canvas.getContext('2d');

          this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

          ctx.shadowBlur = 0;
          ctx.shadowColor = "white";
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
          ctx.imageSmoothingEnabled = true;

          ctx.beginPath();

          if (koniecX == -1) {

            if (this.mnoznik != 1 && this.lupa != "normalny") ctx.arc(poczatekX / this.mnoznik, poczatekY / this.mnoznik, Math.abs(koniecY - poczatekY) / this.mnoznik, Math.PI / 180 * (stopnieOd - 90), Math.PI / 180 * (stopnie - 90), false); //przy lupie musi
            else ctx.arc(poczatekX / this.mnoznik, poczatekY / this.mnoznik, Math.abs(koniecY - poczatekY) / this.mnoznik, Math.PI / 180 * (stopnieOd - 90), Math.PI
              / 180 * (stopnie - 90), false); //przy lupie musi

          }
          else {

            if (this.mnoznik != 1 && this.lupa != "normalny") ctx.ellipse(poczatekX / this.mnoznik, poczatekY / this.mnoznik, Math.abs(koniecX - poczatekX) / this.mnoznik, Math.abs(koniecY - poczatekY) / this.mnoznik, 0, Math.PI / 180 * (stopnieOd - 90),
              Math.PI / 180 * (stopnie - 90), false);
            else ctx.ellipse(poczatekX / this.mnoznik, poczatekY / this.mnoznik, Math.abs(koniecX - poczatekX) / this.mnoznik, Math.abs(koniecY - poczatekY) / this.mnoznik, 0,
              Math.PI / 180 * (stopnieOd - 90), Math.PI / 180 * (stopnie - 90), false);

            koloKoniecX.value = "";

          }

          if (this.czyTylkoObrys) {

            ctx.strokeStyle = this.kolor;
            console.log(this.rozmiarFX);
            ctx.lineWidth = this.rozmiarFX;
            ctx.stroke();

          }
          else {

            ctx.fillStyle = this.kolor;
            ctx.fill();

          }

          this.zapiszStanObrazu();

        }

      }
    }
  }

  trojkatWspolrzedne(poczatekX0: string, poczatekY0: string, t2X: string, t2Y: string, koniecX0: string, koniecY0: string) {

    let poczatekX: number = Number(poczatekX0);
    let poczatekY: number = Number(poczatekY0);
    let drugiX: number = Number(t2X);
    let drugiY: number = Number(t2Y);
    let koniecX: number = Number(koniecX0);
    let koniecY: number = Number(koniecY0);

    let szero1: number = Number(this.canvas.style.width.replace("px", ""));
    let wyso1: number = Number(this.canvas.style.height.replace("px", ""));

    if (poczatekX >= 0 && poczatekX < szero1 && koniecX >= 0 && koniecX < szero1 && poczatekY >= 0 && poczatekY < wyso1 && koniecY >= 0 && koniecY < wyso1 && drugiX >= 0 && drugiX < szero1 && drugiY >= 0
      && drugiY < wyso1) {

      var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

      if (canvas.getContext("2d")) {

        var ctx = canvas.getContext('2d');

        this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

        ctx.shadowBlur = 0;
        ctx.shadowColor = "white";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.imageSmoothingEnabled = true;

        ctx.beginPath();

        if (this.mnoznik != 1 && this.lupa != "normalny") {

          ctx.moveTo(poczatekX / this.mnoznik, poczatekY / this.mnoznik);

          ctx.lineTo(drugiX / this.mnoznik, drugiY / this.mnoznik);
          ctx.lineTo(koniecX / this.mnoznik, koniecY / this.mnoznik);
          //ctx.closePath();

        }
        else {

          ctx.moveTo(poczatekX / this.mnoznik, poczatekY / this.mnoznik);

          ctx.lineTo(drugiX / this.mnoznik, drugiY / this.mnoznik);
          ctx.lineTo(koniecX / this.mnoznik, koniecY / this.mnoznik);

        }

        if (this.czyTylkoObrys) {

          ctx.strokeStyle = this.kolor;
          ctx.closePath();
          ctx.lineWidth = this.rozmiarFX;
          ctx.stroke();

        }
        else {

          ctx.fillStyle = this.kolor;
          ctx.fill();

        }

        this.zapiszStanObrazu();

      }

    }
  }

  kwadrKBezieraWspolrzedne(poczatekX0: string, poczatekY0: string, t2X: string, t2Y: string, koniecX0: string, koniecY0: string) {

    let poczatekX: number = Number(poczatekX0);
    let poczatekY: number = Number(poczatekY0);
    let drugiX: number = Number(t2X);
    let drugiY: number = Number(t2Y);
    let koniecX: number = Number(koniecX0);
    let koniecY: number = Number(koniecY0);

    let szero1: number = Number(this.canvas.style.width.replace("px", ""));
    let wyso1: number = Number(this.canvas.style.height.replace("px", ""));

    if (poczatekX >= 0 && poczatekX < szero1 && koniecX >= 0 && koniecX < szero1 && poczatekY >= 0 && poczatekY < wyso1 && koniecY >= 0 && koniecY < wyso1 && drugiX >= 0 && drugiX < szero1 && drugiY >= 0
      && drugiY < wyso1) {

      var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

      if (canvas.getContext("2d")) {

        var ctx = canvas.getContext('2d');

        this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

        ctx.shadowBlur = 0;
        ctx.shadowColor = "white";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.imageSmoothingEnabled = true;


        ctx.beginPath();


        if (this.mnoznik != 1 && this.lupa != "normalny") {

          ctx.moveTo(poczatekX / this.mnoznik, poczatekY / this.mnoznik);
          ctx.quadraticCurveTo(drugiX / this.mnoznik, drugiY / this.mnoznik, koniecX / this.mnoznik, koniecY / this.mnoznik);

        }
        else {

          ctx.moveTo(poczatekX / this.mnoznik, poczatekY / this.mnoznik);
          ctx.quadraticCurveTo(drugiX / this.mnoznik, drugiY / this.mnoznik, koniecX / this.mnoznik, koniecY / this.mnoznik);

        }

        if (this.czyTylkoObrys) {

          ctx.strokeStyle = this.kolor;
          ctx.closePath();

          ctx.stroke();

        }
        else {

          ctx.fillStyle = this.kolor;
          ctx.fill();

        }

        this.zapiszStanObrazu();

      }

    }
  }

  szesciennaKrzywaBezieraWspolrzedne(poczatekX0: string, poczatekY0: string, t2X: string, t2Y: string, t3X: string, t3Y: string, koniecX0: string, koniecY0: string) {

    let poczatekX: number = Number(poczatekX0);
    let poczatekY: number = Number(poczatekY0);
    let drugiX: number = Number(t2X);
    let drugiY: number = Number(t2Y);
    let trzeciX: number = Number(t3X);
    let trzeciY: number = Number(t3Y);
    let koniecX: number = Number(koniecX0);
    let koniecY: number = Number(koniecY0);

    let szero1: number = Number(this.canvas.style.width.replace("px", ""));
    let wyso1: number = Number(this.canvas.style.height.replace("px", ""));

    if (poczatekX >= 0 && poczatekX < szero1 && koniecX >= 0 && koniecX < szero1 && poczatekY >= 0 && poczatekY < wyso1 && koniecY >= 0 && koniecY < wyso1 && drugiX >= 0 && drugiX < szero1 && drugiY >= 0
      && drugiY < wyso1 && trzeciX >= 0 && trzeciX < szero1 && trzeciY >= 0 && trzeciY < wyso1) {

      var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

      if (canvas.getContext("2d")) {

        var ctx = canvas.getContext('2d');

        this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

        ctx.shadowBlur = 0;
        ctx.shadowColor = "white";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.imageSmoothingEnabled = true;

        ctx.beginPath();

        if (this.mnoznik != 1 && this.lupa != "normalny") {

          ctx.moveTo(poczatekX / this.mnoznik, poczatekY / this.mnoznik);
          ctx.bezierCurveTo(drugiX / this.mnoznik, drugiY / this.mnoznik, trzeciX / this.mnoznik, trzeciY / this.mnoznik, koniecX / this.mnoznik, koniecY / this.mnoznik);

        }
        else {

          ctx.moveTo(poczatekX / this.mnoznik, poczatekY / this.mnoznik);
          ctx.bezierCurveTo(drugiX / this.mnoznik, drugiY / this.mnoznik, trzeciX / this.mnoznik, trzeciY / this.mnoznik, koniecX / this.mnoznik, koniecY / this.mnoznik);

        }


        if (this.czyTylkoObrys) {

          ctx.strokeStyle = this.kolor;
          ctx.closePath();
          ctx.stroke();

        }
        else {

          ctx.fillStyle = this.kolor;
          ctx.fill();

        }

        this.zapiszStanObrazu();

      }

    }
  }

  probnikWspolrzedne(poczatekX0: string, poczatekY0: string) {

    let poczatekX: number = Number(poczatekX0);
    let poczatekY: number = Number(poczatekY0);

    let szero1: number = Number(this.canvas.style.width.replace("px", ""));
    let wyso1: number = Number(this.canvas.style.height.replace("px", ""));

    if (poczatekX >= 0 && poczatekX < szero1 && poczatekY >= 0 && poczatekY < wyso1) {

      var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

      if (canvas.getContext("2d")) {

        var ctx = canvas.getContext('2d');

        this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

        if (this.mnoznik != 1 && this.lupa != "normalny") var pixel = ctx.getImageData(poczatekX / this.mnoznik, poczatekY / this.mnoznik, 1, 1);
        else var pixel = ctx.getImageData(poczatekX / this.mnoznik, poczatekY / this.mnoznik, 1, 1);

        var data = pixel.data;

        const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;

        this.kolor = rgba;

        if (this.kolor == "rgba(220, 53, 69, 1)") this.kolor = "rgba(220, 53, 69, 1)";
        else if (this.kolor == "rgba(0, 123, 255, 1)") this.kolor = "rgba(0, 123, 255, 1)";
        else if (this.kolor == "rgba(40, 167, 69, 1)") this.kolor = "rgba(40, 167, 69, 1)";
        else if (this.kolor == "rgba(255, 255, 255, 1)") this.kolor = "rgba(255, 255, 255, 1)";
        else if (this.kolor == "rgba(255, 193, 7, 1)") this.kolor = "rgba(255, 193, 7, 1)";
        else if (this.kolor == "rgba(52, 58, 64, 1)") this.kolor = "rgba(52, 58, 64, 1)";
        else {

          this.kolor = rgba;

        }

      }

    }
  }

  wypelnienieWspolrzedne(poczatekX0: string, poczatekY0: string) {

    let poczatekX: number = Math.floor(Number(poczatekX0) / this.mnoznik);
    let poczatekY: number = Math.floor(Number(poczatekY0) / this.mnoznik);

    let szero1: number = Number(this.canvas.style.width.replace("px", ""));
    let wyso1: number = Number(this.canvas.style.height.replace("px", ""));

    if (poczatekX >= 0 && poczatekX < szero1 && poczatekY >= 0 && poczatekY < wyso1 && this.poprawnaTolerancja) {

      var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

      if (canvas.getContext("2d")) {

        var ctx = canvas.getContext('2d');

        var x = poczatekX;
        var y = poczatekY;

        this.czyWypelnienieTrwa = true;

        this.czyKlikniety = false;

        setTimeout(() => {

          var pixel = ctx.getImageData(x, y, 1, 1);
          this.data = pixel.data;

          for (let i = 0; i < 4; i++) this.dataNumer[i] = this.data[i];

          var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

          this.canvas = canvas;

          let szero1: number = Number(this.canvas.style.width.replace("px", ""));
          let wyso1: number = Number(this.canvas.style.height.replace("px", ""));

          for (let i = 0; i < szero1; i++) {

            this.tablica[i] = [];

            for (let j = 0; j < wyso1; j++) {


              this.tablica[i][j] = false;

            }

          }

          if (this.tablica[x][y] == false) {

            this.kolejkaData.push(this.data);

            this.kolejkaX.push(x);
            this.kolejkaY.push(y);

            if (!this.czyWypelnienieJedenPion) this.tablica[x][y] = true;

            var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

            if (canvas.getContext("2d")) {

              this.ctx = canvas.getContext('2d');


            }

            this.canvas = canvas;

            let kolorekString: String[] = this.kolor.replace("rgba(", "").replace(")", "").split(",");

            this.kolorek[0] = Number(kolorekString[0]);
            this.kolorek[1] = Number(kolorekString[1]);
            this.kolorek[2] = Number(kolorekString[2]);
            this.kolorek[3] = Number(kolorekString[3]);

            this.szero1 = Number(this.canvas.style.width.replace("px", ""));
            this.wyso1 = Number(this.canvas.style.height.replace("px", ""));

            if (!this.czyTolerancja) this.tolerancja = 0;

            this.calaGrafika = ctx.getImageData(0, 0, szero1, wyso1);

            var pixel: ImageData = ctx.getImageData(x, y, 1, 1);
            let data: Uint8ClampedArray = pixel.data;

            if (this.tolerancja == 0) {

              this.kolejnoscNajwiekszegoNumeruKoloru(this.kolorek);

              if (this.czyWypelnienieJedenPion) {

                while (this.kolejkaX.length > 0) this.skanowanieLinii2();

              }
              else while (this.kolejkaX.length > 0) this.samaSiebie();

            }
            else {

              if (this.czyWypelnienieJedenPion) {

                while (this.kolejkaX.length > 0) this.skanowanieLinii2Tolerancja();

              }
              else {

                while (this.kolejkaX.length > 0) this.samaSiebieTolerancja();  //nie wszystko zoptymalizowane - patrz this.samaSiebie()

              }


            }

            ctx.putImageData(this.calaGrafika, 0, 0);

          }

          this.zapiszStanObrazu();

          this.czyWypelnienieTrwa = false;

        }, 20);

      }

    }

  }


  kolejnoscNajwiekszegoNumeruKoloru(kolorek: number[]) {

    let min: number = 300;
    let max: number = 0;
    let srodek: number;
    let gdzie: number[] = [0, 0];

    for (let i = 0; i < 3; i++) {

      if (kolorek[i] > max) {

        max = kolorek[i];
        gdzie[0] = i;
        
      }

      if (kolorek[i] < min) {

        min = kolorek[i];
        gdzie[1] = i;
      }

    }

    srodek = 0;

    if (srodek != gdzie[0] && srodek != gdzie[1]) { }
    else srodek++;

    if (srodek != gdzie[0] && srodek != gdzie[1]) { }
    else srodek++;

    this.kolejnosc1 = gdzie[1];
    this.kolejnosc2 = srodek;
    this.kolejnosc3 = gdzie[0];

  }


  tekstWspolrzedne(poczatekX0: string, poczatekY0: string, koniecX0: string, koniecY0: string) {

    let poczatekX: number = Number(poczatekX0);
    let poczatekY: number = Number(poczatekY0);
    let koniecX: number = Number(koniecX0);
    let koniecY: number = Number(koniecY0);

    let szero1: number = Number(this.canvas.style.width.replace("px", ""));
    let wyso1: number = Number(this.canvas.style.height.replace("px", ""));

    if (poczatekX >= 0 && poczatekX < szero1 && koniecX >= 0 && koniecX < szero1 && poczatekY >= 0 && poczatekY < wyso1 && koniecY >= 0 && koniecY < wyso1 && koniecY > poczatekY) {

      var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

      if (canvas.getContext("2d")) {

        var ctx = canvas.getContext('2d');

        if (this.mnoznik != 1 && this.lupa != "normalny") ctx.font = Math.abs(koniecY / this.mnoznik - poczatekY / this.mnoznik) + 'px serif';
        else ctx.font = Math.abs(koniecY / this.mnoznik - poczatekY / this.mnoznik) + 'px serif';
        ctx.fillStyle = this.kolor;


        if (this.czyTylkoObrys) {

          ctx.strokeStyle = this.kolor;
          
          if (this.mnoznik != 1 && this.lupa != "normalny") ctx.strokeText(this.tekst, koniecX / this.mnoznik, koniecY / this.mnoznik);
          else ctx.strokeText(this.tekst, koniecX / this.mnoznik, koniecY / this.mnoznik);

        }
        else {

          ctx.fillStyle = this.kolor;

          if (this.mnoznik != 1 && this.lupa != "normalny") ctx.fillText(this.tekst, koniecX / this.mnoznik, koniecY / this.mnoznik);
          else ctx.fillText(this.tekst, koniecX / this.mnoznik, koniecY / this.mnoznik);
        }

        this.zapiszStanObrazu();

      }

    }
  }

  kopiujWspolrzedne(poczatekX0: string, poczatekY0: string, koniecX0: string, koniecY0: string, drugiPoczatekX0: string, drugiPoczatekY0: string,czyWytnij:boolean=false) {

    let poczatekX: number = Number(poczatekX0);
    let poczatekY: number = Number(poczatekY0);
    let koniecX: number = Number(koniecX0);
    let koniecY: number = Number(koniecY0);
    let drugiPoczatekX: number = Number(drugiPoczatekX0);
    let drugiPoczatekY: number = Number(drugiPoczatekY0);

    let szero1: number = Number(this.canvas.style.width.replace("px", ""));
    let wyso1: number = Number(this.canvas.style.height.replace("px", ""));

    if (poczatekX >= 0 && poczatekX < szero1 && koniecX >= 0 && koniecX < szero1 && poczatekY >= 0 && poczatekY < wyso1 && koniecY >= 0 && koniecY < wyso1 && drugiPoczatekX >= 0 && drugiPoczatekX < szero1
      && drugiPoczatekY >= 0 && drugiPoczatekY < wyso1 && poczatekX < koniecX && poczatekY < koniecY) {

      var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

      if (canvas.getContext("2d")) {

        var ctx = canvas.getContext('2d');

        var canvas2: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka2")[0];

        var ctx2 = canvas2.getContext('2d');

        if (this.mnoznik != 1 && this.lupa != "normalny") this.ostatniImageData = ctx.getImageData(poczatekX, poczatekY, koniecX, koniecY);
        else this.ostatniImageData = ctx.getImageData(poczatekX / this.mnoznik, poczatekY / this.mnoznik, koniecX / this.mnoznik, koniecY / this.mnoznik);

        ctx2.putImageData(this.ostatniImageData, 0, 0);

        if (this.funkcja == "wytnij" || czyWytnij) {

          ctx.fillStyle = "white";

          if (this.mnoznik != 1 && this.lupa != "normalny") ctx.fillRect(poczatekX, poczatekY, Math.abs(koniecX - poczatekX), Math.abs(koniecY - poczatekY));
          else ctx.fillRect(poczatekX / this.mnoznik, poczatekY / this.mnoznik, Math.abs(koniecX / this.mnoznik - poczatekX / this.mnoznik), Math.abs(koniecY - poczatekY) / this.mnoznik);

          ctx.fillStyle = this.kolor;

        }

        if (this.mnoznik != 1 && this.lupa != "normalny") {

          this.ostatniImageData = ctx2.getImageData(0, 0, Math.abs(koniecX - poczatekX), Math.abs(koniecY - poczatekY));
          ctx.putImageData(this.ostatniImageData, drugiPoczatekX, drugiPoczatekY);

        }
        else {

          this.ostatniImageData = ctx2.getImageData(0, 0, Math.abs(koniecX - poczatekX) / this.mnoznik, Math.abs(koniecY - poczatekY) / this.mnoznik);
          ctx.putImageData(this.ostatniImageData, drugiPoczatekX / this.mnoznik, drugiPoczatekY / this.mnoznik);

        }



        ctx2.fillStyle = "white";

        ctx2.fillRect(0, 0, Math.abs(koniecX - poczatekX), Math.abs(koniecY - poczatekY));

        ctx2.fillStyle = this.kolor;

        this.zapiszStanObrazu();

      }

    }
  }

  przywroc() {
	  
    var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

    var ctx = canvas.getContext('2d');

	this.mnoznik = 1;
	this.lupa = "normalny";

    this.szerokosc = this.tablicaCofnijSzerokosc[this.licznik];
    this.wysokosc = this.tablicaCofnijWysokosc[this.licznik];
    this.szerokoscGlowna = Number(this.szerokosc) + Number(250);
    this.wysokoscGlowna = Number(this.wysokosc);
    this.wysokoscGlowna2 = Number(this.wysokosc) + Number(50);
    this.wysokosc2 = this.wysokosc;
    this.szerokosc2 = this.szerokosc;
    this.wysokosc3 = this.wysokosc;
    this.szerokosc3 = this.szerokosc;

	ctx.fillStyle = "white";
    
	ctx.fillRect(0, 0, this.szerokosc,this.wysokosc);
    ctx.fillStyle = this.kolor;

    setTimeout(() => {


      ctx.putImageData(this.tablicaCofnij[this.licznik], 0, 0);

    }, 10);  //trzeba dac czas na wypelnienie obrazu na bialo

  }

  cofnij() {

    if (this.lupa=="normalny" && this.licznik > 0 && this.licznik < 50 && !this.czyWielokatTrwa) {

      this.licznik--;

      this.przywroc();

    }
	


  }

  anulujCofnij() {

    if (this.lupa=="normalny" && this.licznik >= 0 && this.licznik < 49 && !this.czyWielokatTrwa) {

      this.licznik++;

      if (this.licznik < this.tablicaCofnijSzerokosc.length) this.przywroc();
      else this.licznik--;

    }

  }

  zmienTolerancja(toler: string) {

    if (Number(toler) >= 0 && Number(toler) <= 255) {

      this.tolerancja = Number(toler);
      this.poprawnaTolerancja = true;
    }
    else this.poprawnaTolerancja = false;

  }

  sprawdzCWT(bool: boolean): boolean  {

    if(bool) console.log(bool);

    return bool;

  }

  zwrocCzyWypelnienieTrwa(): boolean {

    return this.czyWypelnienieTrwa;

  }

  zwrocSzerokoscIWybor(): number {

    return 100; //this.stringNaNumber(this.canvas.style.width.replace("px","")) + Number(this.wyborSzer); //Number(this.szerokosc) + Number(this.wyborSzer);

  }

  wielokatWspolrzedne(X0: string, Y0: string, wielokatX: any, wielokatY: any) {

    this.czyKlikniety = true;

    this.czyWielokatTrwa = true;

    let szero1: number = Number(this.canvas.style.width.replace("px", ""));
    let wyso1: number = Number(this.canvas.style.height.replace("px", ""));

    if (Number(X0) >= 0 && Number(X0) < szero1 && Number(Y0) >= 0 && Number(Y0) < wyso1) {

      var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

      if (canvas.getContext("2d")) {

        var ctx = canvas.getContext('2d');
        ctx.strokeStyle = this.kolor;
        ctx.fillStyle = this.kolor;

        if (this.X.length == 0) {

          this.przedWielokat = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);
          this.przedWielokatSzer = this.szerokosc;
          this.przedWielokatWys = this.wysokosc;

        }

        this.X.push(Number(X0));
        this.Y.push(Number(Y0));

        if (this.X.length == 1) {

          ctx.lineWidth = this.rozmiarFX;

          if (this.mnoznik != 1 && this.lupa != "normalny") ctx.moveTo(this.X[0] / this.mnoznik, this.Y[0] / this.mnoznik);
          else ctx.moveTo(this.X[0] / this.mnoznik, this.Y[0] / this.mnoznik);

          this.prostokat(this.X[0] / this.mnoznik, this.Y[0] / this.mnoznik, ctx, this.rozmiarFX / this.mnoznik, this.rozmiarFY / this.mnoznik);

        }
        else if (this.X.length > 1) {

          ctx.beginPath();
          ctx.lineWidth = this.rozmiarFX;

          if (this.mnoznik != 1 && this.lupa != "normalny") {

            ctx.moveTo(this.X[this.X.length - 2] / this.mnoznik, this.Y[this.Y.length - 2] / this.mnoznik);

            let tol: number = 0;

            if (this.czyTolerancjaWielokat) tol = 5; //sumarycznie 5 px roznicy

            if ((Math.abs(this.X[0] - this.X[this.X.length - 1]) + Math.abs(this.Y[0] - this.Y[this.Y.length - 1]) <= tol) && (Math.abs(this.X[0] - this.X[this.X.length - 1])
              + Math.abs(this.Y[0] - this.Y[this.Y.length - 1]) >= 0)) ctx.lineTo(this.X[0] / this.mnoznik, this.Y[0] / this.mnoznik);
            else ctx.lineTo(this.X[this.X.length - 1] / this.mnoznik, this.Y[this.Y.length - 1] / this.mnoznik);

          }
          else {

            ctx.moveTo(this.X[this.X.length - 2] / this.mnoznik, this.Y[this.Y.length - 2] / this.mnoznik);

            let tol: number = 0;

            if (this.czyTolerancjaWielokat) tol = 5; //sumarycznie 5 px roznicy

            if ((Math.abs(this.X[0] - this.X[this.X.length - 1]) + Math.abs(this.Y[0] - this.Y[this.Y.length - 1]) <= tol) && (Math.abs(this.X[0] - this.X[this.X.length - 1])
              + Math.abs(this.Y[0] - this.Y[this.Y.length - 1]) >= 0)) ctx.lineTo(this.X[0] / this.mnoznik, this.Y[0] / this.mnoznik);
            else ctx.lineTo(this.X[this.X.length - 1] / this.mnoznik, this.Y[this.Y.length - 1] / this.mnoznik);

          }


          ctx.strokeStyle = this.kolor;
          ctx.stroke();
          ctx.closePath();

        }

        if (canvas.getContext("2d")) {

          let tol: number = 0;

          if (this.czyTolerancjaWielokat) tol = 5; //sumarycznie 5 px roznicy

          if (this.X.length > 2 && (Math.abs(this.X[0] - this.X[this.X.length - 1]) + Math.abs(this.Y[0] - this.Y[this.Y.length - 1]) <= tol) && (Math.abs(this.X[0] - this.X[this.X.length - 1])
            + Math.abs(this.Y[0] - this.Y[this.Y.length - 1]) >= 0)) {

            this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

            ctx.shadowBlur = 0;
            ctx.shadowColor = "white";
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.imageSmoothingEnabled = true;

            ctx.beginPath();
            ctx.lineWidth = this.rozmiarFX;

            ctx.imageSmoothingEnabled = true;

            if (this.mnoznik != 1 && this.lupa != "normalny") {

              ctx.moveTo(this.X[0] / this.mnoznik, this.Y[0] / this.mnoznik);

              for (let i = 1; i < this.X.length; i++) {

                if (i != this.X.length - 1) ctx.lineTo(this.X[i] / this.mnoznik, this.Y[i] / this.mnoznik);
                else ctx.lineTo(this.X[0] / this.mnoznik, this.Y[0] / this.mnoznik);

              }

            }
            else {

              ctx.moveTo(this.X[0] / this.mnoznik, this.Y[0] / this.mnoznik);

              for (let i = 1; i < this.X.length; i++) {

                if (i != this.X.length - 1) ctx.lineTo(this.X[i] / this.mnoznik, this.Y[i] / this.mnoznik);
                else ctx.lineTo(this.X[0] / this.mnoznik, this.Y[0] / this.mnoznik);

              }

            }

            if (this.czyTylkoObrys) {

              ctx.strokeStyle = this.kolor;
              ctx.closePath();
              ctx.stroke();

            }
            else {

              ctx.fillStyle = this.kolor;
              ctx.fill();

            }

            this.czyWielokatTrwa = false;

            this.czyKlikniety = false;

            this.zapiszStanObrazu();

            wielokatX.value = "";
            wielokatY.value = "";

            this.X.splice(0);
            this.Y.splice(0);

          }
          else if ((this.X.length == 2 && this.X[0] == this.X[this.X.length - 1] && this.Y[0] == this.Y[this.Y.length - 1]) || (this.X[this.X.length - 1] == -1 || this.Y[this.Y.length - 1] == -1)) {

            wielokatX.value = "";
            wielokatY.value = "";

            this.szerokosc = this.przedWielokatSzer;
            this.wysokosc = this.przedWielokatWys;

            this.szerokoscGlowna = Number(this.szerokosc) + Number(250);
            this.wysokoscGlowna = Number(this.wysokosc);
            this.wysokoscGlowna2 = Number(this.wysokosc) + Number(50);
            this.wysokosc2 = this.wysokosc;
            this.szerokosc2 = this.szerokosc;

            setTimeout(() => {

              ctx.putImageData(this.przedWielokat, 0, 0);

              this.X.splice(0);
              this.Y.splice(0);

              this.zapiszStanObrazu();

              this.czyWielokatTrwa = false;

            }, 1);

          }

        }
      }

    }
  }

  filtrOryginalny() {
	  
	if(this.ktoryFiltr != "Oryginalny") {

		var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

		if (canvas.getContext("2d")) {

		  var ctx = canvas.getContext('2d');

		  ctx.putImageData(this.ostatniImageData, 0, 0);

		}

		this.czyPoOryginalnym = true;
		
		this.ktoryFiltr = "Oryginalny";
	
	}

  }

  filtrOdwrocony() {

    var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

    if (canvas.getContext("2d")) {

      var ctx = canvas.getContext('2d');


      if (this.czyPoOryginalnym) {

        this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

      }

      ctx.putImageData(this.ostatniImageData, 0, 0);



      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {

        data[i] = 255 - data[i];     // red
        data[i + 1] = 255 - data[i + 1]; // green
        data[i + 2] = 255 - data[i + 2]; // blue

      }

      ctx.putImageData(imageData, 0, 0);




    }

    this.czyPoOryginalnym = false;
	
	this.ktoryFiltr = "Odwrócony";

  }

  filtrSzarosci() {

    var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

    if (canvas.getContext("2d")) {

      var ctx = canvas.getContext('2d');


      if (this.czyPoOryginalnym) {

        this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

      }

      ctx.putImageData(this.ostatniImageData, 0, 0);



      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {

        let avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = avg; // red
        data[i + 1] = avg; // green
        data[i + 2] = avg; // blue

      }

      ctx.putImageData(imageData, 0, 0);




    }

    this.czyPoOryginalnym = false;

    this.ktoryFiltr = "Szarości";

  }

  filtrSepia() {

    var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

    if (canvas.getContext("2d")) {

      var ctx = canvas.getContext('2d');


      if (this.czyPoOryginalnym) {

        this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

      }

      ctx.putImageData(this.ostatniImageData, 0, 0);

      let wartoscSepia = 25;

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {

        let red = data[i], green = data[i + 1], blue = data[i + 2];

        let val = 0.299 * red + 0.587 * green + 0.114 * blue;

        if (val + 2 * wartoscSepia > 255) {
          data[i] = 255;
        }
        else data[i] = val + 2 * wartoscSepia;

        if (val + wartoscSepia > 255) {
          data[i + 1] = 255;
        }
        else data[i + 1] = val + wartoscSepia;

        data[i + 2] = val;

      }

      ctx.putImageData(imageData, 0, 0);




    }

    this.czyPoOryginalnym = false;

    this.ktoryFiltr = "Sepia";

  }

  filtrCzerwony() {

    var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

    if (canvas.getContext("2d")) {

      var ctx = canvas.getContext('2d');


      if (this.czyPoOryginalnym) {

        this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

      }

      ctx.putImageData(this.ostatniImageData, 0, 0);


      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {

        if (data[i] + 237 > 255) {
          data[i] = 255;
        }
        else data[i] += 237;

        if (data[i + 1] + 28 > 255) {
          data[i + 1] = 255;
        }
        else data[i + 1] += 28;

        if (data[i + 2] + 36 > 255) {
          data[i + 2] = 255;
        }
        else data[i + 2] += 36;

      }

      ctx.putImageData(imageData, 0, 0);




    }

    this.czyPoOryginalnym = false;

    this.ktoryFiltr = "Czerwony";

  }

  filtrNiebieski() {

    var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

    if (canvas.getContext("2d")) {

      var ctx = canvas.getContext('2d');


      if (this.czyPoOryginalnym) {

        this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

      }

      ctx.putImageData(this.ostatniImageData, 0, 0);


      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {

        if (data[i] + 0 > 255) {
          data[i] = 255;
        }
        else data[i] += 0;

        if (data[i + 1] + 0 > 255) {
          data[i + 1] = 255;
        }
        else data[i + 1] += 0;

        if (data[i + 2] + 255 > 255) {
          data[i + 2] = 255;
        }
        else data[i + 2] += 255;

      }

      ctx.putImageData(imageData, 0, 0);




    }

    this.czyPoOryginalnym = false;

    this.ktoryFiltr = "Niebieski";

  }

  filtrZielony() {

    var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

    if (canvas.getContext("2d")) {

      var ctx = canvas.getContext('2d');


      if (this.czyPoOryginalnym) {

        this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

      }

      ctx.putImageData(this.ostatniImageData, 0, 0);


      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {

        if (data[i] + 0 > 255) {
          data[i] = 255;
        }
        else data[i] += 0;

        if (data[i + 1] + 128 > 255) {
          data[i + 1] = 255;
        }
        else data[i + 1] += 128;

        if (data[i + 2] + 0 > 255) {
          data[i + 2] = 255;
        }
        else data[i + 2] += 0;

      }

      ctx.putImageData(imageData, 0, 0);




    }

    this.czyPoOryginalnym = false;

    this.ktoryFiltr = "Zielony";

  }

  filtrZolty() {

    var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

    if (canvas.getContext("2d")) {

      var ctx = canvas.getContext('2d');


      if (this.czyPoOryginalnym) {

        this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

      }

      ctx.putImageData(this.ostatniImageData, 0, 0);


      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {

        if (data[i] + 255 > 255) {
          data[i] = 255;
        }
        else data[i] += 255;

        if (data[i + 1] + 255 > 255) {
          data[i + 1] = 255;
        }
        else data[i + 1] += 255;

        if (data[i + 2] + 0 > 255) {
          data[i + 2] = 255;
        }
        else data[i + 2] += 0;

      }

      ctx.putImageData(imageData, 0, 0);




    }

    this.czyPoOryginalnym = false;

    this.ktoryFiltr = "Żółty";

  }

  filtrPomaranczowy() {

    var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

    if (canvas.getContext("2d")) {

      var ctx = canvas.getContext('2d');


      if (this.czyPoOryginalnym) {

        this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

      }

      ctx.putImageData(this.ostatniImageData, 0, 0);


      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {

        if (data[i] + 255 > 255) {
          data[i] = 255;
        }
        else data[i] += 255;

        if (data[i + 1] + 128 > 255) {
          data[i + 1] = 255;
        }
        else data[i + 1] += 128;

        if (data[i + 2] + 0 > 255) {
          data[i + 2] = 255;
        }
        else data[i + 2] += 0;

      }

      ctx.putImageData(imageData, 0, 0);




    }

    this.czyPoOryginalnym = false;

    this.ktoryFiltr = "Pomarańczowy";

  }

  filtrFioletowy() {

    var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

    if (canvas.getContext("2d")) {

      var ctx = canvas.getContext('2d');


      if (this.czyPoOryginalnym) {

        this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

      }

      ctx.putImageData(this.ostatniImageData, 0, 0);


      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {

        if (data[i] + 128 > 255) {
          data[i] = 255;
        }
        else data[i] += 128;

        if (data[i + 1] + 0 > 255) {
          data[i + 1] = 255;
        }
        else data[i + 1] += 0;

        if (data[i + 2] + 128 > 255) {
          data[i + 2] = 255;
        }
        else data[i + 2] += 128;

      }

      ctx.putImageData(imageData, 0, 0);




    }

    this.czyPoOryginalnym = false;

    this.ktoryFiltr = "Fioletowy";

  }

  filtrRozjasnianie(ile: string = "0", czyWybrany: boolean = true) {

    if (Number(ile) >= 0 && Number(ile) <= 255) {

      var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

      if (canvas.getContext("2d")) {

        var ctx = canvas.getContext('2d');


        if (this.czyPoOryginalnym) {

          this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

        }

        ctx.putImageData(this.ostatniImageData, 0, 0);


        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {

          if (data[i] + Number(ile) > 255) {
            data[i] = 255;
          }
          else if (data[i] + Number(ile) < 0) data[i] = 0;
          else data[i] += Number(ile);

          if (data[i + 1] + Number(ile) > 255) {
            data[i + 1] = 255;
          }
          else if (data[i + 1] + Number(ile) < 0) data[i + 1] = 0;
          else data[i + 1] += Number(ile);

          if (data[i + 2] + Number(ile) > 255) {
            data[i + 2] = 255;
          }
          else if (data[i + 2] + Number(ile) < 0) data[i + 2] = 0;
          else data[i + 2] += Number(ile);

        }

        ctx.putImageData(imageData, 0, 0);




      }

      this.czyPoOryginalnym = false;

      this.ktoryFiltr = "Rozjaśnianie";

    }

  }

  filtrPrzyciemnianie(ile: string = "0", czyWybrany: boolean = true) {

    if (Number(ile) >= 0 && Number(ile) <= 255) {

      var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

      if (canvas.getContext("2d")) {

        var ctx = canvas.getContext('2d');


        if (this.czyPoOryginalnym) {

          this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

        }

        ctx.putImageData(this.ostatniImageData, 0, 0);


        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {

          if (data[i] - Number(ile) < 0) {
            data[i] = 0;
          }
          else if (data[i] - Number(ile) > 255) data[i] = 255;
          else data[i] -= Number(ile);

          if (data[i + 1] - Number(ile) < 0) {
            data[i + 1] = 0;
          }
          else if (data[i + 1] - Number(ile) > 255) data[i + 1] = 255;
          else data[i + 1] -= Number(ile);

          if (data[i + 2] - Number(ile) < 0) {
            data[i + 2] = 0;
          }
          else if (data[i + 2] - Number(ile) > 255) data[i + 2] = 255;
          else data[i + 2] -= Number(ile);

        }

        ctx.putImageData(imageData, 0, 0);




      }

      this.czyPoOryginalnym = false;

      this.ktoryFiltr = "Przyciemnianie";

    }

  }

  filtrPrzezroczystosc(ile: string = "1", czyWybrany: boolean = true) {

    if (Number(ile) >= 0 && Number(ile) <= 1) {

      var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementsByClassName("kartka")[0];

      if (canvas.getContext("2d")) {

        var ctx = canvas.getContext('2d');

        if (this.czyPoOryginalnym) {

          this.ostatniImageData = ctx.getImageData(0, 0, this.szerokosc, this.wysokosc);

        }

        ctx.putImageData(this.ostatniImageData, 0, 0);

        if (parseFloat(ile) > 1) ile = "1";
        else if (parseFloat(ile) < 0) ile = "0";
        else ile = ((parseFloat(ile))).toString();

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {

          data[i + 3] = parseFloat(ile) * 255;

        }

        ctx.putImageData(imageData, 0, 0);

      }


      this.czyPoOryginalnym = false;

      this.ktoryFiltr = "Przezroczystość";

    }
  }

  autozapis(czyAutozapis: boolean) {

    if (czyAutozapis) {

      this.interval = setInterval(() => {
        
        this.zapiszGrafike("Autozapis1.png");

      }, this.czasAutozapisu * 60000);

    }
    else clearInterval(this.interval);

  }

  sprawdzCzyAutozapis(czyAutozapis: boolean) {

    if (czyAutozapis) this.autozapis(true);
    else this.autozapis(false);

  }

  dodajWPrawo(ktory: number, e: MouseEvent, ktoryBlok: number = 1) {

    if (ktory == 1 && this.lupa=="normalny") {

      if (ktoryBlok == 1) this.czyWPrawo = true;
      else if (ktoryBlok == 2) this.czyPoPrzekatnej = true;
      else this.czyWDol = true;

      this.wspolrzWPrawo.push(e.screenX);
      this.wspolrzWPrawo.push(e.screenY);

    }
    else if (ktory == 2 && (this.czyWPrawo || this.czyPoPrzekatnej || this.czyWDol)) {

      if (this.czyWPrawo) {

        let tym: number = parseFloat(this.szerokosc.toString()) + parseFloat(e.screenX.toString()) - parseFloat(this.wspolrzWPrawo[0].toString()); //wymuszanie dodawania zamiast konkatenacji stringow

        this.zmienRozmiar2(this.wysokosc.toString(), tym.toString(), true);

      }
      else if (this.czyPoPrzekatnej) {

        let tym: number = parseFloat(this.szerokosc.toString()) + parseFloat(e.screenX.toString()) - parseFloat(this.wspolrzWPrawo[0].toString()); //wymuszanie dodawania zamiast konkatenacji stringow
        let tymWys: number = parseFloat(this.wysokosc.toString()) + parseFloat(e.screenY.toString()) - parseFloat(this.wspolrzWPrawo[1].toString()); //wymuszanie dodawania zamiast konkatenacji stringow

        this.zmienRozmiar2(tymWys.toString(), tym.toString(), true);

      }
      else {


        let tym: number = parseFloat(this.wysokosc.toString()) + parseFloat(e.screenY.toString()) - parseFloat(this.wspolrzWPrawo[1].toString()); //wymuszanie dodawania zamiast konkatenacji stringow

        this.zmienRozmiar2(tym.toString(), this.szerokosc.toString(), true);

      }
     

    }
    else if (ktory == 3 && this.czyWPrawo) {
	  
	    this.czyTylkoTlo = true;

      this.czyWPrawo = false;

      let tym: number = parseFloat(this.szerokosc.toString()) + parseFloat(e.screenX.toString()) - parseFloat(this.wspolrzWPrawo.shift().toString()); //wymuszanie dodawania zamiast konkatenacji stringow

      this.zmienRozmiar(this.wysokosc.toString(), tym.toString(), true);

      this.wspolrzWPrawo.splice(0);

      this.zapiszStanObrazu();

    }
    else if (ktory == 3 && this.czyPoPrzekatnej) {
	  
	    this.czyTylkoTlo = true;

      this.czyPoPrzekatnej = false;

      let tym: number = parseFloat(this.szerokosc.toString()) + parseFloat(e.screenX.toString()) - parseFloat(this.wspolrzWPrawo.shift().toString()); //wymuszanie dodawania zamiast konkatenacji stringow
      let tymWys: number = parseFloat(this.wysokosc.toString()) + parseFloat(e.screenY.toString()) - parseFloat(this.wspolrzWPrawo.shift().toString()); //wymuszanie dodawania zamiast konkatenacji stringow

      this.zmienRozmiar(tymWys.toString(), tym.toString(), true);

      this.wspolrzWPrawo.splice(0);

      this.zapiszStanObrazu();

    }
    else if (ktory == 3 && this.czyWDol) {
	  
	    this.czyTylkoTlo = true;

      this.czyWDol = false;

      let tym: number = parseFloat(this.wysokosc.toString()) + parseFloat(e.screenY.toString()) - parseFloat(this.wspolrzWPrawo[1].toString()); //wymuszanie dodawania zamiast konkatenacji stringow

      this.zmienRozmiar(tym.toString(), this.szerokosc.toString(), true);

      this.wspolrzWPrawo.splice(0);

      this.zapiszStanObrazu();

    }
	
	this.czyTylkoTlo = false;

  }

  wypisz() {

    console.log("kopiuje dziala");

  }

  kliknij(e: MouseEvent) {

    this.goraOst = e.clientY;

    this.lewoOst = e.clientX;

    this.kliknietyRusz = true;

  }

  kliknij2(e: MouseEvent) {

    this.goraOst2 = e.clientY;

    this.lewoOst2 = e.clientX;

    this.kliknietyRusz2 = true;

  }
  
  kliknij3(e: MouseEvent) {

    this.goraOst3 = e.clientY;

    this.lewoOst3 = e.clientX;

    this.kliknietyRusz3 = true;

  }
  
  kliknij4(e: MouseEvent) {


    this.goraOst4 = e.clientY;

    this.lewoOst4 = e.clientX;

    this.kliknietyRusz4 = true;

  }

  kliknij5(e: MouseEvent) {

    this.goraOst5 = e.clientY;

    this.lewoOst5 = e.clientX;

    this.kliknietyRusz5 = true;

  }
  
  kliknij6(e: MouseEvent) {

    this.goraOst6 = e.clientY;

    this.lewoOst6 = e.clientX;

    this.kliknietyRusz6 = true;

  }

  kliknij7(e: MouseEvent) {

    this.goraOst7 = e.clientY;

    this.lewoOst7 = e.clientX;

    this.kliknietyRusz7 = true;

  }

  kliknij8(e: MouseEvent) {

    this.goraOst8 = e.clientY;

    this.lewoOst8 = e.clientX;

    this.kliknietyRusz8 = true;

  }

  kliknij9(e: MouseEvent) {

    this.goraOst9 = e.clientY;

    this.lewoOst9 = e.clientX;

    this.kliknietyRusz9 = true;

  }

  kliknij10(e: MouseEvent) {

    this.goraOst10 = e.clientY;

    this.lewoOst10 = e.clientX;

    this.kliknietyRusz10 = true;

  }
  
  kliknij11(e: MouseEvent) {

    this.goraOst11 = e.clientY;

    this.lewoOst11 = e.clientX;

    this.kliknietyRusz11 = true;

  }
  
  kliknij12(e: MouseEvent) {

    this.goraOst12 = e.clientY;

    this.lewoOst12 = e.clientX;

    this.kliknietyRusz12 = true;

  }
  
  kliknij13(e: MouseEvent) {

    this.goraOst13 = e.clientY;

    this.lewoOst13 = e.clientX;

    this.kliknietyRusz13 = true;

  }
  
  kliknij14(e: MouseEvent) {

    this.goraOst14 = e.clientY;

    this.lewoOst14 = e.clientX;

    this.kliknietyRusz14 = true;

  }
  
  kliknij15(e: MouseEvent) {

    this.goraOst15 = e.clientY;

    this.lewoOst15 = e.clientX;

    this.kliknietyRusz15 = true;

  }
  
  kliknij16(e: MouseEvent) {

    this.goraOst16 = e.clientY;

    this.lewoOst16 = e.clientX;

    this.kliknietyRusz16 = true;

  }
  
  kliknij17(e: MouseEvent) {

    this.goraOst17 = e.clientY;

    this.lewoOst17 = e.clientX;

    this.kliknietyRusz17 = true;

  }
  
  kliknij18(e: MouseEvent) {

    this.goraOst18 = e.clientY;

    this.lewoOst18 = e.clientX;

    this.kliknietyRusz18 = true;

  }
  
  kliknij19(e: MouseEvent) {

    this.goraOst19 = e.clientY;

    this.lewoOst19 = e.clientX;

    this.kliknietyRusz19 = true;

  }

  kliknijPaleta(e: MouseEvent) {

    this.goraOstPaleta = e.clientY;

    this.lewoOstPaleta = e.clientX;

    this.kliknietyRuszPaleta = true;

  }
  
  

  ruszajModalem(e: MouseEvent) {

    if (this.kliknietyRusz) {

      let szer:number = document.getElementsByClassName("modalZapisz")[0].clientWidth;
      let wys:number = document.getElementsByClassName("modalZapisz")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst != e.clientY && this.lewoOst != e.clientX && this.goraOst != 0 && this.kliknietyRusz && szerWsz > (e.pageX + szer + 1)/*-e.offsetX*/ && wysWsz > (e.pageY + wys + 1)/*-e.offsetY*/ && e.pageY > /*wys*/40) {

        this.gora += (e.clientY - this.goraOst);
        this.goraOst = e.clientY;

        if (this.lewo + (e.clientX - this.lewoOst) > 0) {

          this.lewo += (e.clientX - this.lewoOst);

          this.lewoOst = e.clientX;

        }

      }
	  
	  var rect = document.getElementsByClassName("modalZapisz")[0].getBoundingClientRect();
		
	  if(rect.left>201 && rect.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala = false;
	  else this.krawedzModala = true;
    }

  }

  ruszajModalem2(e: MouseEvent) {

    if (this.kliknietyRusz2) {

      let szer: number = document.getElementsByClassName("modalZapisz2")[0].clientWidth;
      let wys: number = document.getElementsByClassName("modalZapisz2")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst2 != e.clientY && this.lewoOst2 != e.clientX && this.goraOst2 != 0 && this.kliknietyRusz2 && szerWsz > (e.pageX + szer+1)/*-e.offsetX*/ && wysWsz > (e.pageY + wys + 1)/*-e.offsetY*/ && e.pageY > /*wys*/40) {

        this.gora2 += (e.clientY - this.goraOst2);
        this.goraOst2 = e.clientY;

        if (this.lewo2 + (e.clientX - this.lewoOst2) > 0) {

          this.lewo2 += (e.clientX - this.lewoOst2);

          this.lewoOst2 = e.clientX;

        }

      }
	  
	  var rect = document.getElementsByClassName("modalZapisz2")[0].getBoundingClientRect();
		
	  if(rect.left>201 && rect.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala2 = false;
	  else this.krawedzModala2 = true;
    }

  }

  ruszajModalem3(e: MouseEvent) {

    if (this.kliknietyRusz3) {

      let szer: number = document.getElementsByClassName("modalZapisz3")[0].clientWidth;
      let wys: number = document.getElementsByClassName("modalZapisz3")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst3 != e.clientY && this.lewoOst3 != e.clientX && this.goraOst3 != 0 && this.kliknietyRusz3 && szerWsz > (e.pageX + szer+1)/*-e.offsetX*/ && wysWsz > (e.pageY + wys + 1)/*-e.offsetY*/ && e.pageY > /*wys*/40) {

        this.gora3 += (e.clientY - this.goraOst3);
        this.goraOst3 = e.clientY;

        if (this.lewo3 + (e.clientX - this.lewoOst3) > 0) {

          this.lewo3 += (e.clientX - this.lewoOst3);

          this.lewoOst3 = e.clientX;

        }

      }
	  
	  var rect = document.getElementsByClassName("modalZapisz3")[0].getBoundingClientRect();
		
	  if(rect.left>201 && rect.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala3 = false;
	  else this.krawedzModala3 = true;
    }

  }

  ruszajModalem4(e: MouseEvent) {

    if (this.kliknietyRusz4) {

      let szer: number = document.getElementsByClassName("modalZapisz4")[0].clientWidth;
      let wys: number = document.getElementsByClassName("modalZapisz4")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst4 != e.clientY && this.lewoOst4 != e.clientX && this.goraOst4 != 0 && this.kliknietyRusz4 && szerWsz > (e.pageX + szer+1)/*-e.offsetX*/ && wysWsz > (e.pageY + wys + 1)/*-e.offsetY*/ && e.pageY > /*wys*/40) {

        this.gora4 += (e.clientY - this.goraOst4);
        this.goraOst4 = e.clientY;

        if (this.lewo4 + (e.clientX - this.lewoOst4) > 0) {

          this.lewo4 += (e.clientX - this.lewoOst4);

          this.lewoOst4 = e.clientX;

        }

      }
	  
	  var rect = document.getElementsByClassName("modalZapisz4")[0].getBoundingClientRect();
		
	  if(rect.left>201 && rect.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala4 = false;
	  else this.krawedzModala4 = true;
    }

  }

  ruszajModalem5(e: MouseEvent) {

    if (this.kliknietyRusz5) {

      let szer: number = document.getElementsByClassName("modalZapisz5")[0].clientWidth;
      let wys: number = document.getElementsByClassName("modalZapisz5")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst5 != e.clientY && this.lewoOst5 != e.clientX && this.goraOst5 != 0 && this.kliknietyRusz5 && szerWsz > (e.pageX + szer + 1)/*-e.offsetX*/ && wysWsz > (e.pageY + wys + 1)/*-e.offsetY*/ && e.pageY > /*wys*/40) {

        this.gora5 += (e.clientY - this.goraOst5);
        this.goraOst5 = e.clientY;

        if (this.lewo5 + (e.clientX - this.lewoOst5) > 0) {

          this.lewo5 += (e.clientX - this.lewoOst5);

          this.lewoOst5 = e.clientX;

        }

      }
	  
	  var rect = document.getElementsByClassName("modalZapisz5")[0].getBoundingClientRect();
		
	  if(rect.left>201 && rect.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala5 = false;
	  else this.krawedzModala5 = true;
    }

  }
  
  ruszajModalem6(e: MouseEvent) {

    if (this.kliknietyRusz6) {

      let szer: number = document.getElementsByClassName("modalZapisz6")[0].clientWidth;
      let wys: number = document.getElementsByClassName("modalZapisz6")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst6 != e.clientY && this.lewoOst6 != e.clientX && this.goraOst6 != 0 && this.kliknietyRusz6 && szerWsz > (e.pageX + szer + 1)/*-e.offsetX*/ && wysWsz > (e.pageY + wys + 1)/*-e.offsetY*/ && e.pageY > /*wys*/40) {

        this.gora6 += (e.clientY - this.goraOst6);
        this.goraOst6 = e.clientY;

        if (this.lewo6 + (e.clientX - this.lewoOst6) > 0) {

          this.lewo6 += (e.clientX - this.lewoOst6);

          this.lewoOst6 = e.clientX;

        }

      }
	  
	  var rect = document.getElementsByClassName("modalZapisz6")[0].getBoundingClientRect();
		
	  if(rect.left>201 && rect.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala6 = false;
	  else this.krawedzModala6 = true;
    }

  }

  ruszajModalem7(e: MouseEvent) {

    if (this.kliknietyRusz7) {

      let szer: number = document.getElementsByClassName("modalZapisz7")[0].clientWidth;
      let wys: number = document.getElementsByClassName("modalZapisz7")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst7 != e.clientY && this.lewoOst7 != e.clientX && this.goraOst7 != 0 && this.kliknietyRusz7 && szerWsz > (e.pageX + szer + 1)/*-e.offsetX*/ && wysWsz > (e.pageY + wys + 1)/*-e.offsetY*/ && e.pageY > /*wys*/40) {

        this.gora7 += (e.clientY - this.goraOst7);
        this.goraOst7 = e.clientY;

        if (this.lewo7 + (e.clientX - this.lewoOst7) > 0) {

          this.lewo7 += (e.clientX - this.lewoOst7);

          this.lewoOst7 = e.clientX;

        }

      }
	  
	  var rect = document.getElementsByClassName("modalZapisz7")[0].getBoundingClientRect();
		
	  if(rect.left>201 && rect.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala7 = false;
	  else this.krawedzModala7 = true;
    }

  }

  ruszajModalem8(e: MouseEvent) {

    if (this.kliknietyRusz8) {

      let szer: number = document.getElementsByClassName("modalZapisz8")[0].clientWidth;
      let wys: number = document.getElementsByClassName("modalZapisz8")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst8 != e.clientY && this.lewoOst8 != e.clientX && this.goraOst8 != 0 && this.kliknietyRusz8 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40) {

        this.gora8 += (e.clientY - this.goraOst8);
        this.goraOst8 = e.clientY;

        if (this.lewo8 + (e.clientX - this.lewoOst8) > 0) {

          this.lewo8 += (e.clientX - this.lewoOst8);

          this.lewoOst8 = e.clientX;

        }

      }
	  
	  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz8")[0].getBoundingClientRect();
		
	  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala8 = false;
	  else this.krawedzModala8 = true;
    }

  }

  ruszajModalem9(e: MouseEvent) {

    if (this.kliknietyRusz9) {

      let szer: number = document.getElementsByClassName("modalZapisz9")[0].clientWidth;
      let wys: number = document.getElementsByClassName("modalZapisz9")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst9 != e.clientY && this.lewoOst9 != e.clientX && this.goraOst9 != 0 && this.kliknietyRusz9 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40) {

        this.gora9 += (e.clientY - this.goraOst9);
        this.goraOst9 = e.clientY;

        if (this.lewo9 + (e.clientX - this.lewoOst9) > 0) {

          this.lewo9 += (e.clientX - this.lewoOst9);

          this.lewoOst9 = e.clientX;

        }

      }
	  
	  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz9")[0].getBoundingClientRect();
		
	  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala9 = false;
	  else this.krawedzModala9 = true;
    }

  }

  ruszajModalem10(e: MouseEvent) {

    if (this.kliknietyRusz10) {

      let szer: number = document.getElementsByClassName("modalZapisz10")[0].clientWidth;
      let wys: number = document.getElementsByClassName("modalZapisz10")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst10 != e.clientY && this.lewoOst10 != e.clientX && this.goraOst10 != 0 && this.kliknietyRusz10 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40) {

        this.gora10 += (e.clientY - this.goraOst10);
        this.goraOst10 = e.clientY;

        if (this.lewo10 + (e.clientX - this.lewoOst10) > 0) {

          this.lewo10 += (e.clientX - this.lewoOst10);

          this.lewoOst10 = e.clientX;

        }

      }
	  
	  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz10")[0].getBoundingClientRect();
		
	  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala10 = false;
	  else this.krawedzModala10 = true;
    }

  }
  
  ruszajModalem11(e: MouseEvent) {

    if (this.kliknietyRusz11) {

      let szer: number = document.getElementsByClassName("modalZapisz11")[0].clientWidth;
      let wys: number = document.getElementsByClassName("modalZapisz11")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst11 != e.clientY && this.lewoOst11 != e.clientX && this.goraOst11 != 0 && this.kliknietyRusz11 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40) {

        this.gora11 += (e.clientY - this.goraOst11);
        this.goraOst11 = e.clientY;

        if (this.lewo11 + (e.clientX - this.lewoOst11) > 0) {

          this.lewo11 += (e.clientX - this.lewoOst11);

          this.lewoOst11 = e.clientX;

        }

      }
	  
	  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz11")[0].getBoundingClientRect();
		
	  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala11 = false;
	  else this.krawedzModala11 = true;
    }

  }
  
  ruszajModalem12(e: MouseEvent) {

    if (this.kliknietyRusz12) {

      let szer: number = document.getElementsByClassName("modalZapisz12")[0].clientWidth;
      let wys: number = document.getElementsByClassName("modalZapisz12")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst12 != e.clientY && this.lewoOst12 != e.clientX && this.goraOst12 != 0 && this.kliknietyRusz12 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40) {

        this.gora12 += (e.clientY - this.goraOst12);
        this.goraOst12 = e.clientY;

        if (this.lewo12 + (e.clientX - this.lewoOst12) > 0) {

          this.lewo12 += (e.clientX - this.lewoOst12);

          this.lewoOst12 = e.clientX;

        }

      }
	  
	  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz12")[0].getBoundingClientRect();
		
	  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala12 = false;
	  else this.krawedzModala12 = true;
    }

  }
  
  ruszajModalem13(e: MouseEvent) {

    if (this.kliknietyRusz13) {

      let szer: number = document.getElementsByClassName("modalZapisz13")[0].clientWidth;
      let wys: number = document.getElementsByClassName("modalZapisz13")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst13 != e.clientY && this.lewoOst13 != e.clientX && this.goraOst13 != 0 && this.kliknietyRusz13 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40) {

        this.gora13 += (e.clientY - this.goraOst13);
        this.goraOst13 = e.clientY;

        if (this.lewo13 + (e.clientX - this.lewoOst13) > 0) {

          this.lewo13 += (e.clientX - this.lewoOst13);

          this.lewoOst13 = e.clientX;
        }

      }
	  
	  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz13")[0].getBoundingClientRect();
		
	  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala13 = false;
	  else this.krawedzModala13 = true;
    }

  }
  
  ruszajModalem14(e: MouseEvent) {

    if (this.kliknietyRusz14) {

      let szer: number = document.getElementsByClassName("modalZapisz14")[0].clientWidth;
      let wys: number = document.getElementsByClassName("modalZapisz14")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst14 != e.clientY && this.lewoOst14 != e.clientX && this.goraOst14 != 0 && this.kliknietyRusz14 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40) {

        this.gora14 += (e.clientY - this.goraOst14);

        this.goraOst14 = e.clientY;

        if (this.lewo14 + (e.clientX - this.lewoOst14) > 0) {

          this.lewo14 += (e.clientX - this.lewoOst14);

          this.lewoOst14 = e.clientX;

        }

      }
	  
	  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz14")[0].getBoundingClientRect();
		
	  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala14 = false;
	  else this.krawedzModala14 = true;
    }

  }
  
  ruszajModalem15(e: MouseEvent) {

    if (this.kliknietyRusz15) {

      let szer: number = document.getElementsByClassName("modalZapisz15")[0].clientWidth;
      let wys: number = document.getElementsByClassName("modalZapisz15")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst15 != e.clientY && this.lewoOst15 != e.clientX && this.goraOst15 != 0 && this.kliknietyRusz15 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40) {

        this.gora15 += (e.clientY - this.goraOst15);
        this.goraOst15 = e.clientY;

        if (this.lewo15 + (e.clientX - this.lewoOst15) > 0) {

          this.lewo15 += (e.clientX - this.lewoOst15);

          this.lewoOst15 = e.clientX;

        }

      }
	  
	  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz15")[0].getBoundingClientRect();
		
	  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala15 = false;
	  else this.krawedzModala15 = true;
    }

  }
  
  ruszajModalem16(e: MouseEvent) {

    if (this.kliknietyRusz16) {

      let szer: number = document.getElementsByClassName("modalZapisz16")[0].clientWidth;
      let wys: number = document.getElementsByClassName("modalZapisz16")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst16 != e.clientY && this.lewoOst16 != e.clientX && this.goraOst16 != 0 && this.kliknietyRusz16 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40) {

        this.gora16 += (e.clientY - this.goraOst16);
        this.goraOst16 = e.clientY;

        if (this.lewo16 + (e.clientX - this.lewoOst16) > 0) {

          this.lewo16 += (e.clientX - this.lewoOst16);

          this.lewoOst16 = e.clientX;

        }

      }
	  
	  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz16")[0].getBoundingClientRect();
		
	  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala16 = false;
	  else this.krawedzModala16 = true;
    }

  }
  
  ruszajModalem17(e: MouseEvent) {

    if (this.kliknietyRusz17) {

	  if(document.getElementsByClassName("modalZapisz17")[0]) {
		  
		  let szer: number = document.getElementsByClassName("modalZapisz17")[0].clientWidth;
		  let wys: number = document.getElementsByClassName("modalZapisz17")[0].clientHeight;

		  let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

		  if (this.goraOst17 != e.clientY && this.lewoOst17 != e.clientX && this.goraOst17 != 0 && this.kliknietyRusz17 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40) {

			  this.gora17 += (e.clientY - this.goraOst17);
			  this.goraOst17 = e.clientY;

        if (this.lewo17 + (e.clientX - this.lewoOst17) > 0) {

            this.lewo17 += (e.clientX - this.lewoOst17);

            this.lewoOst17 = e.clientX;

        }

		  }
		  
		  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz17")[0].getBoundingClientRect();
			
		  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala17 = false;
		  else this.krawedzModala17 = true;

	  }
	  else {

      let szer: number = document.getElementsByClassName("modalZapisz17b")[0].clientWidth;
      let wys: number = document.getElementsByClassName("modalZapisz17b")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst17 != e.clientY && this.lewoOst17 != e.clientX && this.goraOst17 != 0 && this.kliknietyRusz17 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40) {

        this.gora17 += e.clientY - this.goraOst17;
        this.goraOst17 = e.clientY;

        if (this.lewo17 + (e.clientX - this.lewoOst17) > 0) {

          this.lewo17 += e.clientX - this.lewoOst17;

          this.lewoOst17 = e.clientX;

        }

      }
	  
	  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz17b")[0].getBoundingClientRect();
		
	  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala17 = false;
	  else this.krawedzModala17 = true;
	  
	  }
    }

  }
  
  ruszajModalem18(e: MouseEvent) {

    if (this.kliknietyRusz18) {

      let szer: number = document.getElementsByClassName("modalZapisz18")[0].clientWidth;
      let wys: number = document.getElementsByClassName("modalZapisz18")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst18 != e.clientY && this.lewoOst18 != e.clientX && this.goraOst18 != 0 && this.kliknietyRusz18 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40) {

        this.gora18 += (e.clientY - this.goraOst18);
        this.goraOst18 = e.clientY;

        if (this.lewo18 + (e.clientX - this.lewoOst18) > 0) {

          this.lewo18 += (e.clientX - this.lewoOst18);

          this.lewoOst18 = e.clientX;

        }

      }
	  
	  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz18")[0].getBoundingClientRect();
		
	  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala18 = false;
	  else this.krawedzModala18 = true;
    }

  }
  
  ruszajModalem19(e: MouseEvent) {
	  
    if (this.kliknietyRusz19) {

      let szer: number = document.getElementsByClassName("modalZapisz19")[0].clientWidth;
      let wys: number = document.getElementsByClassName("modalZapisz19")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst19 != e.clientY && this.lewoOst19 != e.clientX && this.goraOst19 != 0 && this.kliknietyRusz19 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40) {

        this.gora19 += (e.clientY - this.goraOst19);
        this.goraOst19 = e.clientY;

        if (this.lewo19 + (e.clientX - this.lewoOst19) > 0) {

          this.lewo19 += (e.clientX - this.lewoOst19);

          this.lewoOst19 = e.clientX;

        }

      }
	  
	  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz19")[0].getBoundingClientRect();
		
	  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala19 = false;
	  else this.krawedzModala19 = true;
    }

  }
  
  ruszajModalemPaleta(e: MouseEvent) {

    if (this.kliknietyRuszPaleta) {

      let szer: number = document.getElementsByClassName("modalZapiszPaleta")[0].clientWidth;
      let wys: number = document.getElementsByClassName("modalZapiszPaleta")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOstPaleta != e.clientY && this.lewoOstPaleta != e.clientX && this.goraOstPaleta != 0 && this.kliknietyRuszPaleta && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40) {

        this.goraPaleta += (e.clientY - this.goraOstPaleta);
        this.goraOstPaleta = e.clientY;

        if (this.lewoPaleta + (e.clientX - this.lewoOstPaleta) > 0) {

          this.lewoPaleta += (e.clientX - this.lewoOstPaleta);

          this.lewoOstPaleta = e.clientX;

        }

      }

      var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapiszPaleta")[0].getBoundingClientRect();
      
      if (oknoModalneWspolrzedne.left > 201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + 1) this.krawedzModalaPaleta = false;
      else this.krawedzModalaPaleta = true;
    }

  }

  koniecRuszania(e: MouseEvent) {

    if (this.kliknietyRusz) {

      let szer = document.getElementsByClassName("modalZapisz")[0].clientWidth;
      let wys = document.getElementsByClassName("modalZapisz")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst != 0 && this.kliknietyRusz && szerWsz > (e.pageX + szer + 1)/* - e.offsetX*/ && wysWsz > (e.pageY + wys + 1)/* - e.offsetY */&& e.pageY > /*wys*/40) {

        this.gora += (e.clientY - this.goraOst);

        this.goraOst = e.clientY;

        if (this.lewo + (e.clientX - this.lewoOst) > 0) {

          this.lewo += (e.clientX - this.lewoOst);

          this.lewoOst = e.clientX;

        }

          this.lewoOst = this.goraOst = 0;

        

      }
	  
	  this.kliknietyRusz = false;
	  
	  var rect = document.getElementsByClassName("modalZapisz")[0].getBoundingClientRect();
		
	  if(rect.left>201 && rect.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala = false;
	  else this.krawedzModala = true;
    }

  }

  koniecRuszania2(e: MouseEvent) {

    if (this.kliknietyRusz2) {

      let szer = document.getElementsByClassName("modalZapisz2")[0].clientWidth;
      let wys = document.getElementsByClassName("modalZapisz2")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst2 != 0 && this.kliknietyRusz2 && szerWsz > (e.pageX + szer + 1)/* - e.offsetX*/ && wysWsz > (e.pageY + wys + 1)/* - e.offsetY */ && e.pageY > /*wys*/40) {

        this.gora2 += (e.clientY - this.goraOst2);

        this.goraOst2 = e.clientY;

        if (this.lewo2 + (e.clientX - this.lewoOst2) > 0) {

          this.lewo2 += (e.clientX - this.lewoOst2);

          this.lewoOst2 = e.clientX;

        }

          this.lewoOst2 = this.goraOst2 = 0;

        

      }
	  
      this.kliknietyRusz2 = false;
	  
	  var rect = document.getElementsByClassName("modalZapisz2")[0].getBoundingClientRect();
		
	  if(rect.left>201 && rect.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala2 = false;
	  else this.krawedzModala2 = true;
    }

  }
  
  koniecRuszania3(e: MouseEvent) {

    if (this.kliknietyRusz3) {

      let szer = document.getElementsByClassName("modalZapisz3")[0].clientWidth;
      let wys = document.getElementsByClassName("modalZapisz3")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst3 != 0 && this.kliknietyRusz3 && szerWsz > (e.pageX + szer + 1)/* - e.offsetX*/ && wysWsz > (e.pageY + wys + 1)/* - e.offsetY */ && e.pageY > /*wys*/40) {

        this.gora3 += (e.clientY - this.goraOst3);

        this.goraOst3 = e.clientY;

        if (this.lewo3 + (e.clientX - this.lewoOst3) > 0) {

          this.lewo3 += (e.clientX - this.lewoOst3);

          this.lewoOst3 = e.clientX;

        }

          this.lewoOst3 = this.goraOst3 = 0;

      }
	  
	  this.kliknietyRusz3 = false;
	  
	  var rect = document.getElementsByClassName("modalZapisz3")[0].getBoundingClientRect();
	
	  if(rect.left>201 && rect.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala3 = false;
	  else this.krawedzModala3 = true;
    }

  }
  
  koniecRuszania4(e: MouseEvent) {
	  

    if (this.kliknietyRusz4) {

      let szer = document.getElementsByClassName("modalZapisz4")[0].clientWidth;
      let wys = document.getElementsByClassName("modalZapisz4")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst4 != 0 && this.kliknietyRusz4 && szerWsz > (e.pageX + szer + 1)/* - e.offsetX*/ && wysWsz > (e.pageY + wys + 1)/* - e.offsetY */ && e.pageY > /*wys*/40) {

        this.gora4 += (e.clientY - this.goraOst4);

        this.goraOst4 = e.clientY;

        if (this.lewo4 + (e.clientX - this.lewoOst4) > 0) {

          this.lewo4 += (e.clientX - this.lewoOst4);

          this.lewoOst4 = e.clientX;

        }

          this.lewoOst4 = this.goraOst4 = 0;   

      }  
	  
      this.kliknietyRusz4 = false;
	  
	  var rect = document.getElementsByClassName("modalZapisz4")[0].getBoundingClientRect();
		
	  if(rect.left>201 && rect.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala4 = false;
	  else this.krawedzModala4 = true;
    }

  }
  
  koniecRuszania5(e: MouseEvent) {

    if (this.kliknietyRusz5) {

      let szer = document.getElementsByClassName("modalZapisz5")[0].clientWidth;
      let wys = document.getElementsByClassName("modalZapisz5")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst5 != 0 && this.kliknietyRusz5 && szerWsz > (e.pageX + szer + 1)/* - e.offsetX*/ && wysWsz > (e.pageY + wys + 1)/* - e.offsetY */ && e.pageY > /*wys*/40) {

        this.gora5 += (e.clientY - this.goraOst5);

        this.goraOst5 = e.clientY;

        if (this.lewo5 + (e.clientX - this.lewoOst5) > 0) {

          this.lewo5 += (e.clientX - this.lewoOst5);

          this.lewoOst5 = e.clientX;

        }

          this.lewoOst5 = this.goraOst5 = 0;

      }  
	  
      this.kliknietyRusz5 = false;
	  
	  var rect = document.getElementsByClassName("modalZapisz5")[0].getBoundingClientRect();
		
	  if(rect.left>201 && rect.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala5 = false;
	  else this.krawedzModala5 = true;
    }

  }
  
  koniecRuszania6(e: MouseEvent) {

    if (this.kliknietyRusz6) {

      let szer = document.getElementsByClassName("modalZapisz6")[0].clientWidth;
      let wys = document.getElementsByClassName("modalZapisz6")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst6 != 0 && this.kliknietyRusz6 && szerWsz > (e.pageX + szer + 1)/* - e.offsetX*/ && wysWsz > (e.pageY + wys + 1)/* - e.offsetY */ && e.pageY > /*wys*/40) {

        this.gora6 += (e.clientY - this.goraOst6);

        this.goraOst6 = e.clientY;

        if (this.lewo6 + (e.clientX - this.lewoOst6) > 0) {

          this.lewo6 += (e.clientX - this.lewoOst6);

          this.lewoOst6 = e.clientX;

        }

          this.lewoOst6 = this.goraOst6 = 0; 

      }
	  
      this.kliknietyRusz6 = false;

	  
	  var rect = document.getElementsByClassName("modalZapisz6")[0].getBoundingClientRect();
		
	  if(rect.left>201 && rect.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala6 = false;
	  else this.krawedzModala6 = true;
    }

  }
  
  koniecRuszania7(e: MouseEvent) {

    if (this.kliknietyRusz7) {

      let szer = document.getElementsByClassName("modalZapisz7")[0].clientWidth;
      let wys = document.getElementsByClassName("modalZapisz7")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst7 != 0 && this.kliknietyRusz7 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40) {

        this.gora7 += (e.clientY - this.goraOst7);

        this.goraOst7 = e.clientY;

        if (this.lewo7 + (e.clientX - this.lewoOst7) > 0) {

          this.lewo7 += (e.clientX - this.lewoOst7);

          this.lewoOst7 = e.clientX;

        }

          this.lewoOst7 = this.goraOst7 = 0; 

      }
     
      this.kliknietyRusz7 = false;
	  
	  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz7")[0].getBoundingClientRect();
		
	  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala7 = false;
	  else this.krawedzModala7 = true;
	  
    }

  }
  
  koniecRuszania8(e: MouseEvent) {

    if (this.kliknietyRusz8) {

      let szer = document.getElementsByClassName("modalZapisz8")[0].clientWidth;
      let wys = document.getElementsByClassName("modalZapisz8")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst8 != 0 && this.kliknietyRusz8 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40) {

        this.gora8 += (e.clientY - this.goraOst8);

        this.goraOst8 = e.clientY;

        if (this.lewo8 + (e.clientX - this.lewoOst8) > 0) {

          this.lewo8 += (e.clientX - this.lewoOst8);

          this.lewoOst8 = e.clientX;

        }

          this.lewoOst8 = this.goraOst8 = 0

      }  
	  
      this.kliknietyRusz8 = false;
	  
	  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz8")[0].getBoundingClientRect();
		
	  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala8 = false;
	  else this.krawedzModala8 = true;
	  
    }

  }
  
  koniecRuszania9(e: MouseEvent) {

    if (this.kliknietyRusz9) {

      let szer = document.getElementsByClassName("modalZapisz9")[0].clientWidth;
      let wys = document.getElementsByClassName("modalZapisz9")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst9 != 0 && this.kliknietyRusz9 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40) {

        this.gora9 += (e.clientY - this.goraOst9);

        this.goraOst9 = e.clientY;

        if (this.lewo9 + (e.clientX - this.lewoOst9) > 0) {

          this.lewo9 += (e.clientX - this.lewoOst9);

          this.lewoOst9 = e.clientX;

        }

          this.lewoOst9 = this.goraOst9 = 0;

      }  
	  
      this.kliknietyRusz9 = false;
	  
	  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz9")[0].getBoundingClientRect();
		
	  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala9 = false;
	  else this.krawedzModala9 = true;
	  
    }

  }
  
  koniecRuszania10(e: MouseEvent) {

    if (this.kliknietyRusz10) {

      let szer = document.getElementsByClassName("modalZapisz10")[0].clientWidth;
      let wys = document.getElementsByClassName("modalZapisz10")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst10 != 0 && this.kliknietyRusz10 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40) {

        this.gora10 += (e.clientY - this.goraOst10);

        this.goraOst10 = e.clientY;

        if (this.lewo10 + (e.clientX - this.lewoOst10) > 0) {

          this.lewo10 += (e.clientX - this.lewoOst10);

          this.lewoOst10 = e.clientX;

        }

          this.lewoOst10 = this.goraOst10 = 0;

      }  
	  
      this.kliknietyRusz10 = false;
	  
	  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz10")[0].getBoundingClientRect();
		
	  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala10 = false;
	  else this.krawedzModala10 = true;
	  
    }

  }
  
  koniecRuszania11(e: MouseEvent) {

    if (this.kliknietyRusz11) {

      let szer = document.getElementsByClassName("modalZapisz11")[0].clientWidth;
      let wys = document.getElementsByClassName("modalZapisz11")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst11 != 0 && this.kliknietyRusz11 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40) {

        this.gora11 += (e.clientY - this.goraOst11);

        this.goraOst11 = e.clientY;

        if (this.lewo11 + (e.clientX - this.lewoOst11) > 0) {

          this.lewo11 += (e.clientX - this.lewoOst11);

          this.lewoOst11 = e.clientX;

        }

          this.lewoOst11 = this.goraOst11 = 0;

      }	  
	  
      this.kliknietyRusz11 = false;
	  
	  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz11")[0].getBoundingClientRect();
		
	  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala11 = false;
	  else this.krawedzModala11 = true;
	  
    }

  }
  
  koniecRuszania12(e: MouseEvent) {

    if (this.kliknietyRusz12) {

      let szer = document.getElementsByClassName("modalZapisz12")[0].clientWidth;
      let wys = document.getElementsByClassName("modalZapisz12")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst12 != 0 && this.kliknietyRusz12 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40) {

        this.gora12 += (e.clientY - this.goraOst12);

        this.goraOst12 = e.clientY;

        if (this.lewo12 + (e.clientX - this.lewoOst12) > 0) {

          this.lewo12 += (e.clientX - this.lewoOst12);

          this.lewoOst12 = e.clientX;

        }

          this.lewoOst12 = this.goraOst12 = 0;    

      }
	  
      this.kliknietyRusz12 = false;
	  
	  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz12")[0].getBoundingClientRect();
		
	  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala12 = false;
	  else this.krawedzModala12 = true;
	  
    }

  }
  
  koniecRuszania13(e: MouseEvent) {

    if (this.kliknietyRusz13) {

      let szer = document.getElementsByClassName("modalZapisz13")[0].clientWidth;
      let wys = document.getElementsByClassName("modalZapisz13")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst13 != 0 && this.kliknietyRusz13 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1 ) && e.pageY > 40) {

        this.gora13 += (e.clientY - this.goraOst13);

        this.goraOst13 = e.clientY;

        if (this.lewo13 + (e.clientX - this.lewoOst13) > 0) {

          this.lewo13 += (e.clientX - this.lewoOst13);

          this.lewoOst13 = e.clientX;

        }

          this.lewoOst13 = this.goraOst13 = 0;

      }	  
	  
      this.kliknietyRusz13 = false;
	  
	  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz13")[0].getBoundingClientRect();
		
	  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala13 = false;
	  else this.krawedzModala13 = true;
	  
    }

  }
  
  koniecRuszania14(e: MouseEvent) {

    if (this.kliknietyRusz14) {

      let szer = document.getElementsByClassName("modalZapisz14")[0].clientWidth;
      let wys = document.getElementsByClassName("modalZapisz14")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst14 != 0 && this.kliknietyRusz14 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40) {

        this.gora14 += (e.clientY - this.goraOst14);

        this.goraOst14 = e.clientY;

        if (this.lewo14 + (e.clientX - this.lewoOst14) > 0) {

          this.lewo14 += (e.clientX - this.lewoOst14);

          this.lewoOst14 = e.clientX;

        }

          this.lewoOst14 = this.goraOst14 = 0;

      }
	  
	  this.kliknietyRusz14 = false;
	  
	  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz14")[0].getBoundingClientRect();
		
	  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala14 = false;
	  else this.krawedzModala14 = true;
	  
    }

  }
  
  koniecRuszania15(e: MouseEvent) {

    if (this.kliknietyRusz15) {

      let szer = document.getElementsByClassName("modalZapisz15")[0].clientWidth;
      let wys = document.getElementsByClassName("modalZapisz15")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst15 != 0 && this.kliknietyRusz15 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40) {

        this.gora15 += (e.clientY - this.goraOst15);

        this.goraOst15 = e.clientY;

        if (this.lewo15 + (e.clientX - this.lewoOst15) > 0) {

          this.lewo15 += (e.clientX - this.lewoOst15);

          this.lewoOst15 = e.clientX;

        }

          this.lewoOst15 = this.goraOst15 = 0;

      }  
	  
      this.kliknietyRusz15 = false;
	  
	  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz15")[0].getBoundingClientRect();
		
	  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala15 = false;
	  else this.krawedzModala15 = true;
	  
    }

  }
  
  koniecRuszania16(e: MouseEvent) {

    if (this.kliknietyRusz16) {


      let szer = document.getElementsByClassName("modalZapisz16")[0].clientWidth;
      let wys = document.getElementsByClassName("modalZapisz16")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst16 != 0 && this.kliknietyRusz16 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40) {

        this.gora16 += (e.clientY - this.goraOst16);

        this.goraOst16 = e.clientY;

        if (this.lewo16 + (e.clientX - this.lewoOst16) > 0) {

          this.lewo16 += (e.clientX - this.lewoOst16);

          this.lewoOst16 = e.clientX;


        }

          this.lewoOst16 = this.goraOst16 = 0;

      }  
	  
      this.kliknietyRusz16 = false;
	  
	  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz16")[0].getBoundingClientRect();
		
	  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala16 = false;
	  else this.krawedzModala16 = true;
	  
    }

  }
  
  koniecRuszania17(e: MouseEvent) {

    if (this.kliknietyRusz17) {

	  if(document.getElementsByClassName("modalZapisz17")[0]) {

      let szer = document.getElementsByClassName("modalZapisz17")[0].clientWidth;
      let wys = document.getElementsByClassName("modalZapisz17")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst17 != 0 && this.kliknietyRusz17 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40) {

        this.gora17 += (e.clientY - this.goraOst17);

        this.goraOst17 = e.clientY;

        if (this.lewo17 + (e.clientX - this.lewoOst17) > 0) {

          this.lewo17 += (e.clientX - this.lewoOst17);

          this.lewoOst17 = e.clientX;

        }

          this.lewoOst17 = this.goraOst17 = 0;

      }  
	  
      this.kliknietyRusz17 = false;
	  
	  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz17")[0].getBoundingClientRect();
		
	  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala17 = false;
	  else this.krawedzModala17 = true;
	  
	  }
	  else {
		  
		  let szer = document.getElementsByClassName("modalZapisz17b")[0].clientWidth;
		  let wys = document.getElementsByClassName("modalZapisz17b")[0].clientHeight;

		  let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

		  if (this.goraOst17 != 0 && this.kliknietyRusz17 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40) {

			this.gora17 += (e.clientY - this.goraOst17);

        this.goraOst17 = e.clientY;

        if (this.lewo17 + (e.clientX - this.lewoOst17) > 0) {

          this.lewo17 += (e.clientX - this.lewoOst17);

          this.lewoOst17 = e.clientX;

        }

          this.lewoOst17 = this.goraOst17 = 0;

      }

      this.kliknietyRusz17 = false;

		  
		  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz17b")[0].getBoundingClientRect();
			
		  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala17 = false;
		  else this.krawedzModala17 = true;
		  
	  }
    }

  }
  
  koniecRuszania18(e: MouseEvent) {

    if (this.kliknietyRusz18) {


      let szer = document.getElementsByClassName("modalZapisz18")[0].clientWidth;
      let wys = document.getElementsByClassName("modalZapisz18")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      if (this.goraOst18 != 0 && this.kliknietyRusz18 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40) {

        this.gora18 += (e.clientY - this.goraOst18);

        this.goraOst18 = e.clientY;

        if (this.lewo18 + (e.clientX - this.lewoOst18) > 0) {

          this.lewo18 += (e.clientX - this.lewoOst18);

          this.lewoOst18 = e.clientX;

        }

        this.lewoOst18 = this.goraOst18 = 0;

      } 
	  
      this.kliknietyRusz18 = false;
	  
	  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz18")[0].getBoundingClientRect();
		
	  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala18 = false;
	  else this.krawedzModala18 = true;
	  
    }

  }
  
  koniecRuszania19(e: MouseEvent) {

    if (this.kliknietyRusz19) {


      let szer = document.getElementsByClassName("modalZapisz19")[0].clientWidth;
      let wys = document.getElementsByClassName("modalZapisz19")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      var rect = document.getElementsByClassName("modalZapisz19")[0].getBoundingClientRect();

      if (this.goraOst19 != 0 && this.kliknietyRusz19 && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40
        && rect.left > 0) {

        //tez mozna dac warunek analogiczny jak najblizszy ponizszy if, tylko, ze dla gora19, a nie lewo19

        this.gora19 += (e.clientY - this.goraOst19);

        this.goraOst19 = e.clientY;

        if (this.lewo19 + (e.clientX - this.lewoOst19) > 0) {

          this.lewo19 += (e.clientX - this.lewoOst19);

          this.lewoOst19 = e.clientX;

        }

          this.lewoOst19 = this.goraOst19 = 0;

      }  
	  
      this.kliknietyRusz19 = false;
	  
	  var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapisz19")[0].getBoundingClientRect();
		
	  if(oknoModalneWspolrzedne.left>201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight+1) this.krawedzModala19 = false;
	  else this.krawedzModala19 = true;
	  
    }

  }

  koniecRuszaniaPaleta(e: MouseEvent) {

    if (this.kliknietyRuszPaleta) {


      let szer = document.getElementsByClassName("modalZapiszPaleta")[0].clientWidth;
      let wys = document.getElementsByClassName("modalZapiszPaleta")[0].clientHeight;

      let szerWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientWidth;
      let wysWsz: number = document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + document.getElementsByClassName("glowne")[0].clientHeight;

      var rect = document.getElementsByClassName("modalZapiszPaleta")[0].getBoundingClientRect();

      if (this.goraOstPaleta != 0 && this.kliknietyRuszPaleta && szerWsz > (e.pageX + szer + 1) && wysWsz > (e.pageY + wys + 1) && e.pageY > 40
        && rect.left > 0) {

        //tez mozna dac warunek analogiczny jak najblizszy ponizszy if, tylko, ze dla goraPaleta, a nie lewoPaleta

        this.goraPaleta += (e.clientY - this.goraOstPaleta);

        this.goraOstPaleta = e.clientY;

        if (this.lewoPaleta + (e.clientX - this.lewoOstPaleta) > 0) {

          this.lewoPaleta += (e.clientX - this.lewoOstPaleta);

          this.lewoOstPaleta = e.clientX;

        }

        this.lewoOstPaleta = this.goraOstPaleta = 0;

      }

      this.kliknietyRuszPaleta = false;

      var oknoModalneWspolrzedne = document.getElementsByClassName("modalZapiszPaleta")[0].getBoundingClientRect();
      
      if (oknoModalneWspolrzedne.left > 201 && oknoModalneWspolrzedne.top > document.getElementsByClassName("tytulGrafikuj")[0].clientHeight + 1) this.krawedzModalaPaleta = false;
      else this.krawedzModalaPaleta = true;

    }

  }
  
  sprawdzPokazRo() {
	  
	  if(!this.pokazF && !this.pokazK && !this.pokazLi && !this.pokazPro && !this.pokazKo && !this.pokazEl && !this.pokazTr && !this.pokazKKB && !this.pokazSKB && !this.pokazWie && !this.pokazProb
      && !this.pokazTe && !this.pokazWyp && !this.pokazKop && !this.pokazWyt && !this.pokazC && this.ukryteFiltry && !this.pokazPaleta) {
		  
		this.pokazRo=!this.pokazRo;	  
		
		this.pokazO = false;
		this.pokazG = false;
		
	  }
	  
  }
  
  sprawdzPokazF() {
	  
	  if(!this.pokazRo && !this.pokazK && !this.pokazLi && !this.pokazPro && !this.pokazKo && !this.pokazEl && !this.pokazTr && !this.pokazKKB && !this.pokazSKB && !this.pokazWie && !this.pokazProb
      && !this.pokazTe && !this.pokazWyp && !this.pokazKop && !this.pokazWyt && !this.pokazC && this.ukryteFiltry && !this.pokazPaleta) {
		  
		  this.pokazF=!this.pokazF;	  
		  
		  this.pokazO = false;
		  this.pokazG = false;
		
	  }
	  
  }
  
  sprawdzPokazK() {
	  
	  if(!this.pokazRo && !this.pokazF && !this.pokazLi && !this.pokazPro && !this.pokazKo && !this.pokazEl && !this.pokazTr && !this.pokazKKB && !this.pokazSKB && !this.pokazWie && !this.pokazProb
      && !this.pokazTe && !this.pokazWyp && !this.pokazKop && !this.pokazWyt && !this.pokazC && this.ukryteFiltry && !this.pokazPaleta) {
		  
		  this.pokazK=!this.pokazK;	  
		  
		  this.pokazO = false;
		  this.pokazG = false;
		
	  }
	  
  }
  
  sprawdzPokazO() {
	  
	  if(!this.pokazRo && !this.pokazF && !this.pokazK && !this.pokazPro && !this.pokazLi && !this.pokazKo && !this.pokazEl && !this.pokazTr && !this.pokazKKB && !this.pokazSKB && !this.pokazWie
	   && !this.pokazProb && !this.pokazTe && !this.pokazWyp && !this.pokazKop && !this.pokazWyt){ 
	  
		this.pokazO = true;
	  
		this.wybierzFunkcje('olowek');
			
	  }
	  
  }
  
  sprawdzPokazG() {
	  
	  if(!this.pokazRo && !this.pokazF && !this.pokazK && !this.pokazPro && !this.pokazLi && !this.pokazKo && !this.pokazEl && !this.pokazTr && !this.pokazKKB && !this.pokazSKB && !this.pokazWie
      && !this.pokazProb && !this.pokazTe && !this.pokazWyp && !this.pokazKop && !this.pokazWyt){
	  
		this.pokazG = true;
	  
		this.wybierzFunkcje('gumka');
			
	  }
	  
  }
  
  sprawdzPokazLi() {
	  
	  if(!this.pokazRo && !this.pokazF && !this.pokazK && !this.pokazPro && !this.pokazKo && !this.pokazEl && !this.pokazTr && !this.pokazKKB && !this.pokazSKB && !this.pokazWie && !this.pokazProb
      && !this.pokazTe && !this.pokazWyp && !this.pokazKop && !this.pokazWyt && !this.pokazC && this.ukryteFiltry && !this.pokazPaleta){
	  
			if(this.funkcja=='linia') this.pokazLi=!this.pokazLi;	  
			else this.pokazLi = true;
	  
			this.pokazO = false;
		    this.pokazG = false;
	  
			this.wybierzFunkcje('linia');
	  }
	  
  }
  
  sprawdzPokazPro() {
	  
	  if(!this.pokazRo && !this.pokazF && !this.pokazK && !this.pokazLi && !this.pokazKo && !this.pokazEl && !this.pokazTr && !this.pokazKKB && !this.pokazSKB && !this.pokazWie && !this.pokazProb
      && !this.pokazTe && !this.pokazWyp && !this.pokazKop && !this.pokazWyt && !this.pokazC && this.ukryteFiltry && !this.pokazPaleta){
	  
			if(this.funkcja=='prostokat') this.pokazPro=!this.pokazPro;	  
			else this.pokazPro = true;
			
			this.pokazO = false;
		    this.pokazG = false;
	  
			this.wybierzFunkcje('prostokat');
	  }
	  
  }
  
  sprawdzPokazKo() {
	  
	  if(!this.pokazRo && !this.pokazF && !this.pokazK && !this.pokazLi && !this.pokazPro && !this.pokazEl && !this.pokazTr && !this.pokazKKB && !this.pokazSKB && !this.pokazWie && !this.pokazProb
      && !this.pokazTe && !this.pokazWyp && !this.pokazKop && !this.pokazWyt && !this.pokazC && this.ukryteFiltry && !this.pokazPaleta){
	  
			if(this.funkcja=='kolo') this.pokazKo=!this.pokazKo;	  
			else this.pokazKo = true;
			
			this.pokazO = false;
		    this.pokazG = false;
	  
			this.wybierzFunkcje('kolo');
	  }
	  
  }
  
  sprawdzPokazEl() {
	  
	  if(!this.pokazRo && !this.pokazF && !this.pokazK && !this.pokazLi && !this.pokazPro && !this.pokazKo && !this.pokazTr && !this.pokazKKB && !this.pokazSKB && !this.pokazWie && !this.pokazProb
      && !this.pokazTe && !this.pokazWyp && !this.pokazKop && !this.pokazWyt && !this.pokazC && this.ukryteFiltry && !this.pokazPaleta){
	  
			if(this.funkcja=='elipsa') this.pokazEl=!this.pokazEl;	  
			else this.pokazEl = true;
			
			this.pokazO = false;
		    this.pokazG = false;
	  
			this.wybierzFunkcje('elipsa');
	  }
	  
  }
  
  sprawdzPokazTr() {
	  
	  if(!this.pokazRo && !this.pokazF && !this.pokazK && !this.pokazLi && !this.pokazPro && !this.pokazKo && !this.pokazEl && !this.pokazKKB && !this.pokazSKB && !this.pokazWie && !this.pokazProb
      && !this.pokazTe && !this.pokazWyp && !this.pokazKop && !this.pokazWyt && !this.pokazC && this.ukryteFiltry && !this.pokazPaleta){
	  
			if(this.funkcja=='trojkat') this.pokazTr=!this.pokazTr;	  
			else this.pokazTr = true;
			
			this.pokazO = false;
		    this.pokazG = false;
	  
			this.wybierzFunkcje('trojkat');
	  }  
	  
  }
  
  sprawdzPokazKKB() {
	  
	  if(!this.pokazRo && !this.pokazF && !this.pokazK && !this.pokazLi && !this.pokazPro && !this.pokazKo && !this.pokazEl && !this.pokazTr && !this.pokazSKB && !this.pokazWie && !this.pokazProb
      && !this.pokazTe && !this.pokazWyp && !this.pokazKop && !this.pokazWyt && !this.pokazC && this.ukryteFiltry && !this.pokazPaleta){
	  
			if(this.funkcja=='kwadratowaKrzywaBeziera') this.pokazKKB=!this.pokazKKB;	  
			else this.pokazKKB = true;
			
			this.pokazO = false;
		    this.pokazG = false;
	  
			this.wybierzFunkcje('kwadratowaKrzywaBeziera');
	  }
	  
  }
  
  sprawdzPokazSKB() {
	  
	  if(!this.pokazRo && !this.pokazF && !this.pokazK && !this.pokazLi && !this.pokazPro && !this.pokazKo && !this.pokazEl && !this.pokazTr && !this.pokazKKB && !this.pokazWie && !this.pokazProb
      && !this.pokazTe && !this.pokazWyp && !this.pokazKop && !this.pokazWyt && !this.pokazC && this.ukryteFiltry && !this.pokazPaleta){
	  
			if(this.funkcja=='szesciennaKrzywaBeziera') this.pokazSKB=!this.pokazSKB;	  
			else this.pokazSKB = true;
			
			this.pokazO = false;
		    this.pokazG = false;
	  
			this.wybierzFunkcje('szesciennaKrzywaBeziera');
	  }  
  }
  
  sprawdzPokazWie() {
	  
	  if(!this.pokazRo && !this.pokazF && !this.pokazK && !this.pokazLi && !this.pokazPro && !this.pokazKo && !this.pokazEl && !this.pokazTr && !this.pokazKKB && !this.pokazSKB && !this.pokazProb
      && !this.pokazTe && !this.pokazWyp && !this.pokazKop && !this.pokazWyt && !this.pokazC && this.ukryteFiltry && !this.pokazPaleta){
	  
			if(this.funkcja=='wielokat') this.pokazWie=!this.pokazWie;	  
			else this.pokazWie = true;
			
			this.pokazO = false;
		    this.pokazG = false;
	  
			this.wybierzFunkcje('wielokat');
			
			setTimeout(()=>{
			
			 if(this.czyWpiszWspolrzedne && this.pokazWie) {  
			 
			    var checkbox8:any = document.getElementsByClassName("szuk1")[0]; 
	
				if(this.czyTolerancjaWielokat) checkbox8.checked = true; //zapewnienie poprawnej wartosci checkboxa checked przy wyswietleniu okienka
				else checkbox8.checked = false;
			
			 }
			
			},10); //potrzebny, zeby zdazyl zareagowac
	  }  
 
  }
  
  sprawdzPokazProb() {
	  
	  if(!this.pokazRo && !this.pokazF && !this.pokazK && !this.pokazLi && !this.pokazPro && !this.pokazKo && !this.pokazEl && !this.pokazTr && !this.pokazKKB && !this.pokazSKB && !this.pokazWie
      && !this.pokazTe && !this.pokazWyp && !this.pokazKop && !this.pokazWyt && !this.pokazC && this.ukryteFiltry && !this.pokazPaleta){
	  
			if(this.funkcja=='probnik') this.pokazProb=!this.pokazProb;	  
			else this.pokazProb = true;
			
			this.pokazO = false;
		    this.pokazG = false;
	  
			this.wybierzFunkcje('probnik');
	  }  
	  
  }
  
  sprawdzPokazTe() {
	  
	  if(!this.pokazRo && !this.pokazF && !this.pokazK && !this.pokazLi && !this.pokazPro && !this.pokazKo && !this.pokazEl && !this.pokazTr && !this.pokazKKB && !this.pokazSKB && !this.pokazWie
      && !this.pokazProb && !this.pokazWyp && !this.pokazKop && !this.pokazWyt && !this.pokazC && this.ukryteFiltry && !this.pokazPaleta){
	  
			if(this.funkcja=='tekst') this.pokazTe=!this.pokazTe;	  
			else this.pokazTe = true;
			
			this.pokazO = false;
		    this.pokazG = false;
	  
			this.wybierzFunkcje('tekst');
	  }  
	  
  }
  
  sprawdzPokazWyp() {
	  
	  if(!this.pokazRo && !this.pokazF && !this.pokazK && !this.pokazLi && !this.pokazPro && !this.pokazKo && !this.pokazEl && !this.pokazTr && !this.pokazKKB && !this.pokazSKB && !this.pokazWie
      && !this.pokazProb && !this.pokazTe && !this.pokazKop && !this.pokazWyt && !this.pokazC && this.ukryteFiltry && !this.pokazPaleta){
	  
			if(this.funkcja=='wypelnienie') this.pokazWyp=!this.pokazWyp;	  
			else this.pokazWyp = true;
			
			this.pokazO = false;
		    this.pokazG = false;
	  
      this.wybierzFunkcje('wypelnienie');

      setTimeout(() => {

        if (this.czyWpiszWspolrzedne && this.pokazWyp) {

          

            var checkbox9: any = document.getElementsByClassName("tolerancjaWyp")[0];

            if (this.czyTolerancja) checkbox9.checked = true; //zapewnienie poprawnej wartosci checkboxa checked przy wyswietleniu okienka
            else checkbox9.checked = false;

            var checkbox10: any = document.getElementsByClassName("wypelnienieJedenPion")[0];

            if (this.czyWypelnienieJedenPion) checkbox10.checked = true; //zapewnienie poprawnej wartosci checkboxa checked przy wyswietleniu okienka
            else checkbox10.checked = false;

          
        }

      }, 10); //potrzebny, zeby zdazyl zareagowac

	  }  
	  
  }
  
  sprawdzPokazKop() {
	  
	  if(!this.pokazRo && !this.pokazF && !this.pokazK && !this.pokazLi && !this.pokazPro && !this.pokazKo && !this.pokazEl && !this.pokazTr && !this.pokazKKB && !this.pokazSKB && !this.pokazWie
      && !this.pokazProb && !this.pokazTe && !this.pokazWyp && !this.pokazWyt && !this.pokazC && this.ukryteFiltry && !this.pokazPaleta){
	  
			if(this.funkcja=='kopiuj') this.pokazKop=!this.pokazKop;	  
			else this.pokazKop = true;
			
			this.pokazO = false;
		    this.pokazG = false;
	  
			this.wybierzFunkcje('kopiuj');
	  }  
	  
  }
  
  sprawdzPokazWyt() {
	  
	  if(!this.pokazRo && !this.pokazF && !this.pokazK && !this.pokazLi && !this.pokazPro && !this.pokazKo && !this.pokazEl && !this.pokazTr && !this.pokazKKB && !this.pokazSKB && !this.pokazWie
      && !this.pokazProb && !this.pokazTe && !this.pokazWyp && !this.pokazKop && !this.pokazC && this.ukryteFiltry && !this.pokazPaleta){
	  
			if(this.funkcja=='wytnij') this.pokazWyt=!this.pokazWyt;	  
			else this.pokazWyt = true;
			
			this.pokazO = false;
		    this.pokazG = false;
	  
			this.wybierzFunkcje('wytnij');
	  }  
	  
  }
  
  sprawdzPokazPow() {
	  
	  if(!this.pokazRo && !this.pokazF && !this.pokazK && !this.pokazLi && !this.pokazPro && !this.pokazKo && !this.pokazEl && !this.pokazTr && !this.pokazKKB && !this.pokazSKB && !this.pokazWie
      && !this.pokazProb && !this.pokazTe && !this.pokazWyp && !this.pokazKop && !this.pokazWyt && !this.pokazC && this.ukryteFiltry && !this.pokazPaleta){
	  
			this.pokazPow = true;
			
			this.pokazO = false;
		    this.pokazG = false;
	  
			this.wybierzFunkcje('lupa',1);
	  }  
	  
  }
  
  sprawdzPokazZmn() {
	  
	   if(!this.pokazRo && !this.pokazF && !this.pokazK && !this.pokazLi && !this.pokazPro && !this.pokazKo && !this.pokazEl && !this.pokazTr && !this.pokazKKB && !this.pokazSKB && !this.pokazWie
       && !this.pokazProb && !this.pokazTe && !this.pokazWyp && !this.pokazKop && !this.pokazWyt && !this.pokazC && this.ukryteFiltry && !this.pokazPaleta){
	  
			this.pokazZmn = true;
			
			this.pokazO = false;
		    this.pokazG = false;
	  
			this.wybierzFunkcje('lupa',-1);
	  }    
	  
  }
  
  sprawdzPokazNor() {
	  
	  if(!this.pokazRo && !this.pokazF && !this.pokazK && !this.pokazLi && !this.pokazPro && !this.pokazKo && !this.pokazEl && !this.pokazTr && !this.pokazKKB && !this.pokazSKB && !this.pokazWie
      && !this.pokazProb && !this.pokazTe && !this.pokazWyp && !this.pokazKop && !this.pokazWyt && !this.pokazC && this.ukryteFiltry && !this.pokazPaleta){
	  
			this.pokazNor = true;
			
			this.pokazO = false;
		    this.pokazG = false;
	  
			this.wybierzFunkcje('lupa',0);
	  }    
	  
  }
  
  sprawdzPokazObrL() {
	  
	  if(!this.pokazRo && !this.pokazF && !this.pokazK && !this.pokazLi && !this.pokazPro && !this.pokazKo && !this.pokazEl && !this.pokazTr && !this.pokazKKB && !this.pokazSKB && !this.pokazWie
      && !this.pokazProb && !this.pokazTe && !this.pokazWyp && !this.pokazKop && !this.pokazWyt && !this.pokazC && this.ukryteFiltry && !this.pokazPaleta){
	  
			this.pokazObrL = true;
			
			this.pokazO = false;
		    this.pokazG = false;
	  
			this.wybierzFunkcje('obrotLewo');
	  }   
	  
  }
  
  sprawdzPokazObrP() {
	  
	  if(!this.pokazRo && !this.pokazF && !this.pokazK && !this.pokazLi && !this.pokazPro && !this.pokazKo && !this.pokazEl && !this.pokazTr && !this.pokazKKB && !this.pokazSKB && !this.pokazWie
      && !this.pokazProb && !this.pokazTe && !this.pokazWyp && !this.pokazKop && !this.pokazWyt && !this.pokazC && this.ukryteFiltry && !this.pokazPaleta){
	  
			this.pokazObrP = true;
			
			this.pokazO = false;
		    this.pokazG = false;
	  
			this.wybierzFunkcje('obrotPrawo');
	  }   
	  
  }
  
  sprawdzPokazOdbPi() {
	  
	  if(!this.pokazRo && !this.pokazF && !this.pokazK && !this.pokazLi && !this.pokazPro && !this.pokazKo && !this.pokazEl && !this.pokazTr && !this.pokazKKB && !this.pokazSKB && !this.pokazWie
      && !this.pokazProb && !this.pokazTe && !this.pokazWyp && !this.pokazKop && !this.pokazWyt && !this.pokazC && this.ukryteFiltry && !this.pokazPaleta){
	  
			this.pokazOdbPi = true;
			
			this.pokazO = false;
		    this.pokazG = false;
	  
			this.wybierzFunkcje('odbicieWPionie');
	  }  
	  
  }
  
  sprawdzPokazOdbPo() {
	  
	  if(!this.pokazRo && !this.pokazF && !this.pokazK && !this.pokazLi && !this.pokazPro && !this.pokazKo && !this.pokazEl && !this.pokazTr && !this.pokazKKB && !this.pokazSKB && !this.pokazWie
      && !this.pokazProb && !this.pokazTe && !this.pokazWyp && !this.pokazKop && !this.pokazWyt && !this.pokazC && this.ukryteFiltry && !this.pokazPaleta){
	  
			this.pokazOdbPo = true;
			
			this.pokazO = false;
		    this.pokazG = false;
	  
			this.wybierzFunkcje('odbicieWPoziomie');
	  }  
	  
  }
  
  sprawdzPokazFi() {
	  
	  if(!this.pokazRo && !this.pokazF && !this.pokazK && !this.pokazLi && !this.pokazPro && !this.pokazKo && !this.pokazEl && !this.pokazTr && !this.pokazKKB && !this.pokazSKB && !this.pokazWie
      && !this.pokazProb && !this.pokazTe && !this.pokazWyp && !this.pokazKop && !this.pokazWyt && !this.pokazC && !this.pokazPaleta){
			
			this.pokazO = false;
		    this.pokazG = false;
	  
			this.ukryteFiltry=!this.ukryteFiltry;
	  }  
	  
  }
  
  sprawdzPokazC() {
	  
	  if(!this.pokazRo && !this.pokazF && !this.pokazK && !this.pokazLi && !this.pokazPro && !this.pokazKo && !this.pokazEl && !this.pokazTr && !this.pokazKKB && !this.pokazSKB && !this.pokazWie
	  && !this.pokazProb && !this.pokazTe && !this.pokazWyp && !this.pokazKop && !this.pokazWyt && !this.pokazPaleta && this.ukryteFiltry && this.lupa=="normalny"){ 
			
			this.pokazO = false;
		    this.pokazG = false;
	  
			this.pokazC=!this.pokazC;
	  } 
  }

  sprawdzPokazPaleta() {

    if (!this.pokazRo && !this.pokazF && !this.pokazK && !this.pokazLi && !this.pokazPro && !this.pokazKo && !this.pokazEl && !this.pokazTr && !this.pokazKKB && !this.pokazSKB && !this.pokazWie
      && !this.pokazProb && !this.pokazTe && !this.pokazWyp && !this.pokazKop && !this.pokazWyt && this.ukryteFiltry && !this.pokazC) {

      this.pokazO = false;
      this.pokazG = false;

      this.pokazPaleta = !this.pokazPaleta;
    }
  }
  
	sprawdz(e: any) {
		
		console.log(e.target);
		
		if(!((e.target).is(':input'))) {console.log("wykrywa");}
		
		if(e.key=="z" && this.control) { console.log("Jest z"); }
		
		if(e.ctrlKey) {
			
			console.log("Dziala" + e.type);
			
			this.control = true;
	    }
		else this.control = false;
		
	}
	
	stringNaNumber(str:string): number{
		
		return Number(str);
		
	}
	
	wypisz7() {
		
		 console.log(this.wysokosc2);
		
	}

  zmienKolorPaleta(kolor: string,tryb: number=1): string {

    kolor = kolor.replace("#", "");

    let r: number = 0, g: number = 0, b: number = 0;

    r=this.rgbSzesnastkowyNaDziesietny(r, kolor, 0);
    g = this.rgbSzesnastkowyNaDziesietny(g, kolor, 2);
    b = this.rgbSzesnastkowyNaDziesietny(b, kolor, 4);

    if(tryb==1) this.kolor = "rgba(" + r + "," + g + "," + b + ",1)";

    return "rgba(" + r + "," + g + "," + b + ",1)";
  }

  rgbSzesnastkowyNaDziesietny(czlonRgb: number,kolor: string,pierwszyNumerStringaCzlonu: number): number {

    if (kolor[pierwszyNumerStringaCzlonu + 1] == 'a' || kolor[pierwszyNumerStringaCzlonu+1] == 'A') czlonRgb = 10;
    else if (kolor[pierwszyNumerStringaCzlonu + 1] == 'b' || kolor[pierwszyNumerStringaCzlonu+1] == 'B') czlonRgb = 11;
    else if (kolor[pierwszyNumerStringaCzlonu + 1] == 'c' || kolor[pierwszyNumerStringaCzlonu+1] == 'C') czlonRgb = 12;
    else if (kolor[pierwszyNumerStringaCzlonu + 1] == 'd' || kolor[pierwszyNumerStringaCzlonu+1] == 'D') czlonRgb = 13;
    else if (kolor[pierwszyNumerStringaCzlonu + 1] == 'e' || kolor[pierwszyNumerStringaCzlonu+1] == 'E') czlonRgb = 14;
    else if (kolor[pierwszyNumerStringaCzlonu + 1] == 'f' || kolor[pierwszyNumerStringaCzlonu+1] == 'F') czlonRgb = 15;
    else czlonRgb = Number(kolor[pierwszyNumerStringaCzlonu+1]);

    if (kolor[pierwszyNumerStringaCzlonu] == 'a' || kolor[pierwszyNumerStringaCzlonu] == 'A') czlonRgb += 160;
    else if (kolor[pierwszyNumerStringaCzlonu] == 'b' || kolor[pierwszyNumerStringaCzlonu] == 'B') czlonRgb += 176;
    else if (kolor[pierwszyNumerStringaCzlonu] == 'c' || kolor[pierwszyNumerStringaCzlonu] == 'C') czlonRgb += 192;
    else if (kolor[pierwszyNumerStringaCzlonu] == 'd' || kolor[pierwszyNumerStringaCzlonu] == 'D') czlonRgb += 208;
    else if (kolor[pierwszyNumerStringaCzlonu] == 'e' || kolor[pierwszyNumerStringaCzlonu] == 'E') czlonRgb += 224;
    else if (kolor[pierwszyNumerStringaCzlonu] == 'f' || kolor[pierwszyNumerStringaCzlonu] == 'F') czlonRgb += 240;
    else czlonRgb += Number(kolor[pierwszyNumerStringaCzlonu]) * 16;

    return czlonRgb;

  }

  zwrocMojKursor(funkcja: string,kolor: string="white"): string {

    let kursor: string = "";

    if (funkcja == "olowek") kursor = "url('./assets/loga/pencil-alt.png')";
    else if (funkcja == "gumka" || funkcja == "prostokat") kursor = kolor;
    else if (funkcja == "linia") kursor = "url('./assets/loga/minus.svg')";
    else if (funkcja == "kolo") kursor = "url('./assets/loga/circle.svg')";
    else if (funkcja == "elipsa") kursor = "url('./assets/loga/elipsa.png')";
    else if (funkcja == "trojkat") kursor = "url('./assets/loga/play.png')";
    else if (funkcja == "kwadratowaKrzywaBeziera") kursor = "url('./assets/loga/bezier-curve.png')";
    else if (funkcja == "szesciennaKrzywaBeziera") kursor = "url('./assets/loga/bezier-curve-bok.png')";
    else if (funkcja == "wielokat") kursor = "url('./assets/loga/draw-polygon.png')";
    else if (funkcja == "probnik") kursor = "url('./assets/loga/vial.png')";
    else if (funkcja == "tekst") kursor = "url('./assets/loga/font.png')";
    else if (funkcja == "wypelnienie") kursor = "url('./assets/loga/fill.png')";
    else if (funkcja == "lupa" && this.ktoraLupa == 1) kursor = "url('./assets/loga/plus-circle.svg')";
    else if (funkcja == "lupa" && this.ktoraLupa == -1) kursor = "url('./assets/loga/minus-circle.svg')";
    else if (funkcja == "lupa" && this.ktoraLupa == 0) kursor = "url('./assets/loga/circleLupa.png')";
    else if (funkcja == "kopiuj") kursor = "url('./assets/loga/copy.png')";
    else if (funkcja == "wytnij") kursor = "url('./assets/loga/cut.png')";
    else if (funkcja == "obrotLewo") kursor = "url('./assets/loga/chevron-left.png')";
    else if (funkcja == "obrotPrawo") kursor = "url('./assets/loga/chevron-right.png')";
    else if (funkcja == "odbicieWPionie") kursor = "url('./assets/loga/angle-double-right.png')";
    else if (funkcja == "odbicieWPoziomie") kursor = "url('./assets/loga/angle-double-down.png')";
    else kursor = "default";

    return kursor;

  }
	
} 




