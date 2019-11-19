import React from 'react';
import {MdAddShoppingCart} from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/chuteira-futsal-nike-beco-2-futsal/12/004-5830-012/004-5830-012_detalhe1.jpg?resize=280:280"
         alt="tenis"/>
        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/chuteira-futsal-nike-beco-2-futsal/12/004-5830-012/004-5830-012_detalhe1.jpg?resize=280:280"
         alt="tenis"/>
        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/chuteira-futsal-nike-beco-2-futsal/12/004-5830-012/004-5830-012_detalhe1.jpg?resize=280:280"
         alt="tenis"/>
        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/chuteira-futsal-nike-beco-2-futsal/12/004-5830-012/004-5830-012_detalhe1.jpg?resize=280:280"
         alt="tenis"/>
        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/chuteira-futsal-nike-beco-2-futsal/12/004-5830-012/004-5830-012_detalhe1.jpg?resize=280:280"
         alt="tenis"/>
        <strong>Tenis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
