import { useEffect, useState} from "react";
import { useForm} from "react-hook-form"
import './styles/FormUser.css'
const FormUser = ({createUsers, infoUpdate, updateUsers, setInfoUpdate,  isDisable, setIsDisable}) =>{

    
    const { handleSubmit, register, reset } = useForm();
    const [isEnviar, setIsEnviar] = useState(false);

    useEffect(()=>{
        reset(infoUpdate);
        console.log(infoUpdate);
    }, [infoUpdate]);

    const submit = (data) =>{
        //infoUpdate contiene informacion se hace un update
        if(infoUpdate){
            
            updateUsers('/users', data, infoUpdate.id);
            setIsEnviar(true);
            setInfoUpdate();//reseteamos el valor de setinfoupdate
        }else{
            createUsers('/users',data);
        }
        setIsDisable(true);
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: '',
        });
        
    };
    

    const handleExit = () =>{
        setIsDisable(true);
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: '',
        });
        setInfoUpdate();
    };
    
    return (<div className={`form-container ${isDisable && 'form__disable'}`}>
        
        <form onSubmit={handleSubmit(submit)} className="form">
            <h2 className="form__title">
                Form Users
                <i onClick={handleExit} className="bx bx-x-circle form__x"></i>
            </h2>
            <div>
                <label className="form__label">Email</label>
                <input className="form__input" type="email" {...register('email')}/>
            </div>
            <div>
                <label className="form__label">Password</label>
                <input className="form__input" type="password" {...register('password')}/>
            </div>
            <div>
                <label className="form__label">First_name</label>
                <input className="form__input" type="text" {...register('first_name')}/>
            </div>
            <div>
                <label className="form__label">Last_Name</label>
                <input className="form__input" type="text" {...register('last_name')}/>
            </div>

            <div>
                <label className="form__label">Birthday</label>
                <input className="form__input" type="date" {...register('birthday')}/>
            </div>
            <div>
                
                <button className="form__btn">{infoUpdate ? 'Guardar Cambios' : 'Crear Usuario'}</button>
            </div>
        </form>
    </div>)
};

export default FormUser;