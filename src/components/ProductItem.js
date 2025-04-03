import { Link } from 'react-router-dom';

// 개별 상품을 표시하는 컴포넌트
function ProductItem({ product, addToCart }) {
    // 객체 구조 분해
    const { id, name, price, imageUrl, category } = product;

    const handleAddToCart = () => {
        addToCart(product);
    };

    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
    };

    return (
        <div>
            <div className="product-image">
                <Link to={`/product/${id}`}> {/* ${id} 뒤에 중괄호가 잘못 닫혀 있었음 */}
                    <img src={imageUrl} alt={name} />
                </Link>
            </div>
            <div className="product-info">
                <span>{category}</span>
                <h2>
                    <Link to={`/product/${id}`}>{name}</Link> {/* 상대경로 → 절대경로로 수정 권장 */}
                </h2>
                <p>{formatPrice(price)}</p>
            </div>
            <div className="product-actions">
                <button onClick={handleAddToCart}>장바구니 추가</button>
            </div>
        </div>
    );
}

export default ProductItem;
