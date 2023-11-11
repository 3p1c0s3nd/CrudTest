import { useState } from "react";
import axios from 'axios';

const useCrud = (baseurl) => {
    //Primero creamos un estado
    const [infoApi, setInfoApi] = useState();
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    //GET
    const getApi = async (path) => {
        const url = `${baseurl}${path}/`;
        await axios.get(url)
            .then((res) => {
                setInfoApi(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    //POST
    const postApi = async (path, data) => {
        const url = `${baseurl}${path}/`;
        await axios.post(url, data).then((res) =>{
            setInfoApi([...infoApi, res.data]);//Spread operator es para a;adirle res.data la info a  infoapi
        }).catch((error) =>{
            console.log(error);
        })
    }


    //DELETE
    const deleteApi = async (path, id) => {
        const url = `${baseurl}${path}/${id}/`;
        await axios.delete(url).then((res) =>{
            //Mostrar todos los elementos que no sean distintos del id que queremos borrar
            setInfoApi(infoApi.filter((item) => item.id !== id));

        }).catch((error)=>{
            console.log(error);
        });

    }


    //UPDATE
    const updateApi = async (path, data, id) => {
        const url = `${baseurl}${path}/${id}/`;
        await axios.patch(url, data).then((res)=>{
            setInfoApi(infoApi.map((item) => (item.id === id ? res.data : item)));
        }).catch((error) =>{
            console.log(error);
        });

    }


    return [infoApi, getApi, postApi, deleteApi, updateApi];
}


export default useCrud;