import "./ProductList.css";

export default function ProductList({ products }) {
    return (
        <>
            <h2>Lista de Produtos</h2>
            <ul>
                {products && products.length > 0 ? (
                    products.map((product, index) => (
                        <li key={index}>
                            <strong>{product.nome}</strong> - R${" "}
                            {product.preco.toFixed(2)}
                        </li>
                    ))
                ) : (
                    <li>Nenhum produto disponível</li>
                )}
            </ul>
        </>
    );
}