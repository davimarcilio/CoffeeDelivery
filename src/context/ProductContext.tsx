import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  addProductToCart,
  changeCartQuantityFromCart,
  getStoredLocalList,
  removeProductFromCart,
  resetProductsFromCart,
} from "../reducers/products/actions";
import { productsReducer } from "../reducers/products/reducer";

interface Type {
  type: "TRADICIONAL" | "GELADO" | "COM LEITE" | "ESPECIAL" | "ALCOÓLICO";
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  types: Type[];
}

export interface Cart extends Product {
  quantity: number | 1;
}
export interface AddressProps {
  cep: string;
  state: string;
  city: string;
  street: string;
  neighborhood: string;
}

interface AddressTotalProps extends AddressProps {
  number: string;
  complement: string;
}

const products = [
  {
    id: 1,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 12.99,
    image: "/Type=Expresso.png",
    types: [{ type: "TRADICIONAL" }],
  },
  {
    id: 2,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    image: "/Type=Americano.png",
    types: [{ type: "TRADICIONAL" }],
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    image: "/Type=ExpressoCremoso.png",
    types: [{ type: "TRADICIONAL" }],
  },
  {
    id: 4,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    image: "/Type=CaféGelado.png",
    types: [{ type: "TRADICIONAL" }, { type: "GELADO" }],
  },
  {
    id: 5,
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
    image: "/Type=CafécomLeite.png",
    types: [{ type: "TRADICIONAL" }, { type: "COM LEITE" }],
  },
  {
    id: 6,
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    image: "/Type=Latte.png",
    types: [{ type: "TRADICIONAL" }, { type: "COM LEITE" }],
  },
  {
    id: 7,
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    image: "/Type=Capuccino.png",
    types: [{ type: "TRADICIONAL" }, { type: "COM LEITE" }],
  },
  {
    id: 8,
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
    image: "/Type=Macchiato.png",
    types: [{ type: "TRADICIONAL" }, { type: "COM LEITE" }],
  },
  {
    id: 9,
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    image: "/Type=Mochaccino.png",
    types: [{ type: "TRADICIONAL" }, { type: "COM LEITE" }],
  },
  {
    id: 10,
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    image: "/Type=ChocolateQuente.png",
    types: [{ type: "ESPECIAL" }, { type: "COM LEITE" }],
  },
  {
    id: 11,
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    image: "/Type=Cubano.png",
    types: [{ type: "ESPECIAL" }, { type: "GELADO" }, { type: "ALCOÓLICO" }],
  },
  {
    id: 12,
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
    image: "/Type=Havaiano.png",
    types: [{ type: "ESPECIAL" }],
  },
  {
    id: 13,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
    image: "/Type=Árabe.png",
    types: [{ type: "ESPECIAL" }],
  },
  {
    id: 14,
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
    image: "/Type=Havaiano.png",
    types: [{ type: "ESPECIAL" }, { type: "ALCOÓLICO" }],
  },
] as Product[];

interface ProductsContextType {
  products: Product[];
  cart: Cart[];
  address: AddressTotalProps;
  addToCart: (newProduct: Cart) => void;
  removeFromCart: (product: Cart) => void;
  changeCartQuantity: (product: Cart, quantity: number) => void;
  setAddressContext: (address: AddressTotalProps) => void;
  resetCart: () => void;
}

export const ProductsContext = createContext({} as ProductsContextType);

interface ProductsContextProviderProps {
  children: ReactNode;
}

export function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [productsState, dispatch] = useReducer(productsReducer, {
    cart: [],
  });
  const { cart } = productsState;
  useEffect(() => {
    if (!!localStorage.getItem("CoffeeDelivery:1.0/address")) {
      setAddress(
        JSON.parse(localStorage.getItem("CoffeeDelivery:1.0/address")!)
      );
    }
    dispatch(getStoredLocalList());
  }, []);
  function addToCart(newProduct: Cart) {
    dispatch(addProductToCart(newProduct));
  }
  function removeFromCart(product: Cart) {
    dispatch(removeProductFromCart(product));
  }
  function resetCart() {
    dispatch(resetProductsFromCart());
  }

  function changeCartQuantity(product: Cart, quantity: number) {
    dispatch(changeCartQuantityFromCart(product, quantity));
  }

  const [address, setAddress] = useState<AddressTotalProps>({
    cep: "",
    city: "",
    state: "",
    neighborhood: "",
    street: "",
    complement: "",
    number: "",
  });

  function setAddressContext(address: AddressTotalProps) {
    localStorage.setItem("CoffeeDelivery:1.0/address", JSON.stringify(address));
    setAddress(JSON.parse(localStorage.getItem("CoffeeDelivery:1.0/address")!));
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        cart,
        address,
        addToCart,
        resetCart,
        setAddressContext,
        removeFromCart,
        changeCartQuantity,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
