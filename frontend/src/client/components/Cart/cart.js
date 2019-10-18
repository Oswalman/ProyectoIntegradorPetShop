import React, { Component } from 'react'
import Title from "../title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import {ProductConsumer} from "../../../context";

export default class cart extends Component {
    render() {
        return (
            <section>
            
                <Title name="El" title="Carrito"/>
                <CartColumns />
                <EmptyCart />
            </section>
        );
    }
}
