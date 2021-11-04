import React from 'react';
import './lore.scss'
import Card from '../game/cards/Card'

function Lore(props) {
    return ( 
        <div className="lore">
            <h2>
                Sobre o jogo:
            </h2>
            <div className="about">
                Cidade dorme é um jogo de interpretação criado em 1986. Embora seja vendido comercialmente
                também pode ser reproduzido artesanalmente dada a sua simplicidade.
            </div>
            <h2>
                Como jogar:
            </h2>
            <div className="howtoplay">
                Um dos envolvidos deve ser o narrador. Após, é configurado as opções e são sorteadas cartas com o os personagens que cada um deverá 
                interpretar, o narrador passa para o primeiro participante, ele visualiza seu personagem, aperta o botão
                "Próximo", passa para o próximo participante e assim segue o sorteio.
                <h3>
                    Objetivo:
                </h3>
                <p>
                    A turma do bem precisa descobrir quem são os assassinos e tira-los da cidade ou os assassinos eliminam todos os cidadãos.
                </p>
                <h3>
                    Começando o jogo:
                </h3>
                <div className="starting">
                    <div className="step">
                        <div className="number">1</div> O narrador declara que a cidade dorme e todos fecham os olhos
                    </div> 
                    <div className="step">  
                        <div className="number">2</div> O narrador acorda os personagens na seguinte ordem:
                        <div className="sequence">
                            <div className="cardstogether">
                                <Card type="Assassino" />
                                &nbsp; 
                                <Card type="Menino" /> 
                            </div> 
                            <i className="fa fa-arrow-right fa-2x"></i>
                            <Card type="Anjo" />
                            <i className="fa fa-arrow-right fa-2x"></i>
                            <Card type="Traidor" /> 
                            <i className="fa fa-arrow-right fa-2x"></i>
                            <Card type="Detetive" /> 
                        </div>
                    </div>
                    <div className="step">
                        <div className="number">3</div> Cada personagem realiza sua ação
                    </div>
                    <div className="step">
                        <div className="number">4</div> O narrador acorda a cidade e anuncia apenas o resultado dos acontecimentos da 
                        noite, por ex.: se o anjo salvou alguém que foi morto pelos assassinos, o narrador não menciona o ocorrido, 
                        apenas não informando a morte daquele que foi salvo pelo Anjo.
                    </div>
                    <div className="step">
                        <div className="number">5</div> Segue-se o debate
                    </div>
                    <div className="step">
                        <div className="number">6</div> Após um tempo a ser determinado por Deus, todos devem votar a prisão de algum jogador. 
                        O jogador mais votado defende-se por tempo a ser determinado por Deus.
                    </div>
                    <div className="step">
                        <div className="number">7</div> Após a defesa, nova votação é convocada. Se o resultado desta se alterar, uma nova defesa acontece. 
                        Se o resultado da votação se mantiver o mesmo, o jogador votado revela sua identidade e sai do jogo, 
                        podendo observar sem qualquer interferência.
                    </div>
                    <div className="step">
                        <div className="number">8</div> Uma nova rodada é iniciada até que todos do mal ou do bem vençam.
                    </div>

                    <h3>
                        Personagens:
                    </h3>
                </div>
                <div className="caracters">                    
                    <h4>
                        <div className="good">Bem</div>
                    </h4>
                    <p>
                        <div className="caractitle">Cidadão:</div>  
                        <div className="content">
                            <div className="function">
                                Personagem que tem como missão se defender e eliminar os assassinos. Ele só tem ação ao 
                                final da rodada para apontar um suposto assassino ou se defender caso tenha sido acusado.
                            </div>
                            <Card type="Cidadão"/>
                        </div>
                    </p>

                    <p>
                        <div className="caractitle">Detetive:</div> 
                        <div className="content">
                            <div className="function">
                                A cada rodada pode apontar uma pessoa para saber se é do bem ou do mal. Quando descobrir todos, 
                                pode falar aos outros que é o detetive, cabe aos outros acreditarem nele ou não, pois os 
                                assassinos também podem mentir dizendo que são detetive.
                            </div>
                            <Card type="Detetive"/>
                        </div>
                    </p>

                    <p>
                        <div className="caractitle">Anjo:</div>  
                        <div className="content">
                            <div className="function">
                            A cada rodada, ele aponta uma pessoa para salvar a vida. Caso os assassinos tenham escolhido essa pessoa 
                            para morrer, ela não morre. Ele não sabe quem morreu ou não, a escolha é feita ao acaso.
                            </div>
                            <Card type="Anjo"/>
                        </div>
                    </p>

                    <p>
                        <div className="caractitle">Bruxa:</div>  
                        <div className="content">
                            <div className="function">
                                Ela pode salvar qualquer pessoa, ou se salvar 1 única vez em todo o jogo caso seja escolhida para 
                                morrer pelos assassinos. Caso ela seja morta pelo assassino ou seja selecionada pelos jogadores para 
                                sair do jogo, pode escolher qualquer pessoa para sair contigo.
                            </div>
                            <Card type="Bruxa"/>
                        </div>
                    </p>

                    <p>
                        <div className="caractitle">Menino:</div>  
                        <div className="content">
                            <div className="function">
                                Ele acorda junto com os assassinos e os ajuda a escolher uma vítima. Quando este jogador está presente, 
                                os assassinos podem escolher como vítima um dos assassinos caso suspeitem que algum deles é o menininho.
                            </div>
                            <Card type="Menino"/>
                        </div>
                    </p>

                    <h4>
                        <div className="neutro">Neutro</div>
                    </h4>
                    <p>
                        <div className="caractitle">Joker:</div>  
                        <div className="content">
                            <div className="function">
                                A função do Joker é parecer suspeito para ser eliminado da cidade. Caso ele seja expulso pela votação o joker ganha 
                                o jogo e todos os demais jogadores perdem. Se ele deixar óbvio que é o Joker ninguém o levará a sério.
                            </div>
                            <Card type="Joker"/>
                        </div>
                    </p>

                    <h4>
                        <div className="evil">Mal</div>
                    </h4>
                    <p>
                        <div className="caractitle">Assassino:</div>  
                        <div className="content">
                            <div className="function">
                            em a função de eliminar todos os jogadores do bem seja eliminando quando são ordenados, seja indicando quando todos 
                            estão escolhendo os suspeitos.
                            </div>
                            <Card type="Assassino"/>
                        </div>
                    </p>

                    <p>
                        <div className="caractitle">Traidor:</div>  
                        <div className="content">
                            <div className="function">
                                É um detetive do mal, ele também aponta uma pessoa a cada jogada para saber se é do bem ou do mal, e sua função, diferente da do detetive, 
                                é ajudar os assassinos a acusar as pessoas do bem
                            </div>
                            <Card type="Traidor"/>
                        </div>
                    </p>
                    

                </div>
            </div>

        </div>
     );
}

export default Lore;