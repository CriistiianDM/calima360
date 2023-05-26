//librerias
import React from 'react';
import Header from '../Home/Header';
import Navegator from '../profile/Navegator';
import icon_profile from '../../assets/logo/profile_default.svg';
import Section from '../history/Section';
import { useNavigate } from 'react-router-dom';

const DATA_HISTORY = [
    {
        title: 'Vida',
        img: 'vida.svg',
        target: '/profile/leccion/vida',
        disabled: false
    },
    {
        title: 'Religión',
        img: 'religion.svg',
        target: '/model-religion',
        disabled: true
    }
]


const History = () => {

    const history =  useNavigate();

    React.useEffect(() => {
        document.getElementById('root').classList.add('remove_gap');
    }, []);


    const handleCerrarSesion = (target) => {
        history(target);
    }

    return (
        <>
            <Header>
                <div className='_container_profile'>
                    <a>
                        <img src={icon_profile} alt="profile" />
                    </a>
                 </div>
            </Header>
            <div className='_container_primary_profile'>
                <Navegator />
                <Section title='Historia' >
                    {
                        DATA_HISTORY.map((item, index) => {
                            return (
                                <div onClick={ () => { item.disabled && handleCerrarSesion(item.target) }}  key={index} className='_container_history_section'>
                                    <img src={require(`../../assets/item_menu/${item.img}`)} alt="icon" />
                                    <p>{item.title}</p>
                                </div>
                            )
                        })

                    }
                </Section>
            </div>
        </>
    );

};

export default History;