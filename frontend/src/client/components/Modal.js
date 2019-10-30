import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context";
import { ButtonContainer } from "./button";
import { ButtonContainer1 } from "./button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {value => {
            const { modalOpen, closeModal } = value;
            const { img, title, price } = value.modalProduct;
            if (!modalOpen) {
              return null;
            } else {
              return (
                <ModalContainer>
                  <div className="container">
                    <div className="row">
                      <div
                        id="modal"
                        className="col-8 mx-auto col-md-6 col-lg-4 
                                  text-center text-capitalize p-5"
                      >
                        <h5>Artículo añadido al carrito.</h5>
                        <img src={img} className="img-fluid" alt="product" />
                        <h5>{title}</h5>
                        <h5 className="text-muted">Precio : $ {price}</h5>
                        <Link to="/shop">
                          <ButtonContainer onClick={() => closeModal()}>
                            Continuar comprando...
                          </ButtonContainer>
                        </Link>
                        <Link to="/cart">
                          <ButtonContainer1 onClick={() => closeModal()}>
                            Ir al carrito
                          </ButtonContainer1>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ModalContainer>
              );
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal{
        background: var{--white};
    }
`;
