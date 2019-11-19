import React from 'react';

import { Container } from './styles';

export default function Cart() {
  return (
    <Container>
       <ProductTable>
       </ProductTable>

       <footer>
         <button type="button"> Finalizar pedido </button>
       </footer>
    </Container>
  );
}
