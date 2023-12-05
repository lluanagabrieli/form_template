import { Directive } from "@angular/core";
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from "@angular/forms";

// é preciso configurar essa diretiva para dizer que ela é uma diretiva validadora e pertence à coleção de validadores presentes no Angular
@Directive({
  selector: "[MaiorIdadeValidator]",
  providers: [
    {
      // NG_VALIDATORS: é um token que permite adicionar novas diretivas validadoras a uma coleção de diretivas validadoras
      provide: NG_VALIDATORS,
      // useExisting: informa qual classe está por trás da validação. No caso é a <MaiorIdadeDirective>
      useExisting: MaiorIdadeDirective,
      multi: true,
    },
  ],
})

// depois adiciona a interface Validator <implements Validator> e depois o método validate dentro
export class MaiorIdadeDirective implements Validator {
  constructor() {}

  // insiro um método <validate> onde vão ser criadas as regras de validação
  validate(control: AbstractControl): ValidationErrors | null {
    // 1) pegar a data de nascimento que está vindo por meio do input. O valor que está vindo do input vai ser acessado através do parâmetro que está sendo recebido no método, que é o control.
    const dataNascimento = control.value;

    // 2) a comparação de data vai ser feita através do ano. Então vai ser pego apenas o ano da dataNascimento
    const anoNascimento = new Date(dataNascimento).getFullYear();

    // se o ano que o usuário fez 18 anos for menor ou igual do que o ano atual, então ele tem 18 anos.
    const anoNascMais18 = anoNascimento + 18;

    // 3) cria uma constante com a data atual
    const anoAtual = new Date().getFullYear();

    // 4) agora é feito a comparação entre as duas datas
    const ehMaior = anoNascMais18 <= anoAtual;

    return ehMaior ? null : { MaiorIdadeValidator: true };
  }
}
