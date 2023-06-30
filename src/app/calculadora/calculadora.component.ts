import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  Calculadora:any = {
    num1:0,
    num2:0,
    resultado:0,
    simbolo:"+",
    historial:[]
  };

  error: any = {
    active:false,
    msj:""
  }

  constructor(){

  };

  Sumar():void{
    this.Calculadora.resultado = this.Calculadora.num1 + this.Calculadora.num2
  };
  Restar():void{
    this.Calculadora.resultado = this.Calculadora.num1 - this.Calculadora.num2
  };
  Multiplicar():void{
    this.Calculadora.resultado = this.Calculadora.num1 * this.Calculadora.num2
  };

  Historial():void{
    this.Calculadora.historial.push([this.Calculadora.num1,this.Calculadora.simbolo,this.Calculadora.num2,this.Calculadora.resultado])
    console.log(this.Calculadora.historial);
  }

  Calcular(){
    if(this.error){
      this.error.msj = "";
      this.error.active = false;
    }
    switch (this.Calculadora.simbolo) {
      case "+":
        this.Sumar(); 
        this.Historial();
        break;
      case "-":
        this.Restar();
        this.Historial();
        break;
      case "*":
        this.Multiplicar();
        this.Historial();
        break;
      default:
        this.error.msj = `Error: Simbolo incorrecto: "${this.Calculadora.simbolo}"`
        this.error.active = true;
        break;
    }
  };

}
