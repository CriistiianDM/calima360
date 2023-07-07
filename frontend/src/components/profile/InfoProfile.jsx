//importar Librerias
import React from 'react';
const images_content = require.context("../../assets/profile/", true);



const DATA_PROFILE = [
    {
        name: 'HISTORIA',
        whoami: 'historia',
    },
    {
        name: 'MITOLOGÍA',
        whoami: 'mitologia',
    },
    {
        name: 'ORFEBRERÍA',
        whoami: 'orfebreria',
    }
]

/*  
  *  @author <cristian.machado@correounivalle.edu.co>  
  *  @version 0.0.1
  *  @returns Home
**/
const InfoProfile = (props) => {

    const {
        name,
        apellido,
        email,
        img_url,
        cuestonario,
    } = props.content;
   
    const [porcentaje, setPorcentaje] = React.useState({
        'historia': 0,
        'mitologia': '0',
        'orfebreria': '0',
        cuestonario_active: false
    });


    React.useEffect(() => {

        if (cuestonario?.length > 0) {
            setPorcentaje(cuestonario[0]);
        }

    }, [cuestonario]);

    return (

        <div className="_conatiner_info-profile">
            <div className='_container_photo_profile'>
                <img src={images_content(`./${img_url}`)} alt="profile" />
            </div>
            <div className='_conatiner_info_data'>
                  <div className='_item_info'>
                        <span>NOMBRE</span>
                        <h2>{name}</h2>
                  </div>
                  <div className='_item_info'>
                        <span>APELLIDO</span>
                        <h2>{apellido}</h2>
                  </div>
                  <div className='_item_info'>
                        <span>CORREO</span>
                        <h1>{email}</h1>
                  </div>

                 {
                  porcentaje?.cuestonario_active &&
                  <div className='_container_progress'>

                        <div className='_container_progress_item'>
                                <span>PROGRESO: </span>
                        </div>
                        {
                            DATA_PROFILE.map((item, index) => {
                                const porcentaje_ = (porcentaje[item.whoami]).estado; 
                                return (
                                    <div key={index} className='_container_progress_item'>
                                        <span>{item.name}</span>
                                        <span 
                                            style={{
                                                background: `linear-gradient(90deg, #FFAE17 ${porcentaje_}%, #D99414 ${100 - porcentaje_}%)`
                                            }}
                                           className='_progress_'></span>
                                        <span className='_porcentaje'>{(porcentaje_ > 0)? porcentaje_ : 0}%</span>
                                    </div>
                                )
                            }) 
                        }

                  </div>
                  }
                  <a className='_edit_action'>EDITAR</a>
            </div>
        </div>
        
    )

}


export default InfoProfile;