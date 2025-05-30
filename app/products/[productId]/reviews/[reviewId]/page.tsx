export default async function ProductReview({
	params,
}: {
	params: Promise<{ productId: string; reviewId: string }>;
}) {
	const productId = (await params).productId;
	const reviewId = (await params).reviewId;
	return (
		<h1>
			Product id: {productId} Review id: {reviewId}
		</h1>
	);
}
