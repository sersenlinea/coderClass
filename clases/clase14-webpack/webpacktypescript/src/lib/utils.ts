export const getTime = () => {
	return {
		dah: new Date().toLocaleString(),
		timestamp: Date.now()
	}
}