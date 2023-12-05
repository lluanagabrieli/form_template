import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  // posso colocar entra [] para inserir como atributo ou utilizar o . para inserir como classe
  selector: ".mudarCorDiretiva",
})
export class MudarCorDirective {
  // injeção de dependência de ElementRef para ter acesso ao elemento DOM
  constructor(private eleRef: ElementRef) {}

  // declarar o método @HostListener, que vai escutar o evento “mouseover” e chamar uma função que vai acessar o elemento e alterar sua cor para “red”, e depois outro método @HostListener que vai ouvir o evento “mouseleave” e alterar para a cor “blue".
  @HostListener("mouseover") onMouseOver() {
    this.eleRef.nativeElement.style.color = "red";
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.eleRef.nativeElement.style.color = "blue";
  }
}
