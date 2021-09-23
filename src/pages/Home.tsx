import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { useHistory } from 'react-router';

import { auth, firebase } from '../service/firebase'

import '../styles/auth.scss'
import { Button } from '../components/Button'

export function Home() {
    const history = useHistory();

    function handleCreateRoom() {
        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then(result =>{
            console.log(result);
            history.push('/Room/new');
        }) 
    }

    return(
        <div id="page-auth">
            <aside >
                <img src={illustrationImg} alt="simbolisando preguntas e respostas"/>
                <strong>Crie salas de Q&amp;A ao-vivo</strong> 
                <p>Tire as dúvidas da sua audiência em tempo-real</p>           
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
                    <img src={googleIconImg} alt="Letmeask" />
                    Crie sua sala com o Google
                    </button>
                    <div className="separator">Ou entre em uma sala</div>
                    <form>
                        <input 
                         type="text"
                         placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}