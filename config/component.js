export const showToast = function(msg,type = 'default') {
	
	this.$refs.uToast.show({
		type: type,
		 message: msg
	})
}