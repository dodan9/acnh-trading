import { useCart } from "../store/cart";
import {
  CartItem,
  CartItemList,
  CartItemPriceBox,
  CartItemSection,
  CartList,
  Section,
  SectionHeader,
} from "../styled";

const DownloadedSection = () => {
  const cart_list = useCart();

  return (
    <Section>
      <SectionHeader>거래소</SectionHeader>

      <CartList>
        {cart_list.length > 0
          ? cart_list.map((list) => {
              return (
                <CartItemSection key={list.index}>
                  <CartItemList>
                    {list.items.map((item, index) => {
                      return (
                        <CartItem key={item.name + index}>
                          <div>
                            <div>
                              <img src={item.image_url} />
                            </div>
                            <div>
                              {item.name} x {item.amount}
                            </div>
                          </div>

                          <div>
                            <button>+1</button>
                            <button>-1</button>
                            <button>+10</button>
                            <button>-10</button>
                          </div>
                        </CartItem>
                      );
                    })}
                  </CartItemList>

                  <CartItemPriceBox>
                    <div>{`${list.price} ${list.unit}`}</div>
                    <div>
                      <button>+1</button>
                      <button>-1</button>
                      <button>+10</button>
                      <button>-10</button>
                    </div>
                  </CartItemPriceBox>
                </CartItemSection>
              );
            })
          : "아이템을 담아 주세욥"}
      </CartList>
    </Section>
  );
};

export default DownloadedSection;
