import { Component, ElementRef, Input, OnInit, ViewChild, SimpleChanges} from '@angular/core';
import { EmailService } from '../../services/email.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  @ViewChild('myBtn') mybtn:ElementRef | any;
  @ViewChild('myModal') myModal:ElementRef | any;
  @ViewChild('close') close:ElementRef | any;

  @Input() titulo:string = "";
  @Input() clase:string = "btn btn-color-secundario";
  @Input() btnClick:boolean = false;
  
  public enviando:boolean = false;   
  public emailForm:any ="";
  public emailOk:number = 0;
  
  get nombre() { return this.emailForm.get('nombre'); }
  get apellido() { return this.emailForm.get('apellido'); }
  get celular() { return this.emailForm.get('celular'); }
  get email() { return this.emailForm.get('email'); }
  get mensaje() { return this.emailForm.get('mensaje'); }

  onSubmit() {
   //console.warn(this.emailForm.value);
    this.enviando = true;
    this.emailService.mandarEmail(this.emailForm.value)
    .subscribe(respuesta=>{
      console.log(respuesta);
      if(respuesta===1){
        this.emailOk = 1;
      }else if(respuesta===0){
        this.emailOk = 2;
      }
      this.enviando = false;
    })
  }

  onclick () {
    this.myModal.nativeElement.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  closeOnclick () {
    this.myModal.nativeElement.style.display = "none";
    this.btnClick = false;
  }
  
  // When the user clicks anywhere outside of the modal, close it
  
  constructor(
    public emailService:EmailService
  ) { }

  ngOnInit(): void {
    this.emailForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
      apellido: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      celular: new FormControl('',[Validators.required,Validators.minLength(5)]),
      mensaje: new FormControl(''),
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log(changes);
    if(changes['btnClick']?.currentValue>0){
      this.onclick();
    }
  }
}


