import React, { useEffect } from 'react';
import { getInstance as gs } from '@ombori/grid-signals-react';
import styled from 'styled-components';
import { useSettings } from '@ombori/ga-settings';
import { useHeartbeat } from '@ombori/ga-messaging';

import { Schema as Settings } from './schema';

function App() {
  useHeartbeat();
  const settings = useSettings<Settings>();

  const products = settings?.products.products || [];
  // products from search
  // const productsFromQuery = settings?.productsFromQuery.products || [];
  const firstRandomProduct = products.length > 0 ? products[0] : null;
  const firstPictureInfo = (firstRandomProduct ?? {catalogPageLocationProduct: []})
      .catalogPageLocationProduct
      .find(media => {
          return media.catalogType.startsWith('image/');
      }
  );
  const firstPicture = firstPictureInfo ? firstPictureInfo.url : 'no-image';
  const firstPrice = firstRandomProduct && firstRandomProduct.productPriceList[0] && firstRandomProduct.productPriceList[0].listPrice;

  useEffect(() => {
    if (firstRandomProduct) {
      gs().sendContentView({ title: firstRandomProduct.productGroupId });
    }
  }, [firstRandomProduct]);

  if (!settings) {
    return <Container>Loading gridapp settings...</Container>
  }

  return (
    <Container>
      <Picture src={firstPicture}/>
      <Price>{firstPrice}</Price>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  background-color: #282c34;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 100%;
  color: white;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 1.5vmin);
`;

const Picture = styled.img<{src: string}>``

const Price = styled.span``


export default App;
