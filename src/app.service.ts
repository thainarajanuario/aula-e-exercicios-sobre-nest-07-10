import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getBsm(): string{
  return '<br>responsabilidade pessoal,'+
 '<br> mentalidade de crescimento,'+
'<br> orientação ao futuro,'+
'<br> persistência,'+
'<br> comunicação,'+
'<br> trabalho em equipe,'+
'<br> atenção aos detalhes,'+
'<br> proatividade,'+
'<br> profissionalismo,'+
'<br> precisão tecnica,'
}
  getobjAprendizagem(): string{
  return '<br>cociliar meu tempo com casa e curso,'+
  '<br>aprender o conteudo perdido,'+
  '<br>ser pontual,'+
  '<br>ser persistênte não desistir jamais,'+
  '<br>pedir ajuda sempre que necessário,'+
  '<br>conseguir tempo para ficar na monitoria,'
  }
}
