const shuffle = (arr) => {
	// Fisher–Yates 洗牌法
	const n = arr.length
	for (let i = 0; i < n; i ++) {
		// 获取随机下标: 
		const index = Math.round(Math.random() * (n - 1 - i)) + i;
		// 交换当前下标和随机下标
		[arr[index], arr[i]] = [arr[i], arr[index]]
	}
	return arr
}

export {
  shuffle
}