import React,{ Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'

export default class ListaItens extends Component{

    constructor(props){
        super(props)
        this.state = { listaItens: [] };
    }

    componentWillMount(){
        axios.post('http://faus.com.br/recursos/c/dmairr/api/itens.html')
            .then((response)=>{
                this.setState( {listaItens: response.data});
                console.log("POST RESPONSE: " , response.data);})
            .catch(console.log('Mensagem de erro'));
    }
    //JSON.stringify(response)

    render(){
        return(
            <View>
                <Text>Rafa</Text>
            </View>
        );
    }
}