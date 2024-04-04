class PaginationUtil {
	static paginationParam({ limit, page }) {
		limit = parseInt(limit ?? 10)
		page = parseInt(page ?? 1)

		const offset = parseInt((page - 1) * limit)

		return {
			limit,
			page,
			offset
		}
	}

	static paginatedResponse({ total_items, limit, items }) {
		return {
			items,
			total_pages: Math.ceil(total_items / limit),
			total_items
		}
	}
}

export default PaginationUtil
